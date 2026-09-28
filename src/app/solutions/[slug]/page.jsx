import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import PageHero from '@/components/ui/PageHero'
import ProductCard from '@/components/ui/ProductCard'
import Reveal from '@/components/ui/Reveal'
import FaqList from '@/components/ui/FaqList'
import SectionHeading from '@/components/ui/SectionHeading'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { solutions } from '@/data/solutions'
import { getSolutionBySlug, getProductsForSolution } from '@/data/catalog'
import { solutionMetaTitles, solutionMetaDescriptions } from '@/data/productSeo'
import { site } from '@/data/site'
import { buildMetadata, itemListSchema, webPageSchema, faqSchema } from '@/lib/seo'

export const dynamicParams = false
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const s = getSolutionBySlug(slug)
  if (!s) return {}
  const products = getProductsForSolution(s)
  return buildMetadata({
    title: solutionMetaTitles[s.slug] || s.seoTitle,
    absoluteTitle: Boolean(solutionMetaTitles[s.slug]),
    description: solutionMetaDescriptions[s.slug] || s.seoDescription,
    path: `/solutions/${s.slug}/`,
    keywords: [...s.keywords, ...products.map((p) => `${p.name} manufacturer`)],
    images: [s.image],
  })
}

// Solution-level FAQs are generated from the data so each page gets unique Q&A.
const buildFaqs = (s, products) => [
  {
    question: `Which ${s.shortName.toLowerCase()} machines does U.S.T Enterprises manufacture?`,
    answer: `We manufacture ${products.map((p) => p.name).join(', ')} at our factory in IMT Manesar, Gurgaon. All equipment can be customised for capacity, material of construction and automation.`,
  },
  {
    question: `Do you provide installation for ${s.shortName.toLowerCase()} projects outside Haryana?`,
    answer: `Yes. We supply and install ${s.shortName.toLowerCase()} equipment across India, including Delhi NCR, Rajasthan, Punjab, Uttar Pradesh, Gujarat and Maharashtra, with commissioning and after-sales support.`,
  },
  {
    question: `How can I get a quotation for ${s.shortName.toLowerCase()} equipment?`,
    answer: `Send your requirement through our quote form, WhatsApp or call ${site.phones[1].display}. Share application details, capacity and location, and we will reply with a techno-commercial offer, usually within 24 hours.`,
  },
]

export default async function SolutionPage({ params }) {
  const { slug } = await params
  const s = getSolutionBySlug(slug)
  if (!s) notFound()
  const products = getProductsForSolution(s)
  const faqs = buildFaqs(s, products)
  const path = `/solutions/${s.slug}/`
  const others = solutions.filter((o) => o.slug !== s.slug)

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path, name: s.seoTitle, description: s.seoDescription, type: 'CollectionPage' }),
          itemListSchema(products, s.name),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow={s.shortName}
        title={s.h1}
        subtitle={s.seoDescription}
        image={s.image}
        aside={
          <div className="bezel-dark hidden lg:block">
            <div className="relative aspect-[4/3] rounded-[calc(2rem-0.375rem)] overflow-hidden">
              <Image src={s.image} alt={s.name} fill sizes="40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
              <p className="absolute bottom-5 left-6 text-sm text-white/90">
                {products.length} machine{products.length > 1 ? 's' : ''} &middot; built in IMT Manesar
              </p>
            </div>
          </div>
        }
      >
        <Breadcrumbs items={[{ name: 'Industries', path: '/solutions/' }, { name: s.shortName, path }]} />
      </PageHero>

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title={s.name} className="!mb-8" />
            <Reveal>
              <p className="text-lg md:text-xl text-primary-700 leading-[1.8] text-pretty">{s.intro}</p>
            </Reveal>
          </div>
          <Reveal as="aside" delay={120} className="lg:col-span-5 bezel h-fit">
            <div className="bezel-core p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4 font-sans">Popular searches</h3>
              <ul className="flex flex-wrap gap-2">
                {s.keywords.map((k) => (
                  <li key={k} className="chip capitalize">{k}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-primary-50">
        <div className="container-custom max-w-7xl">
          <SectionHeading eyebrow="Machines" title={`${s.shortName} products`} subtitle="Open any machine for full specifications, features, applications and FAQs." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProductCard product={p} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow bg-primary-900/5 text-primary-700 mb-5">Answers</p>
              <h2 id="faq-heading" className="display-lg text-3xl md:text-4xl text-primary-900">Frequently asked questions</h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="py-20 bg-primary-50 border-t border-primary-900/5">
        <div className="container-custom max-w-7xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-6 font-sans">Other industries we serve</h2>
          <ul className="flex flex-wrap gap-2.5">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/solutions/${o.slug}/`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-primary-900/10 pl-5 pr-1.5 py-1.5 text-primary-800 font-medium hover:ring-accent-400 transition-all duration-500"
                >
                  {o.name}
                  <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center transition-all duration-500 ease-spring group-hover:bg-accent-500 group-hover:text-white group-hover:rotate-45" aria-hidden="true">
                    <ArrowUpRight size={14} weight="bold" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
