import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import Logo from '../components/ui/Logo'
import { company } from '../data/company'

const benefits = [
  'Track every application in one place',
  'Upload documents once, reuse them',
  'See what is due and when',
  'Message your advisor directly',
]

/**
 * Client login.
 *
 * This file previously contained a duplicate of ServicePage — the route existed
 * but rendered a service page. This is the real login screen, built against the
 * login styles that were already written for it.
 *
 * There is no authentication backend in this project, so the form validates
 * locally and then says so plainly rather than pretending to sign anyone in.
 */
function Login() {
  const baseId = useId()
  const [values, setValues] = useState({ identifier: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const change = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = {}

    if (!values.identifier.trim()) {
      found.identifier = 'Enter your email address or mobile number.'
    }
    if (!values.password) {
      found.password = 'Enter your password.'
    } else if (values.password.length < 6) {
      found.password = 'Passwords are at least 6 characters.'
    }

    setErrors(found)
    if (Object.keys(found).length > 0) {
      document.getElementById(`${baseId}-${Object.keys(found)[0]}`)?.focus()
      return
    }

    setSubmitted(true)
  }

  return (
    <div className="login-page">
      <div className="login-aside">
        <div className="login-aside__inner">
          <Logo inverse />

          <div>
            <h1>Your business, tracked in one place.</h1>
            <p>
              The client area brings your registrations, filings and documents together so
              nothing slips between deadlines.
            </p>
          </div>

          <ul className="login-benefits">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <Icon name="checkCircle" size={17} />
                {benefit}
              </li>
            ))}
          </ul>

          <p className="login-aside__contact">
            <Icon name="phone" size={15} />
            Need help? {company.phone}
          </p>
        </div>
      </div>

      <div className="login-main">
        <div className="login-card">
          <Link to="/" className="login-back">
            <Icon name="arrowLeft" size={16} />
            Back to site
          </Link>

          <h2>Client login</h2>
          <p className="login-subtitle">Sign in to view your services and documents.</p>

          {submitted ? (
            <div className="login-notice" role="status">
              <span className="login-notice__icon">
                <Icon name="alertCircle" size={20} />
              </span>
              <div>
                <strong>Sign-in is not connected yet</strong>
                <p>
                  The client area is still being set up, so there is nothing to sign in to
                  right now. Our team can help you directly in the meantime.
                </p>
                <div className="login-notice__actions">
                  <Link to="/contact" className="btn btn--primary btn--sm">
                    Contact the team
                  </Link>
                  <button
                    type="button"
                    className="btn btn--outline btn--sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Back to form
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="login-form">
              <div className={`field${errors.identifier ? ' field--invalid' : ''}`}>
                <label htmlFor={`${baseId}-identifier`}>Email or mobile</label>
                <input
                  id={`${baseId}-identifier`}
                  name="identifier"
                  type="text"
                  className="input"
                  autoComplete="username"
                  placeholder="you@company.com"
                  value={values.identifier}
                  onChange={change}
                  aria-invalid={errors.identifier ? 'true' : undefined}
                  aria-describedby={errors.identifier ? `${baseId}-identifier-error` : undefined}
                />
                {errors.identifier ? (
                  <p className="field__error" id={`${baseId}-identifier-error`}>
                    <Icon name="alertCircle" size={15} />
                    {errors.identifier}
                  </p>
                ) : null}
              </div>

              <div className={`field${errors.password ? ' field--invalid' : ''}`}>
                <label htmlFor={`${baseId}-password`}>Password</label>
                <div className="input-group">
                  <input
                    id={`${baseId}-password`}
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    className="input"
                    autoComplete="current-password"
                    placeholder="Your password"
                    value={values.password}
                    onChange={change}
                    aria-invalid={errors.password ? 'true' : undefined}
                    aria-describedby={errors.password ? `${baseId}-password-error` : undefined}
                  />
                  <button
                    type="button"
                    className="input-group__action"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <Icon name={showPassword ? 'eyeOff' : 'eye'} size={18} />
                  </button>
                </div>
                {errors.password ? (
                  <p className="field__error" id={`${baseId}-password-error`}>
                    <Icon name="alertCircle" size={15} />
                    {errors.password}
                  </p>
                ) : null}
              </div>

              <div className="login-options">
                <label className="checkbox">
                  <input type="checkbox" />
                  Keep me signed in
                </label>
                <Link to="/contact" className="login-forgot">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="btn btn--primary btn--block btn--lg">
                Sign in
                <Icon name="arrowRight" size={18} />
              </button>

              <p className="login-register">
                Don’t have an account yet? <Link to="/contact">Talk to our team</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
