'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'

/**
 * Pinned horizontal product rail on ALL screen sizes: vertical scroll drives the rail sideways.
 * - Uses the *small* viewport height (100svh) so mobile address-bar show/hide doesn't make it jump.
 * - Falls back to a native swipeable snap rail when the user prefers reduced motion.
 * - All product links are in the server HTML either way.
 */
export default function ProductRail({ products, heading, intro }) {
  const wrapRef = useRef(null)
  const trackRef = useRef(null)
  const probeRef = useRef(null)
  const [pinned, setPinned] = useState(false)
  const [height, setHeight] = useState(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    const probe = probeRef.current
    if (!wrap || !track || !probe) return
    const mq = window.matchMedia('(prefers-reduced-motion: no-preference)')
    let raf = 0
    let active = false
    let vh = 0
    let lastWidth = 0

    const measure = (force = false) => {
      const enabled = mq.matches
      setPinned(enabled)
      if (!enabled) {
        setHeight(null)
        wrap.style.setProperty('--p', '0')
        return
      }
      // Ignore height-only resizes (mobile URL bar); re-measure on width changes.
      if (!force && window.innerWidth === lastWidth) return
      lastWidth = window.innerWidth
      vh = probe.offsetHeight || window.innerHeight // 100svh in px
      const dist = Math.max(track.scrollWidth - document.documentElement.clientWidth, 0)
      wrap.style.setProperty('--dist', `${dist}px`)
      setHeight(Math.round(dist + vh))
    }
    const update = () => {
      raf = 0
      if (!mq.matches) return
      const r = wrap.getBoundingClientRect()
      const p = Math.min(Math.max(-r.top / Math.max(r.height - vh, 1), 0), 1)
      wrap.style.setProperty('--p', p.toFixed(4))
    }
    const onScroll = () => active && !raf && (raf = requestAnimationFrame(update))
    const onResize = () => { measure(); update() }
    const onMq = () => { measure(true); update() }
    const io = new IntersectionObserver(([e]) => {
      active = e.isIntersecting
      if (active) update()
    })

    measure(true)
    update()
    io.observe(wrap)
    const ro = new ResizeObserver(() => { measure(true); update() })
    ro.observe(track)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    mq.addEventListener('change', onMq)
    return () => {
      io.disconnect()
      ro.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      mq.removeEventListener('change', onMq)
    }
  }, [])

  return (
    <section
      ref={wrapRef}
      id="products"
      className="relative bg-primary-50"
      style={pinned && height ? { height } : undefined}
      aria-labelledby="rail-heading"
    >
      {/* Invisible probe that reports 100svh in px */}
      <div ref={probeRef} className="absolute top-0 left-0 w-px h-[100svh] pointer-events-none invisible" aria-hidden="true" />

      <div className={`${pinned ? 'sticky top-0 h-[100svh] pt-24 pb-6 lg:pt-0 lg:pb-0' : 'py-24'} flex flex-col justify-center overflow-hidden`}>
        <div className="container-custom max-w-7xl flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8 mb-6 md:mb-10 lg:mb-[4vh] lg:pt-[12vh]">
          <div className="max-w-2xl">
            <p className="eyebrow bg-primary-900/5 text-primary-700 mb-4 md:mb-6 lg:mb-[2.5vh]">Chapter 03 &middot; The catalogue</p>
            <h2 id="rail-heading" className="display-lg text-[2rem] sm:text-4xl md:text-6xl lg:text-[min(3.75rem,7vh)] text-primary-900">
              {heading}
            </h2>
            <p className={`${pinned ? 'rail-intro' : ''} mt-5 text-lg text-primary-600 max-w-xl`}>{intro}</p>
          </div>
          <div className="flex items-center gap-4 md:gap-5 shrink-0">
            <div className="flex-1 md:flex-none md:w-40 h-px bg-primary-900/10 overflow-hidden" aria-hidden="true">
              <div className="progress-bar h-full bg-accent-500" />
            </div>
            <Link href="/products/" className="pill-btn group inline-flex items-center gap-3 rounded-full bg-primary-900 text-white pl-5 pr-1.5 py-1.5 text-sm font-semibold hover:bg-primary-800 transition-colors">
              All {products.length} machines
              <span className="pill-icon w-8 h-8 rounded-full bg-white/10 flex items-center justify-center" aria-hidden="true">
                <ArrowUpRight size={16} weight="bold" />
              </span>
            </Link>
          </div>
        </div>

        <div className={pinned ? '' : 'overflow-x-auto no-scrollbar snap-x snap-mandatory'}>
          <ul ref={trackRef} className={`${pinned ? 'rail-track' : ''} flex w-max gap-4 md:gap-6 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] pb-2`}>
            {products.map((p, i) => (
              <li
                key={p.slug}
                className="snap-start shrink-0 w-[min(78vw,calc((100svh-20rem)*0.8))] sm:w-[min(22rem,calc((100svh-20rem)*0.8))] lg:w-[min(24rem,calc((100svh-19rem)*0.8))]"
              >
                <Link href={`/products/${p.slug}/`} className="group block rounded-[2rem] p-1.5 bg-white ring-1 ring-primary-900/5 shadow-[0_20px_60px_-30px_rgba(16,42,67,0.35)] transition-transform duration-700 ease-spring hover:-translate-y-1.5">
                  <div className="relative aspect-[4/5] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-primary-100">
                    <Image
                      src={p.images[0]}
                      alt={`${p.name} manufactured by U.S.T Enterprises, Gurgaon`}
                      fill
                      sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 80vw"
                      className="object-cover transition-transform duration-[1200ms] ease-spring group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/10 to-transparent" />
                    <span className="absolute top-4 left-4 right-14 truncate rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-800 w-max max-w-[calc(100%-4.5rem)]">
                      {p.category}
                    </span>
                    <span className="absolute top-4 right-4 font-display text-white/80 text-sm tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 text-white">
                      <h3 className="font-display font-semibold text-xl md:text-2xl tracking-tight leading-tight">{p.name}</h3>
                      <p className="mt-2 text-sm text-primary-100/85 line-clamp-2">{p.shortDescription}</p>
                      <span className="mt-4 md:mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                        View specifications
                        <span className="pill-icon w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center transition-transform duration-500 ease-spring group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true">
                          <ArrowUpRight size={15} weight="bold" />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
