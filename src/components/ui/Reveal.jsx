'use client'

import { useEffect, useRef } from 'react'

/**
 * Fades children in when scrolled into view. Server-rendered HTML is fully visible;
 * hiding only happens when JS is running (see `.js .reveal` in globals.css).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { '--reveal-delay': `${delay}ms` } : undefined} {...props}>
      {children}
    </Tag>
  )
}
