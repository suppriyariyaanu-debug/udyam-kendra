import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { processSteps5 } from '../../data/journeys'

/**
 * Five-step process. Horizontal timeline on desktop, vertical on mobile —
 * one ordered list, switched by CSS rather than duplicated markup.
 */
function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <SectionHead
          eyebrow="How It Works"
          title="Five steps, start to certificate"
          description="The same process whichever service you choose."
          center
        />

        <ol className="timeline">
          {processSteps5.map((item, index) => (
            <Reveal as="li" className="timeline__item" key={item.step} delay={index * 70}>
              <span className="timeline__marker" aria-hidden="true">
                {item.step}
              </span>
              <div className="timeline__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
