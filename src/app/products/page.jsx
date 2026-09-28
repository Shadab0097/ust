import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, PencilRuler, Wrench, Handshake } from '@phosphor-icons/react/dist/ssr'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/ui/ProductCard'
import Reveal from '@/components/ui/Reveal'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import ProductFilter from '@/components/products/ProductFilter'
import { getAllProducts } from '@/data/catalog'
import { solutions } from '@/data/solutions'
import { buildMetadata, itemListSchema, webPageSchema } from '@/lib/seo'

const TITLE = 'Industrial Machines Catalogue & Prices'
const DESCRIPTION =
  'Browse 15 industrial machines made in Gurgaon: dust collectors, blowers, paint booths, ribbon blenders, conveyors, destoners, hammer mills & hydro turbines.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/products/',
  keywords: [
    'industrial machinery products',
    'industrial machine price list India',
    'industrial equipment catalogue',
    'machinery manufacturer Gurgaon products',
    'buy industrial machine online India',
    ...getAllProducts().map((p) => `${p.name} manufacturer`),
  ],
})

const custom = [
  { icon: PencilRuler, title: 'Application-specific design', text: 'Tailored to your material, capacity and floor layout.' },
  { icon: Wrench, title: 'Material selection', text: 'MS, SS304, SS316, wear-resistant liners and special finishes.' },
  { icon: Handshake, title: 'Technical consultation', text: 'Expert guidance from concept and drawings to installation.' },
]

export default function ProductsPage() {
  const products = getAllProducts()
  const categories = [...new Set(products.map((p) => p.category))]

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: '/products/', name: TITLE, description: DESCRIPTION, type: 'CollectionPage' }),
          itemListSchema(products, 'U.S.T Enterprises product catalogue'),
        ]}
      />

      <PageHero
        eyebrow="The catalogue"
        title="Industrial machinery, built in-house."
        subtitle="Fifteen machine lines engineered for durability, efficiency and precision - every one designed, fabricated and tested at our IMT Manesar works, and built to your specification."
        image="/assets/dustCollector/dimg2.jpg"
        aside={
          <dl className="bezel-dark">
            <div className="bezel-dark-core grid grid-cols-3 divide-x divide-white/10 py-6">
              {[[products.length, 'Machines'], [categories.length, 'Categories'], [solutions.length, 'Industries']].map(([n, l]) => (
                <div key={l} className="text-center px-2">
                  <dt className="sr-only">{l}</dt>
                  <dd className="display-lg text-4xl">{n}</dd>
                  <dd className="text-[11px] uppercase tracking-[0.16em] text-primary-300 mt-1">{l}</dd>
                </div>
              ))}
            </div>
          </dl>
        }
      >
        <Breadcrumbs items={[{ name: 'Products', path: '/products/' }]} />
      </PageHero>

      <section className="section bg-white">
        <div className="container-custom max-w-7xl">
          <SectionHeading
            eyebrow={`${products.length} machines`}
            title="Find the right machine for your plant."
            subtitle="Filter by category, or open any product for full technical specifications, features, applications and FAQs."
          />
          <ProductFilter
            categories={categories}
            items={products.map((p, i) => ({
              key: p.slug,
              category: p.category,
              element: <ProductCard product={p} priority={i < 3} headingLevel="h2" />,
            }))}
          />
        </div>
      </section>

      {/* Industries strip */}
      <section className="py-20 md:py-24 bg-primary-50 border-y border-primary-900/5">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <p className="eyebrow bg-primary-900/5 text-primary-700 mb-5">Browse by industry</p>
            <h2 className="display-md text-3xl md:text-4xl text-primary-900">Complete solutions for your sector.</h2>
          </div>
          <ul className="lg:col-span-8 flex flex-wrap gap-2.5">
            {solutions.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 50}>
                <Link
                  href={`/solutions/${s.slug}/`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-primary-900/10 pl-5 pr-1.5 py-1.5 text-primary-800 font-medium hover:ring-accent-400 transition-all duration-500"
                >
                  {s.name}
                  <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center transition-all duration-500 ease-spring group-hover:bg-accent-500 group-hover:text-white group-hover:rotate-45" aria-hidden="true">
                    <ArrowUpRight size={14} weight="bold" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Custom manufacturing */}
      <section className="section bg-white overflow-hidden">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="bezel">
              <div className="relative aspect-[5/4] rounded-[calc(2rem-0.375rem)] overflow-hidden">
                <Image src="/assets/sheetRolling/sr2.jpg" alt="Custom heavy fabrication at U.S.T Enterprises, Gurgaon" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 right-6 md:-right-6 rounded-[1.5rem] bg-accent-500 text-white px-6 py-4 shadow-[0_20px_50px_-20px_rgba(221,107,32,0.7)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/80">Special purpose</p>
              <p className="font-display font-semibold text-xl">Custom built</p>
            </div>
          </Reveal>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <SectionHeading
              eyebrow="Beyond the catalogue"
              title="Custom machine manufacturing."
              subtitle="We design and manufacture special purpose machines (SPM) and custom industrial equipment around your exact application."
              className="!mb-10"
            />
            <ul className="border-t border-primary-900/10">
              {custom.map(({ icon: Icon, title, text }, i) => (
                <Reveal as="li" key={title} delay={i * 80} className="flex items-start gap-5 py-6 border-b border-primary-900/10">
                  <span className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center shrink-0" aria-hidden="true">
                    <Icon size={24} weight="light" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-xl tracking-tight text-primary-900">{title}</h3>
                    <p className="mt-1 text-primary-600">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
