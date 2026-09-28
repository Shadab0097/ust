'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { submitForm, EMAIL_RE, PHONE_RE } from '@/lib/forms'

const initial = {
  name: '',
  email: '',
  company: '',
  phone: '',
  productType: '',
  quantity: '',
  specifications: '',
  timeline: '',
  location: '',
  message: '',
}

export default function QuoteForm({ productNames }) {
  const [data, setData] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [honeypot, setHoneypot] = useState('')

  // Pre-select the product when arriving from a product page (/quote/?product=...)
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('product')
    if (p && productNames.includes(p)) setData((d) => ({ ...d, productType: p }))
  }, [productNames])

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
    if (!data.productType) er.productType = 'Please select a product'
    if (!data.message.trim()) er.message = 'Please add some details'
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
        subject: `New Quote Request: ${data.productType} - U.S.T Enterprises website`,
        fromName: data.name,
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
        <h3 className="text-xl font-semibold text-success-700 mb-2">Quote Request Sent!</h3>
        <p className="text-success-700">Thank you. Our team will review your requirements and contact you shortly with a detailed quote.</p>
        <button type="button" className="mt-4 text-sm underline text-success-700" onClick={() => setStatus('idle')}>
          Request another quote
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
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label">Full Name*</label>
          <input type="text" autoComplete="name" required {...field('name')} />
          <Err name="name" />
        </div>
        <div>
          <label htmlFor="email" className="label">Email Address*</label>
          <input type="email" autoComplete="email" required {...field('email')} />
          <Err name="email" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="label">Company Name</label>
          <input type="text" autoComplete="organization" {...field('company')} />
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone / WhatsApp</label>
          <input type="tel" autoComplete="tel" {...field('phone')} />
          <Err name="phone" />
        </div>
      </div>

      <div>
        <label htmlFor="productType" className="label">Product Required*</label>
        <select required {...field('productType')}>
          <option value="">Select a product</option>
          {productNames.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
          <option value="Custom / Other machine">Custom / Other machine</option>
        </select>
        <Err name="productType" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="quantity" className="label">Quantity</label>
          <input type="number" min="1" inputMode="numeric" {...field('quantity')} />
        </div>
        <div>
          <label htmlFor="timeline" className="label">Required Timeline</label>
          <input type="text" placeholder="e.g. 2 months" {...field('timeline')} />
        </div>
        <div>
          <label htmlFor="location" className="label">Delivery Location</label>
          <input type="text" placeholder="City, State" autoComplete="address-level2" {...field('location')} />
        </div>
      </div>

      <div>
        <label htmlFor="specifications" className="label">Technical Specifications</label>
        <textarea rows={3} placeholder="Capacity, material, dimensions, power supply..." {...field('specifications')} />
      </div>

      <div>
        <label htmlFor="message" className="label">Additional Details*</label>
        <textarea rows={4} required {...field('message')} />
        <Err name="message" />
      </div>

      {status === 'error' && (
        <p className="text-error-500 text-sm" role="alert">
          Something went wrong. Please try again, or call / WhatsApp us directly.
        </p>
      )}

      <button type="submit" className="pill-btn group inline-flex items-center gap-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white pl-7 pr-2 py-2 font-semibold transition-all duration-500 ease-spring active:scale-[0.98] disabled:opacity-60 w-full sm:w-auto justify-between" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending request...' : 'Request quote'}
        <span className="pill-icon w-10 h-10 rounded-full bg-white/15 flex items-center justify-center" aria-hidden="true">
          <ArrowUpRight size={18} weight="bold" />
        </span>
      </button>
    </form>
  )
}
