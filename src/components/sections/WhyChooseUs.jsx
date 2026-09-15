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
          eyebrow="Why Udyama Kendra"
          title="Built to be the one number you call"
          description={positioning.differenceIntro}
          center
        />

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
