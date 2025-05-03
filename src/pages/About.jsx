import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../components/ui/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const timelineRef = useRef(null)

  // Update page title
  useEffect(() => {
    document.title = 'About Us - U.S.T Enterprises'
  }, [])

  // Animate timeline entries
  // Update the animation useEffect
  useEffect(() => {
    if (timelineRef.current) {
      const timelineEntries = timelineRef.current.querySelectorAll('.timeline-entry')
      const mm = gsap.matchMedia();

      mm.add("(min-width: 640px)", () => {
        // Desktop animations
        timelineEntries.forEach((entry, index) => {
          gsap.fromTo(
            entry,
            {
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: entry,
                start: 'top 80%',
              }
            }
          )
        })
      });

      mm.add("(max-width: 639px)", () => {
        // Mobile animations (all from right)
        timelineEntries.forEach((entry) => {
          gsap.fromTo(
            entry,
            {
              opacity: 0,
              x: 50
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: entry,
                start: 'top 80%',
              }
            }
          )
        })
      });
    }
  }, [])
  const timelineEvents = [
    {
      year: '1970',
      title: 'Company Founded',
      description: 'U.S.T Enterprises was established in Gurgaon, India by Mr. Usman.'
    },
    {
      year: '1985',
      title: 'Expansion of Product Line',
      description: 'Added Industrial Hoods and Hopper Machines to the manufacturing lineup.'
    },
    {
      year: '1995',
      title: 'Facility Upgrade',
      description: 'Invested in modern machinery and expanded the production facility.'
    },
    {
      year: '2005',
      title: 'Quality Certification',
      description: 'Achieved ISO 9001 certification for quality management systems.'
    },
    {
      year: '2015',
      title: 'International Market Entry',
      description: 'Began exporting products to international markets across Asia and Middle East.'
    },
    {
      year: '2020',
      title: '50 Years of Excellence',
      description: 'Celebrated 50 years of providing high-strength industrial solutions.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-800 py-32">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-200">
              Since 1970, we've been engineering and manufacturing premium industrial equipment
              to meet the demands of modern industry.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="About U.S.T Enterprises"
                subtitle="High-end industrial equipment manufacturer since 1970"
              />
              <div className="space-y-6 text-gray-700">
                <p>
                  U.S.T Enterprises was incorporated in 1970 in Gurgaon (Haryana, India). We manufacture
                  and supply Handling Trolleys, Industrial Hoods, Hopper Machines, Industrial Storage Trolleys,
                  JIB Cranes, and more, using advanced machines and high-quality raw materials.
                </p>
                <p>
                  Our products are known for high strength, application-specific design, fine finish,
                  and rust resistance. We offer custom specifications and deliver on time.
                </p>
                <p>
                  Our high-end facility includes procurement, production, quality control, warehousing &
                  packaging units, equipped with modern machinery. Under Mr. Usman's leadership, we strive
                  for excellence and customer satisfaction.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-medium bg-gray-100 p-6 flex flex-col">
                <div className="text-4xl text-primary-600 mb-2">✓</div>
                <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                <p className="text-gray-600 mt-auto">All products built with premium-grade materials for durability</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-medium bg-gray-100 p-6 flex flex-col">
                <div className="text-4xl text-primary-600 mb-2">✓</div>
                <h3 className="text-xl font-semibold mb-2">Expert Design</h3>
                <p className="text-gray-600 mt-auto">Application-specific designs for optimal functionality</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-medium bg-gray-100 p-6 flex flex-col">
                <div className="text-4xl text-primary-600 mb-2">✓</div>
                <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                <p className="text-gray-600 mt-auto">Tailored products to meet specific industry requirements</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-medium bg-gray-100 p-6 flex flex-col">
                <div className="text-4xl text-primary-600 mb-2">✓</div>
                <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
                <p className="text-gray-600 mt-auto">Reliable production and delivery schedules for every project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Key Strengths"
            subtitle="What sets U.S.T Enterprises apart from the competition"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost-Efficient</h3>
              <p className="text-gray-600">
                Optimized production processes that maintain quality while keeping costs competitive.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Energy-Efficient</h3>
              <p className="text-gray-600">
                Products designed with energy conservation and sustainability in mind.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                Reliable production schedules and logistics to ensure on-time project completion.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimum Quality</h3>
              <p className="text-gray-600">
                Stringent quality control measures at every stage of production.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                Utilization of modern machinery and techniques for precise manufacturing.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                Flexibility to adapt designs and specifications to unique customer requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Journey"
            subtitle="Five decades of growth and innovation"
            centered
          />

          <div ref={timelineRef} className="relative py-8">
            {/* Timeline central line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

            {/* Timeline entries */}
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-entry relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } mb-16 last:mb-0`}
              >
                <div className="w-1/2"></div>

                {/* Timeline node */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/3">
                  <div className="w-10 h-10 rounded-full bg-primary-600 border-4 border-white flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">{event.year}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className="w-1/2 px-8">
                  <div className="card p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section bg-primary-700 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Clients"
            subtitle="Trusted by industry leaders across India and beyond"
            centered
            light
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="text-xl font-bold text-white opacity-80">NTF India</div>
            <div className="text-xl font-bold text-white opacity-80">Bundy India</div>
            <div className="text-xl font-bold text-white opacity-80">Adhunik Cooling</div>
            <div className="text-xl font-bold text-white opacity-80">Inergy Automotive</div>
            <div className="text-xl font-bold text-white opacity-80">ENCO Engineers</div>
            <div className="text-xl font-bold text-white opacity-80">And More...</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About