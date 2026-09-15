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
 * Team portrait.
 *
 * Every photograph is rendered into the same 4:5 frame with object-fit: cover
 * and anchored just above centre, so portraits of different dimensions crop
 * consistently and no face is cut off. Nothing is stretched.
 *
 * The monogram branch is a safety net for a missing file — with real photos in
 * place it should never render.
 */
function Avatar({ src, name }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div className="avatar">
      {showImage ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="avatar__monogram" aria-hidden="true">
          {initials(name)}
        </span>
      )}
    </div>
  )
}

export default Avatar
