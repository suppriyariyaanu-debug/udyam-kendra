import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import SectionHead from '../ui/SectionHead'
import { QUOTE_LABEL, getService } from '../../data/catalogue'
import { serviceTabs } from '../../data/journeys'

const tabIcons = {
  start: 'building',
  compliance: 'shield',
  tax: 'fileText',
  legal: 'trademark',
  finance: 'bank',
  digital: 'code',
}

/**
 * Service discovery by category, as tabs rather than a wall of cards.
 * Implements the WAI-ARIA tabs pattern including arrow-key navigation.
 */
function ServiceTabs() {
  const [active, setActive] = useState(serviceTabs[0].id)
  const tabRefs = useRef({})

  const current = serviceTabs.find((tab) => tab.id === active) || serviceTabs[0]

  const onKeyDown = (event) => {
    const index = serviceTabs.findIndex((tab) => tab.id === active)
    let next = null

    if (event.key === 'ArrowRight') next = (index + 1) % serviceTabs.length
    else if (event.key === 'ArrowLeft') next = (index - 1 + serviceTabs.length) % serviceTabs.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = serviceTabs.length - 1

    if (next !== null) {
      event.preventDefault()
      const id = serviceTabs[next].id
      setActive(id)
      tabRefs.current[id]?.focus()
    }
  }

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          eyebrow="Our Services"
          title="Find the right service"
          description="Browse by what you are working on. Every service has its own page with documents, process and an enquiry form."
          center
        />

        <div className="tabs" role="tablist" aria-label="Service categories" onKeyDown={onKeyDown}>
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[tab.id] = node
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={active === tab.id ? 0 : -1}
              className="tabs__tab"
              onClick={() => setActive(tab.id)}
            >
              <Icon name={tabIcons[tab.id]} size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="tabs__panel"
        >
          <div className="service-grid service-grid--three">
            {current.services.map((slug) => {
              const service = getService(slug)
              if (!service) return null
              const hasPrice = Boolean(service.price)

              return (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  className="card card--link tab-card"
                >
                  <span className="tab-card__icon">
                    <Icon name={tabIcons[current.id]} size={20} />
                  </span>

                  <h3>{service.name}</h3>
                  <p>
                    {service.groupName} · {service.categoryName}
                  </p>

                  <span className="card__foot">
                    <span className={`badge ${hasPrice ? 'badge--price' : 'badge--quote'}`}>
                      {hasPrice ? `From ${service.price}` : QUOTE_LABEL}
                    </span>
                    <span className="link-arrow">
                      View Details
                      <Icon name="arrowRight" size={15} />
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="tabs__more">
            <Link to="/services" className="btn btn--outline">
              Browse every service
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceTabs
