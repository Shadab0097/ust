import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import anime from 'animejs'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import productsData from '../../data/products'

gsap.registerPlugin(ScrollTrigger)

// Individual Featured Product Card
function FeaturedProductCard({ product, index, onViewDetails }) {
    const cardRef = useRef(null)
    const imageRef = useRef(null)
    console.log(product)
    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: index * 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top 80%',
                    }
                }
            )
        }
    }, [index])

    const handleMouseEnter = () => {
        if (cardRef.current) {
            anime({
                targets: cardRef.current,
                scale: 1.02,
                duration: 400,
                easing: 'easeOutQuad'
            })
        }

        if (imageRef.current) {
            anime({
                targets: imageRef.current,
                scale: 1.1,
                duration: 600,
                easing: 'easeOutQuad'
            })
        }
    }

    const handleMouseLeave = () => {
        if (cardRef.current) {
            anime({
                targets: cardRef.current,
                scale: 1,
                duration: 400,
                easing: 'easeOutQuad'
            })
        }

        if (imageRef.current) {
            anime({
                targets: imageRef.current,
                scale: 1,
                duration: 600,
                easing: 'easeOutQuad'
            })
        }
    }

    return (
        <div
            ref={cardRef}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onViewDetails(product)}
        >
            {/* Product Image Section */}
            <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                <img
                    ref={imageRef}
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-300"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.badge}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.shortDescription}</p>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                    {product.keyFeatures.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-primary-600">{product.capacity}</div>
                        <div className="text-xs text-gray-600">Capacity</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-accent-500">{product.rating}</div>
                        <div className="text-xs text-gray-600">Rating</div>
                    </div>
                </div>

                {/* CTA Button */}
                <Button
                    variant="primary"
                    className="w-full"
                    onClick={(e) => {
                        e.stopPropagation()
                        onViewDetails(product)
                    }}
                >
                    View Details
                </Button>
            </div>
        </div>
    )
}

function FeaturedProducts({ onProductClick }) {
    const sectionRef = useRef(null)

    // Get featured products from product data (first 3 products)
    const featuredProducts = productsData.slice(0, 3).map((product, index) => {
        const badges = ["Best Seller", "Most Popular", "Premium"]
        const ratings = ["4.9★", "4.8★", "4.9★"]

        return {
            ...product,
            badge: badges[index],
            rating: ratings[index],
            capacity: product.specifications["Load Capacity"] || product.specifications["Capacity"] || product.specifications["Airflow"] || "N/A",
            keyFeatures: product.features
        }
    })

    useEffect(() => {
        if (sectionRef.current) {
            // Animate section background
            gsap.fromTo(
                sectionRef.current,
                {
                    backgroundPosition: '0% 0%'
                },
                {
                    backgroundPosition: '100% 100%',
                    duration: 20,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                }
            )
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="section relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
                backgroundSize: '200% 200%'
            }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container-custom relative z-10">
                <SectionHeading
                    title="Featured Products"
                    subtitle="Discover our most popular and highest-rated industrial solutions, trusted by leading companies across India"
                    centered
                />

                {/* Featured Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProducts.map((product, index) => (
                        <FeaturedProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            onViewDetails={onProductClick}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                        <p className="text-gray-600 mb-6">
                            Our engineering team can design and manufacture equipment tailored to your specific requirements.
                            Get in touch to discuss your project needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button to="/products" variant="primary">
                                View All Products
                            </Button>
                            <Button to="/quote" variant="outline" className="border-primary-600 text-primary-600">
                                Request Custom Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts