import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { benefits } from '../../data/journeys'
import { positioning } from '../../data/company'

function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <SectionHead
          eyebrow="Why us"
          title="Why choose Udyama Kendra?"
          description={positioning.differenceIntro}
          center
        />

        {/* Each benefit is one entry in `benefits` (src/data/journeys.js).
            The list is data-driven so the client can add, reword or reorder
            points — including verified differences, once supplied — by editing
            that array alone. Nothing here compares Udyama Kendra to a named
            competitor, because no such comparison has been provided. */}
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <Reveal className="benefit" key={benefit.title} delay={index * 55}>
              <span className="benefit__icon">
                <Icon name={benefit.icon} size={21} />
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
