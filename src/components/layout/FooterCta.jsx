'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, WhatsappLogo, Phone, EnvelopeSimple, Clock } from '@phosphor-icons/react'
import { site } from '@/data/site'

/**
 * The single site-wide call-to-action, rendered at the top of the footer.
 * Adapts to the page: product pages get a product-specific heading and a quote link
 * that pre-selects the product; the quote page itself hides it (the form is right there).
 */
export default function FooterCta({ productNames }) {
  const pathname = usePathname() || '/'
  if (pathname.startsWith('/quote')) return null

  const slug = pathname.match(/^\/products\/([^/]+)\/?$/)?.[1]
  const productName = slug ? productNames[slug] : null
  const quoteHref = productName ? `/quote/?product=${encodeURIComponent(productName)}` : '/quote/'
  const waText = productName
    ? `Hello U.S.T Enterprises, I need a quotation for ${productName}.`
    : 'Hello U.S.T Enterprises, I would like a quotation for '

  return (
    <section className="container-custom max-w-7xl relative pt-16 md:pt-24" aria-labelledby="footer-cta-heading">
      <div className="relative overflow-hidden rounded-[2.25rem] md:rounded-[2.75rem] bg-primary-900 ring-1 ring-white/10">
        <Image src="/assets/sheetRolling/sr2.jpg" alt="" fill sizes="(min-width: 1280px) 80rem, 100vw" className="object-cover opacity-[0.18]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-900/90 to-primary-800/70" aria-hidden="true" />
        <div className="absolute inset-0 blueprint opacity-60" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-accent-500/25 blur-3xl" aria-hidden="true" />

        <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 p-7 sm:p-10 md:p-14 lg:p-16">
          <div className="lg:col-span-7">
            <p className="eyebrow bg-white/5 ring-1 ring-white/10 text-primary-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse-dot" aria-hidden="true" />
              Start a project
            </p>
            <h2 id="footer-cta-heading" className="display-lg text-[2.1rem] sm:text-5xl md:text-6xl text-white">
              {productName ? (
                <>Get the best price for <span className="text-accent-400">{productName}</span>.</>
              ) : (
                <>Let&apos;s build what your plant needs <span className="italic font-medium text-accent-400">next.</span></>
              )}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-primary-100/80 max-w-xl leading-relaxed">
              Share your application, capacity and site details - our engineers will send a detailed techno-commercial
              quotation, usually within 24 hours.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={quoteHref}
                className="pill-btn group inline-flex items-center gap-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white pl-7 pr-2 py-2 font-semibold transition-all duration-500 ease-spring active:scale-[0.98]"
              >
                Request a quote
                <span className="pill-icon w-10 h-10 rounded-full bg-white/15 flex items-center justify-center" aria-hidden="true">
                  <ArrowUpRight size={18} weight="bold" />
                </span>
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn group inline-flex items-center gap-3 rounded-full bg-white/5 ring-1 ring-white/20 hover:bg-white/10 text-white pl-7 pr-2 py-2 font-semibold transition-all duration-500 ease-spring active:scale-[0.98]"
              >
                WhatsApp us
                <span className="pill-icon w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center" aria-hidden="true">
                  <WhatsappLogo size={18} weight="fill" />
                </span>
              </a>
            </div>
          </div>

          {/* Direct lines (double-bezel) */}
          <div className="lg:col-span-5 lg:self-end">
            <div className="bezel-dark">
              <ul className="bezel-dark-core divide-y divide-white/10">
                <li>
                  <a href={`tel:${site.phones[1].tel}`} className="group flex items-center gap-4 p-5 hover:bg-white/[0.03] transition-colors">
                    <span className="w-11 h-11 rounded-2xl bg-white/5 text-accent-400 flex items-center justify-center shrink-0" aria-hidden="true">
                      <Phone size={22} weight="light" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-300">Call sales</span>
                      <span className="block font-display text-lg text-white">{site.phones[1].display}</span>
                    </span>
                    <ArrowUpRight size={16} className="ml-auto text-primary-400 transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-4 p-5 hover:bg-white/[0.03] transition-colors">
                    <span className="w-11 h-11 rounded-2xl bg-white/5 text-accent-400 flex items-center justify-center shrink-0" aria-hidden="true">
                      <EnvelopeSimple size={22} weight="light" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-300">Email</span>
                      <span className="block font-display text-base sm:text-lg text-white break-all">{site.email}</span>
                    </span>
                    <ArrowUpRight size={16} className="ml-auto shrink-0 text-primary-400 transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" aria-hidden="true" />
                  </a>
                </li>
                <li className="flex items-center gap-4 p-5">
                  <span className="w-11 h-11 rounded-2xl bg-white/5 text-accent-400 flex items-center justify-center shrink-0" aria-hidden="true">
                    <Clock size={22} weight="light" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-primary-300">Response time</span>
                    <span className="block font-display text-lg text-white">Within 24 hours</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
