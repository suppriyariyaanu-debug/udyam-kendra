import { useState } from 'react'

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

/**
 * Photograph with a monogram fallback.
 *
 * The real team photographs are not in the repository yet. Until a file exists
 * at `src`, this renders a monogram — dropping the image into public/images/team
 * is all that is needed to show the photo, with no code change.
 */
function Avatar({ src, name }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div className="avatar">
      {showImage ? (
        <img src={src} alt={name} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <span className="avatar__monogram" aria-hidden="true">
          {initials(name)}
        </span>
      )}
    </div>
  )
}

export default Avatar
