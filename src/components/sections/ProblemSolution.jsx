import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { problemPoints } from '../../data/journeys'

/**
 * "What problem are we solving?"
 *
 * Each row states a difficulty business owners face, then what a single-window
 * service does about it. Deliberately free of statistics and of comparisons
 * with any named provider — neither has been supplied by the business, and
 * inventing either would misrepresent it.
 */
function ProblemSolution() {
  return (
    <section className="section problem-section" id="the-problem">
      <div className="container">
        <SectionHead
          eyebrow="The problem"
          title="What problem are we solving?"
          description="Running a business is demanding enough. The formalities around it should not be a second job."
          center
        />

        <ol className="problem-list">
          {problemPoints.map((point, index) => (
            <Reveal as="li" className="problem-item" key={point.problem} delay={index * 60}>
              <span className="problem-item__icon">
                <Icon name={point.icon} size={22} />
              </span>

              <div className="problem-item__body">
                <p className="problem-item__label">The problem</p>
                <h3>{point.problem}</h3>

                <p className="problem-item__label problem-item__label--answer">What we do</p>
                <p className="problem-item__response">{point.response}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProblemSolution
