'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Phone, WhatsappLogo } from '@phosphor-icons/react'
import { nav, site } from '@/data/site'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setIsOpen(false), [pathname])

  // Lock page scroll while the full-screen menu is open; close on Escape.
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href.replace(/\/$/, '')))
  const solid = scrolled && !isOpen

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-charcoal px-4 py-2 rounded-full">
        Skip to content
      </a>

      <div
        className={`relative z-10 mx-auto max-w-7xl flex items-center justify-between rounded-full pl-3 pr-2 py-2 transition-all duration-700 ease-spring ${
          solid
            ? 'bg-white/85 backdrop-blur-xl text-charcoal ring-1 ring-primary-900/5 shadow-[0_8px_40px_-12px_rgba(16,42,67,0.25)]'
            : 'bg-transparent text-white'
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 pr-3" aria-label={`${site.name} - Home`}>
          <Image src="/logo.png" alt={`${site.name} logo`} width={36} height={36} className="rounded-full bg-white p-0.5" priority />
          <span className="font-display font-bold text-lg tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {nav.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  active
                    ? solid ? 'bg-primary-900/5 text-primary-900' : 'bg-white/10 text-white'
                    : solid ? 'text-primary-700 hover:text-primary-900' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phones[1].tel}`}
            className={`hidden xl:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${solid ? 'text-primary-700 hover:text-primary-900' : 'text-white/80 hover:text-white'}`}
          >
            <Phone size={16} weight="light" aria-hidden="true" />
            {site.phones[1].display}
          </a>
          <Link
            href="/quote/"
            className="pill-btn hidden sm:inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white pl-5 pr-1.5 py-1.5 text-sm font-semibold transition-all duration-500 ease-spring active:scale-[0.98]"
          >
            Get Quote
            <span className="pill-icon w-8 h-8 rounded-full bg-white/15 flex items-center justify-center" aria-hidden="true">
              <ArrowUpRight size={16} weight="bold" />
            </span>
          </Link>
          <button
            type="button"
            className={`burger lg:hidden relative w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5 transition-colors ${
              solid ? 'bg-primary-900/5' : 'bg-white/10'
            } ${isOpen ? 'text-white' : ''}`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <span className="block w-5 h-[2px] rounded-full bg-current" />
            <span className="block w-5 h-[2px] rounded-full bg-current" />
          </button>
        </div>
      </div>

      {/* Full-screen overlay menu */}
      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-0 bg-primary-900/95 backdrop-blur-2xl transition-opacity duration-500 ease-spring ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="h-full flex flex-col justify-between px-6 pt-28 pb-10" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {[...nav, { href: '/quote/', label: 'Get a Quote' }].map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <Link
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  className={`block font-display font-semibold text-4xl sm:text-5xl tracking-tight py-2 transition-all duration-700 ease-spring ${
                    isActive(item.href) ? 'text-accent-400' : 'text-white'
                  } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: isOpen ? `${120 + i * 60}ms` : '0ms' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`grid grid-cols-2 gap-3 transition-all duration-700 ease-spring ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: isOpen ? '480ms' : '0ms' }}
          >
            <a href={`tel:${site.phones[1].tel}`} tabIndex={isOpen ? 0 : -1} className="flex items-center justify-center gap-2 rounded-full bg-white/10 text-white py-3 text-sm font-medium">
              <Phone size={18} weight="light" aria-hidden="true" /> Call us
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1} className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-3 text-sm font-medium">
              <WhatsappLogo size={18} weight="fill" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
