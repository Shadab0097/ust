import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom' // Import Navigation Hook
import SEO from '../components/seo/SEO' // Import your SEO component
import HeroSection from '../components/home/HeroSection'
import ProductCategories from '../components/home/ProductCategories'
import AboutPreview from '../components/home/AboutPreview'
import FeaturedProducts from '../components/home/FeaturedProducts'

function Home() {
  const navigate = useNavigate()

  // SEO Schema (Social Media removed as requested)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "U.S.T Enterprises",
    "url": "https://www.ustenterprises.in", // Ensure this matches your live domain
    "logo": "https://www.ustenterprises.in/assets/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": ["+91 8048970369", "+91 9560983082", "+91 9871627800"],
      "contactType": "sales",
      "areaServed": "IN"
    }
  };

  // Handle product click - Navigate to the Detail Page
  const handleProductClick = (product) => {
    navigate(`/products/${product.slug}`)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      {/* SEO Injection */}
      <SEO
        title="Industrial Manufacturing & Engineering Solutions"
        description="U.S.T Enterprises is a leading manufacturer of heavy industrial machinery, including Ribbon Blenders, Hydro Turbines, and Dust Collection Systems."
        keywords="Industrial Machinery, Custom Fabrication, Engineering Solutions, U.S.T Enterprises, Heavy Duty Manufacturing India"
        schema={orgSchema}
      />

      <HeroSection />

      {/* Pass the navigation handler */}
      <FeaturedProducts onProductClick={handleProductClick} />

      <ProductCategories />
      <AboutPreview />
    </div>
  )
}

export default Home