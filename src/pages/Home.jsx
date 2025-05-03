import HeroSection from '../components/home/HeroSection'
import ProductCategories from '../components/home/ProductCategories'
import AboutPreview from '../components/home/AboutPreview'
import { useEffect } from 'react'
import ClientsSection from './Client'

function Home() {
  // Update page title
  useEffect(() => {
    document.title = 'U.S.T Enterprises - High-Strength Industrial Solutions'
  }, [])

  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <ClientsSection />
      <AboutPreview />
    </div>
  )
}

export default Home