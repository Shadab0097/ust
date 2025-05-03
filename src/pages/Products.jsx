import { useState, useEffect } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import ProductCard from '../components/ui/ProductCard'
import ProductModal from '../components/ui/ProductModal'
import productsData from '../data/products'

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [products, setProducts] = useState([])
  
  // Update page title
  useEffect(() => {
    document.title = 'Products - U.S.T Enterprises'
  }, [])
  
  // Extract unique categories and set initial products
  useEffect(() => {
    const uniqueCategories = ['All', ...new Set(productsData.map(product => product.category))]
    setCategories(uniqueCategories)
    setProducts(productsData)
  }, [])
  
  // Filter products by category
  const filterProducts = (category) => {
    setActiveCategory(category)
    if (category === 'All') {
      setProducts(productsData)
    } else {
      setProducts(productsData.filter(product => product.category === category))
    }
  }
  
  // Handle product click and open modal
  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }
  
  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-800 py-32">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-200">
              Explore our range of high-strength industrial solutions designed for durability,
              efficiency, and precision.
            </p>
          </div>
        </div>
      </div>
      
      {/* Products Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Premium Industrial Equipment"
            subtitle="Manufactured with high-quality materials and advanced technology"
            centered
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => filterProducts(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Solutions Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Custom Solutions
              </h2>
              <p className="text-gray-700 mb-6">
                Beyond our standard product line, we specialize in designing and manufacturing 
                custom industrial equipment to meet your specific requirements.
              </p>
              <p className="text-gray-700 mb-8">
                Our experienced team will work with you to understand your needs and create a 
                tailored solution that perfectly fits your application.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Application-Specific Design</h3>
                    <p className="text-gray-600">Tailored solutions for your unique operational requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Material Selection</h3>
                    <p className="text-gray-600">Options for various grades of steel and finishes based on your needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Technical Consultation</h3>
                    <p className="text-gray-600">Expert guidance throughout the design and manufacturing process</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Custom manufacturing"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-accent-500 text-white 
                           rounded-2xl py-3 px-6 shadow-lg">
                <p className="text-xl md:text-2xl font-semibold">Custom Built</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Detail Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default Products