// import { useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import SectionHeading from '../ui/SectionHeading'

// gsap.registerPlugin(ScrollTrigger)

// function ProductCategories() {
//   const categoriesRef = useRef(null)

//   useEffect(() => {
//     if (categoriesRef.current) {
//       const cards = categoriesRef.current.querySelectorAll('.category-card')

//       cards.forEach((card, index) => {
//         gsap.fromTo(
//           card,
//           { 
//             y: 100, 
//             opacity: 0 
//           },
//           { 
//             y: 0, 
//             opacity: 1, 
//             duration: 0.8,
//             delay: index * 0.2,
//             ease: 'power3.out',
//             scrollTrigger: {
//               trigger: card,
//               start: 'top 85%',
//             }
//           }
//         )
//       })
//     }
//   }, [])

//   const categories = [
//     {
//       name: 'Handling Trolleys',
//       image: 'https://images.pexels.com/photos/6169678/pexels-photo-6169678.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Heavy-duty trolleys designed for efficient material handling in industrial environments.'
//     },
//     {
//       name: 'Industrial Hoods',
//       image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'High-quality ventilation hoods for fume extraction and air quality control.'
//     },
//     {
//       name: 'Hopper Machines',
//       image: 'https://images.pexels.com/photos/159358/machine-turning-mechanical-metal-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Precision-engineered hoppers for material storage and controlled dispensing.'
//     },
//     {
//       name: 'Storage Trolleys',
//       image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Versatile storage solutions for organized tool and component management.'
//     },
//     {
//       name: 'JIB Cranes',
//       image: 'https://images.pexels.com/photos/2237257/pexels-photo-2237257.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Robust lifting equipment for precise material handling in workshops and factories.'
//     }
//   ]

//   return (
//     <section className="section bg-gray-50">
//       <div className="container-custom">
//         <SectionHeading
//           title="Our Product Categories"
//           subtitle="Explore our range of industrial equipment and machinery, designed for durability and performance."
//           centered
//         />

//         <div 
//           ref={categoriesRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {categories.map((category, index) => (
//             <Link 
//               key={index}
//               to="/products"
//               className="category-card group"
//             >
//               <div className="card overflow-hidden h-full">
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={category.image} 
//                     alt={category.name}
//                     className="w-full h-full object-cover transition-transform duration-700 
//                               group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
//                   <p className="text-gray-600 mb-4">{category.description}</p>
//                   <div className="flex items-center text-primary-600 transition-transform duration-300 
//                                  group-hover:translate-x-2">
//                     <span className="text-sm font-medium">Browse Category</span>
//                     <svg 
//                       className="w-5 h-5 ml-1" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round" 
//                         strokeWidth="2" 
//                         d="M14 5l7 7m0 0l-7 7m7-7H3"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ProductCategories

import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../ui/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

function ProductCategories() {
  const categoriesRef = useRef(null)

  useEffect(() => {
    if (categoriesRef.current) {
      const cards = categoriesRef.current.querySelectorAll('.category-card')

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        )
      })
    }
  }, [])

  const categories = [
    {
      name: 'Handling Trolleys',
      image: 'https://images.pexels.com/photos/6169678/pexels-photo-6169678.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Heavy-duty trolleys designed for efficient material handling in industrial environments.'
    },
    {
      name: 'Industrial Hoods',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality ventilation hoods for fume extraction and air quality control.'
    },
    {
      name: 'Hopper Machines',
      image: "/assets/catog/hopper.jpg",
      description: 'Precision-engineered hoppers for material storage and controlled dispensing.'
    },
    {
      name: 'Storage Trolleys',
      image: "/assets/catog/stimg.jpg",
      description: 'Versatile storage solutions for organized tool and component management.'
    },
    {
      name: 'JIB Cranes',
      image: "/assets/catog/crane.jpg",

      description: 'Robust lifting equipment for precise material handling in workshops and factories.'
    }
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Our Product Categories"
          subtitle="Explore our range of industrial equipment and machinery, designed for durability and performance."
          centered
        />

        <div
          ref={categoriesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/products"
              className="category-card group"
            >
              <div className="card overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.images ? category.images[0] : category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 
                              group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-primary-600 transition-transform duration-300 
                                 group-hover:translate-x-2">
                    <span className="text-sm font-medium">Browse Category</span>
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories