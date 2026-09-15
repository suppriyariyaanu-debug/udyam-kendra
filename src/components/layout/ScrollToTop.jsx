import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll management on navigation.
 *
 * A route change goes to the top; a link carrying a #hash scrolls to that
 * section instead — which is what makes header links like /#solutions work
 * from any other page.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // The target may mount a frame after the route does.
      const id = hash.slice(1)
      const scroll = () => {
        const target = document.getElementById(id)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      const frame = requestAnimationFrame(scroll)
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [pathname, hash])

  return null
}

export default ScrollToTop
