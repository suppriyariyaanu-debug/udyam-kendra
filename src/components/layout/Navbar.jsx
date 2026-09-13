import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import MegaMenu from './MegaMenu'
import MobileDrawer from './MobileDrawer'
import { categories } from '../../data/catalogue'
import { company } from '../../data/company'

function Navbar() {
  const location = useLocation()
  const [openCategory, setOpenCategory] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const [lastPath, setLastPath] = useState(location.pathname)

  // Close every menu on navigation — adjusted during render rather than in an
  // effect, so no cascading re-render is queued.
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname)
    setOpenCategory(null)
    setDrawerOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenCategory(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const active = categories.find((category) => category.slug === openCategory) || null

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__group">
            <a className="topbar__item" href={company.phoneHref}>
              <Icon name="phone" size={14} />
              {company.phone}
            </a>
            <a className="topbar__item" href={company.emailHref}>
              <Icon name="mail" size={14} />
              {company.email}
            </a>
            <span className="topbar__item">
              <Icon name="clock" size={14} />
              {company.hours}
            </span>
          </div>

          <div className="topbar__group">
            <span className="topbar__item">
              <Icon name="globe" size={14} />
              <span className="topbar__locations">
                {company.locations.map((place) => (
                  <span key={place}>{place}</span>
                ))}
              </span>
            </span>
            <Link className="topbar__item" to="/about">
              About
            </Link>
            <Link className="topbar__item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <header
        className="header"
        data-stuck={stuck}
        onMouseLeave={() => setOpenCategory(null)}
      >
        <div className="container header__inner">
          <Logo />

          <nav className="nav" aria-label="Primary">
            {categories.map((category) => (
              <div className="nav__item" key={category.slug}>
                <button
                  type="button"
                  className="nav__trigger"
                  aria-expanded={openCategory === category.slug}
                  aria-haspopup="true"
                  onMouseEnter={() => setOpenCategory(category.slug)}
                  onFocus={() => setOpenCategory(category.slug)}
                  onClick={() =>
                    setOpenCategory((current) =>
                      current === category.slug ? null : category.slug,
                    )
                  }
                >
                  {category.name}
                  <Icon name="chevronDown" size={15} />
                </button>
              </div>
            ))}

            <NavLink
              to="/services"
              end
              className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
              onMouseEnter={() => setOpenCategory(null)}
            >
              All Services
            </NavLink>
          </nav>

          <div className="header__actions">
            <Link to="/login" className="btn btn--outline btn--sm">
              <Icon name="user" size={16} />
              Login
            </Link>
            <Link to="/contact" className="btn btn--primary btn--sm">
              Talk to an Expert
            </Link>
            <button
              type="button"
              className="icon-btn header__burger"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>

        {active ? <MegaMenu category={active} onClose={() => setOpenCategory(null)} /> : null}
      </header>

      {drawerOpen ? <MobileDrawer onClose={() => setDrawerOpen(false)} /> : null}
    </>
  )
}

export default Navbar
