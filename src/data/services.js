/*
  Central service catalog. Every service belongs to one of six categories
  that map onto the navbar's dropdown groups: Start Business, Registrations,
  Compliances, IT Services, Financial Services, Trademark.

  ServicePage looks services up by `id`, Services groups them by `category`,
  and the Home page search matches against `title` / `shortTitle` / `category`.
*/

const services = [
  // ---------------- START BUSINESS ----------------
  {
    id: "company",
    title: "Private Limited Company Registration",
    shortTitle: "Company Registration",
    icon: "🏢",
    category: "Start Business",
    description:
      "Register your private limited company with end-to-end support, from name approval to your incorporation certificate.",
    price: "Starting from ₹1,999",
    requirements: [
      "PAN Card",
      "Aadhaar Card",
      "Passport Size Photograph",
      "Registered Office Address Proof",
      "Proposed Company Name Options",
    ],
  },
  {
    id: "opc",
    title: "One Person Company (OPC) Registration",
    shortTitle: "OPC Registration",
    icon: "👤",
    category: "Start Business",
    description:
      "Set up a One Person Company and run your business as a separate legal entity, single-handedly.",
    price: "Starting from ₹1,999",
    requirements: [
      "PAN Card",
      "Aadhaar Card",
      "Photograph",
      "Registered Office Address Proof",
      "Nominee Details",
    ],
  },
  {
    id: "llp",
    title: "LLP Registration",
    shortTitle: "LLP Registration",
    icon: "🤝",
    category: "Start Business",
    description:
      "Register your Limited Liability Partnership with a simple, guided process and limited liability protection.",
    price: "Starting from ₹1,999",
    requirements: [
      "PAN Card",
      "Aadhaar Card",
      "Address Proof",
      "Photograph",
      "Registered Office Proof",
    ],
  },
  {
    id: "proprietorship",
    title: "Sole Proprietorship Registration",
    shortTitle: "Proprietorship",
    icon: "🧾",
    category: "Start Business",
    description:
      "Start your business quickly as a sole proprietor with minimal compliance and complete control.",
    price: "Starting from ₹999",
    requirements: [
      "PAN Card",
      "Aadhaar Card",
      "Address Proof",
      "Bank Account Details",
      "Business Name",
    ],
  },

  // ---------------- REGISTRATIONS ----------------
  {
    id: "udyam",
    title: "Udyam (MSME) Registration",
    shortTitle: "Udyam Registration",
    icon: "🏭",
    category: "Registrations",
    description:
      "Register your MSME business and obtain your Udyam Registration certificate to access government benefits and schemes.",
    price: "Starting from ₹299",
    requirements: ["Aadhaar Card", "PAN Card", "Business Details", "Bank Details"],
  },
  {
    id: "fssai",
    title: "FSSAI Registration",
    shortTitle: "FSSAI Registration",
    icon: "🍴",
    category: "Registrations",
    description:
      "Get the FSSAI registration or license required to legally operate your food business.",
    price: "Starting from ₹1,499",
    requirements: [
      "PAN Card",
      "Aadhaar Card",
      "Business Address Proof",
      "Food Business Details",
      "Photograph",
    ],
  },
  {
    id: "iec",
    title: "Import Export Code (IEC)",
    shortTitle: "IEC Registration",
    icon: "🌐",
    category: "Registrations",
    description:
      "Obtain your Import Export Code to start importing and exporting goods and services.",
    price: "Starting from ₹1,999",
    requirements: ["PAN Card", "Aadhaar Card", "Bank Details", "Business Address Proof"],
  },
  {
    id: "shopact",
    title: "Shop & Establishment Registration",
    shortTitle: "Shop & Establishment",
    icon: "🏬",
    category: "Registrations",
    description:
      "Register your shop or commercial establishment as required under state labour law.",
    price: "Starting from ₹999",
    requirements: ["PAN Card", "Aadhaar Card", "Business Address Proof", "Employee Details"],
  },
  {
    id: "gst",
    title: "GST Registration",
    shortTitle: "GST Registration",
    icon: "📊",
    category: "Registrations",
    description:
      "Get your GST registration completed quickly with professional assistance.",
    price: "Starting from ₹499",
    requirements: [
      "PAN Card",
      "Aadhaar Card",
      "Business Address Proof",
      "Bank Account Details",
      "Photograph",
    ],
  },

  // ---------------- COMPLIANCES ----------------
  {
    id: "gst-return",
    title: "GST Return Filing",
    shortTitle: "GST Return Filing",
    icon: "🧮",
    category: "Compliances",
    description:
      "Stay compliant with timely, accurate monthly, quarterly or annual GST return filing.",
    price: "Starting from ₹499/month",
    requirements: ["GST Login Credentials", "Sales & Purchase Invoices", "Bank Statement"],
  },
  {
    id: "roc-annual",
    title: "ROC Annual Filing",
    shortTitle: "ROC Annual Filing",
    icon: "📁",
    category: "Compliances",
    description:
      "Complete your company or LLP's mandatory annual filings with the Registrar of Companies on time.",
    price: "Starting from ₹2,999",
    requirements: [
      "Financial Statements",
      "Board Resolutions",
      "PAN Card",
      "DIN / DSC Details",
    ],
  },
  {
    id: "tds-return",
    title: "TDS Return Filing",
    shortTitle: "TDS Return Filing",
    icon: "💼",
    category: "Compliances",
    description:
      "File your quarterly TDS returns accurately and stay compliant with income tax regulations.",
    price: "Starting from ₹999",
    requirements: ["TAN Details", "Deduction Details", "PAN of Deductees", "Challan Details"],
  },
  {
    id: "pf-esi",
    title: "PF & ESI Registration",
    shortTitle: "PF & ESI Registration",
    icon: "👥",
    category: "Compliances",
    description:
      "Register for Provident Fund and ESI to stay compliant with employee welfare regulations.",
    price: "Starting from ₹1,999",
    requirements: ["Business PAN", "Employee Details", "Address Proof", "Bank Details"],
  },

  // ---------------- IT SERVICES ----------------
  {
    id: "website",
    title: "Business Website Development",
    shortTitle: "Website Development",
    icon: "💻",
    category: "IT Services",
    description:
      "Get a professional business website designed and built to establish your brand online.",
    price: "Starting from ₹7,999",
    requirements: [
      "Business Name & Logo",
      "Domain Preference",
      "Content & Pages Required",
      "Reference Websites",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Services",
    shortTitle: "Digital Marketing",
    icon: "📈",
    category: "IT Services",
    description:
      "Grow your online presence with SEO, social media and digital marketing support.",
    price: "Starting from ₹4,999/month",
    requirements: [
      "Business Details",
      "Target Audience",
      "Social Media Access",
      "Marketing Goals",
    ],
  },

  // ---------------- FINANCIAL SERVICES ----------------
  {
    id: "business-loan",
    title: "Business Loan Assistance",
    shortTitle: "Business Loan",
    icon: "💵",
    category: "Financial Services",
    description:
      "Get expert assistance identifying and applying for the right business loan for your needs.",
    price: "Free Consultation",
    requirements: ["PAN Card", "Aadhaar Card", "Bank Statements", "Business Financials"],
  },
  {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    shortTitle: "Accounting & Bookkeeping",
    icon: "📚",
    category: "Financial Services",
    description:
      "Maintain accurate books of accounts with professional monthly accounting and bookkeeping support.",
    price: "Starting from ₹1,999/month",
    requirements: ["Sales & Purchase Records", "Bank Statements", "Business PAN"],
  },
  {
    id: "itr",
    title: "Income Tax Return Filing",
    shortTitle: "Income Tax Filing",
    icon: "💰",
    category: "Financial Services",
    description:
      "File your income tax returns accurately and on time with professional assistance.",
    price: "Starting from ₹499",
    requirements: [
      "PAN Card",
      "Aadhaar Card",
      "Form 16",
      "Bank Statements",
      "Investment Details",
    ],
  },

  // ---------------- TRADEMARK ----------------
  {
    id: "trademark",
    title: "Trademark Registration",
    shortTitle: "Trademark Registration",
    icon: "™️",
    category: "Trademark",
    description:
      "Protect your brand name, logo and identity with trademark registration.",
    price: "Starting from ₹1,999",
    requirements: [
      "Applicant PAN",
      "Applicant Aadhaar",
      "Brand Name",
      "Logo (if applicable)",
      "Business Details",
    ],
  },
  {
    id: "trademark-renewal",
    title: "Trademark Renewal",
    shortTitle: "Trademark Renewal",
    icon: "🔄",
    category: "Trademark",
    description:
      "Renew your registered trademark before expiry to maintain continuous legal protection.",
    price: "Starting from ₹1,999",
    requirements: ["Trademark Registration Certificate", "Applicant Details"],
  },
];

export const categories = [
  "Start Business",
  "Registrations",
  "Compliances",
  "IT Services",
  "Financial Services",
  "Trademark",
];

export default services;
