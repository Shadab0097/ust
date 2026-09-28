import { MapPin, Phone, EnvelopeSimple, Clock, WhatsappLogo, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import ContactForm from '@/components/forms/ContactForm'
import { site } from '@/data/site'
import { buildMetadata, webPageSchema } from '@/lib/seo'

const TITLE = 'Contact Us - IMT Manesar, Gurgaon'
const DESCRIPTION = `Contact U.S.T Enterprises, Plot 207, Sector 8, IMT Manesar, Gurgaon. Call ${site.phones[1].display} for machinery quotes, site visits and service support.`

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/contact/',
  keywords: [
    'contact U.S.T Enterprises',
    'industrial machinery manufacturer contact number',
    'machine manufacturer IMT Manesar address',
    'fabrication company Gurgaon phone number',
    'industrial equipment supplier near me',
  ],
})

export default function ContactPage() {
  const cards = [
    {
      icon: MapPin,
      label: 'Factory address',
      body: (
        <>
          {site.address.streetAddress},<br />
          {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}, India
        </>
      ),
      link: { href: site.mapLink, text: 'Get directions', external: true },
    },
    {
      icon: Phone,
      label: 'Call sales',
      body: (
        <span className="flex flex-col">
          {site.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-accent-600">{p.display}</a>
          ))}
        </span>
      ),
    },
    {
      icon: EnvelopeSimple,
      label: 'Email',
      body: <a href={`mailto:${site.email}`} className="hover:text-accent-600 break-all">{site.email}</a>,
    },
    {
      icon: Clock,
      label: 'Working hours',
      body: (
        <>
          Mon - Fri: 9:00 AM - 6:00 PM<br />
          Saturday: 9:00 AM - 1:00 PM<br />
          Sunday: Closed
        </>
      ),
    },
  ]

  return (
    <>
      <JsonLd data={webPageSchema({ path: '/contact/', name: TITLE, description: DESCRIPTION, type: 'ContactPage' })} />

      <PageHero
        eyebrow="Contact"
        title="Let's talk about your plant."
        subtitle="Visit our IMT Manesar works, call our engineers, or send a message - we usually reply the same working day."
        image="/assets/blowerFan/bf1.jpg"
      >
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact/' }]} />
      </PageHero>

      <section className="relative z-10 -mt-12 md:-mt-16 pb-24 md:pb-32">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Form */}
          <div className="lg:col-span-7 bezel">
            <div className="bezel-core p-6 sm:p-8 md:p-10">
              <p className="eyebrow bg-primary-900/5 text-primary-700 mb-5">Send a message</p>
              <h2 className="display-md text-3xl md:text-4xl text-primary-900 mb-8">We&apos;re here to help.</h2>
              <ContactForm />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:pt-16">
            {cards.map(({ icon: Icon, label, body, link }, i) => (
              <Reveal key={label} delay={i * 70} className="bezel">
                <div className="bezel-core p-6 flex gap-5">
                  <span className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center shrink-0" aria-hidden="true">
                    <Icon size={24} weight="light" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500 mb-1.5 font-sans">{label}</h3>
                    <div className="text-primary-900 font-medium leading-relaxed">{body}</div>
                    {link && (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700">
                        {link.text} <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[2rem] bg-[#25D366] text-white p-6 transition-transform duration-500 ease-spring hover:-translate-y-1"
            >
              <span className="flex items-center gap-4">
                <WhatsappLogo size={32} weight="fill" aria-hidden="true" />
                <span>
                  <span className="block font-display font-semibold text-lg">Chat on WhatsApp</span>
                  <span className="block text-sm text-white/85">Send photos, drawings or requirements</span>
                </span>
              </span>
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 ease-spring group-hover:rotate-45" aria-hidden="true">
                <ArrowUpRight size={18} weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
        <div className="container-custom max-w-7xl">
          <div className="bezel">
            <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden h-[26rem] md:h-[32rem]">
              <iframe
                title={`${site.name} location map - IMT Manesar, Gurgaon`}
                src={site.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.35) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
