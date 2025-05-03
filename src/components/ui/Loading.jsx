import anime from 'animejs'
import { useEffect, useRef } from 'react'

function Loading() {
  const loadingRef = useRef(null)
  
  useEffect(() => {
    if (loadingRef.current) {
      anime({
        targets: '.loading-circle',
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(150),
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate'
      })
    }
  }, [])
  
  return (
    <div 
      ref={loadingRef}
      className="flex items-center justify-center w-full h-screen bg-white"
    >
      <div className="flex space-x-2">
        <div className="loading-circle w-4 h-4 bg-primary-500 rounded-full"></div>
        <div className="loading-circle w-4 h-4 bg-primary-600 rounded-full"></div>
        <div className="loading-circle w-4 h-4 bg-primary-700 rounded-full"></div>
      </div>
    </div>
  )
}

export default Loading