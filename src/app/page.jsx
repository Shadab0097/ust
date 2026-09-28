import Link from 'next/link'
import HeroCinematic from '@/components/home/HeroCinematic'
import Manifesto from '@/components/home/Manifesto'
import ProcessStory from '@/components/home/ProcessStory'
import StatsBand from '@/components/home/StatsBand'
import ProductRail from '@/components/home/ProductRail'
import IndustriesBento from '@/components/home/IndustriesBento'
import WhySplit from '@/components/home/WhySplit'
import ClientsMarquee from '@/components/home/ClientsMarquee'
import FaqList from '@/components/ui/FaqList'
import Reveal from '@/components/ui/Reveal'
import JsonLd from '@/components/seo/JsonLd'
import { getAllProducts } from '@/data/catalog'
import { site, coreKeywords } from '@/data/site'
import { buildMetadata, faqSchema, itemListSchema, webPageSchema } from '@/lib/seo'

const TITLE = 'U.S.T Enterprises: Industrial Machinery Manufacturer Gurgaon'
const DESCRIPTION =
  'Industrial machinery manufacturer in IMT Manesar, Gurgaon since 1970: dust collectors, paint booths, ribbon blenders, conveyors & flour mill machines. Get a quote.'

export const metadata = buildMetadata({
  title: TITLE,
  absoluteTitle: true,
  description: DESCRIPTION,
  path: '/',
  keywords: coreKeywords,
})

const homeFaqs = [
  {
    question: 'What does U.S.T Enterprises manufacture?',
    answer:
      'U.S.T Enterprises manufactures industrial machinery and equipment including pulse jet dust collectors, centrifugal blowers, water curtain paint booths, paint shop lines, SS ribbon blenders, screw conveyors, telescopic belt conveyors, hydraulic scissor lifts, 3-roll plate bending machines, hammer mills, vibro destoners, seed cleaning machines, atta chakki flour mills, hydro turbines and tensile structures.',
  },
  {
    question: 'Where is your manufacturing facility located?',
    answer: `Our factory is at ${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion} - in the IMT Manesar industrial belt of Delhi NCR. Clients are welcome to visit for machine inspection and trials.`,
  },
  {
    question: 'Do you supply machines outside Haryana and Delhi NCR?',
    answer:
      'Yes. We dispatch and install machines pan-India, including Rajasthan, Punjab, Uttar Pradesh, Uttarakhand, Gujarat, Maharashtra and Madhya Pradesh, and also support export orders.',
  },
  {
    question: 'Can you build custom machines to our specifications?',
    answer:
      'Yes. Most of our equipment is engineered to order - capacity, material of construction (MS, SS304, SS316), motor rating, automation (PLC/VFD) and dimensions are designed around your process and floor layout.',
  },
  {
    question: 'How do I get a price quotation?',
    answer: `Fill in the quote form on our website, WhatsApp or call ${site.phones[1].display}. Share your application, material, required capacity and location - we usually send a techno-commercial offer within 24 hours.`,
  },
]

// Keyword-rich internal links, rendered as elegant inline text (useful to buyers, crawlable for Google).
const linkClass = 'text-primary-900 underline decoration-accent-400/60 decoration-2 underline-offset-4 hover:decoration-accent-500 transition-colors'
const productLinks = [
  ['dust-collector-system', 'pulse jet bag filter dust collectors'],
  ['blower-fan', 'ID/FD centrifugal blowers'],
  ['water-curtain-paint-booth', 'water wash paint booths'],
  ['paint-shop-line', 'paint shop lines'],
  ['ribbon-blender-machine', 'SS ribbon blenders'],
  ['screw-conveyor', 'screw conveyors'],
  ['telescopic-belt-conveyor', 'telescopic truck-loading conveyors'],
  ['scissor-lift', 'hydraulic scissor lift tables'],
  ['sheet-rolling-machine', 'plate bending machines'],
  ['hammer-mill', 'hammer mills'],
  ['vibro-de-stoner', 'vibro destoners'],
  ['seed-cleaning-machine', 'seed cleaning & grading machines'],
  ['atta-chakki-machine', 'commercial atta chakki'],
  ['hydro-turbine', 'small hydro turbines'],
  ['tensile-shed', 'tensile car parking structures'],
]

export default function HomePage() {
  const products = getAllProducts()

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: '/', name: TITLE, description: DESCRIPTION }),
          itemListSchema(products, 'Industrial machinery manufactured by U.S.T Enterprises'),
          faqSchema(homeFaqs),
        ]}
      />
      <div className="grain" aria-hidden="true" />

      <HeroCinematic />
      <Manifesto />
      <ProcessStory />
      <StatsBand />
      <ProductRail
        products={products}
        heading="Fifteen machines. One standard."
        intro="Every machine below is designed, fabricated and tested in-house - with custom capacities, materials and automation."
      />
      <IndustriesBento />
      <WhySplit />
      <ClientsMarquee />

      {/* Editorial SEO block */}
      <section className="bg-white py-24 md:py-32 border-t border-primary-900/5" aria-labelledby="about-seo-heading">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow bg-primary-900/5 text-primary-700 mb-6">Delhi NCR &middot; Pan-India</p>
              <h2 id="about-seo-heading" className="font-display font-semibold tracking-[-0.025em] leading-[1.05] text-3xl md:text-[2.6rem] text-primary-900 text-balance">
                Leading industrial equipment manufacturer in Delhi NCR
              </h2>
            </div>
          </div>
          <Reveal className="lg:col-span-8 space-y-6 text-lg text-primary-700 leading-[1.8] text-pretty">
            <p>
              Looking for a reliable <strong className="text-primary-900 font-semibold">industrial machinery manufacturer in Gurgaon</strong>?
              U.S.T Enterprises builds equipment for air pollution control, surface finishing, material handling, process
              mixing, metal forming, grain processing and renewable energy. Being a direct manufacturer in IMT Manesar lets
              us offer factory prices, faster delivery and quick service support across Haryana, Delhi, Noida, Faridabad
              and the rest of India.
            </p>
            <p>
              Our range includes{' '}
              {productLinks.map(([slug, label], i) => (
                <span key={slug}>
                  <Link className={linkClass} href={`/products/${slug}/`}>{label}</Link>
                  {i < productLinks.length - 2 ? ', ' : i === productLinks.length - 2 ? ' and ' : '.'}
                </span>
              ))}
            </p>
            <p>
              Every project starts with understanding your material, throughput and site. Our engineers size the machine,
              select the right material of construction (MS, SS304 or SS316) and drives, and fabricate it under stage-wise
              quality checks before dispatch, installation and commissioning.
            </p>
            <div className="pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4 font-sans">Service areas</h3>
              <ul className="flex flex-wrap gap-2">
                {site.areaServed.map((a) => (
                  <li key={a} className="text-sm rounded-full px-4 py-1.5 bg-primary-50 ring-1 ring-primary-900/5 text-primary-700">{a}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-primary-50 py-24 md:py-32" aria-labelledby="faq-heading">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow bg-primary-900/5 text-primary-700 mb-6">Answers</p>
              <h2 id="faq-heading" className="font-display font-semibold tracking-[-0.025em] leading-[1.05] text-3xl md:text-[2.6rem] text-primary-900">
                Frequently asked questions
              </h2>
              <p className="mt-5 text-primary-600">
                Can&apos;t find what you need? <Link href="/contact/" className={linkClass}>Talk to an engineer</Link>.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 rounded-[2rem] p-1.5 bg-white/60 ring-1 ring-primary-900/5">
            <div className="rounded-[calc(2rem-0.375rem)] bg-white px-6 md:px-10 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <FaqList faqs={homeFaqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
