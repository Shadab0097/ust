'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { PencilRuler, Fire, PaintRoller, Truck } from '@phosphor-icons/react'

const chapters = [
  {
    n: '01',
    icon: PencilRuler,
    title: 'Engineer',
    heading: 'It starts with your process, not a catalogue.',
    text: 'Our engineers study your material, throughput, floor space and emission norms, then size every fan, filter, motor and drive. You get GA drawings and a clear techno-commercial offer before a single plate is cut.',
    tags: ['Site survey', 'Process sizing', 'GA drawings'],
    image: '/assets/dustCollector/dimg3.jpg',
    alt: 'Cyclone dust collection system engineered by U.S.T Enterprises',
  },
  {
    n: '02',
    icon: Fire,
    title: 'Fabricate',
    heading: 'Heavy steel, cut and welded under one roof.',
    text: 'Cutting, rolling, welding and machining happen in our own IMT Manesar works - in MS, SS304 or SS316. That control is why our frames stay true, our welds hold, and our lead times stay honest.',
    tags: ['MS / SS304 / SS316', 'Plate rolling', 'In-house machining'],
    image: '/assets/hydroTurbine/ht1.jpg',
    alt: 'Large hydro turbine frame under fabrication at the U.S.T Enterprises workshop',
  },
  {
    n: '03',
    icon: PaintRoller,
    title: 'Finish & Test',
    heading: 'Finished to last. Tested before it leaves.',
    text: 'Surface preparation, primer and powder or PU coating protect every machine from rust. Each unit is trial-run and inspected stage-by-stage, and you are welcome to witness the test at our factory.',
    tags: ['Powder / PU coating', 'Trial runs', 'Stage inspection'],
    image: '/assets/waterCurtain/wcimg2.jpg',
    alt: 'Water curtain paint booth in operation built by U.S.T Enterprises',
  },
  {
    n: '04',
    icon: Truck,
    title: 'Install & Support',
    heading: 'Commissioned on your floor. Supported for years.',
    text: 'Our team dispatches, erects and commissions the equipment at your plant anywhere in India, trains your operators, and stays a phone call away for spares and service.',
    tags: ['Pan-India erection', 'Operator training', 'Spares & AMC'],
    image: '/assets/paintShop/psimg2.jpg',
    alt: 'Overhead conveyor paint shop line installed at a client plant',
  },
]

export default function ProcessStory({ eyebrow = 'Chapter 02 \u00b7 How we build' }) {
  const [active, setActive] = useState(0)
  const refs = useRef([])
  const sectionRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    // Active chapter = the last one whose top has reached the "reading line".
    // Phones: the reading line sits just below the pinned photo. Desktop: middle of the screen.
    const section = sectionRef.current
    const frameEl = frameRef.current
    if (!section || !frameEl) return
    let raf = 0
    let inView = false
    const update = () => {
      raf = 0
      const mobile = window.innerWidth < 1024
      const line = mobile ? frameEl.getBoundingClientRect().bottom + 32 : window.innerHeight * 0.5
      let next = 0
      refs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) next = i
      })
      setActive((prev) => (prev === next ? prev : next))
    }
    const onScroll = () => inView && !raf && (raf = requestAnimationFrame(update))
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting
      if (inView) update()
    })
    io.observe(section)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-36" aria-labelledby="process-heading">
      <div className="container-custom max-w-7xl">
        <div className="max-w-3xl mb-12 md:mb-24">
          <p className="eyebrow bg-primary-900/5 text-primary-700 mb-6">{eyebrow}</p>
          <h2 id="process-heading" className="display-lg text-4xl md:text-6xl text-primary-900">
            From drawing board to dispatch.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-16">
          {/* Pinned visual - on phones it pins to the top of the screen, on desktop it pins on the left */}
          <div className="lg:col-span-6 sticky top-0 lg:top-28 z-10 self-start -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pt-20 pb-4 lg:pt-0 lg:pb-0 bg-white lg:bg-transparent">
            <div ref={frameRef} className="rounded-[1.75rem] lg:rounded-[2.25rem] p-1.5 lg:p-2 bg-primary-900/[0.04] ring-1 ring-primary-900/5">
              <div className="relative aspect-[16/10] max-h-[36svh] lg:aspect-[4/5] lg:max-h-[calc(100dvh-10rem)] w-full rounded-[calc(1.75rem-0.375rem)] lg:rounded-[calc(2.25rem-0.5rem)] overflow-hidden bg-primary-100">
                {chapters.map((c, i) => (
                  <Image
                    key={c.image}
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className={`object-cover transition-all duration-[1200ms] ease-spring ${i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 lg:p-7 flex items-end justify-between text-white">
                  <span key={active} className="font-display font-wide text-4xl lg:text-7xl font-semibold tracking-tight leading-none animate-fade-up">
                    {chapters[active].n}
                  </span>
                  <span className="text-xs lg:text-sm uppercase tracking-[0.2em] text-white/80">{chapters[active].title}</span>
                </div>
              </div>
            </div>
            {/* Step indicator */}
            <ol className="mt-3 lg:mt-6 grid grid-cols-4 gap-2" aria-hidden="true">
              {chapters.map((c, i) => (
                <li key={c.n} className="h-1 rounded-full bg-primary-100 overflow-hidden">
                  <span className={`block h-full bg-accent-500 transition-transform duration-700 ease-spring origin-left ${i <= active ? 'scale-x-100' : 'scale-x-0'}`} />
                </li>
              ))}
            </ol>
          </div>

          {/* Chapters - active one is full strength, others dim (all screen sizes) */}
          <ol className="lg:col-span-6">
            {chapters.map((c, i) => {
              const Icon = c.icon
              return (
                <li
                  key={c.n}
                  ref={(el) => (refs.current[i] = el)}
                  data-index={i}
                  className={`py-12 lg:py-0 lg:min-h-[85vh] last:pb-[30svh] lg:last:pb-0 flex flex-col justify-center transition-all duration-700 ease-spring ${
                    i === active ? 'opacity-100 translate-y-0' : 'opacity-25 translate-y-2'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5 lg:mb-6">
                    <span className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center" aria-hidden="true">
                      <Icon size={24} weight="light" />
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                      {c.n} &mdash; {c.title}
                    </span>
                  </div>
                  <h3 className="display-md text-[1.75rem] sm:text-3xl md:text-[2.6rem] text-primary-900 mb-5 lg:mb-6">{c.heading}</h3>
                  <p className="text-base sm:text-lg text-primary-600 leading-relaxed max-w-[52ch]">{c.text}</p>
                  <ul className="mt-6 lg:mt-8 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
