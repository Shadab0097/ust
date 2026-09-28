import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Reveal from '@/components/ui/Reveal'
import { solutions } from '@/data/solutions'

// Asymmetric bento: 12-col grid on desktop, 2-col on tablet, single column on mobile.
const layout = [
  'lg:col-span-7 lg:h-[30rem]',
  'lg:col-span-5 lg:h-[30rem]',
  'lg:col-span-4 lg:h-[24rem]',
  'lg:col-span-4 lg:h-[24rem]',
  'lg:col-span-4 lg:h-[24rem]',
  'lg:col-span-3 lg:h-[20rem]',
  'lg:col-span-3 lg:h-[20rem]',
  'lg:col-span-3 lg:h-[20rem]',
]

export default function IndustriesBento({ showHeading = true, eyebrow = 'Chapter 04 \u00b7 Who we build for', headingLevel = 'h3' }) {
  const Title = headingLevel
  return (
    <section
      className="bg-white py-24 md:py-36"
      aria-labelledby={showHeading ? 'industries-heading' : undefined}
      aria-label={showHeading ? undefined : 'Industries'}
    >
      <div className="container-custom max-w-7xl">
        {showHeading && (
          <div className="grid lg:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow bg-primary-900/5 text-primary-700 mb-6">{eyebrow}</p>
              <h2 id="industries-heading" className="display-lg text-4xl md:text-6xl text-primary-900">
                One workshop. Eight industries.
              </h2>
            </div>
            <p className="lg:col-span-5 text-lg text-primary-600 leading-relaxed">
              Automotive paint shops, pharma blending rooms, cement dust lines, dal mills and hydro projects - each gets
              machines engineered around its own process and compliance needs.
            </p>
          </div>
        )}

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 90} className={layout[i] || 'lg:col-span-4 lg:h-[22rem]'}>
              <Link href={`/solutions/${s.slug}/`} className="group relative block h-80 lg:h-full bezel">
                <div className="relative h-full rounded-[calc(2rem-0.375rem)] overflow-hidden bg-primary-800">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-spring group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/35 to-primary-900/5 transition-opacity duration-700 group-hover:opacity-90" />
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                    <span className="rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                      {s.products.length} {s.products.length > 1 ? 'machines' : 'machine'}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white text-primary-900 flex items-center justify-center transition-all duration-500 ease-spring group-hover:bg-accent-500 group-hover:text-white group-hover:rotate-45" aria-hidden="true">
                      <ArrowUpRight size={18} weight="bold" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 md:p-7 text-white">
                    <Title className="font-display font-semibold tracking-tight leading-tight text-2xl md:text-[1.7rem] text-balance">{s.name}</Title>
                    <p className="mt-2 text-sm text-primary-100/80 line-clamp-2 max-w-md transition-all duration-700 ease-spring lg:opacity-0 lg:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                      {s.seoDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal as="li" delay={180} className="md:col-span-2 lg:col-span-3 lg:h-[20rem]">
            <Link
              href="/quote/"
              className="group h-80 lg:h-full rounded-[2rem] bg-accent-500 text-white p-7 flex flex-col justify-between transition-colors duration-500 hover:bg-accent-600"
            >
              <span className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 ease-spring group-hover:rotate-45" aria-hidden="true">
                <ArrowUpRight size={22} weight="bold" />
              </span>
              <span>
                <span className="block font-display font-semibold text-2xl tracking-tight leading-tight">Not listed? We build special-purpose machines too.</span>
                <span className="block mt-3 text-sm text-white/85">Share your requirement &rarr;</span>
              </span>
            </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
