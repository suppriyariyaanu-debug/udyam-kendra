import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import { categories } from '../../data/catalogue'
import { company } from '../../data/company'

const popular = [
  { slug: 'company', name: 'Private Limited Company' },
  { slug: 'gst', name: 'GST Registration' },
  { slug: 'udyam', name: 'Udyam Aadhar Registration' },
  { slug: 'trademark', name: 'Trademark Registration' },
  { slug: 'itr', name: 'IT Returns Filing' },
  { slug: 'fssai', name: 'FSSAI Registration' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Logo inverse />
            <p>{company.tagline} — start, manage, protect and grow your business from one place.</p>

            <div className="footer__contact">
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
            </div>
          </div>

          <div className="footer__col">
            <h4>Categories</h4>
            <ul>
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link to={`/services/category/${category.slug}`}>{category.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/services">All Services</Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Popular</h4>
            <ul>
              {popular.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/about#team">Our Team</Link>
              </li>
              <li>
                <Link to="/about#partners">Partners</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/login">Client Login</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            Copyright ©{new Date().getFullYear()} {company.copyright}
          </p>
          <div className="footer__legal">
            <Link to="/contact">Support</Link>
            <a href={company.phoneHref}>Call us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
