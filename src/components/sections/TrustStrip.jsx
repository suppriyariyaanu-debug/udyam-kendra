import Icon from '../ui/Icon'
import { countServices } from '../../data/catalogue'
import { company, partners, team } from '../../data/company'

/**
 * Counters derived from real catalogue and company data — never invented.
 * The previous site showed these four labels but published no figures.
 */
function TrustStrip() {
  const stats = [
    {
      icon: 'layers',
      value: `${Math.floor(countServices() / 10) * 10}+`,
      label: 'Services',
    },
    { icon: 'handshake', value: String(partners.length), label: 'Partners' },
    { icon: 'users', value: String(team.length), label: 'Advisors' },
    { icon: 'globe', value: String(company.locations.length), label: 'Global Locations' },
  ]

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
