import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { journeys } from '../../data/journeys'
import { getService } from '../../data/catalogue'

/**
 * The four business journeys, as the primary way into the catalogue.
 * Each card lists real services and links to the matching category.
 */
function ServiceFinder({ id = 'solutions' }) {
  return (
    <section className="section section--paper" id={id}>
      <div className="container">
        <SectionHead
          eyebrow="Service Finder"
          title="What do you need help with?"
          description="Four ways businesses come to us. Start where you are."
          center
        />

        <div className="finder-grid">
          {journeys.map((journey, index) => (
            <Reveal className="finder-card" key={journey.id} delay={index * 60}>
              <span className={`finder-card__icon finder-card__icon--${journey.id}`}>
                <Icon name={journey.icon} size={22} />
              </span>

              <h3>{journey.title}</h3>
              <p>{journey.description}</p>

              <ul className="finder-card__list">
                {journey.services.map((slug) => {
                  const service = getService(slug)
                  if (!service) return null
                  return (
                    <li key={slug}>
                      <Link to={`/services/${slug}`}>
                        <Icon name="chevronRight" size={13} />
                        {service.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <Link
                to={`/services/category/${journey.categorySlug}`}
                className="btn btn--outline btn--sm finder-card__cta"
              >
                Explore {journey.label.toLowerCase()} services
                <Icon name="arrowRight" size={15} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceFinder
