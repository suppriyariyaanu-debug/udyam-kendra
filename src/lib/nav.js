/**
 * The primary navigation, described once.
 *
 * Both the desktop header and the mobile drawer read this list, so an item can
 * never be highlighted in one and not the other.
 *
 * Why this exists at all: `NavLink`'s built-in `isActive` could not express
 * what this navigation needs.
 *
 *  - "Services" is a mega-menu trigger, a <button> rather than a link, so it
 *    received no active state whatsoever — yet it is the parent of every
 *    /services route and has to stay lit while the visitor is inside one.
 *  - "Solutions" points at an in-page anchor on the homepage. `NavLink`
 *    ignores the hash when matching, so it was lit on every homepage visit and
 *    the previous code had to suppress it with `!link.to.includes('#')`,
 *    leaving it permanently unlit instead.
 *
 * Each item therefore carries its own `match(location)`. Because it reads the
 * router's location rather than tracking clicks, it resolves identically on a
 * click, a direct URL, a refresh and a navigation into a child route.
 *
 * Note that no item invents a destination: `/services` and `/about` are real
 * routes, and `#solutions` is the id rendered by the services section on the
 * homepage.
 */
export const navItems = [
  {
    id: 'home',
    label: 'Home',
    to: '/',
    // The homepage, but not when an in-page anchor has taken over.
    match: (location) => location.pathname === '/' && location.hash === '',
  },
  {
    id: 'services',
    label: 'Services',
    to: '/services',
    // A mega-menu trigger rather than a plain link.
    trigger: true,
    // Parent of every service route: stays active inside the children.
    match: (location) => location.pathname === '/services' || location.pathname.startsWith('/services/'),
  },
  {
    id: 'solutions',
    label: 'Solutions',
    to: '/#solutions',
    match: (location) => location.pathname === '/' && location.hash === '#solutions',
  },
  {
    id: 'about',
    label: 'About',
    to: '/about',
    match: (location) => location.pathname === '/about' && location.hash !== '#team',
  },
  {
    id: 'team',
    label: 'Team',
    to: '/about#team',
    match: (location) => location.pathname === '/about' && location.hash === '#team',
  },
  {
    id: 'contact',
    label: 'Contact',
    to: '/contact',
    match: (location) => location.pathname === '/contact',
  },
]

/** True when `item` is the navigation entry the current location belongs to. */
export function isNavActive(item, location) {
  return typeof item.match === 'function' ? item.match(location) : false
}
