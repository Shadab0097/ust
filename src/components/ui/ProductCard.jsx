import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { motion } from 'framer-motion'

function ProductCard({ product, onClick }) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener('mouseenter', handleMouseEnter)
      cardRef.current.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        if (cardRef.current) {
          cardRef.current.removeEventListener('mouseenter', handleMouseEnter)
          cardRef.current.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }
  }, [])
  
  const handleMouseEnter = () => {
    anime({
      targets: cardRef.current.querySelector('img'),
      scale: 1.05,
      duration: 800,
      easing: 'easeOutQuad'
    })
    
    anime({
      targets: cardRef.current.querySelector('.card-content'),
      translateY: -10,
      duration: 400,
      easing: 'easeOutQuad'
    })
  }
  
  const handleMouseLeave = () => {
    anime({
      targets: cardRef.current.querySelector('img'),
      scale: 1,
      duration: 800,
      easing: 'easeOutQuad'
    })
    
    anime({
      targets: cardRef.current.querySelector('.card-content'),
      translateY: 0,
      duration: 400,
      easing: 'easeOutQuad'
    })
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="product-card"
      ref={cardRef}
      onClick={() => onClick(product)}
    >
      <div className="overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-56 object-cover transition-all duration-500"
        />
      </div>
      
      <div className="card-content p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.shortDescription}</p>
        <div className="flex items-center text-primary-600">
          <span className="text-sm font-medium">View Details</span>
          <svg 
            className="w-5 h-5 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard