import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { categories, getService } from '../../data/catalogue'

const popular = ['company', 'gst', 'udyam', 'trademark', 'itr', 'fssai']

/**
 * One Services menu covering all five categories.
 *
 * It lists the nineteen service groups rather than all hundred-odd services —
 * a menu that long is a wall, not navigation. Each group heads to its category
 * page, with the most-asked-for services pulled out along the bottom.
 */
function MegaMenu({ onClose }) {
  return (
    <div className="mega" role="region" aria-label="Services menu">
      <div className="container mega__inner">
        <div className="mega__groups">
          {categories.map((category) => (
            <div className="mega__col" key={category.slug}>
              <Link
                to={`/services/category/${category.slug}`}
                className="mega__col-head"
                onClick={onClose}
              >
                <span className="mega__col-icon">
                  <Icon name={category.icon} size={17} />
                </span>
                <span>
                  <strong>{category.name}</strong>
                  <span>{category.tagline}</span>
                </span>
              </Link>

              <ul>
                {category.groups.map((group) => (
                  <li key={group.name}>
                    <Link to={`/services/category/${category.slug}`} onClick={onClose}>
                      {group.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mega__foot">
          <span className="mega__foot-label">Popular</span>
          <div className="mega__chips">
            {popular.map((slug) => {
              const service = getService(slug)
              if (!service) return null
              return (
                <Link key={slug} to={`/services/${slug}`} onClick={onClose} className="chip">
                  {service.name}
                </Link>
              )
            })}
          </div>
          <Link to="/services" className="link-arrow" onClick={onClose}>
            All services
            <Icon name="arrowRight" size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MegaMenu
