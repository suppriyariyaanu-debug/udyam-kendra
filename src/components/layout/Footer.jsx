import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import { getService } from '../../data/catalogue'
import { journeys } from '../../data/journeys'
import { company } from '../../data/company'

/**
 * Footer organised by the four business journeys, so it works as navigation
 * rather than a list of links nobody reads.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Logo inverse />
            <p>
              {company.tagline} — start, manage, protect and grow your business from one
              place.
            </p>

            <address className="footer__contact">
              <a href={company.phoneHref}>
                <Icon name="phone" size={16} />
                {company.phone}
              </a>
              <a href={company.emailHref}>
                <Icon name="mail" size={16} />
                {company.email}
              </a>
              <span>
                <Icon name="clock" size={16} />
                {company.hours}
              </span>
              <span>
                <Icon name="globe" size={16} />
                {company.locations.join(' · ')}
              </span>
            </address>
          </div>

          {journeys.map((journey) => (
            <div className="footer__col" key={journey.id}>
              <h4>{journey.title}</h4>
              <ul>
                {journey.services.slice(0, 5).map((slug) => {
                  const service = getService(slug)
                  if (!service) return null
                  return (
                    <li key={slug}>
                      <Link to={`/services/${slug}`}>{service.name}</Link>
                    </li>
                  )
                })}
                <li>
                  <Link to={`/services/category/${journey.categorySlug}`}>
                    All {journey.label.toLowerCase()} services
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__links">
          <Link to="/services">All Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/about#team">Our Team</Link>
          <Link to="/about#partners">Partners</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Client Login</Link>
        </div>

        <div className="footer__bottom">
          <p>
            Copyright ©{new Date().getFullYear()} {company.copyright}
          </p>
          <p className="footer__locations">{company.locations.join(' · ')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
