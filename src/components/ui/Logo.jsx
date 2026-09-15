import { Link } from 'react-router-dom'
import { company } from '../../data/company'
import logo from '../../assets/brand/udyama-kendra-logo.png'

/**
 * The company's own logo, used as supplied — not redrawn or recoloured.
 *
 * Imported rather than referenced as /images/... so Vite resolves and
 * fingerprints it. An absolute path only works when the site is served from a
 * domain root; under any sub-path it 404s and the browser shows a broken
 * image, which is exactly what happened in the hosted preview.
 */
function Logo({ inverse = false, to = '/' }) {
  return (
    <Link
      to={to}
      className={`logo${inverse ? ' logo--inverse' : ''}`}
      aria-label={`${company.name} — home`}
    >
      <img
        src={logo}
        alt={`${company.name} — ${company.tagline}`}
        width="250"
        height="114"
      />
    </Link>
  )
}

export default Logo
