'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Counts up to `value` when scrolled into view. Server HTML contains the final
 * number (good for SEO / no-JS); animation only runs on the client.
 */
export default function CountUp({ value, suffix = '', duration = 1800, className = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) return // already visible: keep final value
    setDisplay(0)

    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 4)
        setDisplay(Math.round(value * eased))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
