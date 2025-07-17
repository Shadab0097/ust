// import { useEffect, useRef } from 'react'
// import anime from 'animejs'
// import Button from './Button'
// import ProductViewer3D from '../3d/ProductViewer3D'

// function ProductModal({ product, onClose, isOpen }) {
//   const modalRef = useRef(null)
//   const contentRef = useRef(null)

//   // Handle modal animations
//   useEffect(() => {
//     if (isOpen && modalRef.current && contentRef.current) {
//       // Background fade in
//       anime({
//         targets: modalRef.current,
//         opacity: [0, 1],
//         duration: 300,
//         easing: 'easeOutQuad'
//       })

//       // Content slide in
//       anime({
//         targets: contentRef.current,
//         translateY: [100, 0],
//         opacity: [0, 1],
//         duration: 500,
//         easing: 'easeOutQuad'
//       })
//     }
//   }, [isOpen])

//   // Close modal with animation
//   const handleClose = () => {
//     if (modalRef.current && contentRef.current) {
//       // Background fade out
//       anime({
//         targets: modalRef.current,
//         opacity: 0,
//         duration: 300,
//         easing: 'easeOutQuad'
//       })

//       // Content slide out
//       anime({
//         targets: contentRef.current,
//         translateY: 100,
//         opacity: 0,
//         duration: 400,
//         easing: 'easeOutQuad',
//         complete: onClose
//       })
//     } else {
//       onClose()
//     }
//   }

//   // Close on escape key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') {
//         handleClose()
//       }
//     }

//     if (isOpen) {
//       document.addEventListener('keydown', handleEsc)
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEsc)
//     }
//   }, [isOpen])

//   // Prevent scrolling when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'auto'
//     }

//     return () => {
//       document.body.style.overflow = 'auto'
//     }
//   }, [isOpen])

//   // Close when clicking outside content
//   const handleBackdropClick = (e) => {
//     if (e.target === modalRef.current) {
//       handleClose()
//     }
//   }

//   if (!isOpen || !product) return null

//   return (
//     <div 
//       ref={modalRef}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
//       onClick={handleBackdropClick}
//     >
//       <div 
//         ref={contentRef}
//         className="bg-white rounded-2xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="sticky top-0 bg-white z-10 flex justify-end p-4">
//           <button
//             onClick={handleClose}
//             className="text-gray-500 hover:text-gray-700 focus:outline-none"
//             aria-label="Close modal"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <div className="px-6 pb-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden">
//               {product.model3D ? (
//                 <ProductViewer3D modelPath={product.model3D} />
//               ) : (
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               )}
//             </div>

//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h2>

//               {product.features && (
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-3">Features</h3>
//                   <ul className="space-y-2">
//                     {product.features.map((feature, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="text-accent-500 mr-2">✓</span>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Description</h3>
//                 <p className="text-gray-700">{product.description}</p>
//               </div>

//               {product.specifications && (
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-3">Specifications</h3>
//                   <div className="bg-gray-50 rounded-xl p-4">
//                     {Object.entries(product.specifications).map(([key, value], index) => (
//                       <div 
//                         key={index}
//                         className={`flex justify-between py-2 ${
//                           index !== Object.entries(product.specifications).length - 1 
//                             ? 'border-b border-gray-200' 
//                             : ''
//                         }`}
//                       >
//                         <span className="text-gray-600">{key}</span>
//                         <span className="font-medium">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <div className="flex space-x-4">
//                 <Button
//                   variant="primary"
//                   onClick={() => window.location.href = '/contact'}
//                 >
//                   Request Quote
//                 </Button>

//                 <Button
//                   variant="outline"
//                   className="text-primary-600 border-primary-600"
//                   onClick={handleClose}
//                 >
//                   Back to Products
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductModal

import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'
import Button from './Button'
import ProductViewer3D from '../3d/ProductViewer3D'

function ProductModal({ product, onClose, isOpen }) {
  const modalRef = useRef(null)
  const contentRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Reset image index when product changes
  useEffect(() => {
    if (product) {
      setCurrentImageIndex(0)
    }
  }, [product])

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

  // Handle thumbnail click with animation
  const handleThumbnailClick = (index) => {
    if (index !== currentImageIndex) {
      // Fade out current image
      const mainImage = document.querySelector('.main-product-image')
      if (mainImage) {
        anime({
          targets: mainImage,
          opacity: 0,
          duration: 200,
          easing: 'easeOutQuad',
          complete: () => {
            setCurrentImageIndex(index)
            // Fade in new image
            anime({
              targets: mainImage,
              opacity: 1,
              duration: 300,
              easing: 'easeOutQuad'
            })
          }
        })
      } else {
        setCurrentImageIndex(index)
      }
    }
  }

  // Navigate carousel with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || !product?.images) return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : product.images.length - 1
        handleThumbnailClick(newIndex)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        const newIndex = currentImageIndex < product.images.length - 1 ? currentImageIndex + 1 : 0
        handleThumbnailClick(newIndex)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, currentImageIndex, product])

  // Auto-play carousel (optional)
  useEffect(() => {
    if (!isOpen || !product?.images || product.images.length <= 1) return

    const interval = setInterval(() => {
      const nextIndex = currentImageIndex < product.images.length - 1 ? currentImageIndex + 1 : 0
      handleThumbnailClick(nextIndex)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [isOpen, currentImageIndex, product])

  if (!isOpen || !product) return null

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={handleBackdropClick}
    >
      <div
        ref={contentRef}
        className="bg-white rounded-2xl shadow-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 flex justify-end p-4">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Carousel Section */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden">
                {product.model3D ? (
                  <ProductViewer3D modelPath={product.model3D} />
                ) : (
                  <img
                    src={product.images[currentImageIndex]}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    className="main-product-image w-full h-full object-contain transition-opacity duration-300"
                  />
                )}

                {/* Navigation Arrows */}
                {product.images && product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => {
                        const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : product.images.length - 1
                        handleThumbnailClick(newIndex)
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={() => {
                        const newIndex = currentImageIndex < product.images.length - 1 ? currentImageIndex + 1 : 0
                        handleThumbnailClick(newIndex)
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200"
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {product.images && product.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {product.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === currentImageIndex
                        ? 'border-primary-500 ring-2 ring-primary-200'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details Section */}
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
                        className={`flex justify-between py-2 ${index !== Object.entries(product.specifications).length - 1
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

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="primary"
                  onClick={() => window.location.href = '/quote'}
                  className="flex-1 sm:flex-none"
                >
                  Request Quote
                </Button>

                <Button
                  variant="outline"
                  className="text-primary-600 border-primary-600 flex-1 sm:flex-none"
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