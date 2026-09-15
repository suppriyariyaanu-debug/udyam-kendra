import { useRef } from 'react'
import Icon from '../ui/Icon'
import SectionHead from '../ui/SectionHead'
import { testimonials } from '../../data/company'

/**
 * Client stories.
 *
 * A native scroll-snap rail rather than a carousel library: it swipes on
 * touch, scrolls with the keyboard, works without JavaScript, and shows all
 * three side by side once there is room. The arrows nudge it one card.
 *
 * No star ratings — the published testimonials do not carry any, and
 * inventing them would be fabricating a trust signal.
 */
function Testimonials() {
  const railRef = useRef(null)

  const nudge = (direction) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector('.testimonial')
    const amount = card ? card.getBoundingClientRect().width + 20 : rail.clientWidth * 0.8
    rail.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <section className="section section--ink" id="clients">
      <div className="container">
        <div className="rail-head">
          <SectionHead
            eyebrow="Client Stories"
            title="What our clients say"
            description="Businesses we have helped start, register and stay compliant."
          />
          <div className="rail-nav">
            <button
              type="button"
              className="rail-nav__btn"
              onClick={() => nudge(-1)}
              aria-label="Previous testimonials"
            >
              <Icon name="arrowLeft" size={18} />
            </button>
            <button
              type="button"
              className="rail-nav__btn"
              onClick={() => nudge(1)}
              aria-label="Next testimonials"
            >
              <Icon name="arrowRight" size={18} />
            </button>
          </div>
        </div>

        <div className="rail" ref={railRef} tabIndex={0} aria-label="Client testimonials">
          {testimonials.map((item) => (
            <figure className="testimonial" key={item.name}>
              <span className="testimonial__quote" aria-hidden="true">
                <Icon name="quote" size={26} />
              </span>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
