import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import anime from 'animejs'

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  href, 
  onClick, 
  className = '',
  animated = true,
  ...props 
}) {
  const buttonRef = useRef(null)
  
  useEffect(() => {
    if (animated && buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', handleMouseEnter)
      buttonRef.current.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        if (buttonRef.current) {
          buttonRef.current.removeEventListener('mouseenter', handleMouseEnter)
          buttonRef.current.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }
  }, [animated])
  
  const handleMouseEnter = () => {
    anime({
      targets: buttonRef.current,
      scale: 1.05,
      duration: 300,
      easing: 'easeOutQuad'
    })
  }
  
  const handleMouseLeave = () => {
    anime({
      targets: buttonRef.current,
      scale: 1,
      duration: 300,
      easing: 'easeOutQuad'
    })
  }
  
  const baseClasses = 'btn'
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'bg-transparent border-2 border-current hover:bg-gray-50',
  }
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4'
  }
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  if (to) {
    return (
      <Link 
        to={to} 
        ref={buttonRef} 
        className={allClasses} 
        {...props}
      >
        {children}
      </Link>
    )
  }
  
  if (href) {
    return (
      <a 
        href={href} 
        ref={buttonRef} 
        className={allClasses} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...props}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button 
      ref={buttonRef} 
      className={allClasses} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  )
}

export default Button