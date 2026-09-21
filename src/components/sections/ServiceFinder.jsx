import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { helpTopics } from '../../data/journeys'
import { getCategory, countServices } from '../../data/catalogue'

/**
 * "Explore Our Business Solutions" — the first thing after the hero.
 *
 * Each card states a need in the visitor's own words and routes to the real
 * catalogue category that answers it. Name, tagline and service count are read
 * from the catalogue so nothing here can drift out of step with it; a topic
 * whose category no longer exists is dropped rather than rendered as a dead
 * link.
 */
function ServiceFinder({ id = 'need-help' }) {
  const topics = helpTopics
    .map((topic) => ({ ...topic, category: getCategory(topic.categorySlug) }))
    .filter((topic) => topic.category)

  return (
    <section className="section section--paper need-section" id={id}>
      <div className="container">
        <SectionHead
          eyebrow="Start here"
          title="Explore Our Business Solutions"
          description="Discover the right solutions to start, manage, protect, and grow your business."
          center
        />

        <div className="need-grid">
          {topics.map((topic, index) => (
            <Reveal className="need-card" key={topic.categorySlug} delay={index * 55}>
              <Link to={`/services/category/${topic.categorySlug}`} className="need-card__link">
                <span className="need-card__icon">
                  <Icon name={topic.category.icon} size={22} />
                </span>

                <h3>{topic.need}</h3>
                <p>{topic.category.description}</p>

                <span className="need-card__foot">
                  <span className="need-card__count">
                    {countServices(topic.category)} services
                  </span>
                  <span className="need-card__go">
                    {topic.category.name}
                    <Icon name="arrowRight" size={15} />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}

          <Reveal className="need-card need-card--all" delay={topics.length * 55}>
            <Link to="/services" className="need-card__link">
              <span className="need-card__icon need-card__icon--all">
                <Icon name="search" size={22} />
              </span>
              <h3>Not sure where to start?</h3>
              <p>
                Browse the full catalogue, or search for a service by name and we will point you
                to the right place.
              </p>
              <span className="need-card__foot">
                <span className="need-card__go">
                  See all services
                  <Icon name="arrowRight" size={15} />
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ServiceFinder
