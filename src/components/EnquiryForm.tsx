import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { wa } from '../lib/site'
import { WhatsAppIcon } from './ui'

type Interest = 'ladies' | 'mixed' | ''

interface FormState {
  name: string
  phone: string
  interest: Interest
  message: string
}

type Errors = Partial<Record<'name' | 'phone' | 'interest', string>>

const EMPTY_FORM: FormState = { name: '', phone: '', interest: '', message: '' }

export default function EnquiryForm() {
  const { t } = useLanguage()
  const f = t.contact.form
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [whatsappHref, setWhatsappHref] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validate = (values: FormState): Errors => {
    const next: Errors = {}
    if (values.name.trim().length < 2) next.name = f.errorName
    const digits = values.phone.replace(/\D/g, '')
    if (!values.phone.trim()) next.phone = f.errorPhone
    else if (!/^[+()\d][\d\s()-]{6,}$/.test(values.phone.trim()) || digits.length < 7) {
      next.phone = f.errorPhoneInvalid
    }
    if (!values.interest) next.interest = f.errorInterest
    return next
  }

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    const next = { ...form, [key]: value }
    setForm(next)
    if (touched[key] || errors[key as keyof Errors]) {
      setErrors(validate(next))
    }
  }

  const blur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    setTouched({ name: true, phone: true, interest: true })

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      const id = `enquiry-${firstError === 'interest' ? 'ladies' : firstError}`
      ;(document.getElementById(id) as HTMLElement | null)?.focus()
      return
    }

    const interestLabel =
      form.interest === 'ladies' ? f.interestLadies : f.interestMixed

    const lines = [
      t.whatsappMessages.general,
      '',
      `${f.name}: ${form.name.trim()}`,
      `${f.phone}: ${form.phone.trim()}`,
      `${f.interest}: ${interestLabel}`,
    ]

    if (form.message.trim()) lines.push(`${f.message}: ${form.message.trim()}`)

    const href = wa(lines.join('\n'))
    setWhatsappHref(href)
    setSubmitted(true)
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  const reset = () => {
    setForm(EMPTY_FORM)
    setErrors({})
    setTouched({})
    setSubmitted(false)
    setWhatsappHref('')
  }

  return (
    <div className="enquiry-card">
      <div className="enquiry-card__head">
        <h3 className="enquiry-card__title">{f.title}</h3>
        <p className="enquiry-card__subtitle">{f.subtitle}</p>
      </div>

      {submitted ? (
        <div className="form-success" role="status" aria-live="polite">
          <span className="form-success__icon" aria-hidden="true">
            <CheckCircle2 size={26} strokeWidth={1.7} />
          </span>
          <h3>{f.successTitle}</h3>
          <p>{f.successText}</p>
          <div className="form-success__actions">
            <a
              className="btn"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              {t.actions.retry}
            </a>
            <button type="button" className="btn btn--ghost" onClick={reset}>
              {f.sendAnother}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className={`field ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="enquiry-name">
                {f.name} <span className="req" aria-hidden="true">*</span>
              </label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={f.namePlaceholder}
                value={form.name}
                onChange={(event) => update('name', event.target.value)}
                onBlur={() => blur('name')}
                aria-required="true"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
              />
              {errors.name ? (
                <span className="field__error" id="enquiry-name-error" role="alert">
                  {errors.name}
                </span>
              ) : null}
            </div>

            <div className={`field ${errors.phone ? 'has-error' : ''}`}>
              <label htmlFor="enquiry-phone">
                {f.phone} <span className="req" aria-hidden="true">*</span>
              </label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                dir="ltr"
                placeholder={f.phonePlaceholder}
                value={form.phone}
                onChange={(event) => update('phone', event.target.value)}
                onBlur={() => blur('phone')}
                aria-required="true"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
              />
              {errors.phone ? (
                <span className="field__error" id="enquiry-phone-error" role="alert">
                  {errors.phone}
                </span>
              ) : null}
            </div>

            <fieldset className="fieldset">
              <legend className="fieldset__legend">
                {f.interest} <span className="req" aria-hidden="true">*</span>
              </legend>
              <div className="fieldset__options">
                <label className={`radio-card ${form.interest === 'ladies' ? 'is-checked' : ''}`}>
                  <input
                    id="enquiry-ladies"
                    type="radio"
                    name="interest"
                    value="ladies"
                    checked={form.interest === 'ladies'}
                    onChange={() => update('interest', 'ladies')}
                    onBlur={() => blur('interest')}
                  />
                  <span className="radio-card__dot" aria-hidden="true" />
                  {f.interestLadies}
                </label>

                <label className={`radio-card ${form.interest === 'mixed' ? 'is-checked' : ''}`}>
                  <input
                    id="enquiry-mixed"
                    type="radio"
                    name="interest"
                    value="mixed"
                    checked={form.interest === 'mixed'}
                    onChange={() => update('interest', 'mixed')}
                    onBlur={() => blur('interest')}
                  />
                  <span className="radio-card__dot" aria-hidden="true" />
                  {f.interestMixed}
                </label>
              </div>
              {errors.interest ? (
                <span className="field__error" role="alert" style={{ marginBlockStart: 8 }}>
                  {errors.interest}
                </span>
              ) : null}
            </fieldset>

            <div className="field field--full">
              <label htmlFor="enquiry-message">{f.message}</label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={3}
                placeholder={f.messagePlaceholder}
                value={form.message}
                onChange={(event) => update('message', event.target.value)}
              />
            </div>
          </div>

          <div className="form-foot">
            <button type="submit" className="btn btn--block">
              <Send size={16} aria-hidden="true" />
              {f.send}
            </button>
            <p className="form-note">
              <WhatsAppIcon size={13} />
              {f.privacy}
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
