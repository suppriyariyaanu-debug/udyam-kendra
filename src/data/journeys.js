/**
 * Homepage information architecture.
 *
 * Every slug below resolves to a real entry in catalogue.js — nothing here
 * invents a service. If a slug is removed from the catalogue the helpers in
 * this file drop it rather than rendering a dead link.
 */

/** The four business journeys: start, manage, protect, grow. */
export const journeys = [
  {
    id: 'start',
    label: 'Start',
    title: 'Start a Business',
    icon: 'building',
    description: 'Pick the right structure and get it registered correctly the first time.',
    summary: 'Register your business',
    services: ['company', 'llp', 'opc', 'udyam', 'gst'],
    categorySlug: 'start-business',
  },
  {
    id: 'manage',
    label: 'Manage',
    title: 'Manage a Business',
    icon: 'shield',
    description: 'Keep filings, tax and payroll on schedule so nothing turns into a penalty.',
    summary: 'GST • Compliance • Tax • Accounting',
    services: ['gst-returns-filing', 'itr', 'tds-filings', 'roc-filings', 'payroll-management'],
    categorySlug: 'compliances',
  },
  {
    id: 'protect',
    label: 'Protect',
    title: 'Protect a Business',
    icon: 'trademark',
    description: 'Secure the name, the mark and the paperwork behind your business.',
    summary: 'Trademark • Patent • Legal',
    services: ['trademark', 'patent-registration', 'copyright-registration', 'legal-services'],
    categorySlug: 'registrations',
  },
  {
    id: 'grow',
    label: 'Grow',
    title: 'Grow a Business',
    icon: 'trendingUp',
    description: 'Credit, banking and the digital presence that brings customers in.',
    summary: 'Loans • Banking • Digital • Web',
    services: [
      'business-loans',
      'account-opening',
      'social-media-marketing',
      'website-development',
    ],
    categorySlug: 'financial-services',
  },
]

/**
 * "What do you need help with?" — the five real catalogue categories.
 *
 * This section points at categories rather than the four journeys above, so it
 * does not repeat the Start / Manage / Protect / Grow content that now runs as
 * "How can we help you grow?". Every `categorySlug` resolves through
 * catalogue.js to a real `/services/category/:slug` route; the name, tagline
 * and description are read from the catalogue at render time rather than
 * duplicated here, so the two can never drift apart.
 */
export const helpTopics = [
  { categorySlug: 'start-business', need: 'I want to start a business' },
  { categorySlug: 'registrations', need: 'I need a licence or registration' },
  { categorySlug: 'compliances', need: 'I need to stay compliant' },
  { categorySlug: 'financial-services', need: 'I need funding or banking' },
  { categorySlug: 'it-services', need: 'I need to get online' },
]

/**
 * "What problem are we solving?" — framed from the business owner's side.
 *
 * These describe the difficulty of dealing with business formalities in
 * general and what a single-window service does about it. They make no claim
 * about any named competitor and quote no statistics, because none has been
 * supplied by the business.
 */
export const problemPoints = [
  {
    icon: 'scatter',
    problem: 'The work is scattered across too many people',
    response:
      'One point of contact covers registration, compliance, intellectual property, technology and finance, so you are not managing several providers at once.',
  },
  {
    icon: 'compass',
    problem: 'It is hard to know what actually applies to you',
    response:
      'We confirm which registrations and filings your business genuinely needs before anything starts, rather than handing you a generic checklist.',
  },
  {
    icon: 'clock',
    problem: 'Deadlines are easy to miss and expensive to forget',
    response:
      'Returns, renewals and statutory filings are tracked and filed on schedule so a missed date does not turn into a penalty.',
  },
  {
    icon: 'scale',
    problem: 'Costs and timelines are rarely clear up front',
    response:
      'You are told the documents required and the fee for your specific requirement before any work begins.',
  },
]

/**
 * "How can we collaborate with you to grow?" — the ways a business works with
 * Udyama Kendra. Descriptive of the service model only; no packages, prices or
 * commitments are stated here because none have been published.
 */
export const collaborationModes = [
  {
    icon: 'route',
    title: 'Tell us where you are',
    description:
      'Starting out, already running, or expanding — we begin from your situation rather than a fixed package.',
  },
  {
    icon: 'headset',
    title: 'Work with one team',
    description:
      'A single point of contact coordinates the CA, legal, technology and finance specialists your requirement needs.',
  },
  {
    icon: 'handshake',
    title: 'Stay supported as you grow',
    description:
      'As the business changes, the same team handles the filings, protection and support that come with it.',
  },
]

/** Tabs for the service discovery section. Curated, all real slugs. */
export const serviceTabs = [
  {
    id: 'start',
    label: 'Start Business',
    services: ['company', 'llp', 'opc', 'partnership-firm', 'sole-proprietorship', 'indian-subsidiary'],
  },
  {
    id: 'compliance',
    label: 'Compliance',
    services: [
      'roc-filings',
      'payroll-management',
      'pf-returns-filing',
      'esic-returns-filing',
      'due-diligence',
      'virtual-cfo',
    ],
  },
  {
    id: 'tax',
    label: 'Tax',
    services: ['gst', 'itr', 'gst-returns-filing', 'tds-filings', 'tan-registration', 'udyam'],
  },
  {
    id: 'legal',
    label: 'Legal & IP',
    services: [
      'trademark',
      'trademark-search',
      'copyright-registration',
      'patent-registration',
      'legal-services',
      'iso-certification',
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    services: [
      'business-loans',
      'msme-loans',
      'working-capital-od',
      'account-opening',
      'startup-funding',
      'company-insurance',
    ],
  },
  {
    id: 'digital',
    label: 'Digital',
    services: [
      'website-development',
      'ecommerce-website',
      'app-development',
      'search-engine-optimization',
      'social-media-marketing',
      'cloud-management',
    ],
  },
]

/**
 * Service recommender.
 * Step 1 picks a goal, step 2 narrows it, step 3 shows the matching services.
 * Every branch resolves to real catalogue slugs.
 */
export const recommender = [
  {
    id: 'start-new',
    label: 'Start a new business',
    icon: 'building',
    followUp: {
      question: 'What structure are you considering?',
      options: [
        { id: 'pvt', label: 'Private Limited Company', services: ['company', 'digital-signature-certificate', 'individual-pan-card'] },
        { id: 'llp', label: 'LLP or Partnership', services: ['llp', 'partnership-firm', 'digital-signature-certificate'] },
        { id: 'solo', label: 'Just me, on my own', services: ['opc', 'sole-proprietorship', 'udyam'] },
        { id: 'unsure', label: 'Not sure yet', services: ['company', 'llp', 'opc', 'sole-proprietorship'] },
      ],
    },
  },
  {
    id: 'register-existing',
    label: 'Register an existing business',
    icon: 'badge',
    followUp: {
      question: 'Which registration do you need?',
      options: [
        { id: 'msme', label: 'MSME / Udyam', services: ['udyam', 'startup-india-registration'] },
        { id: 'gst', label: 'GST', services: ['gst', 'tan-registration'] },
        { id: 'trade', label: 'Import / export', services: ['iec', 'dgft-registration', 'apeda-registration'] },
        { id: 'food', label: 'Food business', services: ['fssai', 'fssai-returns-filing'] },
      ],
    },
  },
  {
    id: 'compliance',
    label: 'Manage compliance',
    icon: 'shield',
    followUp: {
      question: 'What needs attention?',
      options: [
        { id: 'returns', label: 'Returns and filings', services: ['gst-returns-filing', 'itr', 'tds-filings', 'roc-filings'] },
        { id: 'people', label: 'Payroll and staff', services: ['payroll-management', 'pf-returns-filing', 'esic-returns-filing'] },
        { id: 'finance-fn', label: 'Finance function', services: ['virtual-cfo', 'cma-report-preparation', 'due-diligence'] },
      ],
    },
  },
  {
    id: 'protect',
    label: 'Protect my brand',
    icon: 'trademark',
    followUp: {
      question: 'What are you protecting?',
      options: [
        { id: 'name', label: 'A name or logo', services: ['trademark-search', 'trademark'] },
        { id: 'work', label: 'Original work or content', services: ['copyright-registration'] },
        { id: 'invention', label: 'An invention or process', services: ['patent-registration'] },
        { id: 'legal', label: 'Contracts and documents', services: ['legal-services'] },
      ],
    },
  },
  {
    id: 'funding',
    label: 'Get funding',
    icon: 'wallet',
    followUp: {
      question: 'What kind of funding?',
      options: [
        { id: 'loan', label: 'A business loan', services: ['business-loans', 'msme-loans', 'cgtmse-loans'] },
        { id: 'working', label: 'Working capital', services: ['working-capital-od', 'bill-discounting', 'letter-of-credit'] },
        { id: 'invest', label: 'Investment', services: ['startup-funding', 'seed-funding', 'angel-investment', 'venture-capital'] },
      ],
    },
  },
  {
    id: 'online',
    label: 'Build my online presence',
    icon: 'code',
    followUp: {
      question: 'What do you need built?',
      options: [
        { id: 'site', label: 'A website', services: ['website-development', 'domain-registration', 'web-hosting'] },
        { id: 'shop', label: 'An online store', services: ['ecommerce-website', 'payment-gateway', 'ssl-certificate'] },
        { id: 'app', label: 'A mobile app', services: ['app-development', 'api-development'] },
        { id: 'reach', label: 'More customers', services: ['search-engine-optimization', 'social-media-marketing', 'graphic-design'] },
      ],
    },
  },
]

/** Six reasons to choose Udyama Kendra, drawn from the published differentiators. */
export const benefits = [
  {
    icon: 'layers',
    title: 'One-Stop Business Support',
    description:
      'Registration, compliance, intellectual property, technology and finance handled under one roof.',
  },
  {
    icon: 'users',
    title: 'Experienced Professionals',
    description:
      'A diverse expert network including CA and legal professionals, and industry specialists.',
  },
  {
    icon: 'scale',
    title: 'Transparent Process',
    description:
      'You know what applies to your business, the documents needed and the fee, before any work begins.',
  },
  {
    icon: 'handshake',
    title: 'Personalised Guidance',
    description:
      'Advice matched to your business and sector rather than a generic checklist.',
  },
  {
    icon: 'globe',
    title: 'Pan-India Support',
    description: 'Serving businesses across India, with a presence in the UAE and Singapore.',
  },
  {
    icon: 'checkCircle',
    title: 'End-to-End Assistance',
    description:
      'Support from your first question through to the certificate or confirmation.',
  },
]

/** The five steps of working with Udyama Kendra. */
export const processSteps5 = [
  { step: '01', title: 'Tell us what you need', description: 'Share your requirement through the site or over a call.' },
  { step: '02', title: 'Talk to an expert', description: 'We confirm what applies to your business and the fee before starting.' },
  { step: '03', title: 'Submit your documents', description: 'Send across the documents for your selected service.' },
  { step: '04', title: 'We process your application', description: 'Our team handles the application and the formalities involved.' },
  { step: '05', title: 'Receive your service', description: 'You get the certificate, filing confirmation or completed work.' },
]

/** Homepage FAQs. Answers stay within what the business has actually published. */
export const homeFaqs = [
  {
    question: 'What services does Udyama Kendra provide?',
    answer:
      'Business registration and incorporation, tax and MSME registrations, licences and certifications, statutory compliance and filings, trademark and patent services, IT and web solutions, and corporate banking and loans — across five service categories.',
  },
  {
    question: 'What documents do I need to get started?',
    answer:
      'It depends on the service. Most registrations ask for PAN, Aadhaar, address proof, business details and bank details. Each service page lists what applies, and our team confirms the exact list for your case.',
  },
  {
    question: 'How long does a registration take?',
    answer:
      'Processing time depends on the service and the government authority handling it. Our team gives you a realistic expectation for your specific application rather than a blanket figure.',
  },
  {
    question: 'How is pricing decided?',
    answer:
      'Where a service has a published starting price it is shown on that service page. For everything else our team confirms the fee for your specific requirement before any work begins.',
  },
  {
    question: 'Can Udyama Kendra help with GST?',
    answer:
      'Yes — both GST registration and ongoing GST returns filing, alongside income tax, TDS and ROC filings.',
  },
  {
    question: 'How do I contact an expert?',
    answer:
      'Call +91 959 123 9899 or email enquiry@udyamakendra.com during office hours, Mon - Sat 9.30 AM to 6.30 PM. You can also send an enquiry from any service page and the team will come back to you.',
  },
]
