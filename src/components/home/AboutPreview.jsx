import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../ui/Button'

gsap.registerPlugin(ScrollTrigger)

function AboutPreview() {
  const sectionRef = useRef(null)
  
  useEffect(() => {
    if (sectionRef.current) {
      const imgElement = sectionRef.current.querySelector('.about-image')
      const contentElement = sectionRef.current.querySelector('.about-content')
      
      gsap.fromTo(
        imgElement,
        { 
          x: -100, 
          opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      )
      
      gsap.fromTo(
        contentElement,
        { 
          x: 100, 
          opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      )
    }
  }, [])
  
  return (
    <section ref={sectionRef} className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about-image relative">
            <img 
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Factory floor"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-accent-500 text-white 
                          rounded-2xl py-3 px-6 shadow-lg">
              <p className="text-xl md:text-2xl font-semibold">Since 1970</p>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Excellence in Steel Manufacturing
            </h2>
            <p className="text-gray-700 mb-6">
              U.S.T Enterprises was incorporated in 1970 in Gurgaon (Haryana, India). 
              We manufacture and supply Handling Trolleys, Industrial Hoods, Hopper Machines, 
              Industrial Storage Trolleys, JIB Cranes, and more, using advanced machines and 
              high-quality raw materials.
            </p>
            <p className="text-gray-700 mb-8">
              Our products are known for high strength, application-specific design, fine finish, 
              and rust resistance. We offer custom specifications and deliver on time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-accent-500 text-2xl font-bold mb-1">50+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-accent-500 text-2xl font-bold mb-1">100+</div>
                <div className="text-gray-600">Clients Served</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-accent-500 text-2xl font-bold mb-1">1000+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
            
            <Button to="/about" variant="primary">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview