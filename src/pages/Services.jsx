import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import ServiceCard from '../components/sections/ServiceCard'
import CtaBand from '../components/sections/CtaBand'
import { allServices, categories } from '../data/catalogue'

function Services() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''

  const [query, setQuery] = useState(initialQuery)
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()

    return allServices.filter((service) => {
      const inCategory =
        activeCategory === 'all' || service.categorySlug === activeCategory
      if (!inCategory) return false
      if (!term) return true

      return `${service.name} ${service.groupName} ${service.categoryName}`
        .toLowerCase()
        .includes(term)
    })
  }, [query, activeCategory])

  const grouped = useMemo(() => {
    const map = new Map()
    filtered.forEach((service) => {
      const key = `${service.categoryName} — ${service.groupName}`
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(service)
    })
    return [...map.entries()]
  }, [filtered])

  const updateQuery = (value) => {
    setQuery(value)
    const next = new URLSearchParams(searchParams)
    if (value.trim()) next.set('q', value.trim())
    else next.delete('q')
    setSearchParams(next, { replace: true })
  }

  const selectCategory = (slug) => {
    setActiveCategory(slug)
    const next = new URLSearchParams(searchParams)
    if (slug === 'all') next.delete('category')
    else next.set('category', slug)
    setSearchParams(next, { replace: true })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevronRight" size={13} />
            <span aria-current="page">All Services</span>
          </nav>

          <p className="eyebrow">Our Services</p>
          <h1>
            Business services,
            <span> made simple</span>
          </h1>
          <p className="page-hero__lede">
            Every service Udyama Kendra offers — {allServices.length} of them across{' '}
            {categories.length} categories. Search, filter, and start where you need to.
          </p>
        </div>
      </section>

      <div className="filter-bar">
        <div className="container filter-bar__inner">
          <div className="filter-bar__search">
            <Icon name="search" size={18} />
            <input
              type="search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Filter services by name…"
              aria-label="Filter services"
            />
            {query ? (
              <button type="button" onClick={() => updateQuery('')} aria-label="Clear filter">
                <Icon name="close" size={16} />
              </button>
            ) : null}
          </div>

          <div className="filter-bar__chips" role="group" aria-label="Filter by category">
            <button
              type="button"
              className="chip"
              aria-pressed={activeCategory === 'all'}
              onClick={() => selectCategory('all')}
            >
              All
              <span className="chip__count">{allServices.length}</span>
            </button>

            {categories.map((category) => {
              const count = category.groups.reduce(
                (sum, group) => sum + group.services.length,
                0,
              )
              return (
                <button
                  type="button"
                  key={category.slug}
                  className="chip"
                  aria-pressed={activeCategory === category.slug}
                  onClick={() => selectCategory(category.slug)}
                >
                  {category.name}
                  <span className="chip__count">{count}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="result-count" role="status">
            {filtered.length} {filtered.length === 1 ? 'service' : 'services'}
            {query.trim() ? ` matching “${query.trim()}”` : ''}
          </p>

          {grouped.length === 0 ? (
            <div className="empty-state">
              <span className="empty-state__icon">
                <Icon name="search" size={26} />
              </span>
              <h2>No services matched</h2>
              <p>
                Try a broader term, or clear the filters to see everything we offer.
              </p>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => {
                  updateQuery('')
                  selectCategory('all')
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            grouped.map(([label, services]) => (
              <div className="service-group" key={label}>
                <h2 className="service-group__title">{label}</h2>
                <div className="service-grid">
                  {services.map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        description="Tell us about your business and our team will point you to the right one."
      />
    </>
  )
}

export default Services
