import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import SectionHead from '../ui/SectionHead'
import { QUOTE_LABEL, getService } from '../../data/catalogue'
import { recommender } from '../../data/journeys'

/**
 * Three-step service recommender: goal, then a narrowing question, then the
 * matching services. Every recommendation resolves to a real catalogue entry.
 */
function ServiceRecommender() {
  const [goal, setGoal] = useState(null)
  const [choice, setChoice] = useState(null)

  const step = goal === null ? 1 : choice === null ? 2 : 3
  const goalData = recommender.find((item) => item.id === goal) || null
  const choiceData = goalData?.followUp.options.find((item) => item.id === choice) || null

  const results = (choiceData?.services || [])
    .map((slug) => getService(slug))
    .filter(Boolean)

  const reset = () => {
    setGoal(null)
    setChoice(null)
  }

  return (
    <section className="section section--paper" id="recommender">
      <div className="container">
        <SectionHead
          eyebrow="Not sure what you need?"
          title="Answer two questions"
          description="We will point you to the services that match, with no obligation."
          center
        />

        <div className="wizard">
          <ol className="wizard__steps" aria-label="Progress">
            {['Your goal', 'The detail', 'Your services'].map((label, index) => (
              <li
                key={label}
                className="wizard__step"
                data-state={step > index + 1 ? 'done' : step === index + 1 ? 'current' : 'todo'}
                aria-current={step === index + 1 ? 'step' : undefined}
              >
                <span className="wizard__num">
                  {step > index + 1 ? <Icon name="check" size={14} /> : index + 1}
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ol>

          <div className="wizard__body">
            {step === 1 ? (
              <>
                <h3 className="wizard__question">What are you trying to do?</h3>
                <div className="wizard__options">
                  {recommender.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="wizard__option"
                      onClick={() => setGoal(item.id)}
                    >
                      <span className="wizard__option-icon">
                        <Icon name={item.icon} size={19} />
                      </span>
                      {item.label}
                      <Icon name="arrowRight" size={16} className="wizard__option-arrow" />
                    </button>
                  ))}
                </div>
              </>
            ) : null}

            {step === 2 && goalData ? (
              <>
                <button type="button" className="wizard__back" onClick={reset}>
                  <Icon name="arrowLeft" size={15} />
                  Back
                </button>
                <h3 className="wizard__question">{goalData.followUp.question}</h3>
                <div className="wizard__options">
                  {goalData.followUp.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className="wizard__option"
                      onClick={() => setChoice(option.id)}
                    >
                      <span className="wizard__option-icon">
                        <Icon name="chevronRight" size={18} />
                      </span>
                      {option.label}
                      <Icon name="arrowRight" size={16} className="wizard__option-arrow" />
                    </button>
                  ))}
                </div>
              </>
            ) : null}

            {step === 3 ? (
              <>
                <button type="button" className="wizard__back" onClick={() => setChoice(null)}>
                  <Icon name="arrowLeft" size={15} />
                  Back
                </button>

                <h3 className="wizard__question">
                  {results.length === 1 ? 'This is where to start' : 'These are where to start'}
                </h3>

                <div className="wizard__results" role="status">
                  {results.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="wizard__result"
                    >
                      <span>
                        <strong>{service.name}</strong>
                        <span>{service.groupName}</span>
                      </span>
                      <span className={`badge ${service.price ? 'badge--price' : 'badge--quote'}`}>
                        {service.price ? `From ${service.price}` : QUOTE_LABEL}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="wizard__actions">
                  <Link to="/contact" className="btn btn--primary">
                    Talk to an Expert
                    <Icon name="arrowRight" size={16} />
                  </Link>
                  <button type="button" className="btn btn--outline" onClick={reset}>
                    Start over
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceRecommender
