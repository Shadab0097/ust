import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import anime from 'animejs'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])
  
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])
  
  useEffect(() => {
    if (isOpen) {
      anime({
        targets: '.mobile-nav-item',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        easing: 'easeOutQuad',
        duration: 500
      })
    }
  }, [isOpen])
  
  const headerClasses = scrolled 
    ? 'bg-white shadow-md text-charcoal' 
    : 'bg-transparent text-white'
  
  const activeClass = "text-accent-400 font-semibold"
  const normalClass = scrolled ? "text-charcoal hover:text-accent-500" : "text-white hover:text-accent-100"
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo scrolled={scrolled} />
          <span className="ml-2 text-xl font-bold">U.S.T Enterprises</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => 
            `transition-colors duration-200 ${isActive ? activeClass : normalClass}`
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `transition-colors duration-200 ${isActive ? activeClass : normalClass}`
          }>
            About
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => 
            `transition-colors duration-200 ${isActive ? activeClass : normalClass}`
          }>
            Products
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `transition-colors duration-200 ${isActive ? activeClass : normalClass}`
          }>
            Contact
          </NavLink>
          <Button 
            to="/quote"
            variant="accent"
            className="ml-4"
          >
            Get Quote
          </Button>
        </nav>
        
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? 
            <span>✕</span> : 
            <span>☰</span>
          }
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <NavLink to="/" className="mobile-nav-item text-charcoal hover:text-accent-500 py-2">
              Home
            </NavLink>
            <NavLink to="/about" className="mobile-nav-item text-charcoal hover:text-accent-500 py-2">
              About
            </NavLink>
            <NavLink to="/products" className="mobile-nav-item text-charcoal hover:text-accent-500 py-2">
              Products
            </NavLink>
            <NavLink to="/contact" className="mobile-nav-item text-charcoal hover:text-accent-500 py-2">
              Contact
            </NavLink>
            <Button 
              to="/quote"
              variant="accent"
              className="mobile-nav-item w-full text-center"
            >
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header