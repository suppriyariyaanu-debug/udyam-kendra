import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE = 'http://127.0.0.1:4180'
const OUT = '/home/claude/shots3'
mkdirSync(OUT, { recursive: true })

const routes = [
  ['home', '/'],
  ['services', '/services'],
  ['category', '/services/category/registrations'],
  ['detail-priced', '/services/gst'],
  ['detail-quote', '/services/fssai'],
  ['about', '/about'],
  ['contact', '/contact'],
  ['login', '/login'],
  ['notfound', '/nope'],
]

// Every width the brief calls out.
const viewports = [
  ['w360', 360, 780],
  ['w375', 375, 812],
  ['w390', 390, 844],
  ['w412', 412, 915],
  ['w768', 768, 1024],
  ['w1024', 1024, 900],
  ['w1440', 1440, 900],
]

const shotAt = new Set(['w390', 'w768', 'w1440'])
const problems = []

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: [
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-sync',
    '--no-first-run',
  ],
})

for (const [vp, width, height] of viewports) {
  const context = await browser.newContext({ viewport: { width, height } })

  for (const [name, path] of routes) {
    const page = await context.newPage()
    const errors = []
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
    page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))

    await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' })
    await page.waitForTimeout(120)

    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' })
      await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 120)))
      window.scrollTo({ top: 0, behavior: 'instant' })
      await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 150)))
    })
    await page.waitForTimeout(220)

    // Overflow: measured element-by-element, because body{overflow-x:hidden}
    // hides real overflow from scrollWidth. Ancestors that deliberately clip
    // or scroll (rails, the hero glow) are excluded.
    const offenders = await page.evaluate(() => {
      const clientW = document.documentElement.clientWidth
      const contained = (el) => {
        let n = el.parentElement
        while (n && n !== document.body) {
          if (['hidden', 'auto', 'scroll', 'clip'].includes(getComputedStyle(n).overflowX)) return true
          n = n.parentElement
        }
        return false
      }
      const out = []
      document.querySelectorAll('body *').forEach((el) => {
        const cs = getComputedStyle(el)
        if (cs.position === 'fixed' || cs.display === 'none' || cs.visibility === 'hidden') return
        const r = el.getBoundingClientRect()
        if (r.width === 0 || r.height === 0) return
        if ((r.right > clientW + 1 || r.left < -1) && !contained(el)) {
          out.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 30)} [${Math.round(r.left)}→${Math.round(r.right)}]`)
        }
      })
      return out.slice(0, 4)
    })
    if (offenders.length) problems.push(`OVERFLOW ${vp} ${path}: ${offenders.join(' | ')}`)

    // Every image must actually decode. Wait for the browser to settle first:
    // `complete` flips true on success AND on error, so this terminates even
    // for images that 404, and it avoids reporting lazy images that simply
    // had not started loading yet.
    await page
      .waitForFunction(() => [...document.images].every((i) => i.complete), { timeout: 8000 })
      .catch(() => {})

    const images = await page.evaluate(() =>
      [...document.images].map((img) => ({
        src: img.currentSrc || img.src,
        alt: img.alt,
        broken: img.complete && img.naturalWidth === 0,
        ratio: img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : null,
        boxW: Math.round(img.getBoundingClientRect().width),
        boxH: Math.round(img.getBoundingClientRect().height),
        fit: getComputedStyle(img).objectFit,
      })),
    )

    // Partner logo files are not in the repository yet; those <img> elements
    // are expected to fail and fall back to a typeset wordmark by design.
    const brokenImgs = images.filter((i) => i.broken && !i.src.includes('/images/partners/'))
    if (brokenImgs.length) {
      problems.push(
        `IMAGES ${vp} ${path}: broken -> ${brokenImgs.map((i) => `${i.src.split('/').pop()} (${i.alt})`).join(', ')}`,
      )
    }

    // Distortion: only meaningful where object-fit is not cropping for us.
    const squashed = images.filter(
      (i) =>
        !i.broken &&
        i.ratio &&
        i.boxW > 0 &&
        i.boxH > 0 &&
        i.fit === 'fill' &&
        Math.abs(i.ratio - i.boxW / i.boxH) > 0.08,
    )
    if (squashed.length) {
      problems.push(
        `IMAGES ${vp} ${path}: distorted -> ${squashed.map((i) => i.src.split('/').pop()).join(', ')}`,
      )
    }
    if (errors.length) problems.push(`CONSOLE ${vp} ${path}: ${errors.join(' | ')}`)

    // Touch targets: interactive elements must clear 44px on phones.
    if (width <= 412) {
      const small = await page.evaluate(() => {
        const out = []
        document.querySelectorAll('a.btn, button, [role="tab"], .chip').forEach((el) => {
          const r = el.getBoundingClientRect()
          if (r.height > 0 && r.height < 44) {
            out.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 26)} h=${Math.round(r.height)}`)
          }
        })
        return [...new Set(out)].slice(0, 5)
      })
      if (small.length) problems.push(`TOUCH ${vp} ${path}: ${small.join(' | ')}`)
    }

    if (shotAt.has(vp)) {
      // Chromium's full-page capture does not paint images still marked
      // loading="lazy" that sit far outside the viewport. Promote them and
      // wait for decode so the screenshot shows what a scrolling user sees.
      await page.evaluate(async () => {
        document.querySelectorAll('img[loading="lazy"]').forEach((i) => {
          i.loading = 'eager'
        })
        await Promise.allSettled([...document.images].map((i) => i.decode().catch(() => {})))
      })
      await page.waitForTimeout(300)
      await page.screenshot({ path: `${OUT}/${vp}-${name}.png`, fullPage: vp === 'w1440' })
    }
    await page.close()
  }
  await context.close()
}

// ---- Interactions -------------------------------------------------------
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' })

await page.getByRole('button', { name: /^Services/ }).hover()
await page.waitForTimeout(300)
if (!(await page.locator('.mega').isVisible().catch(() => false))) problems.push('INTERACTION: services mega menu did not open')
else await page.screenshot({ path: `${OUT}/w1440-megamenu.png` })

await page.keyboard.press('Escape')
await page.locator('.hero input[role="combobox"]').fill('trade')
await page.waitForTimeout(300)
if ((await page.locator('.search__result').count()) === 0) problems.push('INTERACTION: search gave no suggestions')

// Tabs
await page.keyboard.press('Escape')
await page.getByRole('tab', { name: /Legal & IP/ }).click()
await page.waitForTimeout(250)
const legalCards = await page.locator('.tab-card').count()
if (legalCards !== 6) problems.push(`INTERACTION: Legal & IP tab showed ${legalCards} cards, expected 6`)

// Recommender, all three steps
await page.locator('#recommender').scrollIntoViewIfNeeded()
await page.getByRole('button', { name: 'Protect my brand' }).click()
await page.waitForTimeout(200)
await page.getByRole('button', { name: 'A name or logo' }).click()
await page.waitForTimeout(300)
const results = await page.locator('.wizard__result').count()
if (results !== 2) problems.push(`INTERACTION: recommender returned ${results} services, expected 2`)
else await page.screenshot({ path: `${OUT}/w1440-recommender.png` })

// Every homepage link resolves to a real route
const broken = await page.evaluate(() => {
  const bad = []
  document.querySelectorAll('a[href^="/"]').forEach((a) => {
    const href = a.getAttribute('href')
    if (href.startsWith('/services/category/') || href === '/services' || href === '/about' || href === '/contact' || href === '/login' || href === '/' || href.startsWith('/#') || href.startsWith('/about#')) return
    if (!href.startsWith('/services/')) bad.push(href)
  })
  return [...new Set(bad)]
})
if (broken.length) problems.push(`LINKS: unexpected hrefs ${broken.join(', ')}`)

// Mobile drawer
const mob = await browser.newContext({ viewport: { width: 390, height: 844 } })
const mp = await mob.newPage()
await mp.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' })
await mp.getByRole('button', { name: 'Open menu' }).click()
await mp.waitForTimeout(300)
if (!(await mp.locator('.drawer').isVisible().catch(() => false))) problems.push('INTERACTION: mobile drawer did not open')
else await mp.screenshot({ path: `${OUT}/w390-drawer.png` })

// ---- Homepage structure -------------------------------------------------
const home = await ctx.newPage()
await home.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' })
await home.waitForTimeout(200)

// The removed panel must be gone, and must not leave a hole behind it.
if (await home.locator('.hero__panel').count()) problems.push('HOME: .hero__panel still rendered')
if (!(await home.locator('.hero__brand').isVisible())) problems.push('HOME: hero brand card missing')
if (!(await home.locator('.hero__brand .logo--lg img').isVisible()))
  problems.push('HOME: hero logo missing')
if ((await home.getByText('Everything under one roof', { exact: false }).count()) > 0)
  problems.push('HOME: "Everything under one roof" text still present')

// Required section order.
const order = await home.evaluate(() => {
  const ids = ['need-help', 'why-us', 'the-problem', 'how-we-help', 'collaborate', 'solutions']
  return ids.map((id) => {
    const el = document.getElementById(id)
    return el ? { id, top: Math.round(el.getBoundingClientRect().top + window.scrollY) } : { id, top: null }
  })
})
const missing = order.filter((o) => o.top === null).map((o) => o.id)
if (missing.length) problems.push(`HOME: sections missing -> ${missing.join(', ')}`)
else {
  for (let i = 1; i < order.length; i += 1) {
    if (order[i].top <= order[i - 1].top) {
      problems.push(`HOME: "${order[i].id}" is not after "${order[i - 1].id}"`)
    }
  }
}

// Every "Explore Our Business Solutions" card must reach a real category route.
const needHrefs = await home.$$eval('.need-card__link', (els) => els.map((e) => e.getAttribute('href')))
if (needHrefs.length !== 6) problems.push(`HOME: need cards = ${needHrefs.length}, expected 6`)
for (const href of needHrefs) {
  const probe = await ctx.newPage()
  await probe.goto(`${BASE}${href}`, { waitUntil: 'domcontentloaded' })
  await probe.waitForTimeout(150)
  const title = await probe.locator('h1').first().innerText().catch(() => '')
  if (/not found/i.test(title)) problems.push(`HOME: need card href ${href} lands on NotFound`)
  await probe.close()
}
await home.close()

// ---- Navbar active state -------------------------------------------------
const navCases = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/services/category/registrations', 'Services'],
  ['/services/gst', 'Services'],
  ['/#solutions', 'Solutions'],
  ['/about', 'About'],
  ['/about#team', 'Team'],
  ['/contact', 'Contact'],
]

for (const [path, expected] of navCases) {
  const np = await ctx.newPage()
  await np.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' })
  await np.waitForTimeout(220)
  const lit = await np.$$eval('.nav .is-active', (els) => els.map((e) => e.textContent.trim()))
  if (lit.length !== 1 || !lit[0].startsWith(expected)) {
    problems.push(`NAV ${path}: expected only "${expected}" active, got [${lit.join(', ')}]`)
  }
  await np.close()
}

// Clicking through must update it too, without a reload.
const navClick = await ctx.newPage()
await navClick.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' })
await navClick.locator('.nav__link', { hasText: 'About' }).click()
await navClick.waitForTimeout(250)
let lit = await navClick.$$eval('.nav .is-active', (els) => els.map((e) => e.textContent.trim()))
if (lit.length !== 1 || !lit[0].startsWith('About')) problems.push(`NAV click About: got [${lit.join(', ')}]`)
await navClick.locator('.nav__link', { hasText: 'Contact' }).click()
await navClick.waitForTimeout(250)
lit = await navClick.$$eval('.nav .is-active', (els) => els.map((e) => e.textContent.trim()))
if (lit.length !== 1 || !lit[0].startsWith('Contact')) problems.push(`NAV click Contact: got [${lit.join(', ')}]`)
await navClick.close()

// ---- Chatbot -------------------------------------------------------------
for (const route of ['/', '/services', '/services/gst', '/about', '/contact', '/nope']) {
  const cp = await ctx.newPage()
  await cp.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded' })
  await cp.waitForTimeout(150)
  const launchers = await cp.locator('.chat__launcher').count()
  if (launchers !== 1) problems.push(`CHAT ${route}: ${launchers} launchers, expected exactly 1`)
  await cp.close()
}

// It must NOT appear on the full-bleed login route, which sits outside the layout.
const lp = await ctx.newPage()
await lp.goto(`${BASE}/login`, { waitUntil: 'domcontentloaded' })
await lp.waitForTimeout(150)
if ((await lp.locator('.chat__launcher').count()) !== 0)
  problems.push('CHAT /login: launcher rendered outside SiteLayout')
await lp.close()

// Full round trip.
const chat = await ctx.newPage()
await chat.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' })
await chat.locator('.chat__launcher').click()
await chat.waitForTimeout(250)
if (!(await chat.locator('.chat__panel').isVisible())) problems.push('CHAT: panel did not open')
if ((await chat.locator('.chat__msg--bot').count()) !== 1) problems.push('CHAT: no greeting message')

await chat.locator('.chat__input').fill('I want to register a trademark')
await chat.locator('.chat__send').click()
await chat.waitForTimeout(120)
if (!(await chat.locator('.chat__msg--typing').isVisible())) problems.push('CHAT: no typing indicator')
await chat.waitForTimeout(1200)
if ((await chat.locator('.chat__msg--typing').count()) !== 0) problems.push('CHAT: typing indicator stuck')
const replies = await chat.locator('.chat__msg--bot').count()
if (replies < 2) problems.push(`CHAT: ${replies} bot messages after a question, expected 2+`)
const chatHref = await chat.locator('.chat__link').first().getAttribute('href').catch(() => null)
if (chatHref !== '/services/trademark') problems.push(`CHAT: trademark reply linked to ${chatHref}`)
await chat.screenshot({ path: `${OUT}/w1440-chat.png` })

// The panel must not blanket the page it sits on.
const cover = await chat.evaluate(() => {
  const r = document.querySelector('.chat__panel').getBoundingClientRect()
  return { area: (r.width * r.height) / (innerWidth * innerHeight), top: r.top }
})
if (cover.area > 0.55) problems.push(`CHAT: panel covers ${Math.round(cover.area * 100)}% of the viewport`)
if (cover.top < 0) problems.push('CHAT: panel overflows the top of the viewport')

await chat.locator('.chat__head-btn').click()
await chat.waitForTimeout(220)
if ((await chat.locator('.chat__panel').count()) !== 0) problems.push('CHAT: minimise did not close the panel')
await chat.close()

// Mobile: panel must fit and leave the page reachable.
const cm = await mob.newPage()
await cm.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' })
await cm.locator('.chat__launcher').click()
await cm.waitForTimeout(300)
const fit = await cm.evaluate(() => {
  const r = document.querySelector('.chat__panel').getBoundingClientRect()
  return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, w: innerWidth, h: innerHeight }
})
if (fit.left < -1 || fit.right > fit.w + 1) problems.push(`CHAT mobile: panel ${fit.left}→${fit.right} in ${fit.w}px`)
if (fit.top < -1 || fit.bottom > fit.h + 1) problems.push(`CHAT mobile: panel ${fit.top}→${fit.bottom} in ${fit.h}px`)
await cm.screenshot({ path: `${OUT}/w390-chat.png` })
await cm.close()

await browser.close()

console.log('\n===== VERIFICATION =====')
if (problems.length === 0) console.log('PASS — no overflow, no console errors, touch targets OK, interactions OK')
else problems.forEach((p) => console.log('• ' + p))
console.log('========================')
