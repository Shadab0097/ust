'use client'

import { useEffect, useRef } from 'react'

// Decorative ember particles over the hero video (ported from the original canvas effect).
export default function FireParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    let particles = []
    let raf = 0
    let w = 0
    let h = 0

    const make = () => ({
      x: Math.random() * w,
      y: h - 50 + Math.random() * 100,
      r: 1 + Math.random() * 4,
      a: 0.7 + Math.random() * 0.3,
      vx: -1 + Math.random() * 2,
      vy: -4 - Math.random() * 3,
      hue: 15 + Math.random() * 10,
    })

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = []
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      const max = Math.floor(w / 50)
      if (particles.length < max) particles.push(make())
      const t = Date.now() * 0.002
      particles = particles.filter((p) => {
        p.x += p.vx + Math.sin(t) * 0.5
        p.y += p.vy
        p.r *= 0.98
        const alpha = p.a * Math.max(Math.min(p.y / h, 1), 0)
        if (p.y < -100 || alpha <= 0.01 || p.r < 0.2) return false
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${alpha})`
        ctx.fill()
        return true
      })
      raf = requestAnimationFrame(tick)
    }

    // Pause when hero is off-screen to save CPU / battery.
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf)
      if (entry.isIntersecting) raf = requestAnimationFrame(tick)
    })

    resize()
    io.observe(canvas)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      style={{ mixBlendMode: 'plus-lighter' }}
      aria-hidden="true"
    />
  )
}
