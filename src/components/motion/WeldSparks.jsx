'use client'

import { useEffect, useRef } from 'react'

/**
 * Welding-spark overlay (canvas). Decorative only: aria-hidden, pointer-events-none,
 * disabled for prefers-reduced-motion, and the animation loop only runs while on screen.
 *
 * mode="words": follows the "reveal front" of the parent .word-reveal (the word currently
 *               lighting up) and makes that word glow hot, as if it is being welded.
 * mode="line":  drives the timeline line (.line-track / .line-fill) to a fixed point on screen,
 *               sprays sparks from its tip and marks each milestone ([data-weld]) as welded
 *               once the tip reaches its dot.
 * tone="light": for light backgrounds (normal blending instead of additive light).
 */
export default function WeldSparks({ mode = 'words', tone = 'dark', className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    const host = canvas.parentElement.parentElement // wrapper span -> section content
    const light = tone === 'light'
    let parts = []
    let raf = 0
    let visible = false
    let last = 0
    let lastFront = null
    let hotEl = null
    let pEl = null
    let w = 0
    let h = 0

    // ---------- targets ----------
    const wordRoot = host.classList.contains('word-reveal') ? host : host.querySelector('.word-reveal')
    const words = wordRoot ? [...wordRoot.querySelectorAll('.w')] : []
    const track = host.querySelector('.line-track')
    const fill = host.querySelector('.line-fill')
    const milestones = [...host.querySelectorAll('[data-weld]')].map((li) => ({ li, dot: li.querySelector('.tl-dot') }))

    if (mode === 'line') {
      if (!track || !fill) return
      host.classList.add('weld-ready') // years start dim only when the effect can actually run
      fill.style.setProperty('--line', '0')
    }

    const setHot = (el) => {
      if (el === hotEl) return
      hotEl?.classList.remove('is-hot')
      hotEl = el
      el?.classList.add('is-hot')
    }

    const readP = () => {
      if (pEl) return parseFloat(pEl.style.getPropertyValue('--p'))
      let el = wordRoot
      while (el && el !== document.body) {
        if (el.style?.getPropertyValue('--p')) {
          pEl = el
          return parseFloat(el.style.getPropertyValue('--p'))
        }
        el = el.parentElement
      }
      return null
    }

    const wordsTarget = () => {
      if (!wordRoot || !words.length) return null
      const p = readP()
      if (p == null || Number.isNaN(p)) return null
      const n = words.length
      const k = parseFloat(wordRoot.style.getPropertyValue('--k')) || 1
      // Same formula as .word-reveal .w opacity in globals.css
      const f = p * (n + 6) * k
      if (f <= 0.05 || f >= n) {
        setHot(null)
        return { done: true, front: f }
      }
      const i = Math.floor(f)
      const word = words[i]
      setHot(word)
      const r = word.getBoundingClientRect()
      return { x: r.left + r.width * Math.min(f - i, 1) * 0.92, y: r.top + r.height * 0.58, front: f, speedScale: 30 }
    }

    const lineTarget = () => {
      const tr = track.getBoundingClientRect()
      // Tip rides at ~62% of the viewport height, so the welding always happens in view.
      const scale = Math.min(Math.max((window.innerHeight * 0.62 - tr.top) / Math.max(tr.height, 1), 0), 1)
      fill.style.setProperty('--line', scale.toFixed(4))
      const tipY = tr.top + tr.height * scale
      milestones.forEach(({ li, dot }) => {
        if (!dot) return
        const d = dot.getBoundingClientRect()
        li.classList.toggle('is-welded', tipY >= d.top + d.height / 2 - 1)
      })
      if (scale <= 0.001 || scale >= 0.999) return { done: true, front: scale * 1000 }
      return { x: tr.left + tr.width / 2, y: tipY, front: scale * 1000, speedScale: 0.9 }
    }

    // ---------- particles ----------
    const emit = (x, y, hot) => {
      if (parts.length > 340) return
      const a = Math.random() * Math.PI * 2
      const sp = (hot ? 1.6 : 0.8) * (1 + Math.random() * 4.2)
      parts.push({
        x,
        y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - Math.random() * 1.8, // slight upward kick, then gravity pulls down
        life: 1,
        decay: 0.014 + Math.random() * 0.03,
        size: Math.random() < 0.12 ? 2.4 : 0.8 + Math.random() * 1.1,
      })
    }

    const color = (t, a) => {
      if (light) {
        if (t > 0.7) return `rgba(255,190,80,${a})`
        if (t > 0.4) return `rgba(237,137,54,${a})`
        return `rgba(192,86,33,${a})`
      }
      if (t > 0.78) return `rgba(255,252,235,${a})`
      if (t > 0.55) return `rgba(255,218,120,${a})`
      if (t > 0.3) return `rgba(255,150,55,${a})`
      return `rgba(215,80,30,${a})`
    }

    const drawArc = (x, y, moving) => {
      const r = (moving ? 26 : 13) * (0.75 + Math.random() * 0.5)
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      if (light) {
        g.addColorStop(0, 'rgba(255,245,215,0.95)')
        g.addColorStop(0.3, 'rgba(246,173,85,0.55)')
        g.addColorStop(1, 'rgba(221,107,32,0)')
      } else {
        g.addColorStop(0, 'rgba(255,255,255,0.95)')
        g.addColorStop(0.18, 'rgba(190,220,255,0.75)') // blue-white arc core
        g.addColorStop(0.45, 'rgba(255,170,60,0.32)')
        g.addColorStop(1, 'rgba(255,120,30,0)')
      }
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const loop = (t) => {
      raf = requestAnimationFrame(loop)
      const dt = last ? Math.min((t - last) / 16.67, 3) : 1
      last = t
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = light ? 'source-over' : 'lighter'

      const target = mode === 'line' ? lineTarget() : wordsTarget()
      if (target && !target.done) {
        const cr = canvas.getBoundingClientRect()
        const x = target.x - cr.left
        const y = target.y - cr.top
        const speed = lastFront == null ? 0 : Math.abs(target.front - lastFront)
        const moving = speed > 0.0005
        // Heavy spray while the reveal advances, a gentle crackle while it rests mid-word.
        const count = moving ? Math.min(16, 3 + speed * target.speedScale) : Math.random() < 0.35 ? 1 : 0
        for (let i = 0; i < count; i++) emit(x, y, moving)
        drawArc(x, y, moving)
      }
      if (target) lastFront = target.front

      ctx.lineCap = 'round'
      parts = parts.filter((p) => {
        p.vx *= Math.pow(0.984, dt)
        p.vy = p.vy * Math.pow(0.984, dt) + 0.15 * dt
        p.x += p.vx * dt
        p.y += p.vy * dt
        p.life -= p.decay * dt
        if (p.life <= 0 || p.x < -20 || p.x > w + 20 || p.y > h + 20) return false
        ctx.strokeStyle = color(p.life, Math.min(p.life * 1.4, 1))
        ctx.lineWidth = p.size
        ctx.beginPath()
        ctx.moveTo(p.x - p.vx * 2.2, p.y - p.vy * 2.2) // streak along the direction of travel
        ctx.lineTo(p.x, p.y)
        ctx.stroke()
        return true
      })

      if (!visible && parts.length === 0) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.max(1, Math.round(w * dpr))
      canvas.height = Math.max(1, Math.round(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !raf) {
        last = 0
        lastFront = null
        raf = requestAnimationFrame(loop)
      }
    })
    const ro = new ResizeObserver(resize)
    resize()
    ro.observe(canvas)
    io.observe(host)

    return () => {
      io.disconnect()
      ro.disconnect()
      cancelAnimationFrame(raf)
      setHot(null)
    }
  }, [mode, tone])

  // Canvas is a replaced element (won't stretch to left/right insets), so a sized wrapper box sets its area.
  const inset = mode === 'line' ? '-inset-x-10 -inset-y-12' : '-inset-x-12 -top-16 -bottom-24'
  return (
    <span className={`absolute ${inset} pointer-events-none z-10 block ${className}`} aria-hidden="true">
      <canvas ref={ref} className="block w-full h-full" />
    </span>
  )
}
