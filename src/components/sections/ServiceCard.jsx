import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { QUOTE_LABEL } from '../../data/catalogue'

/**
 * A single service in a grid.
 * Price is shown only where one is published; everything else reads
 * "Request a quote" rather than carrying an assumed figure.
 */
function ServiceCard({ service, showCategory = false }) {
  const hasPrice = Boolean(service.price)

  return (
    <Link to={`/services/${service.slug}`} className="card card--link service-card">
      <div className="service-card__top">
        <span className={`badge ${hasPrice ? 'badge--price' : 'badge--quote'}`}>
          {hasPrice ? `From ${service.price}` : QUOTE_LABEL}
        </span>
      </div>

      <h3>{service.name}</h3>
      <p>{showCategory ? service.categoryName : service.groupName}</p>

      <span className="card__foot">
        <span className="link-arrow">
          View service
          <Icon name="arrowRight" size={16} />
        </span>
      </span>
    </Link>
  )
}

export default ServiceCard
