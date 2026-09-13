import { useId, useState } from 'react'
import Icon from '../ui/Icon'
import { company } from '../../data/company'
import { submitLead } from '../../lib/leads'

const EMPTY = {
  name: '',
  mobile: '',
  email: '',
  businessName: '',
  location: '',
  requirement: '',
}

function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }

  const digits = values.mobile.replace(/\D/g, '')
  if (!digits) errors.mobile = 'Please enter a mobile number.'
  else if (digits.length < 10) errors.mobile = 'Enter a 10-digit mobile number.'

  if (!values.email.trim()) errors.email = 'Please enter an email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'That email address does not look right.'
  }

  if (!values.location.trim()) errors.location = 'Please tell us your city.'

  return errors
}

/**
 * Lead capture form.
 * Replaces the previous handler, which fired an alert() and cleared itself
 * without validating anything.
 */
function EnquiryForm({ serviceName, compact = false }) {
  const baseId = useId()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | done | error

  const change = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }))
    }
  }

  const blur = (event) => {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({
      name: true,
      mobile: true,
      email: true,
      location: true,
    })

    if (Object.keys(found).length > 0) {
      const firstInvalid = document.getElementById(`${baseId}-${Object.keys(found)[0]}`)
      firstInvalid?.focus()
      return
    }

    setStatus('submitting')
    try {
      await submitLead({ ...values, service: serviceName || 'General enquiry' })
      setStatus('done')
      setValues(EMPTY)
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="form-success" role="status">
        <span className="form-success__mark">
          <Icon name="check" size={26} />
        </span>
        <h3>Enquiry received</h3>
        <p>
          Thank you. Our team will get in touch about
          {serviceName ? ` ${serviceName}` : ' your requirement'} during business hours.
        </p>
        <button type="button" className="btn btn--outline btn--sm" onClick={() => setStatus('idle')}>
          Send another enquiry
        </button>
      </div>
    )
  }

  const field = (name, label, props = {}) => {
    const invalid = touched[name] && errors[name]
    return (
      <div className={`field${invalid ? ' field--invalid' : ''}`}>
        <label htmlFor={`${baseId}-${name}`}>
          {label}
          {props.required ? <span className="field__req" aria-hidden="true"> *</span> : null}
        </label>
        {props.multiline ? (
          <textarea
            id={`${baseId}-${name}`}
            name={name}
            className="textarea"
            value={values[name]}
            onChange={change}
            onBlur={blur}
            placeholder={props.placeholder}
            rows={4}
          />
        ) : (
          <input
            id={`${baseId}-${name}`}
            name={name}
            type={props.type || 'text'}
            inputMode={props.inputMode}
            autoComplete={props.autoComplete}
            className="input"
            value={values[name]}
            onChange={change}
            onBlur={blur}
            placeholder={props.placeholder}
            aria-invalid={invalid ? 'true' : undefined}
            aria-describedby={invalid ? `${baseId}-${name}-error` : undefined}
          />
        )}
        {invalid ? (
          <p className="field__error" id={`${baseId}-${name}-error`}>
            <Icon name="alertCircle" size={15} />
            {errors[name]}
          </p>
        ) : null}
      </div>
    )
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className={`enquiry-form__grid${compact ? ' enquiry-form__grid--one' : ''}`}>
        {field('name', 'Full name', {
          required: true,
          placeholder: 'Your name',
          autoComplete: 'name',
        })}
        {field('mobile', 'Mobile number', {
          required: true,
          type: 'tel',
          inputMode: 'tel',
          placeholder: '10-digit mobile',
          autoComplete: 'tel',
        })}
        {field('email', 'Email address', {
          required: true,
          type: 'email',
          inputMode: 'email',
          placeholder: 'you@company.com',
          autoComplete: 'email',
        })}
        {field('location', 'City', {
          required: true,
          placeholder: 'City or location',
          autoComplete: 'address-level2',
        })}
        {field('businessName', 'Business name', {
          placeholder: 'Optional',
          autoComplete: 'organization',
        })}
      </div>

      {field('requirement', 'What do you need help with?', {
        multiline: true,
        placeholder: serviceName
          ? `Tell us about your ${serviceName} requirement`
          : 'Tell us about your requirement',
      })}

      {status === 'error' ? (
        <p className="field__error" role="alert">
          <Icon name="alertCircle" size={15} />
          Something went wrong. Please call {company.phone} instead.
        </p>
      ) : null}

      <button
        type="submit"
        className="btn btn--primary btn--block btn--lg"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Submit enquiry'}
        {status === 'submitting' ? null : <Icon name="arrowRight" size={18} />}
      </button>

      <p className="form-note">
        <Icon name="lock" size={14} />
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  )
}

export default EnquiryForm
