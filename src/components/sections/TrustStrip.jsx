import Icon from '../ui/Icon'
import { stats } from '../../data/company'

/**
 * Published business figures. See the note on `stats` in data/company.js —
 * these are the company's own numbers, not counts derived from the catalogue.
 */
function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Udyama Kendra at a glance">
      <div className="container trust-strip__inner">
        {stats.map((stat) => (
          <div className="trust-stat" key={stat.label}>
            <span className="trust-stat__icon">
              <Icon name={stat.icon} size={20} />
            </span>
            <span className="trust-stat__body">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustStrip
