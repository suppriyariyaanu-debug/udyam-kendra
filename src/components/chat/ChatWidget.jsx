import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { CHAT_GREETING, sendChatMessage } from '../../lib/chat'
import { company } from '../../data/company'

/**
 * Site-wide chat assistant.
 *
 * Mounted once, in SiteLayout (src/App.jsx). It is deliberately NOT placed on
 * individual pages: one mount means one conversation, which survives route
 * changes, and there is no per-page copy to keep in step.
 *
 * All message handling lives in lib/chat.js. This component only renders.
 */

let messageId = 0
const nextId = () => {
  messageId += 1
  return messageId
}

const greeting = () => [
  { id: nextId(), role: 'bot', text: CHAT_GREETING.text },
]

function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(greeting)
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)

  const logRef = useRef(null)
  const inputRef = useRef(null)
  const launcherRef = useRef(null)
  // Guards against a reply from an earlier send landing after the panel has
  // been closed and reopened.
  const liveRequest = useRef(0)

  // Keep the newest message in view.
  useEffect(() => {
    const log = logRef.current
    if (open && log) log.scrollTop = log.scrollHeight
  }, [messages, typing, open])

  // Focus the input on open; return focus to the launcher on close.
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        launcherRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const ask = useCallback(async (text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const token = liveRequest.current + 1
    liveRequest.current = token

    setMessages((current) => [...current, { id: nextId(), role: 'user', text: trimmed }])
    setDraft('')
    setTyping(true)

    try {
      const reply = await sendChatMessage({ text: trimmed })
      if (liveRequest.current !== token) return
      setMessages((current) => [
        ...current,
        { id: nextId(), role: 'bot', text: reply.text, links: reply.links },
      ])
    } catch {
      if (liveRequest.current !== token) return
      setMessages((current) => [
        ...current,
        {
          id: nextId(),
          role: 'bot',
          text: `Sorry — something went wrong at my end. The team is on ${company.phone} if it is urgent.`,
        },
      ])
    } finally {
      if (liveRequest.current === token) setTyping(false)
    }
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    ask(draft)
  }

  return (
    <div className="chat">
      {open ? (
        <section className="chat__panel" aria-label={`${company.name} chat assistant`}>
          <header className="chat__head">
            <span className="chat__avatar" aria-hidden="true">
              <Icon name="message" size={18} />
            </span>

            <div className="chat__title">
              <strong>{company.name}</strong>
              <span>Typically replies during office hours</span>
            </div>

            <button
              type="button"
              className="chat__head-btn"
              onClick={() => {
                setOpen(false)
                launcherRef.current?.focus()
              }}
              aria-label="Minimise chat"
            >
              <Icon name="minimize" size={20} />
            </button>
          </header>

          <div className="chat__log" ref={logRef} role="log" aria-live="polite" aria-atomic="false">
            {messages.map((message) => (
              <div key={message.id} className={`chat__msg chat__msg--${message.role}`}>
                <p>{message.text}</p>

                {message.links?.length ? (
                  <div className="chat__links">
                    {message.links.map((link) => (
                      <Link key={link.to} to={link.to} className="chat__link">
                        {link.label}
                        <Icon name="arrowRight" size={14} />
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {typing ? (
              <div className="chat__msg chat__msg--bot chat__msg--typing">
                <span className="chat__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="visually-hidden">Assistant is typing</span>
              </div>
            ) : null}
          </div>

          {messages.length === 1 ? (
            <div className="chat__chips">
              {CHAT_GREETING.suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className="chat__chip"
                  onClick={() => ask(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          ) : null}

          <form className="chat__form" onSubmit={onSubmit}>
            <label className="visually-hidden" htmlFor="chat-input">
              Type your message
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              className="chat__input"
              type="text"
              value={draft}
              autoComplete="off"
              placeholder="Ask about a service…"
              onChange={(event) => setDraft(event.target.value)}
            />
            <button
              type="submit"
              className="chat__send"
              disabled={!draft.trim() || typing}
              aria-label="Send message"
            >
              <Icon name="send" size={18} />
            </button>
          </form>

          <p className="chat__foot">
            For anything specific to your business, call{' '}
            <a href={company.phoneHref}>{company.phone}</a>.
          </p>
        </section>
      ) : null}

      <button
        type="button"
        ref={launcherRef}
        className="chat__launcher"
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? 'close' : 'message'} size={24} />
      </button>
    </div>
  )
}

export default ChatWidget
