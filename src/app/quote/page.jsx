import { Check, Phone, EnvelopeSimple, WhatsappLogo, Clock } from '@phosphor-icons/react/dist/ssr'
import PageHero from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import QuoteForm from '@/components/forms/QuoteForm'
import { getAllProducts } from '@/data/catalog'
import { site } from '@/data/site'
import { buildMetadata, webPageSchema } from '@/lib/seo'

const TITLE = 'Request a Quote - Factory Price'
const DESCRIPTION =
  'Get a free quotation and factory price for dust collectors, paint booths, ribbon blenders, conveyors, flour mill machines and custom machinery from Gurgaon.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/quote/',
  keywords: ['industrial machine price quote', 'machinery quotation India', 'factory price industrial equipment', 'custom machine quote Gurgaon'],
})

const steps = [
  ['Share requirement', 'Application, capacity, material and site location.'],
  ['Engineering review', 'We size the machine and suggest the right model.'],
  ['Detailed offer', 'Techno-commercial quote, usually within 24 hours.'],
]

export default function QuotePage() {
  const productNames = getAllProducts().map((p) => p.name)

  return (
    <>
      <JsonLd data={webPageSchema({ path: '/quote/', name: TITLE, description: DESCRIPTION })} />

      <PageHero
        eyebrow="Free quotation"
        title="Get a factory price for your machine."
        subtitle="Tell us about your project and our engineers will reply with pricing, specifications and a delivery timeline."
        image="/assets/hydroTurbine/ht2.jpg"
      >
        <Breadcrumbs items={[{ name: 'Request a Quote', path: '/quote/' }]} />
      </PageHero>

      <section className="relative z-10 -mt-12 md:-mt-16 pb-24 md:pb-32">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-8 bezel">
            <div className="bezel-core p-6 sm:p-8 md:p-10">
              <p className="eyebrow bg-primary-900/5 text-primary-700 mb-5">Project details</p>
              <h2 className="display-md text-3xl md:text-4xl text-primary-900 mb-8">Your custom quote</h2>
              <QuoteForm productNames={productNames} />
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pt-16">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="rounded-[2rem] bg-primary-900 text-white p-7 relative overflow-hidden">
                <div className="absolute inset-0 blueprint opacity-50" aria-hidden="true" />
                <div className="relative">
                  <h2 className="font-display font-semibold text-xl mb-6">What happens next</h2>
                  <ol className="space-y-6">
                    {steps.map(([t, d], i) => (
                      <li key={t} className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-sm font-semibold shrink-0">{i + 1}</span>
                        <div>
                          <p className="font-semibold">{t}</p>
                          <p className="text-sm text-primary-200 mt-0.5">{d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-7 pt-6 border-t border-white/10 flex items-center gap-2 text-sm text-primary-200">
                    <Clock size={18} weight="light" aria-hidden="true" /> Average response: under 24 hours
                  </p>
                </div>
              </div>

              <div className="bezel">
                <div className="bezel-core p-7">
                  <h2 className="font-display font-semibold text-xl text-primary-900 mb-4">Why U.S.T Enterprises</h2>
                  <ul className="space-y-3">
                    {['55+ years of manufacturing', 'Custom specifications', 'Premium raw materials', 'On-time delivery', 'Installation & after-sales'].map((t) => (
                      <li key={t} className="flex items-center gap-3 text-primary-700">
                        <span className="w-6 h-6 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center shrink-0" aria-hidden="true">
                          <Check size={13} weight="bold" />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bezel">
                <div className="bezel-core p-7 space-y-3 text-primary-800">
                  <h2 className="font-display font-semibold text-xl text-primary-900 mb-1">Prefer to talk?</h2>
                  {site.phones.slice(0, 2).map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-3 hover:text-accent-600">
                      <Phone size={18} weight="light" aria-hidden="true" /> {p.display}
                    </a>
                  ))}
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent-600">
                    <WhatsappLogo size={18} weight="light" aria-hidden="true" /> WhatsApp
                  </a>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-accent-600 break-all">
                    <EnvelopeSimple size={18} weight="light" aria-hidden="true" /> {site.email}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
