import { chromium } from 'playwright'

/**
 * WCAG AA contrast audit over rendered text.
 * Walks every text-bearing element, resolves its effective background by
 * climbing ancestors until an opaque one is found, and reports pairs under
 * 4.5:1 (normal) / 3:1 (large or bold text).
 */
const BASE = 'http://127.0.0.1:4180'
const routes = ['/', '/services', '/services/gst', '/about', '/contact', '/login', '/nope']

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--disable-background-networking', '--no-first-run'],
})
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })

const findings = new Map()

for (const route of routes) {
  const page = await ctx.newPage()
  await page.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(500)

  // The chat panel is closed by default; open it and put a reply on screen so
  // its own colours are audited too.
  const launcher = page.locator('.chat__launcher')
  if (await launcher.count()) {
    await launcher.click()
    await page.locator('.chat__input').fill('trademark')
    await page.locator('.chat__send').click()
    await page.waitForTimeout(1100)
  }

  const bad = await page.evaluate(() => {
    const parse = (c) => {
      const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/)
      return m ? [ +m[1], +m[2], +m[3], m[4] === undefined ? 1 : +m[4] ] : null
    }
    const lum = ([r, g, b]) => {
      const f = (v) => {
        v /= 255
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
      }
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
    }
    const ratio = (a, b) => {
      const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x)
      return (l1 + 0.05) / (l2 + 0.05)
    }
    const bgOf = (el) => {
      let n = el
      while (n && n !== document.documentElement) {
        const c = parse(getComputedStyle(n).backgroundColor)
        if (c && c[3] > 0.85) return c
        n = n.parentElement
      }
      return [255, 255, 255, 1]
    }

    const out = []
    document.querySelectorAll('body *').forEach((el) => {
      const cs = getComputedStyle(el)
      if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < 0.5) return
      // direct text only
      const text = [...el.childNodes]
        .filter((n) => n.nodeType === 3)
        .map((n) => n.textContent.trim())
        .join(' ')
        .trim()
      if (text.length < 2) return
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return

      const fg = parse(cs.color)
      if (!fg || fg[3] < 0.5) return
      const bg = bgOf(el)
      const px = parseFloat(cs.fontSize)
      const bold = +cs.fontWeight >= 700
      const large = px >= 24 || (px >= 18.66 && bold)
      const need = large ? 3 : 4.5
      const got = ratio(fg, bg)
      if (got < need) {
        out.push({
          sel: el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\s+/)[0] : ''),
          text: text.slice(0, 32),
          fg: cs.color,
          bg: `rgb(${bg[0]}, ${bg[1]}, ${bg[2]})`,
          got: Math.round(got * 100) / 100,
          need,
        })
      }
    })
    return out
  })

  bad.forEach((b) => {
    const key = `${b.sel}|${b.fg}|${b.bg}`
    if (!findings.has(key)) findings.set(key, { ...b, routes: new Set() })
    findings.get(key).routes.add(route)
  })
  await page.close()
}

await browser.close()

console.log('\n===== CONTRAST (WCAG AA) =====')
if (findings.size === 0) {
  console.log('PASS — every text/background pair meets AA')
} else {
  ;[...findings.values()]
    .sort((a, b) => a.got - b.got)
    .forEach((f) =>
      console.log(
        `• ${f.got}:1 (need ${f.need}) ${f.sel} "${f.text}" ${f.fg} on ${f.bg} — ${[...f.routes].join(', ')}`,
      ),
    )
}
console.log('==============================')
