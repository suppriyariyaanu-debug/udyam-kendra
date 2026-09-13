import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { testimonials } from '../../data/company'

function Testimonials() {
  return (
    <section className="section section--ink" id="clients">
      <div className="container">
        <SectionHead
          eyebrow="Client Stories"
          title="What our clients say"
          description="Businesses we have helped start, register and stay compliant."
          center
        />

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal className="testimonial" key={item.name} delay={index * 90}>
              <span className="testimonial__quote" aria-hidden="true">
                <Icon name="quote" size={26} />
              </span>
              <blockquote>{item.quote}</blockquote>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
