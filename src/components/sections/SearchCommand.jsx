import { useEffect, useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../ui/Icon'
import { searchServices } from '../../data/catalogue'

/**
 * Service search.
 *
 * Replaces the previous hard-coded if/else keyword matcher that could only
 * recognise eight terms and used alert() when it failed. This searches the
 * whole catalogue, shows live suggestions and supports keyboard navigation.
 */
function SearchCommand({
  variant = 'hero',
  placeholder = 'Search services like GST, Trademark, MSME…',
  showButton = true,
  onNavigate,
}) {
  const navigate = useNavigate()
  const listId = useId()
  const wrapRef = useRef(null)

  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)

  const results = query.trim() ? searchServices(query) : []

  useEffect(() => {
    const onClickOutside = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const go = (service) => {
    setOpen(false)
    setQuery('')
    setActive(-1)
    onNavigate?.()
    navigate(`/services/${service.slug}`)
  }

  const submit = () => {
    const term = query.trim()
    if (!term) return
    if (active >= 0 && results[active]) return go(results[active])
    if (results.length === 1) return go(results[0])
    setOpen(false)
    onNavigate?.()
    navigate(`/services?q=${encodeURIComponent(term)}`)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
      setActive((i) => (results.length ? (i + 1) % results.length : -1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => (results.length ? (i <= 0 ? results.length - 1 : i - 1) : -1))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      submit()
    } else if (event.key === 'Escape') {
      setOpen(false)
      setActive(-1)
    }
  }

  const expanded = open && query.trim().length > 0

  return (
    <div className={`search${variant === 'compact' ? ' search--compact' : ''}`} ref={wrapRef}>
      <div className="search__field">
        <Icon name="search" size={variant === 'compact' ? 17 : 19} />
        <input
          type="text"
          role="combobox"
          aria-expanded={expanded}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
          aria-label="Search services"
          placeholder={placeholder}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
            setActive(-1)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
        {showButton ? (
          <button type="button" className="btn btn--ink btn--sm" onClick={submit}>
            Search
          </button>
        ) : null}
      </div>

      {expanded ? (
        <div className="search__results" id={listId} role="listbox" aria-label="Service suggestions">
          {results.length > 0 ? (
            results.map((service, index) => (
              <button
                type="button"
                key={service.slug}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={index === active}
                data-active={index === active}
                className="search__result"
                onMouseEnter={() => setActive(index)}
                onClick={() => go(service)}
              >
                <span>
                  <strong>{service.name}</strong>
                  <span>
                    {service.categoryName} · {service.groupName}
                  </span>
                </span>
                <Icon name="arrowRight" size={16} />
              </button>
            ))
          ) : (
            <p className="search__empty">
              Nothing matched “{query.trim()}”. Press Enter to browse all services.
            </p>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default SearchCommand
