import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { journeys } from '../../data/journeys'

/**
 * The arc of a business: start, manage, protect, grow — as one connected band
 * rather than four unrelated cards.
 *
 * This is the only place the four stages appear on the homepage. "What do you
 * need help with?" higher up is organised by catalogue category instead, so
 * the two sections do not restate each other.
 */
function BusinessJourney() {
  return (
    <section className="section section--ink journey-section" id="how-we-help">
      <div className="container">
        <SectionHead
          eyebrow="Start · Manage · Protect · Grow"
          title="How can we help you grow?"
          description="We stay with you the whole way — from the day you register to the year you scale."
          center
        />

        <div className="journey-band">
          {journeys.map((journey, index) => (
            <Reveal className="journey-stage" key={journey.id} delay={index * 80}>
              <span className="journey-stage__index" aria-hidden="true">
                0{index + 1}
              </span>
              <span className="journey-stage__icon">
                <Icon name={journey.icon} size={22} />
              </span>
              <h3>{journey.label}</h3>
              <p>{journey.summary}</p>
              <Link to={`/services/category/${journey.categorySlug}`} className="link-arrow">
                Explore
                <Icon name="arrowRight" size={15} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessJourney
