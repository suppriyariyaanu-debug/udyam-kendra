/**
 * Udyama Kendra service catalogue.
 *
 * SOURCE OF TRUTH: the service taxonomy published on the previous Udyama Kendra
 * website (https://udyama-kendra-ram-s-project.vercel.app/) — 5 categories,
 * 19 groups, 106 services. Service names are reproduced exactly as published.
 *
 * PRICING POLICY (business decision, do not change without approval):
 *   - A price appears ONLY where it was unambiguous in the existing project.
 *   - Services whose previously stored prices conflicted (FSSAI, Trademark
 *     Registration) deliberately carry NO price and fall back to
 *     "Request a quote" until a business-approved figure is confirmed.
 *   - Every other service carries no price. Prices are never invented.
 *
 * SLUGS: the eight services that already had public URLs in this application
 * keep their original slugs (company, llp, gst, udyam, fssai, iec, trademark,
 * itr) so existing links such as /services/gst continue to resolve.
 */

export const QUOTE_LABEL = 'Request a quote'

export const categories = [
  {
    slug: 'start-business',
    name: 'Start Business',
    icon: 'building',
    tagline: 'Incorporate and set up',
    description:
      'Choose the right structure, incorporate it correctly and get your office, PAN and signatures in place.',
    groups: [
      {
        name: 'Business Registration',
        services: [
          { slug: 'company', name: 'Private Limited Company', price: '₹999' },
          { slug: 'llp', name: 'Limited Liability Partnership (LLP)', price: '₹999' },
          { slug: 'opc', name: 'One Person Company (OPC)' },
          { slug: 'public-limited-company', name: 'Public Limited Company' },
          { slug: 'partnership-firm', name: 'Partnership Firm' },
          { slug: 'sole-proprietorship', name: 'Sole-Proprietorship' },
          { slug: 'global-business-setup', name: 'Global Business Setup' },
          { slug: 'indian-subsidiary', name: 'Indian Subsidiary' },
        ],
      },
      {
        name: 'Special Entities',
        services: [
          { slug: 'section-8-company', name: 'Section 8 Company' },
          { slug: 'nidhi-company', name: 'Nidhi Company' },
          { slug: 'producer-company', name: 'Producer Company' },
          { slug: 'nbfc-company', name: 'NBFC Company' },
          { slug: 'fpo-registration', name: 'FPO Registration' },
        ],
      },
      {
        name: 'Office Space',
        services: [
          { slug: 'commercial-office', name: 'Commercial Office' },
          { slug: 'virtual-office-address', name: 'Virtual Office Address' },
          { slug: 'co-working-office', name: 'Co-Working Office' },
          { slug: 'incubation-centre', name: 'Incubation Centre' },
        ],
      },
      {
        name: 'KYC Registrations',
        services: [
          { slug: 'individual-pan-card', name: 'Individual PAN Card' },
          { slug: 'company-pan-card', name: 'Company PAN Card' },
          { slug: 'huf-pan-card', name: 'HUF PAN Card' },
          { slug: 'digital-signature-certificate', name: 'Digital Signature Certificate' },
          { slug: 'e-procurement-services', name: 'e-Procurement Services' },
        ],
      },
    ],
  },

  {
    slug: 'registrations',
    name: 'Registrations',
    icon: 'badge',
    tagline: 'Licences and certificates',
    description:
      'Tax registrations, sector licences, quality certifications and intellectual property protection.',
    groups: [
      {
        name: 'Tax Registrations',
        services: [
          { slug: 'gst', name: 'GST Registration', price: '₹499' },
          { slug: 'pf-registration', name: 'PF Registration' },
          { slug: 'esic-registration', name: 'ESIC Registration' },
          { slug: 'ptec-ptrc-registration', name: 'PTEC & PTRC Registration' },
          { slug: 'udyam', name: 'Udyam Aadhar Registration', price: '₹299' },
          { slug: 'iec', name: 'Import Export Registration (IEC)', price: '₹999' },
          { slug: 'fssai', name: 'FSSAI Registration' },
          { slug: 'usfda-registration', name: 'USFDA Registration' },
          { slug: '80g-12a-registration', name: '80G / 12 A Registration' },
          { slug: 'tan-registration', name: 'TAN Registration' },
          { slug: 'fcra-registration', name: 'FCRA Registration' },
        ],
      },
      {
        name: 'Certificates',
        services: [
          { slug: 'iso-certification', name: 'ISO Certification' },
          { slug: 'dgft-registration', name: 'DGFT Registration' },
          { slug: 'organic-certification', name: 'Organic Certification' },
          { slug: 'gap-certification', name: 'GAP Certification' },
          { slug: 'hallal-certificate', name: 'Hallal Certificate' },
          { slug: 'kosher-certificate', name: 'KOSHER Certificate' },
          { slug: 'dsc-certificate', name: 'Digital Signature Certificate' },
          { slug: 'bis-isi-mark-certificate', name: 'BIS Registration / ISI Mark Certificate' },
          { slug: 'g-mark-certification', name: 'G Mark Certification' },
          { slug: 'rera-registration', name: 'RERA Registration' },
        ],
      },
      {
        name: 'Trademark',
        services: [
          { slug: 'trademark-search', name: 'Trademark Search' },
          { slug: 'trademark', name: 'Trademark Registration' },
          { slug: 'copyright-registration', name: 'Copyright Registration' },
          { slug: 'patent-registration', name: 'Patent Registration' },
        ],
      },
      {
        name: 'Other Registrations',
        services: [
          { slug: 'mea-registration', name: 'MEA Registration' },
          { slug: 'apeda-registration', name: 'APEDA Registration' },
          { slug: 'startup-india-registration', name: 'Startup India Registration' },
          { slug: 'drug-cosmetic-licence', name: 'Drug & Cosmetic Licence' },
          { slug: 'gem-portal-registration', name: 'GeM Portal Registration' },
        ],
      },
    ],
  },

  {
    slug: 'compliances',
    name: 'Compliances',
    icon: 'shield',
    tagline: 'Stay filed and audit-ready',
    description:
      'Periodic filings, corporate governance support and the specialist services that keep a company clean.',
    groups: [
      {
        name: 'Annual Filings',
        services: [
          { slug: 'itr', name: 'IT Returns Filing', price: '₹499' },
          { slug: 'gst-returns-filing', name: 'GST Returns Filing' },
          { slug: 'fssai-returns-filing', name: 'FSSAI Returns Filing' },
          { slug: 'pf-returns-filing', name: 'PF Returns Filing' },
          { slug: 'esic-returns-filing', name: 'ESIC Returns Filing' },
          { slug: 'tds-filings', name: 'TDS Filings' },
          { slug: 'roc-filings', name: 'ROC Filings' },
          { slug: 'other-compliances', name: 'Other Compliances' },
        ],
      },
      {
        name: 'Corporate Services',
        services: [
          { slug: 'virtual-cfo', name: 'Virtual CFO' },
          { slug: 'independent-director', name: 'Independent Director' },
          { slug: 'cma-report-preparation', name: 'CMA Report Preparation' },
          { slug: 'training', name: 'Training' },
          { slug: 'payroll-management', name: 'Payroll Management' },
          { slug: 'due-diligence', name: 'Due Diligence' },
          { slug: 'new-project-consulting', name: 'New Project Consulting' },
        ],
      },
      {
        name: 'Consulting Services',
        services: [
          { slug: 'recruitment-services', name: 'Recruitment Services' },
          { slug: 'm-and-a-services', name: 'M & A Services' },
          { slug: 'legal-services', name: 'Legal Services' },
        ],
      },
    ],
  },

  {
    slug: 'it-services',
    name: 'IT Services',
    icon: 'code',
    tagline: 'Build and run your digital side',
    description:
      'Everything from a domain name to a full product build, plus the marketing and infrastructure around it.',
    groups: [
      {
        name: 'Web Services',
        services: [
          { slug: 'domain-registration', name: 'Domain Registration' },
          { slug: 'web-hosting', name: 'Web Hosting' },
          { slug: 'ssl-certificate', name: 'SSL Certificate' },
          { slug: 'payment-gateway', name: 'Payment Gateway' },
        ],
      },
      {
        name: 'App / Web Development',
        services: [
          { slug: 'website-development', name: 'Website Development' },
          { slug: 'app-development', name: 'App Development' },
          { slug: 'ecommerce-website', name: 'e-commerce Website' },
          { slug: 'api-development', name: 'API Development' },
          { slug: 'data-digitization', name: 'Data Digitization' },
        ],
      },
      {
        name: 'Digital Marketing',
        services: [
          { slug: 'search-engine-optimization', name: 'Search Engine Optimization' },
          { slug: 'social-media-marketing', name: 'Social Media Marketing' },
          { slug: 'logo-design', name: 'Logo Design' },
          { slug: 'graphic-design', name: 'Graphic Design' },
        ],
      },
      {
        name: 'IT Infrastructure',
        services: [
          { slug: 'it-rentals', name: 'IT Rentals' },
          { slug: 'refurbished-laptops-desktops', name: 'Refurbished Laptops & Desktops' },
          { slug: 'networking-solutions', name: 'Networking Solutions' },
          { slug: 'amc-services', name: 'AMC Services' },
          { slug: 'software-licences', name: 'Software Licences' },
          { slug: 'cloud-management', name: 'Cloud Management' },
        ],
      },
    ],
  },

  {
    slug: 'financial-services',
    name: 'Financial Services',
    icon: 'bank',
    tagline: 'Banking, credit and cover',
    description:
      'Accounts, working capital, growth funding and the insurance that protects the business behind it.',
    groups: [
      {
        name: 'Banking Services',
        services: [
          { slug: 'account-opening', name: 'Account Opening' },
          { slug: 'bill-discounting', name: 'Bill Discounting' },
        ],
      },
      {
        name: 'Loans',
        services: [
          { slug: 'business-loans', name: 'Business Loans' },
          { slug: 'mortgage-loans', name: 'Mortgage Loans' },
          { slug: 'working-capital-od', name: 'Working Capital / OD' },
          { slug: 'lease-rental-discounting', name: 'Lease Rental Discounting' },
          { slug: 'letter-of-credit', name: 'Letter of Credit (LC)' },
          { slug: 'cgtmse-loans', name: 'CGTMSE Loans' },
          { slug: 'msme-loans', name: 'MSME Loans' },
        ],
      },
      {
        name: 'Funding',
        services: [
          { slug: 'startup-funding', name: 'Start-Up Funding' },
          { slug: 'seed-funding', name: 'Seed Funding' },
          { slug: 'angel-investment', name: 'Angel Investment' },
          { slug: 'venture-capital', name: 'Venture Capital' },
        ],
      },
      {
        name: 'Insurance',
        services: [
          { slug: 'director-insurance', name: 'Director Insurance' },
          { slug: 'employees-health-insurance', name: 'Employees Health Insurance' },
          { slug: 'company-insurance', name: 'Company Insurance' },
          { slug: 'general-insurance', name: 'General Insurance' },
        ],
      },
    ],
  },
]

/** Flattened catalogue — every service with its category and group attached. */
export const allServices = categories.flatMap((category) =>
  category.groups.flatMap((group) =>
    group.services.map((service) => ({
      ...service,
      categorySlug: category.slug,
      categoryName: category.name,
      groupName: group.name,
    })),
  ),
)

const serviceIndex = new Map(allServices.map((service) => [service.slug, service]))

export function getService(slug) {
  return serviceIndex.get(slug) || null
}

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug) || null
}

export function priceLabel(service) {
  return service && service.price ? service.price : QUOTE_LABEL
}

/**
 * Number of services with their own page.
 * With no argument, across the whole catalogue; with a category, within it.
 * This counts pages in this repository — it is deliberately not the published
 * "126+ Services" figure, which comes from the business and lives in
 * company.js.
 */
export function countServices(category) {
  if (!category) return allServices.length
  return category.groups.reduce((total, group) => total + group.services.length, 0)
}

/**
 * Rank services against a free-text query.
 * Exact match first, then prefix, then word-start, then substring.
 */
export function searchServices(query, limit = 8) {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const scored = []

  for (const service of allServices) {
    const name = service.name.toLowerCase()
    const haystack = `${name} ${service.groupName.toLowerCase()} ${service.categoryName.toLowerCase()}`

    let score = 0
    if (name === q) score = 100
    else if (name.startsWith(q)) score = 80
    else if (new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(name)) score = 60
    else if (name.includes(q)) score = 40
    else if (haystack.includes(q)) score = 20

    if (score > 0) scored.push({ service, score })
  }

  return scored
    .sort((a, b) => b.score - a.score || a.service.name.localeCompare(b.service.name))
    .slice(0, limit)
    .map((entry) => entry.service)
}
