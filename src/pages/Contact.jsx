import { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import SEO from '../components/seo/SEO' // Import the SEO component

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

  // NOTE: document.title useEffect removed because SEO component handles it now.

  // --- 1. Define Local SEO Schema (Crucial for Maps/Business Listings) ---
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "U.S.T Enterprises",
    "image": "https://www.ustenterprises.in/assets/logo.png", // Ensure this path exists
    "telephone": "+918048970369",
    "email": "ustenterprises13@gmail.com",
    "url": "https://www.ustenterprises.in/contact/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 207, Sector 8, IMT Manesar",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.3600", // Approx coords for IMT Manesar (Update if you have exact)
      "longitude": "76.9200"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9560983082",
      "contactType": "sales"
    }
  };

  // Add input animation effects
  useEffect(() => {
    Object.keys(inputRefs).forEach(key => {
      const inputEl = inputRefs[key].current

      if (inputEl) {
        inputEl.addEventListener('focus', () => {
          anime({
            targets: inputEl,
            scale: [1, 1.01],
            boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 15px rgba(79, 70, 229, 0.2)'],
            duration: 300,
            easing: 'easeOutQuad'
          })
        })

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

  // Handle form submission with Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validateForm()
    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: 'e8db4a00-9d48-4f28-9eb5-4d0dd07f62f4',
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            message: formData.message,
            subject: 'New Contact Form Submission from U.S.T Enterprises',
            from_name: 'U.S.T Website Inquiry',
            botcheck: false
          }),
        })

        const data = await response.json()
        if (data.success) {
          setIsSubmitted(true)
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: ''
          })

          setTimeout(() => {
            setIsSubmitted(false)
          }, 5000)
        } else {
          alert('Failed to submit the form. Please try again later.')
        }
      } catch (error) {
        console.error('Form submission error:', error)
        alert('Something went wrong. Please try again later.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div>
      {/* --- 2. Inject SEO Component --- */}
      <SEO
        title="Contact U.S.T Enterprises | Get a Quote & Industrial Support"
        description="Contact U.S.T Enterprises in IMT Manesar, Gurgaon for heavy industrial equipment quotes. Call +91-8048970369 for Ribbon Blenders, Hydro Turbines, and custom manufacturing."
        keywords="Contact U.S.T Enterprises, Industrial Equipment Quote, Manufacturing Factory Gurgaon, IMT Manesar Machinery Supplier, Customer Support"
        url="/contact"
        schema={contactSchema}
      />

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

            {/* Form Column */}
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

            {/* Contact Info Column */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-8">

                  {/* Address */}
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Factory Address</h4>
                      <p className="text-gray-600">
                        Plot No. 207, Sector 8,<br />
                        IMT Manesar,<br />
                        Gurgaon, Haryana 122001, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+918048970369" className="hover:text-primary-600">+91 8048970369</a><br />
                        <a href="tel:+919560983082" className="hover:text-primary-600">+91 9560983082</a><br />
                        <a href="tel:+919871627800" className="hover:text-primary-600">+91 9871627800</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:ustenterprises13@gmail.com" className="hover:text-primary-600">ustenterprises13@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
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
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <div className="w-full h-96">
              {/* Updated to a generic IMT Manesar Embed (Since exact coordinates aren't provided in the prompt, this points to the Sector 8 area generically) */}
              <iframe
                title="U.S.T Enterprises Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14041.066498064448!2d76.9205562!3d28.3601556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d5a49448839%3A0x6c637482f7e7760!2sSector%208%2C%20IMT%20Manesar%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact