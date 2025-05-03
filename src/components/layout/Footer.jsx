import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo scrolled={true} />
              <span className="ml-2 text-xl font-bold">U.S.T Enterprises</span>
            </div>
            <p className="text-gray-400 mb-4">
              High-Strength Industrial Solutions Since 1970
            </p>
            <p className="text-gray-400">
              Gurgaon, Haryana, India
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Handling Trolleys
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Industrial Hoods
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Hopper Machines
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Storage Trolleys
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  JIB Cranes
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span className="text-gray-400">123 Industrial Area, Sector 14, Gurgaon, Haryana 122001, India</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span className="text-gray-400">info@ustenterprises.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} U.S.T Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer