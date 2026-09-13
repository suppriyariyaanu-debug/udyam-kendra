import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import SearchCommand from '../sections/SearchCommand'
import { categories } from '../../data/catalogue'
import { company } from '../../data/company'

/**
 * Touch-friendly navigation.
 * The previous navbar relied on CSS :hover dropdowns, which are unusable on a
 * touch device — this replaces them below the desktop breakpoint.
 */
function MobileDrawer({ onClose }) {
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer__head">
          <Logo />
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close menu">
            <Icon name="close" size={22} />
          </button>
        </div>

        <div className="drawer__body">
          <div className="drawer__search">
            <SearchCommand variant="compact" showButton={false} placeholder="Search services…" onNavigate={onClose} />
          </div>

          {categories.map((category) => {
            const isOpen = expanded === category.slug
            return (
              <div className="drawer__section" key={category.slug}>
                <button
                  type="button"
                  className="drawer__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : category.slug)}
                >
                  {category.name}
                  <Icon name="chevronDown" size={18} />
                </button>

                {isOpen ? (
                  <div className="drawer__panel">
                    {category.groups.map((group) => (
                      <div className="drawer__group" key={group.name}>
                        <h4>{group.name}</h4>
                        {group.services.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            onClick={onClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <Link
                      to={`/services/category/${category.slug}`}
                      className="link-arrow"
                      onClick={onClose}
                    >
                      All {category.name}
                      <Icon name="arrowRight" size={16} />
                    </Link>
                  </div>
                ) : null}
              </div>
            )
          })}

          <Link to="/services" className="drawer__link" onClick={onClose}>
            All Services
          </Link>
          <Link to="/about" className="drawer__link" onClick={onClose}>
            About Us
          </Link>
          <Link to="/contact" className="drawer__link" onClick={onClose}>
            Contact Us
          </Link>
        </div>

        <div className="drawer__foot">
          <Link to="/contact" className="btn btn--primary btn--block" onClick={onClose}>
            Talk to an Expert
          </Link>
          <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
            <Link to="/login" className="btn btn--outline" style={{ flex: 1 }} onClick={onClose}>
              Login
            </Link>
            <a href={company.phoneHref} className="btn btn--outline" style={{ flex: 1 }}>
              <Icon name="phone" size={16} />
              Call
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileDrawer
