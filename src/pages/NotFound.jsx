import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import { categories } from '../data/catalogue'

function NotFound() {
  return (
    <section className="section notfound">
      <div className="container-narrow notfound__inner">
        <span className="notfound__code">404</span>
        <h1>We couldn’t find that page</h1>
        <p>
          The link may be out of date, or the service may be listed under a different name.
          Try browsing by category instead.
        </p>

        <div className="notfound__actions">
          <Link to="/services" className="btn btn--primary btn--lg">
            Browse all services
            <Icon name="arrowRight" size={18} />
          </Link>
          <Link to="/" className="btn btn--outline btn--lg">
            Back to home
          </Link>
        </div>

        <div className="notfound__cats">
          {categories.map((category) => (
            <Link key={category.slug} to={`/services/category/${category.slug}`} className="chip">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NotFound
