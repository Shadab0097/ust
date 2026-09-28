import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Factory, Wrench, CurrencyInr, Truck, Phone, WhatsappLogo, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import PillButton from '@/components/ui/PillButton'
import FaqList from '@/components/ui/FaqList'
import ProductCard from '@/components/ui/ProductCard'
import Reveal from '@/components/ui/Reveal'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import ProductGallery from '@/components/products/ProductGallery'
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
  getSolutionsForProduct,
  getIndustriesForProduct,
  getProductSeo,
  productImageAlt,
} from '@/data/catalog'
import { site, absoluteUrl, CONTENT_UPDATED } from '@/data/site'
import { buildMetadata, productSchema, faqSchema, webPageSchema } from '@/lib/seo'

// Pre-render every product at build time (SSG). Unknown slugs -> 404 (no soft-404s).
export const dynamicParams = false
export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  const keywords = [
    ...String(product.seoKeywords || '').split(','),
    product.name,
    `${product.name} manufacturer`,
    `${product.name} manufacturer in India`,
    `${product.name} manufacturer in Gurgaon`,
    `${product.name} price`,
    `${product.name} supplier Delhi NCR`,
    product.category,
  ]

  const seo = getProductSeo(slug)
  return buildMetadata({
    // Short (<= 60 chars) so Google shows it in full; the brand appears as the site name in results.
    title: seo.metaTitle || product.seoTitle || `${product.name} Manufacturer in Gurgaon`,
    absoluteTitle: Boolean(seo.metaTitle),
    description: product.seoDescription || product.shortDescription,
    path: `/products/${product.slug}/`,
    keywords,
    images: product.images.slice(0, 4).map((src, i) => ({ url: src, alt: productImageAlt(product, i) })),
  })
}

const promises = [
  { icon: Factory, title: 'Direct manufacturer', text: `Built in IMT Manesar since ${site.foundingYear}` },
  { icon: Wrench, title: 'Made to your spec', text: 'Capacity, MS / SS304 / SS316, automation' },
  { icon: Truck, title: 'Pan-India installation', text: 'Erection, commissioning & training' },
  { icon: CurrencyInr, title: 'Factory pricing', text: 'No middlemen, GST invoice' },
]

export default async function ProductPage({ params }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(slug, 3)
  const solutionsFor = getSolutionsForProduct(slug)
  const industries = getIndustriesForProduct(slug)
  const specs = Object.entries(product.specifications || {})
  const keySpecs = specs.slice(0, 3)
  const galleryImages = product.images.map((src, i) => ({ src, alt: productImageAlt(product, i) }))
  const path = `/products/${product.slug}/`
  const quoteHref = `/quote/?product=${encodeURIComponent(product.name)}`
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello U.S.T Enterprises, I need a quotation for ${product.name}.`)}`
  const seo = getProductSeo(slug)
  const article = /^[aeiou]/i.test(product.name) ? 'an' : 'a'
  const whatIsQ = `What is ${article} ${product.name.toLowerCase()}?`
  // "What is X?" leads the FAQ (visible on page + FAQPage schema) - the #1 query form answer engines serve.
  const faqs = seo.answer ? [{ question: whatIsQ, answer: seo.answer }, ...(product.faqs || [])] : product.faqs || []
  const productId = `${absoluteUrl(path)}#product`

  return (
    <>
      <JsonLd
        data={[
          productSchema(product),
          faqSchema(faqs),
          webPageSchema({
            path,
            name: seo.metaTitle || product.seoTitle || product.name,
            description: product.seoDescription || product.shortDescription,
            type: 'ItemPage',
            mainEntityId: productId,
            image: product.images[0],
          }),
        ]}
      />

      {/* HERO */}
      <section className="relative bg-primary-900 text-white pt-36 md:pt-44 pb-40 md:pb-48 overflow-hidden">
        <Image src={product.images[0]} alt="" fill priority sizes="100vw" className="object-cover opacity-20 blur-2xl scale-110" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/85 to-primary-900/50" aria-hidden="true" />
        <div className="absolute inset-0 blueprint opacity-50" aria-hidden="true" />
        <div className="absolute -top-32 -right-20 w-[36rem] h-[36rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />

        <div className="container-custom max-w-7xl relative z-10">
          <Breadcrumbs items={[{ name: 'Products', path: '/products/' }, { name: product.name, path }]} />
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 animate-fade-up">
              <p className="eyebrow bg-white/10 ring-1 ring-white/15 text-accent-200 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                {product.category}
              </p>
              <h1 className="display-xl text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl">
                {product.name}
                <span className="block mt-3 font-sans font-normal text-xl md:text-2xl tracking-normal text-primary-200" style={{ fontStretch: '100%' }}>
                  Manufacturer in Gurgaon, India
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-100/80 max-w-2xl leading-relaxed">{product.shortDescription}</p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-3 lg:items-end animate-fade-up" style={{ animationDelay: '150ms' }}>
              <PillButton href={quoteHref} size="lg">Get price quote</PillButton>
              <PillButton href={waHref} tone="ghost" size="lg" icon={WhatsappLogo}>WhatsApp</PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY + OVERVIEW */}
      <section className="relative z-20 -mt-28 md:-mt-32 pb-20 md:pb-28">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 min-w-0">
            <div className="lg:sticky lg:top-28">
              <ProductGallery images={galleryImages} name={product.name} />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-36 min-w-0">
            {/* Answer-first block: the question + 50-word answer AI Overviews / ChatGPT / Perplexity quote */}
            {seo.answer && (
              <section className="mb-8 rounded-[1.5rem] bg-primary-50 ring-1 ring-primary-900/5 p-6" aria-labelledby="quick-answer">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-600 mb-2">Quick answer</p>
                <h2 id="quick-answer" className="display-md text-xl md:text-2xl text-primary-900">{whatIsQ.charAt(0).toUpperCase() + whatIsQ.slice(1)}</h2>
                <p className="mt-3 text-primary-700 leading-relaxed">{seo.answer}</p>
              </section>
            )}
            <h2 className="display-md text-2xl md:text-3xl text-primary-900">{product.name} - overview</h2>
            <p className="mt-5 text-lg text-primary-600 leading-relaxed">{product.description}</p>

            {keySpecs.length > 0 && (
              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3">
                {keySpecs.map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-primary-50 ring-1 ring-primary-900/5 p-4">
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-primary-500">{k}</dt>
                    <dd className="mt-1 font-semibold text-primary-900 leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
            )}

            {product.features?.length > 0 && (
              <section className="mt-10" aria-labelledby="features-heading">
                <h3 id="features-heading" className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4 font-sans">Key features</h3>
                <ul className="divide-y divide-primary-900/5 border-y border-primary-900/5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-4 py-3.5">
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center shrink-0" aria-hidden="true">
                        <Check size={13} weight="bold" />
                      </span>
                      <span className="text-primary-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-10 bezel">
              <div className="bezel-core p-6">
                <p className="font-display font-semibold text-lg text-primary-900">Talk to an engineer about this machine</p>
                <p className="mt-1 text-sm text-primary-600">Share your capacity and application - we reply within 24 hours.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <PillButton href={quoteHref}>Request quote</PillButton>
                  <a href={`tel:${site.phones[1].tel}`} className="inline-flex items-center gap-2 rounded-full ring-1 ring-primary-900/15 px-5 py-2.5 text-sm font-semibold text-primary-900 hover:bg-primary-900/5">
                    <Phone size={16} weight="light" aria-hidden="true" /> {site.phones[1].display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="border-y border-primary-900/5 bg-primary-50" aria-label="Why buy from U.S.T Enterprises">
        <ul className="container-custom max-w-7xl grid grid-cols-2 lg:grid-cols-4">
          {promises.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className={`flex items-start gap-4 py-8 px-2 md:px-6 ${i ? 'lg:border-l border-primary-900/10' : ''}`}>
              <Icon size={28} weight="light" className="text-accent-600 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-primary-900">{title}</p>
                <p className="text-sm text-primary-600 mt-0.5">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SPECIFICATIONS - real <table> for snippet eligibility */}
      {specs.length > 0 && (
        <section className="section bg-white" aria-labelledby="specs-heading">
          <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow bg-primary-900/5 text-primary-700 mb-5">Datasheet</p>
                <h2 id="specs-heading" className="display-lg text-3xl md:text-5xl text-primary-900">{product.name} technical specifications</h2>
                <p className="mt-5 text-primary-600">Specifications vary by model. Custom sizes and capacities are available on request.</p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-primary-400">
                  Last reviewed: <time dateTime={CONTENT_UPDATED}>{new Date(CONTENT_UPDATED).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</time>
                </p>
              </div>
            </div>
            <Reveal className="lg:col-span-8">
              <div className="bezel">
                <div className="bezel-core overflow-hidden">
                  <table className="w-full text-left">
                    <caption className="sr-only">{product.name} specifications</caption>
                    <tbody className="divide-y divide-primary-900/5">
                      {specs.map(([k, v]) => (
                        <tr key={k} className="transition-colors hover:bg-primary-50/70">
                          <th scope="row" className="py-4 px-5 md:px-7 font-medium text-primary-500 w-2/5 align-top text-sm md:text-base">{k}</th>
                          <td className="py-4 px-5 md:px-7 font-semibold text-primary-900 text-sm md:text-base">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* APPLICATIONS */}
      {(industries.length > 0 || solutionsFor.length > 0) && (
        <section className="section bg-primary-900 text-white relative overflow-hidden" aria-labelledby="apps-heading">
          <div className="absolute inset-0 blueprint opacity-60" aria-hidden="true" />
          <div className="container-custom max-w-7xl relative grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow bg-white/5 ring-1 ring-white/10 text-primary-200 mb-5">Where it works</p>
              <h2 id="apps-heading" className="display-lg text-3xl md:text-5xl">Applications &amp; industries served</h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="flex flex-wrap gap-2.5">
                {industries.map((ind) => (
                  <li key={ind} className="rounded-full bg-white/5 ring-1 ring-white/15 px-5 py-2 text-primary-100">{ind}</li>
                ))}
              </ul>
              {solutionsFor.length > 0 && (
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-300 mb-4">Part of our solutions for</p>
                  <ul className="flex flex-wrap gap-3">
                    {solutionsFor.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/solutions/${s.slug}/`} className="group inline-flex items-center gap-2 rounded-full bg-white text-primary-900 pl-5 pr-1.5 py-1.5 font-medium">
                          {s.name}
                          <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center transition-all duration-500 ease-spring group-hover:bg-accent-500 group-hover:text-white group-hover:rotate-45" aria-hidden="true">
                            <ArrowUpRight size={14} weight="bold" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {product.faqs?.length > 0 && (
        <section className="section bg-white" aria-labelledby="faq-heading">
          <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow bg-primary-900/5 text-primary-700 mb-5">Answers</p>
                <h2 id="faq-heading" className="display-lg text-3xl md:text-4xl text-primary-900">Frequently asked questions about {product.name}</h2>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={product.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="section bg-primary-50" aria-labelledby="related-heading">
          <div className="container-custom max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="eyebrow bg-primary-900/5 text-primary-700 mb-5">Keep exploring</p>
                <h2 id="related-heading" className="display-lg text-3xl md:text-5xl text-primary-900">Related industrial equipment</h2>
              </div>
              <PillButton href="/products/" tone="dark">All machines</PillButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
