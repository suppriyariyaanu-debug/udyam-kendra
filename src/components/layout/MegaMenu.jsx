import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'

function MegaMenu({ category, onClose }) {
  return (
    <div className="mega" role="region" aria-label={`${category.name} services`}>
      <div className="container mega__inner">
        <div className="mega__aside">
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <Link
            to={`/services/category/${category.slug}`}
            className="link-arrow"
            onClick={onClose}
          >
            View all {category.name.toLowerCase()}
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>

        <div className="mega__groups">
          {category.groups.map((group) => (
            <div className="mega__group" key={group.name}>
              <h4>{group.name}</h4>
              <ul>
                {group.services.map((service) => (
                  <li key={service.slug}>
                    <Link to={`/services/${service.slug}`} onClick={onClose}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MegaMenu
