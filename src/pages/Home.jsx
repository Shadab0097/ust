import { useEffect, useState } from 'react'
import HeroSection from '../components/home/HeroSection'
import ProductCategories from '../components/home/ProductCategories'
import AboutPreview from '../components/home/AboutPreview'
import FeaturedProducts from '../components/home/FeaturedProducts'
import ProductModal from '../components/ui/ProductModal'

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Update page title
  useEffect(() => {
    document.title = 'U.S.T Enterprises - High-Strength Industrial Solutions'
  }, [])

  // Handle product click from featured products
  const handleProductClick = (product) => {
    // Use the actual product data directly
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <HeroSection />
      <FeaturedProducts onProductClick={handleProductClick} />
      <ProductCategories />
      <AboutPreview />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default Home