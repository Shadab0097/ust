'use client'

import { useState } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { submitForm, EMAIL_RE, PHONE_RE } from '@/lib/forms'

const initial = { name: '', email: '', phone: '', company: '', message: '' }

export default function ContactForm() {
  const [data, setData] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [honeypot, setHoneypot] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setData((d) => ({ ...d, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: null }))
  }

  const validate = () => {
    const er = {}
    if (!data.name.trim()) er.name = 'Name is required'
    if (!data.email.trim()) er.email = 'Email is required'
    else if (!EMAIL_RE.test(data.email)) er.email = 'Please enter a valid email'
    if (data.phone && !PHONE_RE.test(data.phone)) er.phone = 'Please enter a valid phone number'
    if (!data.message.trim()) er.message = 'Message is required'
    return er
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) return
    setStatus('sending')
    try {
      const res = await submitForm({
        subject: 'New Contact Form Submission - U.S.T Enterprises website',
        fromName: 'U.S.T Website Inquiry',
        fields: data,
        honeypot,
      })
      if (res.success) {
        setStatus('sent')
        setData(initial)
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-success-50 border border-success-100 rounded-xl p-6" role="status">
        <h3 className="text-xl font-semibold text-success-700 mb-2">Message Sent!</h3>
        <p className="text-success-700">Thank you for contacting us. Our team will get back to you shortly.</p>
        <button type="button" className="mt-4 text-sm underline text-success-700" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  const field = (name) => ({
    id: name,
    name,
    value: data[name],
    onChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `input ${errors[name] ? 'border-error-500 focus:ring-error-500' : ''}`,
  })
  const Err = ({ name }) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1 text-sm text-error-500">
        {errors[name]}
      </p>
    ) : null

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {/* Honeypot (hidden from humans) */}
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} aria-hidden="true" />

      <div>
        <label htmlFor="name" className="label">Full Name*</label>
        <input type="text" autoComplete="name" required {...field('name')} />
        <Err name="name" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="label">Email Address*</label>
          <input type="email" autoComplete="email" required {...field('email')} />
          <Err name="email" />
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone</label>
          <input type="tel" autoComplete="tel" {...field('phone')} />
          <Err name="phone" />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="label">Company</label>
        <input type="text" autoComplete="organization" {...field('company')} />
      </div>
      <div>
        <label htmlFor="message" className="label">Message*</label>
        <textarea rows={6} required {...field('message')} />
        <Err name="message" />
      </div>

      {status === 'error' && (
        <p className="text-error-500 text-sm" role="alert">
          Something went wrong. Please try again, or call / WhatsApp us directly.
        </p>
      )}

      <button type="submit" className="pill-btn group inline-flex items-center gap-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white pl-7 pr-2 py-2 font-semibold transition-all duration-500 ease-spring active:scale-[0.98] disabled:opacity-60 w-full sm:w-auto justify-between" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send message'}
        <span className="pill-icon w-10 h-10 rounded-full bg-white/15 flex items-center justify-center" aria-hidden="true">
          <ArrowUpRight size={18} weight="bold" />
        </span>
      </button>
    </form>
  )
}
