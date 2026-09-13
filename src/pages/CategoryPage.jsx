import { Link, useParams } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import ServiceCard from '../components/sections/ServiceCard'
import CtaBand from '../components/sections/CtaBand'
import NotFound from './NotFound'
import { categories, getCategory } from '../data/catalogue'

function CategoryPage() {
  const { categorySlug } = useParams()
  const category = getCategory(categorySlug)

  if (!category) return <NotFound />

  const count = category.groups.reduce((sum, group) => sum + group.services.length, 0)
  const others = categories.filter((item) => item.slug !== category.slug)

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevronRight" size={13} />
            <Link to="/services">Services</Link>
            <Icon name="chevronRight" size={13} />
            <span aria-current="page">{category.name}</span>
          </nav>

          <p className="eyebrow">{category.tagline}</p>
          <h1>{category.name}</h1>
          <p className="page-hero__lede">{category.description}</p>

          <div className="page-hero__meta">
            <span className="badge">{count} services</span>
            <span className="badge">{category.groups.length} groups</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {category.groups.map((group) => (
            <div className="service-group" key={group.name}>
              <h2 className="service-group__title">{group.name}</h2>
              <div className="service-grid">
                {group.services.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    service={{
                      ...service,
                      categoryName: category.name,
                      groupName: group.name,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--paper section--tight">
        <div className="container">
          <h2 className="related-title">Other categories</h2>
          <div className="related-grid">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={`/services/category/${item.slug}`}
                className="related-card"
              >
                <span className="related-card__icon">
                  <Icon name={item.icon} size={19} />
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <span>{item.tagline}</span>
                </span>
                <Icon name="arrowRight" size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export default CategoryPage
