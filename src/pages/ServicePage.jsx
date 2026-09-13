import { Link, useParams } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import Accordion from '../components/ui/Accordion'
import EnquiryForm from '../components/sections/EnquiryForm'
import CtaBand from '../components/sections/CtaBand'
import NotFound from './NotFound'
import { QUOTE_LABEL, allServices, getService } from '../data/catalogue'
import { defaultFaqs, getServiceDetail, processSteps } from '../data/serviceDetails'
import { company } from '../data/company'

function ServicePage() {
  const { serviceId } = useParams()
  const service = getService(serviceId)

  // Previously an unknown slug silently rendered Company Registration.
  if (!service) return <NotFound />

  const detail = getServiceDetail(service)
  const hasPrice = Boolean(service.price)

  const related = allServices
    .filter(
      (item) =>
        item.groupName === service.groupName &&
        item.categorySlug === service.categorySlug &&
        item.slug !== service.slug,
    )
    .slice(0, 4)

  return (
    <div className="service-page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevronRight" size={13} />
            <Link to="/services">Services</Link>
            <Icon name="chevronRight" size={13} />
            <Link to={`/services/category/${service.categorySlug}`}>{service.categoryName}</Link>
            <Icon name="chevronRight" size={13} />
            <span aria-current="page">{service.name}</span>
          </nav>

          <p className="eyebrow">{detail.eyebrow}</p>
          <h1>{service.name}</h1>
          <p className="page-hero__lede">{detail.summary}</p>

          <div className="page-hero__meta">
            <span className={`badge ${hasPrice ? 'badge--price' : 'badge--quote'}`}>
              {hasPrice ? `Starting from ${service.price}` : QUOTE_LABEL}
            </span>
            <span className="badge">{service.groupName}</span>
          </div>

          <div className="page-hero__actions">
            <a href="#enquiry" className="btn btn--primary btn--lg">
              Get started
              <Icon name="arrowRight" size={18} />
            </a>
            <a href={company.phoneHref} className="btn btn--ghost-light btn--lg">
              <Icon name="phone" size={17} />
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-layout">
          <div className="service-main">
            <article className="prose">
              <h2>About this service</h2>
              <p>
                Udyama Kendra provides simple, transparent and professional assistance for
                businesses. Our team helps you understand the process, prepare the required
                documents and complete the necessary formalities.
              </p>

              {!hasPrice ? (
                <p className="callout">
                  <Icon name="alertCircle" size={17} />
                  <span>
                    We publish a price only where it is confirmed. For {service.name}, our team
                    will quote the exact fee for your requirement before any work begins.
                  </span>
                </p>
              ) : null}
            </article>

            <div className="doc-block">
              <h2>Documents required</h2>
              {!detail.hasPublishedDetail ? (
                <p className="doc-block__note">
                  These are the documents commonly requested. Our team will confirm the exact
                  list for your case.
                </p>
              ) : null}
              <ul className="doc-list">
                {detail.documents.map((document) => (
                  <li key={document}>
                    <Icon name="check" size={15} />
                    {document}
                  </li>
                ))}
              </ul>
            </div>

            <div className="process-block">
              <h2>How it works</h2>
              <ol className="process-list">
                {processSteps.map((step) => (
                  <li key={step.step}>
                    <span className="process-list__num">{step.step}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="faq-block">
              <h2>Frequently asked questions</h2>
              <Accordion items={defaultFaqs} />
            </div>
          </div>

          <aside className="service-aside">
            <div className="enquiry-card" id="enquiry">
              <header className="enquiry-card__head">
                <h2>Get started</h2>
                <p>Share your details and our team will get in touch.</p>
              </header>
              <EnquiryForm serviceName={service.name} compact />
            </div>

            <div className="aside-contact">
              <h3>Prefer to talk?</h3>
              <a href={company.phoneHref} className="aside-contact__row">
                <Icon name="phone" size={16} />
                {company.phone}
              </a>
              <a href={company.emailHref} className="aside-contact__row">
                <Icon name="mail" size={16} />
                {company.email}
              </a>
              <p className="aside-contact__hours">
                <Icon name="clock" size={15} />
                {company.hours}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section section--paper section--tight">
          <div className="container">
            <h2 className="related-title">Related services</h2>
            <div className="related-grid">
              {related.map((item) => (
                <Link key={item.slug} to={`/services/${item.slug}`} className="related-card">
                  <span className="related-card__icon">
                    <Icon name="fileText" size={18} />
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <span>{item.groupName}</span>
                  </span>
                  <Icon name="arrowRight" size={17} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title="Need help choosing?"
        description="Our team can confirm what applies to your business before you commit to anything."
      />
    </div>
  )
}

export default ServicePage
