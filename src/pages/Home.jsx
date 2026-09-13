import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import SearchCommand from '../components/sections/SearchCommand'
import TrustStrip from '../components/sections/TrustStrip'
import Differentiators from '../components/sections/Differentiators'
import Team from '../components/sections/Team'
import Testimonials from '../components/sections/Testimonials'
import Partners from '../components/sections/Partners'
import CtaBand from '../components/sections/CtaBand'
import { categories, countServices, getService } from '../data/catalogue'
import { pillars, positioning } from '../data/company'

const quickLinks = ['company', 'gst', 'udyam', 'trademark', 'itr']

const journey = [
  { icon: 'building', label: 'Start', text: 'Incorporate the right entity' },
  { icon: 'shield', label: 'Manage', text: 'Stay filed and compliant' },
  { icon: 'trademark', label: 'Protect', text: 'Secure your brand and IP' },
  { icon: 'trendingUp', label: 'Grow', text: 'Funding, credit and tech' },
]

function Home() {
  const total = countServices()

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">{positioning.eyebrow}</p>

            <h1>
              Start, manage, protect and grow
              <span> your business</span>
            </h1>

            <p className="hero__lede">{positioning.statement}</p>

            <div className="hero__search">
              <SearchCommand />
            </div>

            <div className="hero__quick">
              <span>Popular:</span>
              {quickLinks.map((slug) => {
                const service = getService(slug)
                if (!service) return null
                return (
                  <Link key={slug} to={`/services/${slug}`} className="hero__quick-link">
                    {service.name}
                  </Link>
                )
              })}
            </div>

            <div className="hero__actions">
              <Link to="/services" className="btn btn--primary btn--lg">
                Explore all {total} services
                <Icon name="arrowRight" size={18} />
              </Link>
              <Link to="/contact" className="btn btn--ghost-light btn--lg">
                Talk to an Expert
              </Link>
            </div>
          </div>

          <aside className="hero__panel" aria-label="How we work with you">
            <h2 className="hero__panel-title">One partner, four stages</h2>
            <ul className="journey">
              {journey.map((stage) => (
                <li className="journey__item" key={stage.label}>
                  <span className="journey__icon">
                    <Icon name={stage.icon} size={19} />
                  </span>
                  <span className="journey__body">
                    <strong>{stage.label}</strong>
                    <span>{stage.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="hero__panel-note">
              <Icon name="checkCircle" size={15} />
              Registrations, compliance, IP, technology and finance under one roof.
            </p>
          </aside>
        </div>
      </section>

      <TrustStrip />

      {/* ------------------------------------------------------------ Pillars */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our Services"
            title="Built for every stage of your business"
            description={positioning.servicesIntro}
            center
          />

          <div className="pillar-grid">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 60}>
                <Link to={`/services/category/${pillar.categorySlug}`} className="card card--link">
                  <span className="card__icon">
                    <Icon name={pillar.icon} size={22} />
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <span className="card__foot">
                    <span className="link-arrow">
                      Explore
                      <Icon name="arrowRight" size={16} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Categories */}
      <section className="section section--paper">
        <div className="container">
          <SectionHead
            eyebrow="Browse by category"
            title="Find the service you need"
            description={`All ${total} services, organised the way a business actually needs them.`}
          />

          <div className="category-grid">
            {categories.map((category, index) => {
              const count = category.groups.reduce(
                (sum, group) => sum + group.services.length,
                0,
              )

              return (
                <Reveal key={category.slug} delay={index * 60}>
                  <Link
                    to={`/services/category/${category.slug}`}
                    className="category-card"
                  >
                    <span className="category-card__icon">
                      <Icon name={category.icon} size={22} />
                    </span>
                    <div className="category-card__body">
                      <h3>{category.name}</h3>
                      <p>{category.tagline}</p>
                      <ul className="category-card__groups">
                        {category.groups.map((group) => (
                          <li key={group.name}>{group.name}</li>
                        ))}
                      </ul>
                    </div>
                    <span className="category-card__meta">
                      <span className="badge">{count} services</span>
                      <Icon name="arrowRight" size={18} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <Differentiators />
      <Team />
      <Testimonials />
      <Partners />
      <CtaBand />
    </>
  )
}

export default Home
