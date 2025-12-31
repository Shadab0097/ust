import { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import anime from 'animejs'
import Button from '../components/ui/Button'
import ProductViewer3D from '../components/3d/ProductViewer3D'
import productsData from '../data/products'
import SEO from '../components/seo/SEO' // Ensure this path is correct

function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const pageRef = useRef(null)
  const heroRef = useRef(null)

  // Initial state MUST be null
  const [product, setProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  // 1. Find Product based on Slug
  useEffect(() => {
    // Safety check: ensure productsData exists
    if (!productsData || productsData.length === 0) {
      console.error("Products data is missing!");
      setLoading(false);
      return;
    }

    const foundProduct = productsData.find(p => p.slug === slug)

    if (foundProduct) {
      setProduct(foundProduct)
      setCurrentImageIndex(0)
      // We set document title via SEO component, but this is a fallback
      document.title = `${foundProduct.name} - U.S.T Enterprises`
      window.scrollTo(0, 0)
    } else {
      // Product not found, redirect back to list
      navigate('/products')
    }
    setLoading(false)
  }, [slug, navigate])

  // 2. Animations (Only run if product exists)
  useEffect(() => {
    if (!loading && product && pageRef.current && heroRef.current) {
      anime({
        targets: heroRef.current,
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad'
      })

      anime({
        targets: pageRef.current,
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
        easing: 'easeOutQuad'
      })
    }
  }, [loading, product])

  // 3. Handle Thumbnail Click
  const handleThumbnailClick = (index) => {
    if (index !== currentImageIndex) {
      const mainImage = document.querySelector('.main-product-image')
      if (mainImage) {
        anime({
          targets: mainImage,
          opacity: 0,
          duration: 200,
          easing: 'easeOutQuad',
          complete: () => {
            setCurrentImageIndex(index)
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

  // --- CRITICAL: LOADING CHECK ---
  // If we are loading OR product is null, return loading screen.
  // This prevents the "Cannot read properties of null" error.
  if (loading || !product) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-xl text-gray-600">Loading Product...</div>
  }

  // --- SEO LOGIC (Safe to run now because we passed the check above) ---

  // 1. Safe Dynamic Keywords
  const dynamicKeywords = [
    product.name,
    product.category,
    "Industrial Manufacturer",
    "Heavy Duty Equipment",
    "U.S.T Enterprises",
    ...(product.features ? product.features.slice(0, 3) : [])
  ].join(", ");

  // 2. Safe Schema
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images ? product.images.map(img => `https://www.ustenterprises.in${img}`) : [],
    "description": product.description,
    "sku": `UST-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "U.S.T Enterprises"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.ustenterprises.in/products/${product.slug}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "price": "0"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* Inject SEO Tags */}
      <SEO
        title={product.name}
        description={product.shortDescription || product.description?.substring(0, 160)}
        keywords={dynamicKeywords}
        image={product.images?.[0]}
        url={`/products/${product.slug}`}
        type="product"
        schema={productSchema}
      />

      {/* --- HERO SECTION --- */}
      <div
        ref={heroRef}
        className="relative bg-primary-900 text-white pt-32 pb-32 md:pb-40 overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: product.images?.[0] ? `url(${product.images[0]})` : 'none',
              filter: 'blur(20px) brightness(0.7)'
            }}
          />
        </div>

        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm md:text-base text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-3">/</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span className="mx-3">/</span>
            <span className="text-accent-400 font-medium truncate">{product.name}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 mb-4 border border-accent-500/30 bg-accent-500/10 rounded-full backdrop-blur-sm">
              <span className="text-accent-300 text-sm font-semibold tracking-wide uppercase">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {product.name}
            </h1>
            {product.shortDescription && (
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                {product.shortDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT (Overlapping Card) --- */}
      <div
        ref={pageRef}
        className="container-custom -mt-20 md:-mt-24 relative z-20"
        style={{ opacity: 0 }}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* LEFT COLUMN: Image Gallery */}
              <div className="space-y-6">
                {/* Main Image Area */}
                <div className="relative h-72 md:h-[500px] bg-gray-50 rounded-2xl overflow-hidden shadow-inner border border-gray-200 group">
                  {product.model3D ? (
                    <ProductViewer3D modelPath={product.model3D} />
                  ) : (
                    <img
                      src={product.images?.[currentImageIndex]}
                      alt={`${product.name} - View ${currentImageIndex + 1}`}
                      className="main-product-image w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
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
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 backdrop-blur-sm hover:scale-110"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        onClick={() => {
                          const newIndex = currentImageIndex < product.images.length - 1 ? currentImageIndex + 1 : 0
                          handleThumbnailClick(newIndex)
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 backdrop-blur-sm hover:scale-110"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <div className="absolute bottom-4 right-4 bg-gray-900/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                        {currentImageIndex + 1} / {product.images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {product.images && product.images.length > 1 && (
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 ${index === currentImageIndex
                          ? 'border-primary-600 shadow-md scale-105'
                          : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                          }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: Product Details */}
              <div className="flex flex-col h-full pt-2">

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Product Overview</h2>

                {/* Main Description */}
                <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
                  <p>{product.description}</p>
                </div>

                {/* Specifications Grid */}
                {product.specifications && (
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                      </span>
                      Technical Specifications
                    </h3>
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-2 p-4 px-5 ${index !== Object.entries(product.specifications).length - 1
                            ? 'border-b border-gray-200'
                            : ''
                            } hover:bg-white transition-colors`}
                        >
                          <span className="font-semibold text-gray-700">{key}</span>
                          <span className="text-gray-600 text-right md:text-left">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features List */}
                {product.features && (
                  <div className="mb-12">
                    <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start group">
                          <span className="flex-shrink-0 h-5 w-5 rounded-full border border-green-200 bg-green-50 text-green-600 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-green-500 group-hover:text-white transition-colors">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </span>
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                  <Link to="/quote" className="flex-1">
                    <Button
                      variant="primary"
                      className="w-full justify-center text-lg py-4 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 hover:-translate-y-1 transition-all"
                    >
                      Request a Quote
                    </Button>
                  </Link>

                  <Link to="/contact" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full justify-center text-lg py-4 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail