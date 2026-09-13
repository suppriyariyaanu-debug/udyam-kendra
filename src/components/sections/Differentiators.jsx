import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { differentiators, positioning } from '../../data/company'

function Differentiators() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="What Makes Us Different"
          title="Everything under one roof"
          description={positioning.differenceIntro}
          center
        />

        <div className="difference-grid">
          {differentiators.map((item, index) => (
            <Reveal className="difference" key={item.title} delay={index * 50}>
              <span className="difference__icon">
                <Icon name={item.icon} size={20} />
              </span>
              <h3>{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators
