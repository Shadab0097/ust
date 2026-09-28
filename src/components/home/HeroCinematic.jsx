import Link from 'next/link'
import { ArrowDown, MapPin } from '@phosphor-icons/react/dist/ssr'
import ScrollScene from '@/components/motion/ScrollScene'
import PillButton from '@/components/ui/PillButton'
import FireParticles from './FireParticles'
import { getAllProducts } from '@/data/catalog'
import { site } from '@/data/site'

export default function HeroCinematic() {
  const products = getAllProducts()

  return (
    <ScrollScene as="section" mode="exit" className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-primary-900 text-white" aria-label="Introduction">
      {/* Media layer - scales gently as you scroll away */}
      <div className="hero-media absolute inset-0">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/assets/hydroTurbine/ht1.jpg" aria-hidden="true">
          <source src="/videos/ust-video.mp4" type="video/mp4" />
        </video>
      </div>
      <FireParticles />
      <div className="absolute inset-0 z-30 bg-gradient-to-t from-primary-900 via-primary-900/55 to-primary-900/30" aria-hidden="true" />
      <div className="absolute inset-0 z-30 bg-gradient-to-r from-primary-900/80 via-transparent to-transparent" aria-hidden="true" />

      <div className="hero-copy relative z-40 flex-1 flex flex-col justify-end container-custom max-w-7xl pt-28 md:pt-32 pb-8 md:pb-12">
        <p className="eyebrow bg-white/10 ring-1 ring-white/15 text-white/90 mb-6 md:mb-7 w-max animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse-dot" aria-hidden="true" />
          Est. {site.foundingYear} &middot; IMT Manesar, Gurgaon
        </p>
        {/* Font size is capped by viewport height so the hero fits short laptop screens */}
        <h1
          className="max-w-[17ch] font-display font-wide font-semibold tracking-[-0.035em] leading-[0.95] text-[2.35rem] sm:text-6xl md:text-7xl lg:text-[min(5.5rem,10vh)] text-balance animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          Industrial machinery, <span className="text-accent-400 italic font-medium">engineered</span> in Gurgaon since 1970.
        </h1>

        <div className="mt-7 md:mt-9 grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="max-w-xl text-base sm:text-lg md:text-xl text-primary-100/85 leading-relaxed text-pretty animate-fade-up" style={{ animationDelay: '180ms' }}>
              We design and fabricate dust collectors, paint shops, conveyors, process and grain machinery for factories
              across India - under one roof, from first drawing to final commissioning.
            </p>
            <div className="mt-7 md:mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '280ms' }}>
              <PillButton href="/products/" size="lg">Explore machines</PillButton>
              <PillButton href="/quote/" tone="ghost" size="lg">Get a factory quote</PillButton>
            </div>
          </div>

          {/* Machined "plate" card (double-bezel) */}
          <div className="lg:col-span-5 xl:col-span-4 xl:col-start-9 animate-fade-up hidden md:block" style={{ animationDelay: '380ms' }}>
            <div className="rounded-[2rem] p-1.5 bg-white/5 ring-1 ring-white/10">
              <div className="rounded-[calc(2rem-0.375rem)] bg-primary-900/60 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] p-6">
                <dl className="grid grid-cols-3 gap-4 text-center">
                  {[['55+', 'Years'], ['15', 'Machine lines'], ['1000+', 'Projects']].map(([n, l]) => (
                    <div key={l}>
                      <dt className="sr-only">{l}</dt>
                      <dd className="font-display font-wide text-3xl font-semibold tracking-tight">{n}</dd>
                      <dd className="text-[11px] uppercase tracking-[0.16em] text-primary-200 mt-1">{l}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3 text-sm text-primary-100">
                  <MapPin size={20} weight="light" className="text-accent-400 shrink-0" aria-hidden="true" />
                  Plot 207, Sector 8, IMT Manesar - visitors welcome for trials
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#story" className="tall-only mt-10 items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/60 hover:text-white transition-colors w-max">
          <span className="w-9 h-9 rounded-full ring-1 ring-white/25 flex items-center justify-center animate-bounce">
            <ArrowDown size={14} aria-hidden="true" />
          </span>
          Scroll the story
        </a>
      </div>

      {/* Product ticker - real links for crawlers; duplicate set is aria-hidden */}
      <div className="relative z-40 border-t border-white/10 bg-primary-900/70 backdrop-blur-sm py-4 overflow-hidden">
        <ul className="marquee-track flex w-max animate-marquee-slow whitespace-nowrap">
          {[...products, ...products].map((p, i) => (
            <li key={`${p.slug}-${i}`} aria-hidden={i >= products.length ? 'true' : undefined} className="flex items-center">
              <Link
                href={`/products/${p.slug}/`}
                tabIndex={i >= products.length ? -1 : undefined}
                className="px-6 text-sm md:text-base font-display font-medium text-white/70 hover:text-accent-300 transition-colors"
              >
                {p.name}
              </Link>
              <span className="w-1 h-1 rounded-full bg-accent-500" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </ScrollScene>
  )
}
