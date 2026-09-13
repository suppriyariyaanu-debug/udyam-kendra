import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll.
 *
 * This deliberately does NOT use IntersectionObserver. An observer drops
 * notifications when an element crosses the whole viewport inside a single
 * frame — which is what happens when someone flicks a trackpad, drags the
 * scrollbar or presses End — leaving those sections permanently invisible.
 *
 * Instead one shared, frame-throttled listener asks a simple question of every
 * pending element: has its top edge reached the reveal line yet? Anything at or
 * above that line is revealed, so elements that were scrolled past always
 * resolve to visible, however fast the jump.
 */

const pending = new Set()
let listening = false
let frame = 0

const REVEAL_RATIO = 0.92

function sweep() {
  frame = 0
  const line = window.innerHeight * REVEAL_RATIO

  pending.forEach((entry) => {
    const rect = entry.node.getBoundingClientRect()
    // top < line covers both "entering from below" and "already scrolled past".
    if (rect.top < line) {
      entry.show()
      pending.delete(entry)
    }
  })

  if (pending.size === 0) stopListening()
}

function schedule() {
  if (frame) return
  frame = requestAnimationFrame(sweep)
}

function startListening() {
  if (listening) return
  listening = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
}

function stopListening() {
  if (!listening) return
  listening = false
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
}

function register(node, show) {
  const entry = { node, show }
  pending.add(entry)
  startListening()
  sweep()
  return () => {
    pending.delete(entry)
    if (pending.size === 0) stopListening()
  }
}

function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    return register(node, () => setVisible(true))
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
