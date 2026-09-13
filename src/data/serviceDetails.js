/**
 * Detailed content for the services that already had it in this project.
 *
 * Summaries and document lists are carried over from the project's existing
 * src/data/services.js and pages/ServicePage.jsx rather than rewritten, so no
 * existing content is lost. Services absent from this map fall back to the
 * shared defaults below — which make no factual claim about timelines, fees or
 * outcomes.
 */

export const serviceDetails = {
  company: {
    eyebrow: 'START YOUR BUSINESS',
    summary:
      'Register your company with professional assistance and start your business with confidence.',
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Address Proof',
      'Passport Size Photograph',
      'Business Address Proof',
    ],
  },
  llp: {
    eyebrow: 'START YOUR BUSINESS',
    summary:
      'Set up your Limited Liability Partnership with a simple and guided registration process.',
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Address Proof',
      'Photograph',
      'Registered Office Proof',
    ],
  },
  gst: {
    eyebrow: 'TAX & GST',
    summary: 'Get your GST registration completed quickly with professional assistance.',
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Business Address Proof',
      'Bank Account Details',
      'Photograph',
    ],
  },
  udyam: {
    eyebrow: 'BUSINESS REGISTRATION',
    summary: 'Register your MSME business and get your Udyam Registration certificate.',
    documents: ['Aadhaar Card', 'PAN Card', 'Business Details', 'Bank Details'],
  },
  fssai: {
    eyebrow: 'BUSINESS REGISTRATION',
    summary: 'Get the required FSSAI registration or license for your food business.',
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Business Address Proof',
      'Food Business Details',
      'Photograph',
    ],
  },
  iec: {
    eyebrow: 'BUSINESS REGISTRATION',
    summary: 'Get your Import Export Code to start international trade.',
    documents: ['PAN Card', 'Aadhaar Card', 'Bank Details', 'Business Address Proof'],
  },
  trademark: {
    eyebrow: 'PROTECT YOUR BRAND',
    summary:
      'Protect your business name, logo and brand through trademark registration.',
    documents: [
      'Applicant PAN',
      'Applicant Aadhaar',
      'Brand Name',
      'Logo if applicable',
      'Business Details',
    ],
  },
  itr: {
    eyebrow: 'TAX & COMPLIANCE',
    summary: 'Get professional assistance with income tax return filing.',
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Form 16',
      'Bank Statements',
      'Investment Details',
    ],
  },
}

/** Documents commonly requested where a service-specific list is not published. */
export const defaultDocuments = [
  'PAN Card',
  'Aadhaar Card',
  'Address Proof',
  'Business Details',
  'Bank Account Details',
  'Mobile Number & Email',
]

export const processSteps = [
  {
    step: '01',
    title: 'Submit Your Details',
    description: 'Provide your basic information and requirements.',
  },
  {
    step: '02',
    title: 'Share Documents',
    description: 'Submit the documents required for the selected service.',
  },
  {
    step: '03',
    title: 'Application Processing',
    description: 'Our team assists with the application and required formalities.',
  },
  {
    step: '04',
    title: 'Service Completion',
    description: 'Receive confirmation or the required certificate.',
  },
]

export const defaultFaqs = [
  {
    question: 'What documents are required?',
    answer:
      'The documents required depend on the selected service. Generally, PAN Card, Aadhaar Card, address proof, business details and bank details may be required.',
  },
  {
    question: 'How does the process work?',
    answer:
      'Submit your basic details, share the required documents and our team will guide you through the application and completion process.',
  },
  {
    question: 'How long does the service take?',
    answer:
      'The processing time depends on the type of service and the respective government authority.',
  },
  {
    question: 'Will I receive a certificate?',
    answer:
      'Where applicable, you will receive the relevant registration certificate or confirmation after successful completion.',
  },
  {
    question: 'How is pricing decided?',
    answer:
      'Where a service has a published starting price it is shown on this page. For everything else our team confirms the fee for your specific requirement before any work begins.',
  },
]

export function getServiceDetail(service) {
  if (!service) return null
  const detail = serviceDetails[service.slug]
  return {
    eyebrow: detail?.eyebrow || service.categoryName.toUpperCase(),
    summary:
      detail?.summary ||
      `Talk to our team about ${service.name}. We will confirm what applies to your business, the documents needed and the fee before any work begins.`,
    documents: detail?.documents || defaultDocuments,
    hasPublishedDetail: Boolean(detail),
  }
}
