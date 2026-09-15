import pavanKumar from '../assets/team/PavanKumar.jpg'
import csvPrasad from '../assets/team/CSVPrasad.jpg'
import ram from '../assets/team/Ram.jpg'
import shivaprasad from '../assets/team/Shivaprasad.jpg'

/**
 * Udyama Kendra company information.
 *
 * Every string in this file is reproduced from the previous Udyama Kendra
 * website (https://udyama-kendra-ram-s-project.vercel.app/). Nothing here is
 * invented. Where a fact was not published (street address, counter figures),
 * it is absent rather than guessed.
 */

export const company = {
  name: 'Udyama Kendra',
  tagline: 'A Single Window Business Service',
  phone: '+91 959 123 9899',
  phoneHref: 'tel:+919591239899',
  // Business decision: the displayed address is authoritative.
  email: 'enquiry@udyamakendra.com',
  emailHref: 'mailto:enquiry@udyamakendra.com',
  hours: 'Mon - Sat: 9.30 AM to 6.30 PM',
  locations: ['India', 'UAE', 'Singapore'],
  copyright: 'Udyama Kendra. All Rights Reserved',
}

/**
 * Published business figures.
 *
 * These are the counters from the previous site's statistics strip, confirmed
 * by the business. They are NOT derived from the catalogue in this repository
 * and must not be recomputed from it — the catalogue lists the services with
 * their own pages, which is a smaller number than the services offered.
 * Because these are the published figures, no other part of the UI quotes a
 * service total, so the site never contradicts itself.
 */
export const stats = [
  { value: '126+', label: 'Services', icon: 'layers' },
  { value: '54+', label: 'Partners', icon: 'handshake' },
  { value: '18+', label: 'Advisors', icon: 'users' },
  { value: '3', label: 'Global Locations', icon: 'globe' },
]

/** Hero trust points, drawn from the published differentiators. */
export const trustPoints = [
  'Reliable Support',
  'Industry Specialists',
  'On-time Service',
  'Long-term Partnerships',
]

/**
 * The six service pillars from the previous site, with their published
 * descriptions reproduced verbatim.
 */
export const pillars = [
  {
    icon: 'building',
    title: 'Company Registration',
    description:
      'We help entrepreneurs navigate the complexities of setting up a business in India, ensuring the comply with legal requirements for business growth',
    categorySlug: 'start-business',
  },
  {
    icon: 'badge',
    title: 'MSME Services & Certificates',
    description:
      'These services and certificates are vital for the growth and sustainability of your company, enabling you to compete effectively in the market',
    categorySlug: 'registrations',
  },
  {
    icon: 'shield',
    title: 'Statutory Compliances',
    description:
      'Ensuring statutory compliance is crucial for avoiding legal penalties, maintaining a good reputation, and fostering trust with stakeholders.',
    categorySlug: 'compliances',
  },
  {
    icon: 'trademark',
    title: 'Patent & Trademark Services',
    description:
      'Trademark patent services typically involve the registration and legal protection of trademarks and patents, ensuring that intellectual property rights are upheld',
    categorySlug: 'registrations',
  },
  {
    icon: 'code',
    title: 'Software & Web Solutions',
    description:
      'A wide range of services and products designed to meet the needs of businesses and individuals in the digital space like Website, Digital Marketing and many more',
    categorySlug: 'it-services',
  },
  {
    icon: 'bank',
    title: 'Corporate Banking & Loans',
    description:
      'Corporate banking plays a crucial role in supporting the financial needs of businesses, enabling them to grow and operate efficiently',
    categorySlug: 'financial-services',
  },
]

/** "WHAT MAKES US DIFFERENCE" — the eight published differentiators. */
export const differentiators = [
  { icon: 'wallet', title: 'Affordable Professional Services' },
  { icon: 'network', title: 'Diverse Expert Network' },
  { icon: 'scale', title: 'CA & Legal Services' },
  { icon: 'shield', title: 'Compliance Guaranteed' },
  { icon: 'clock', title: 'On-time Service' },
  { icon: 'target', title: 'Industry Specialists' },
  { icon: 'zap', title: 'Quick Support' },
  { icon: 'handshake', title: 'Business Partnerships' },
]

/**
 * Team, exactly as published — real photographs supplied by the business.
 *
 * The images are imported rather than referenced by an absolute URL so Vite
 * fingerprints them and resolves the path correctly whatever base the site is
 * served from. Names and designations are as given and must not be altered.
 */
export const team = [
  { name: 'Pavan Kumar', role: 'Global Evangelist', image: pavanKumar },
  { name: 'CSV Prasad', role: 'Global Advisor', image: csvPrasad },
  { name: 'Ram', role: 'Founder', image: ram },
  { name: 'Shivaprasad', role: 'Business Advisor', image: shivaprasad },
]

export const teamIntro =
  'The strength and success of an organization are closely linked to the effectiveness of its team.'

/** Testimonials, reproduced verbatim. */
export const testimonials = [
  {
    quote:
      'I want to thank the team for their attentive support and guidance. We are happy customers and would recommend their hassle-free service to others.',
    name: 'Vinay',
    role: 'CEO, Zerozilla',
  },
  {
    quote:
      "We've been with this firm for almost a year. They provide sound advice and excellent financial planning. The team is very focused and always delivers on time. Wishing them all the best",
    name: 'Maruthi Guruji',
    role: 'Partner, Sri Charana Foods',
  },
  {
    quote:
      'One of the best consulting firm in Bangalore with in-depth knowledge related to company set-up. I highly recommend them for NRIs who want to set-up Business in India.',
    name: 'Sanju',
    role: 'CEO, In4 Growth Inc.',
  },
]

/**
 * Partners. `logo` points at where the real mark should live; the BrandMark
 * component falls back to a typeset wordmark until the file is added.
 * Source filenames on the previous site: /images/partners/<file>.
 */
export const partners = [
  { name: 'Academy Axis', logo: '/images/partners/academy-axis.png' },
  { name: 'Amsware', logo: '/images/partners/amsware.png' },
  { name: 'Book My Square Feet', logo: '/images/partners/book-my-square-feet.png' },
  { name: 'LoansMitra', logo: '/images/partners/loanzmitra.png' },
  { name: 'IIIQ', logo: '/images/partners/iiiq.png' },
  { name: 'Spectra', logo: '/images/partners/spectra.png' },
]

/** How the business describes itself, verbatim from the previous site. */
export const positioning = {
  eyebrow: 'BUSINESS CONSULTING',
  statement:
    'We assists entrepreneurs in establishing a new business by providing consulting and guidance on business registration, licensing, and compliance with legal requirements.',
  servicesIntro:
    'Understanding and effectively managing core services is vital for any organization aiming to achieve long-term success and customer loyalty',
  differenceIntro: 'We stand out is the wide array of services we offer under one roof.',
}
