import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react/dist/ssr'
import { site } from '@/data/site'
import { getAllProducts } from '@/data/catalog'
import { solutions } from '@/data/solutions'
import FooterCta from './FooterCta'

export default function Footer() {
  const year = new Date().getFullYear()
  const products = getAllProducts()
  const productNames = Object.fromEntries(products.map((p) => [p.slug, p.name]))

  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 blueprint opacity-40" aria-hidden="true" />
      <FooterCta productNames={productNames} />
      <div className="container-custom max-w-7xl relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 pt-16 md:pt-20 pb-16">
          {/* Company */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.png" alt={`${site.name} logo`} width={40} height={40} className="rounded-full bg-white p-0.5" />
              <span className="font-display text-xl font-bold tracking-tight">{site.name}</span>
            </div>
            <p className="text-primary-300 leading-relaxed max-w-xs">
              Industrial machinery manufacturer in IMT Manesar, Gurgaon since {site.foundingYear}.
            </p>
            <Link href="/about/" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 hover:text-accent-200">
              Our story <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            </Link>
          </div>

          {/* Products - every product linked from every page */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-5 font-sans">Machines</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}/`} className="text-sm text-primary-200 hover:text-white transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-5 font-sans">Industries</h2>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link href={`/solutions/${s.slug}/`} className="text-sm text-primary-200 hover:text-white transition-colors">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - NAP consistent with schema */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-5 font-sans">Visit &amp; contact</h2>
            <address className="not-italic space-y-4 text-sm text-primary-200">
              <p className="flex gap-3">
                <MapPin size={18} weight="light" className="text-accent-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {site.address.streetAddress},<br />
                  {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}, India
                </span>
              </p>
              <p className="flex gap-3">
                <Phone size={18} weight="light" className="text-accent-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="flex flex-col">
                  {site.phones.map((ph) => (
                    <a key={ph.tel} href={`tel:${ph.tel}`} className="hover:text-white">{ph.display}</a>
                  ))}
                </span>
              </p>
              <p className="flex gap-3">
                <EnvelopeSimple size={18} weight="light" className="text-accent-400 shrink-0 mt-0.5" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-white break-all">{site.email}</a>
              </p>
            </address>
          </div>
        </div>

        {/* Oversized wordmark */}
        <p className="display-xl text-[min(8.4vw,7rem)] leading-none text-white/[0.05] select-none -mb-[0.12em] whitespace-nowrap" aria-hidden="true">
          U.S.T Enterprises
        </p>

        <div className="relative border-t border-white/10 py-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-primary-400">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
            <Link href="/products/" className="hover:text-white">Products</Link>
            <Link href="/solutions/" className="hover:text-white">Industries</Link>
            <Link href="/quote/" className="hover:text-white">Request quote</Link>
            <Link href="/contact/" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
