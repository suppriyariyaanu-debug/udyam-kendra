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
 *
 * `interactive={false}` renders the same mark without a link, for places that
 * are already on the page it would navigate to — the homepage hero, for one.
 * `size="lg"` is the larger homepage treatment; the header stays compact.
 */
function Logo({ inverse = false, to = '/', interactive = true, size = 'md', className = '' }) {
  const classes = `logo${size !== 'md' ? ` logo--${size}` : ''}${
    inverse ? ' logo--inverse' : ''
  }${className ? ` ${className}` : ''}`

  const image = (
    <img src={logo} alt={`${company.name} — ${company.tagline}`} width="250" height="114" />
  )

  if (!interactive) {
    return <span className={classes}>{image}</span>
  }

  return (
    <Link to={to} className={classes} aria-label={`${company.name} — home`}>
      {image}
    </Link>
  )
}

export default Logo
