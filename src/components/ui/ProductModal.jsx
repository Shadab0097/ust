import { useEffect, useRef } from 'react'
import anime from 'animejs'
import Button from './Button'
import ProductViewer3D from '../3d/ProductViewer3D'

function ProductModal({ product, onClose, isOpen }) {
  const modalRef = useRef(null)
  const contentRef = useRef(null)
  
  // Handle modal animations
  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      // Background fade in
      anime({
        targets: modalRef.current,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
      })
      
      // Content slide in
      anime({
        targets: contentRef.current,
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuad'
      })
    }
  }, [isOpen])
  
  // Close modal with animation
  const handleClose = () => {
    if (modalRef.current && contentRef.current) {
      // Background fade out
      anime({
        targets: modalRef.current,
        opacity: 0,
        duration: 300,
        easing: 'easeOutQuad'
      })
      
      // Content slide out
      anime({
        targets: contentRef.current,
        translateY: 100,
        opacity: 0,
        duration: 400,
        easing: 'easeOutQuad',
        complete: onClose
      })
    } else {
      onClose()
    }
  }
  
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  
  // Close when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      handleClose()
    }
  }
  
  if (!isOpen || !product) return null
  
  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={handleBackdropClick}
    >
      <div 
        ref={contentRef}
        className="bg-white rounded-2xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 flex justify-end p-4">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="px-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden">
              {product.model3D ? (
                <ProductViewer3D modelPath={product.model3D} />
              ) : (
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h2>
              
              {product.features && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              {product.specifications && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div 
                        key={index}
                        className={`flex justify-between py-2 ${
                          index !== Object.entries(product.specifications).length - 1 
                            ? 'border-b border-gray-200' 
                            : ''
                        }`}
                      >
                        <span className="text-gray-600">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex space-x-4">
                <Button
                  variant="primary"
                  onClick={() => window.location.href = '/contact'}
                >
                  Request Quote
                </Button>
                
                <Button
                  variant="outline"
                  className="text-primary-600 border-primary-600"
                  onClick={handleClose}
                >
                  Back to Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal