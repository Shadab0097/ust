import { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    company: useRef(null),
    phone: useRef(null),
    message: useRef(null)
  }
  
  // Update page title
  useEffect(() => {
    document.title = 'Contact Us - U.S.T Enterprises'
  }, [])
  
  // Add input animation effects
  useEffect(() => {
    Object.keys(inputRefs).forEach(key => {
      const inputEl = inputRefs[key].current
      
      if (inputEl) {
        // Focus animation
        inputEl.addEventListener('focus', () => {
          anime({
            targets: inputEl,
            scale: [1, 1.01],
            boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 15px rgba(79, 70, 229, 0.2)'],
            duration: 300,
            easing: 'easeOutQuad'
          })
        })
        
        // Blur animation
        inputEl.addEventListener('blur', () => {
          anime({
            targets: inputEl,
            scale: [1.01, 1],
            boxShadow: ['0 0 15px rgba(79, 70, 229, 0.2)', '0 0 0 rgba(0,0,0,0)'],
            duration: 300,
            easing: 'easeOutQuad'
          })
        })
      }
    })
  }, [])
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }
  }
  
  // Validate form data
  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    
    return errors
  }
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const errors = validateForm()
    setFormErrors(errors)
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        })
        
        // Reset submitted state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }, 1500)
    }
  }
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-800 py-32">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/159243/keyboard-contact-us-email-help-159243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team to discuss your industrial equipment needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="We're here to answer your questions and provide the information you need"
              />
              
              {isSubmitted ? (
                <div className="bg-success-50 border border-success-100 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-success-700 mb-2">Message Sent!</h3>
                  <p className="text-success-600">
                    Thank you for contacting us. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="label">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      ref={inputRefs.name}
                      value={formData.name}
                      onChange={handleChange}
                      className={`input ${formErrors.name ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-error-500">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="label">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        ref={inputRefs.email}
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${formErrors.email ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-error-500">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="label">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        ref={inputRefs.phone}
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="label">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      ref={inputRefs.company}
                      value={formData.company}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="label">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      ref={inputRefs.message}
                      value={formData.message}
                      onChange={handleChange}
                      className={`input ${formErrors.message ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-error-500">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Industrial Area, Sector 14<br />
                        Gurgaon, Haryana 122001<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">
                        +91 98765 43210<br />
                        +91 12345 67890
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-600">
                        info@ustenterprises.com<br />
                        sales@ustenterprises.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Working Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white pb-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            {/* Embed Google Map here */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Google Map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact