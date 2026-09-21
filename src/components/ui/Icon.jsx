/**
 * Single inline-SVG icon set.
 * Replaces the emoji that previously stood in for iconography.
 */

const paths = {
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17" />
      <path d="M15 9h3a1 1 0 0 1 1 1v11" />
      <path d="M9 7h3M9 11h3M9 15h3" />
    </>
  ),
  badge: (
    <>
      <path d="M12 3l2.2 1.6 2.7-.2 1 2.5 2.3 1.4-.8 2.6.8 2.6-2.3 1.4-1 2.5-2.7-.2L12 21l-2.2-1.6-2.7.2-1-2.5-2.3-1.4.8-2.6-.8-2.6 2.3-1.4 1-2.5 2.7.2z" />
      <path d="M9.2 12.1l2 2 3.6-3.8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.2-2.8 7.9-7 9-4.2-1.1-7-4.8-7-9V6z" />
      <path d="M9.4 12.2l1.9 1.9 3.4-3.7" />
    </>
  ),
  code: (
    <>
      <path d="M8 6l-5 6 5 6" />
      <path d="M16 6l5 6-5 6" />
      <path d="M13.6 4l-3.2 16" />
    </>
  ),
  bank: (
    <>
      <path d="M3 10l9-6 9 6" />
      <path d="M5.5 10.5v8M9.8 10.5v8M14.2 10.5v8M18.5 10.5v8" />
      <path d="M3 21h18" />
    </>
  ),
  trademark: (
    <>
      <path d="M4 7h6M7 7v10" />
      <path d="M13 17V7l3.5 5L20 7v10" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.6-3.6" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M20 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </>
  ),
  check: <path d="M4 12.6l5 5L20 6.4" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.2l2.7 2.7L16 9.4" />
    </>
  ),
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chevronRight: <path d="M9 5l7 7-7 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  phone: (
    <path d="M6.6 3h3l1.5 4-2 1.5a12 12 0 0 0 5.4 5.4L16 11.9l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.6 6.6l8.4 5.9 8.4-5.9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.2 1.9" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 12h17.6" />
      <path d="M12 3a14.5 14.5 0 0 1 0 18 14.5 14.5 0 0 1 0-18z" />
    </>
  ),
  users: (
    <>
      <circle cx="9.2" cy="8.2" r="3.2" />
      <path d="M3.2 20c0-3.4 2.7-5.6 6-5.6s6 2.2 6 5.6" />
      <path d="M16.2 5.3a3.2 3.2 0 0 1 0 6" />
      <path d="M18.2 14.8c1.9.8 2.9 2.6 2.9 5.2" />
    </>
  ),
  quote: (
    <path d="M9.4 6C6.3 7.6 4.7 10.2 4.7 13.3V18h6.1v-6.1H7.6c0-1.9.8-3.3 2.5-4.2zm9.9 0c-3.1 1.6-4.7 4.2-4.7 7.3V18h6.1v-6.1h-3.2c0-1.9.8-3.3 2.5-4.2z" />
  ),
  fileText: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 8.2a2 2 0 0 1 2-2h11.5" />
      <rect x="3" y="8.2" width="18" height="11.8" rx="2" />
      <path d="M16.4 14.2h1.6" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.4" />
      <circle cx="5" cy="18" r="2.4" />
      <circle cx="19" cy="18" r="2.4" />
      <path d="M10.6 7l-4 8.8M13.4 7l4 8.8M7.4 18h9.2" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4.5v15" />
      <path d="M6 8h12" />
      <path d="M6 8l-3 6h6z" />
      <path d="M18 8l-3 6h6z" />
      <path d="M8 20h8" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12h.01" />
    </>
  ),
  zap: <path d="M13.4 3L5 13.4h5.6L9.8 21l8.4-10.4h-5.6z" />,
  handshake: (
    <>
      <path d="M10.2 13.2a4 4 0 0 0 5.6.3l2.6-2.6a4 4 0 0 0-5.6-5.6l-1.4 1.4" />
      <path d="M13.8 10.8a4 4 0 0 0-5.6-.3l-2.6 2.6a4 4 0 0 0 5.6 5.6l1.4-1.4" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7.6a4 4 0 0 1 8 0V10" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.6 20c0-3.8 3.4-6.2 7.4-6.2s7.4 2.4 7.4 6.2" />
    </>
  ),
  eye: (
    <>
      <path d="M2.6 12S6.1 5.6 12 5.6 21.4 12 21.4 12 17.9 18.4 12 18.4 2.6 12 2.6 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  eyeOff: (
    <>
      <path d="M4 4l16 16" />
      <path d="M10 5.9a9.9 9.9 0 0 1 2-.2c5.9 0 9.4 6.3 9.4 6.3a17 17 0 0 1-3.4 4.1" />
      <path d="M6.4 7.9A16.6 16.6 0 0 0 2.6 12S6.1 18.4 12 18.4c1.2 0 2.3-.2 3.3-.6" />
      <path d="M9.9 10.1a3 3 0 0 0 4.1 4.2" />
    </>
  ),
  alertCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.6v5" />
      <path d="M12 16.2h.01" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.9-5.4 2.9 1-6L3.2 9.9l6.1-.9z" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.4 13.6L7 21l5-2.7 5 2.7-1.4-7.4" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.6h18" />
    </>
  ),
  trendingUp: (
    <>
      <path d="M3 16.5l5.6-5.6 3.4 3.4L20.5 6" />
      <path d="M15.5 6h5v5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3.5 12.5L12 17l8.5-4.5" />
      <path d="M3.5 16.5L12 21l8.5-4.5" />
    </>
  ),
  message: (
    <>
      <path d="M20.5 12.2c0 4-3.8 7.2-8.5 7.2a9.8 9.8 0 0 1-2.6-.35L4.5 20.5l1.2-3.4A6.9 6.9 0 0 1 3.5 12.2C3.5 8.2 7.3 5 12 5s8.5 3.2 8.5 7.2z" />
      <path d="M8.6 12h.01M12 12h.01M15.4 12h.01" />
    </>
  ),
  send: (
    <>
      <path d="M20.5 3.5L11 13" />
      <path d="M20.5 3.5l-6.2 17-3.3-7.5-7.5-3.3z" />
    </>
  ),
  minimize: <path d="M5 12h14" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.6 8.4l-2 5.2-5.2 2 2-5.2z" />
    </>
  ),
  /* Four separate tiles — the "scattered across too many places" metaphor. */
  scatter: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.6" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M15.5 6H10a4 4 0 0 0 0 8h4a4 4 0 0 1 0 8H8.5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h2.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M20 14h-2.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1z" />
    </>
  ),
}

const filled = new Set(['quote', 'zap', 'star'])

function Icon({ name, size = 20, className = '', ...rest }) {
  const content = paths[name]
  if (!content) return null

  const isFilled = filled.has(name)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {content}
    </svg>
  )
}

export default Icon
