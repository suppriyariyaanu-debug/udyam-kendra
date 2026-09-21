import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import MegaMenu from './MegaMenu'
import MobileDrawer from './MobileDrawer'
import { company } from '../../data/company'
import { isNavActive, navItems } from '../../lib/nav'

function Navbar() {
  const location = useLocation()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const [lastKey, setLastKey] = useState(location.key)

  // Close menus on navigation — adjusted during render, not in an effect, so
  // no cascading re-render is queued.
  if (location.key !== lastKey) {
    setLastKey(location.key)
    setServicesOpen(false)
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
      if (event.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

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
            <span className="topbar__item topbar__item--hours">
              <Icon name="clock" size={14} />
              {company.hours}
            </span>
          </div>

          <span className="topbar__item">
            <Icon name="globe" size={14} />
            <span className="topbar__locations">
              {company.locations.map((place) => (
                <span key={place}>{place}</span>
              ))}
            </span>
          </span>
        </div>
      </div>

      <header className="header" data-stuck={stuck} onMouseLeave={() => setServicesOpen(false)}>
        <div className="container header__inner">
          <Logo />

          {/* Active state is resolved from the router's location through
              lib/nav.js rather than NavLink's own matching, which could not
              light the Services trigger (a <button>, not a link) or tell the
              homepage apart from its #solutions anchor. */}
          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => {
              const active = isNavActive(item, location)

              if (item.trigger) {
                return (
                  <div className="nav__item" key={item.id}>
                    <button
                      type="button"
                      className={`nav__trigger${active ? ' is-active' : ''}`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-current={active ? 'page' : undefined}
                      onMouseEnter={() => setServicesOpen(true)}
                      onFocus={() => setServicesOpen(true)}
                      onClick={() => setServicesOpen((open) => !open)}
                    >
                      {item.label}
                      <Icon name="chevronDown" size={15} />
                    </button>
                  </div>
                )
              }

              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`nav__link${active ? ' is-active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                  onMouseEnter={() => setServicesOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="header__actions">
            <Link to="/contact" className="btn btn--primary btn--sm">
              Get Started
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

        {servicesOpen ? <MegaMenu onClose={() => setServicesOpen(false)} /> : null}
      </header>

      {drawerOpen ? <MobileDrawer onClose={() => setDrawerOpen(false)} /> : null}
    </>
  )
}

export default Navbar
