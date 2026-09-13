import { useState } from 'react'

/**
 * Partner logo with a typeset wordmark fallback, so the partners strip reads
 * correctly before the real logo files are added to public/images/partners.
 */
function BrandMark({ src, name }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div className="brandmark">
      {showImage ? (
        <img src={src} alt={name} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <span className="brandmark__word">{name}</span>
      )}
    </div>
  )
}

export default BrandMark
