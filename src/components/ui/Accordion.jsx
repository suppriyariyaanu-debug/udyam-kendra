import { useId, useState } from 'react'
import Icon from './Icon'

/**
 * Keyboard- and screen-reader-accessible accordion.
 * Replaces the previous open/closed markup that had no aria wiring.
 */
function Accordion({ items, allowMultiple = false }) {
  const baseId = useId()
  const [open, setOpen] = useState(() => new Set())

  const toggle = (index) => {
    setOpen((current) => {
      const next = new Set(allowMultiple ? current : [])
      if (current.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = open.has(index)
        const triggerId = `${baseId}-trigger-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <div className="accordion__item" key={item.question} data-open={isOpen}>
            <h3>
              <button
                type="button"
                id={triggerId}
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span className="accordion__sign" aria-hidden="true">
                  <Icon name="chevronDown" size={16} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="accordion__panel"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
