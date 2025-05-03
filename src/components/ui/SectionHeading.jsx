import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  light = false,
  className = '' 
}) {
  const headingRef = useRef(null)
  
  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current.querySelector('.heading-title'),
        { 
          y: 30, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          }
        }
      )
      
      if (headingRef.current.querySelector('.heading-subtitle')) {
        gsap.fromTo(
          headingRef.current.querySelector('.heading-subtitle'),
          { 
            y: 20, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
            }
          }
        )
      }
      
      if (headingRef.current.querySelector('.heading-line')) {
        gsap.fromTo(
          headingRef.current.querySelector('.heading-line'),
          { 
            width: 0,
            opacity: 0 
          },
          { 
            width: '4rem',
            opacity: 1, 
            duration: 1,
            delay: 0.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
            }
          }
        )
      }
    }
  }, [])
  
  const alignment = centered ? 'text-center mx-auto' : 'text-left'
  const textColor = light ? 'text-white' : 'text-charcoal'
  const lineColor = light ? 'bg-white' : 'bg-accent-500'
  
  return (
    <div 
      ref={headingRef} 
      className={`mb-12 ${alignment} ${className}`}
    >
      <h2 className={`heading-title text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`heading-subtitle text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      
      <div className={`heading-line h-1 ${lineColor} ${centered ? 'mx-auto' : ''} mt-6`}></div>
    </div>
  )
}

export default SectionHeading