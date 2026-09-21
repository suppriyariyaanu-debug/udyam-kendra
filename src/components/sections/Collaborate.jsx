import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { collaborationModes } from '../../data/journeys'
import { company } from '../../data/company'

/**
 * "How can we collaborate with you to grow?"
 *
 * Describes how working with Udyama Kendra actually goes, then offers the two
 * site-wide actions. Both reuse the existing handlers — the contact route and
 * the published phone number — rather than introducing a new path.
 */
function Collaborate() {
  return (
    <section className="section section--paper collab-section" id="collaborate">
      <div className="container collab-inner">
        <div className="collab-copy">
          <SectionHead
            eyebrow="Working together"
            title="How can we collaborate with you to grow?"
            description="We are not a one-off filing desk. The aim is a working relationship that carries on as the business changes."
          />

          <div className="collab-actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get Started
              <Icon name="arrowRight" size={18} />
            </Link>
            <a href={company.phoneHref} className="btn btn--outline btn--lg">
              <Icon name="phone" size={17} />
              Talk to an Expert
            </a>
          </div>

          <p className="collab-note">
            <Icon name="clock" size={15} />
            {company.hours}
          </p>
        </div>

        <ol className="collab-steps">
          {collaborationModes.map((mode, index) => (
            <Reveal as="li" className="collab-step" key={mode.title} delay={index * 70}>
              <span className="collab-step__icon">
                <Icon name={mode.icon} size={21} />
              </span>
              <div>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Collaborate
