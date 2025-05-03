import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import anime from 'animejs'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'

function RotatingGear() {
  const meshRef = useRef()
  
  useEffect(() => {
    if (meshRef.current) {
      anime({
        targets: meshRef.current.rotation,
        y: Math.PI * 2,
        duration: 10000,
        easing: 'linear',
        loop: true
      })
    }
  }, [])
  
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[2, 2, 0.5, 32]} />
      <meshStandardMaterial color="#486581" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    quantity: '',
    specifications: '',
    timeline: '',
    message: ''
  })
  
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  useEffect(() => {
    document.title = 'Get Quote - U.S.T Enterprises'
  }, [])
  
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
  
  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.email.trim()) errors.email = 'Email is required'
    if (!formData.productType.trim()) errors.productType = 'Product type is required'
    if (!formData.message.trim()) errors.message = 'Message is required'
    
    return errors
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const errors = validateForm()
    setFormErrors(errors)
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)
      
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          productType: '',
          quantity: '',
          specifications: '',
          timeline: '',
          message: ''
        })
        
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }, 1500)
    }
  }
  
  return (
    <div>
      <div className="relative bg-primary-800 py-32">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Request a Quote</h1>
            <p className="text-xl text-gray-200">
              Tell us about your project requirements and we'll provide a detailed quote.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Get Your Custom Quote"
                subtitle="Fill out the form below and we'll get back to you with pricing and timeline details"
              />
              
              {isSubmitted ? (
                <div className="bg-success-50 border border-success-100 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-success-700 mb-2">Quote Request Sent!</h3>
                  <p className="text-success-600">
                    Thank you for your interest. Our team will review your requirements and contact you shortly with a detailed quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input ${formErrors.name ? 'border-error-500' : ''}`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-error-500">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="label">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${formErrors.email ? 'border-error-500' : ''}`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-error-500">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="label">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="productType" className="label">Product Type*</label>
                    <select
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className={`input ${formErrors.productType ? 'border-error-500' : ''}`}
                    >
                      <option value="">Select a product type</option>
                      <option value="handling-trolley">Handling Trolley</option>
                      <option value="industrial-hood">Industrial Hood</option>
                      <option value="hopper-machine">Hopper Machine</option>
                      <option value="storage-trolley">Storage Trolley</option>
                      <option value="jib-crane">JIB Crane</option>
                      <option value="custom">Custom Product</option>
                    </select>
                    {formErrors.productType && (
                      <p className="mt-1 text-sm text-error-500">{formErrors.productType}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="label">Quantity Required</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="input"
                        min="1"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="label">Required Timeline</label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g., 2 months"
                        className="input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="specifications" className="label">Technical Specifications</label>
                    <textarea
                      id="specifications"
                      name="specifications"
                      rows="3"
                      value={formData.specifications}
                      onChange={handleChange}
                      placeholder="Enter any specific requirements or dimensions"
                      className="input"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="label">Additional Details*</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`input ${formErrors.message ? 'border-error-500' : ''}`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-error-500">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Request...' : 'Request Quote'}
                  </Button>
                </form>
              )}
            </div>
            
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="h-96 bg-gray-50 rounded-2xl overflow-hidden">
                  <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <RotatingGear />
                    <OrbitControls enableZoom={false} />
                    <Environment preset="city" />
                  </Canvas>
                </div>
                
                <div className="mt-8 bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose U.S.T Enterprises?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>50+ years of manufacturing excellence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Custom specifications available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>High-quality raw materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>On-time delivery guaranteed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quote