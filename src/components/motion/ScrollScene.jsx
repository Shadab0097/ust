'use client'

import { useEffect, useRef } from 'react'

/**
 * Writes a scroll progress value (0..1) to the CSS variable `--p` on its element.
 * All visual motion is then pure CSS (transform/opacity via calc(var(--p))), so
 * React never re-renders on scroll.
 *
 * modes:
 *  - "pin"     : tall wrapper with a sticky child. 0 when wrapper top hits viewport top,
 *                1 when wrapper bottom reaches viewport bottom.
 *  - "exit"    : 0 at page position, 1 once the element has scrolled fully out the top (hero).
 *  - "through" : 0 when element enters from the bottom, 1 when it leaves at the top.
 */
export default function ScrollScene({ as: Tag = 'div', mode = 'through', className = '', style, children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.style.setProperty('--p', mode === 'exit' ? '0' : '1')
      return
    }

    let raf = 0
    let active = false
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      let p
      if (mode === 'pin') p = -r.top / Math.max(r.height - vh, 1)
      else if (mode === 'exit') p = -r.top / Math.max(r.height, 1)
      else p = (vh - r.top) / (vh + r.height)
      p = Math.min(Math.max(p, 0), 1)
      el.style.setProperty('--p', p.toFixed(4))
    }
    const onScroll = () => {
      if (active && !raf) raf = requestAnimationFrame(update)
    }
    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting
      if (active) update()
    })

    update()
    io.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [mode])

  return (
    <Tag ref={ref} className={className} style={style} {...props}>
      {children}
    </Tag>
  )
}
