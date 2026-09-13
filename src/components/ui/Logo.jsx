import { Link } from 'react-router-dom'
import { company } from '../../data/company'

function Logo({ inverse = false, to = '/' }) {
  return (
    <Link
      to={to}
      className={`logo${inverse ? ' logo--inverse' : ''}`}
      aria-label={`${company.name} — home`}
    >
      <span className="logo__mark" aria-hidden="true">
        UK
      </span>
      <span className="logo__text">
        <span className="logo__name">{company.name}</span>
        <span className="logo__tag">{company.tagline}</span>
      </span>
    </Link>
  )
}

export default Logo
