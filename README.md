# Udyama Kendra

A single-window business services platform — company registration, licences and
certificates, statutory compliance, trademark and patent, IT services and
financial services.

Built with **React 19**, **Vite 8** and **React Router 7**. No UI framework:
the design system is plain CSS custom properties.

## Getting started

```bash
npm install
npm run dev      # development server
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Project structure

```
src/
├── data/                  Content — the single source of truth
│   ├── catalogue.js       106 services / 19 groups / 5 categories, search helpers
│   ├── serviceDetails.js  Documents, process and FAQ content
│   └── company.js         Contact, team, testimonials, partners, positioning
├── components/
│   ├── layout/            Navbar, MegaMenu, MobileDrawer, Footer, ScrollToTop
│   ├── ui/                Icon, Logo, Avatar, BrandMark, Accordion, Reveal, SectionHead
│   └── sections/          SearchCommand, EnquiryForm, ServiceCard, Team,
│                          Testimonials, Partners, TrustStrip, Differentiators, CtaBand
├── pages/                 Home, Services, CategoryPage, ServicePage,
│                          About, Contact, Login, NotFound
├── lib/leads.js           Single exit point for enquiry submissions
├── styles/
│   ├── tokens.css         Colours, type, spacing, radii, shadows — theme here
│   ├── base.css           Reset and base typography
│   ├── ui.css             Buttons, forms, cards, badges, accordion
│   ├── layout.css         Header, mega menu, drawer, footer
│   └── pages.css          Page and section styles
├── index.css              Imports tokens + base
└── App.css                Imports ui + layout + pages
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/services` | Full catalogue, searchable and filterable |
| `/services/category/:categorySlug` | Category listing |
| `/services/:serviceId` | Service detail |
| `/about` | About, team, partners |
| `/contact` | Contact and enquiry form |
| `/login` | Client login (full-bleed, no site chrome) |
| anything else | 404 |

The eight services that had public URLs before this rebuild keep their original
slugs — `company`, `llp`, `gst`, `udyam`, `fssai`, `iec`, `trademark`, `itr` —
so existing links such as `/services/gst` still resolve.

## Content rules

Content comes from the previous Udyama Kendra website and is not invented.
Two rules matter when editing `src/data/`:

1. **Pricing.** A price is shown only where it is confirmed. Everything else
   renders as "Request a quote". Two services (FSSAI Registration, Trademark
   Registration) deliberately carry no price because the figures stored in the
   old codebase disagreed with each other; add a `price` field once a
   business-approved figure is confirmed.
2. **Statistics.** The counters in the trust strip are derived from the
   catalogue and company data at runtime, never hard-coded.

## Images

Team photographs and partner logos are not in the repository yet. Components
fall back to monograms and wordmarks until the files exist — no code change is
needed to switch them on. Drop the files at these exact paths:

```
public/images/team/PavanKumar.jpg
public/images/team/CSVPrasad.jpg
public/images/team/Ram.jpg
public/images/team/Shivaprasad.jpg

public/images/partners/academy-axis.png
public/images/partners/amsware.png
public/images/partners/book-my-square-feet.png
public/images/partners/loanzmitra.png
public/images/partners/iiiq.png
public/images/partners/spectra.png
```

Paths are configured in `src/data/company.js`.

## Enquiry submissions

There is no backend. `src/lib/leads.js` is the only place an enquiry leaves the
application — replace the body of `submitLead()` with a real request and every
form on the site is connected. Until then, submissions are not delivered
anywhere.

## Archived assets

`_archive/` holds the static HTML template (Bootstrap, jQuery, SCSS sources,
icon fonts) that the previous site used. Nothing in `src/` references it; it is
kept only so nothing is lost.
