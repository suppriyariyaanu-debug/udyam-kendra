/**
 * Chat service layer.
 *
 * The widget in components/chat/ChatWidget.jsx never talks to a network, a
 * model or a vendor SDK directly — it calls `sendChatMessage` here and renders
 * whatever comes back. That keeps the swap to a real assistant a change to
 * this one file.
 *
 * NO API KEY BELONGS IN THIS FILE, or anywhere else under src/. Everything
 * bundled by Vite is downloadable by any visitor, so a key placed here is a
 * published key. When a real assistant is wired up, the browser must call an
 * endpoint you control and that endpoint holds the credential server-side:
 *
 *   export async function sendChatMessage({ text, history }) {
 *     const response = await fetch('/api/chat', {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify({ text, history }),
 *     })
 *     if (!response.ok) throw new Error('Chat is unavailable')
 *     const data = await response.json()
 *     return { text: data.reply, suggestions: data.suggestions ?? [] }
 *   }
 *
 * Until then the replies below are deliberate placeholders. They route people
 * to a real page or to the published phone number and email, and they state no
 * price, timeline, eligibility or guarantee — the business has not supplied
 * those, and a chatbot inventing them would be worse than no chatbot.
 */
import { company } from '../data/company'

export const CHAT_GREETING = {
  text: `Hello — this is the ${company.name} assistant. I can point you to the right service or put you in touch with the team. What are you working on?`,
  suggestions: [
    'Start a business',
    'GST or tax',
    'Trademark',
    'Talk to a person',
  ],
}

/** Simulated thinking time, so the typing indicator is honest rather than decorative. */
const REPLY_DELAY_MS = 700

const CONTACT_LINE = `You can reach the team on ${company.phone} or ${company.email}, ${company.hours}.`

/**
 * Intent table. Each entry matches on plain keywords and answers with a
 * pointer to a route that genuinely exists in this application.
 */
const intents = [
  {
    id: 'human',
    keywords: ['human', 'person', 'agent', 'call', 'phone', 'talk', 'speak', 'contact', 'email', 'expert'],
    reply: {
      text: `Of course. ${CONTACT_LINE} You can also send your details from the contact page and the team will come back to you.`,
      links: [{ label: 'Go to contact', to: '/contact' }],
    },
  },
  {
    id: 'start',
    keywords: ['start', 'register a company', 'incorporate', 'incorporation', 'private limited', 'pvt', 'llp', 'opc', 'proprietorship', 'partnership', 'new business'],
    reply: {
      text: 'We can help you choose a structure and get it registered — private limited, LLP, OPC, partnership or proprietorship. The Start Business category lists what each one involves.',
      links: [
        { label: 'Start Business services', to: '/services/category/start-business' },
        { label: 'Company registration', to: '/services/company' },
      ],
    },
  },
  {
    id: 'tax',
    keywords: ['gst', 'tax', 'itr', 'income tax', 'tds', 'return', 'filing', 'pan', 'tan'],
    reply: {
      text: 'Registrations and ongoing filings are both covered — GST, income tax, TDS and ROC among them. Each service page lists the documents required.',
      links: [
        { label: 'GST registration', to: '/services/gst' },
        { label: 'Income tax return', to: '/services/itr' },
        { label: 'Compliance services', to: '/services/category/compliances' },
      ],
    },
  },
  {
    id: 'ip',
    keywords: ['trademark', 'brand', 'logo', 'patent', 'copyright', 'ip', 'intellectual'],
    reply: {
      text: 'Trademark, copyright and patent work is handled in-house. A trademark search first is usually the sensible starting point.',
      links: [
        { label: 'Trademark registration', to: '/services/trademark' },
        { label: 'Registrations', to: '/services/category/registrations' },
      ],
    },
  },
  {
    id: 'msme',
    keywords: ['udyam', 'msme', 'fssai', 'iec', 'import', 'export', 'licence', 'license', 'certificate', 'certification', 'iso'],
    reply: {
      text: 'MSME/Udyam, FSSAI, IEC, ISO and the other licences and certificates sit under Registrations.',
      links: [
        { label: 'Registrations', to: '/services/category/registrations' },
        { label: 'Udyam registration', to: '/services/udyam' },
      ],
    },
  },
  {
    id: 'finance',
    keywords: ['loan', 'funding', 'finance', 'bank', 'capital', 'credit', 'investment', 'insurance'],
    reply: {
      text: 'Business loans, working capital, account opening, funding support and insurance all sit under Financial Services.',
      links: [{ label: 'Financial services', to: '/services/category/financial-services' }],
    },
  },
  {
    id: 'digital',
    keywords: ['website', 'web', 'app', 'seo', 'digital', 'marketing', 'ecommerce', 'hosting', 'domain', 'software'],
    reply: {
      text: 'Websites, online stores, apps, SEO and digital marketing are handled by the IT Services team.',
      links: [{ label: 'IT services', to: '/services/category/it-services' }],
    },
  },
  {
    id: 'price',
    keywords: ['price', 'cost', 'fee', 'charge', 'how much', 'quote', 'quotation'],
    reply: {
      text: 'Where a service has a published starting price it is shown on that service page. For everything else the team confirms the fee for your specific requirement before any work begins — I am not able to quote a figure myself.',
      links: [
        { label: 'Browse services', to: '/services' },
        { label: 'Request a quote', to: '/contact' },
      ],
    },
  },
  {
    id: 'time',
    keywords: ['how long', 'time', 'duration', 'days', 'deadline', 'status', 'track'],
    reply: {
      text: 'Processing time depends on the service and the government authority handling it, so the team gives you a realistic expectation for your own application rather than a blanket figure.',
      links: [{ label: 'Ask the team', to: '/contact' }],
    },
  },
  {
    id: 'about',
    keywords: ['about', 'who are you', 'company', 'team', 'location', 'office', 'where'],
    reply: {
      text: `${company.name} is ${company.tagline.toLowerCase()}, working across ${company.locations.join(', ')}.`,
      links: [
        { label: 'About us', to: '/about' },
        { label: 'Our team', to: '/about#team' },
      ],
    },
  },
]

const FALLBACK = {
  text: `I am not sure I have that one. You can search the full catalogue, or the team can answer directly — ${CONTACT_LINE}`,
  links: [
    { label: 'All services', to: '/services' },
    { label: 'Contact us', to: '/contact' },
  ],
}

function matchIntent(text) {
  const haystack = text.toLowerCase()
  let best = null
  let bestScore = 0

  intents.forEach((intent) => {
    const score = intent.keywords.reduce(
      (total, keyword) => (haystack.includes(keyword) ? total + keyword.length : total),
      0,
    )
    if (score > bestScore) {
      bestScore = score
      best = intent
    }
  })

  return best ? best.reply : FALLBACK
}

/**
 * Answer one message.
 *
 * @param {{ text: string, history?: Array<{role: string, text: string}> }} input
 * @returns {Promise<{ text: string, links?: Array<{label: string, to: string}> }>}
 */
export async function sendChatMessage({ text }) {
  const trimmed = String(text || '').trim()
  if (!trimmed) {
    return { text: 'Tell me what you need and I will point you in the right direction.' }
  }

  await new Promise((resolve) => setTimeout(resolve, REPLY_DELAY_MS))

  return matchIntent(trimmed)
}
