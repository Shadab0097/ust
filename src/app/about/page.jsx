import Image from 'next/image'
import { Certificate, Target, Eye, Users } from '@phosphor-icons/react/dist/ssr'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import StatsBand from '@/components/home/StatsBand'
import WhySplit from '@/components/home/WhySplit'
import ClientsMarquee from '@/components/home/ClientsMarquee'
import ScrollScene from '@/components/motion/ScrollScene'
import WordReveal from '@/components/motion/WordReveal'
import WeldSparks from '@/components/motion/WeldSparks'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { site } from '@/data/site'
import { buildMetadata, webPageSchema } from '@/lib/seo'

const TITLE = 'About Us - Machinery Makers Since 1970'
const DESCRIPTION =
  'U.S.T Enterprises is an ISO 9001 industrial machinery manufacturer and steel fabricator in IMT Manesar, Gurgaon since 1970 - from design to commissioning.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/about/',
  keywords: [
    'about U.S.T Enterprises',
    'industrial machinery manufacturer Gurgaon',
    'steel fabrication company IMT Manesar',
    'machine manufacturing company Haryana',
    'ISO 9001 machinery manufacturer India',
    'engineering company since 1970',
  ],
})

const timeline = [
  { year: '1970', title: 'Company founded', description: `U.S.T Enterprises was established in Gurgaon, India by ${site.founder} as a steel fabrication workshop.` },
  { year: '1985', title: 'Product line expands', description: 'Added industrial hoods, hopper machines and material handling equipment for the growing Gurgaon auto belt.' },
  { year: '1995', title: 'Facility upgrade', description: 'Invested in modern machinery and expanded the production facility for heavier, larger fabrication.' },
  { year: '2005', title: 'ISO 9001 certification', description: 'Formalised quality management with ISO 9001 certified processes and stage-wise inspection.' },
  { year: '2015', title: 'International markets', description: 'Began exporting equipment to customers across Asia and the Middle East.' },
  { year: '2020', title: '50 years of excellence', description: 'Celebrated five decades and expanded into process, agro-processing and hydro power equipment.' },
]

const values = [
  { icon: Target, title: 'Mission', text: 'Build rugged, efficient machines that solve real plant problems - at a fair factory price.' },
  { icon: Eye, title: 'Vision', text: "Be North India's most trusted name in custom industrial machinery and heavy fabrication." },
  { icon: Certificate, title: 'Quality', text: 'ISO 9001 processes, premium raw material and trial runs before every dispatch.' },
  { icon: Users, title: 'People', text: 'Skilled fabricators, welders and engineers - many with us for decades.' },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: '/about/', name: TITLE, description: DESCRIPTION, type: 'AboutPage' })} />

      <PageHero
        eyebrow={`Since ${site.foundingYear}`}
        title="Five decades of turning steel into machines."
        subtitle="From a small Gurgaon workshop to a full-fledged industrial machinery manufacturer in IMT Manesar - designing, fabricating and commissioning equipment for factories across India."
        image="/assets/sheetRolling/sr1.jpg"
      >
        <Breadcrumbs items={[{ name: 'About', path: '/about/' }]} />
      </PageHero>

      {/* Story split */}
      <section className="section bg-white overflow-hidden">
        <div className="container-custom max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Who we are" title="About U.S.T Enterprises" className="!mb-8" />
            <Reveal className="space-y-6 text-lg text-primary-700 leading-[1.8]">
              <p>
                U.S.T Enterprises was incorporated in {site.foundingYear} in Gurgaon (Haryana, India). Today we manufacture
                and supply dust collectors, blowers, paint booths and paint shop lines, ribbon blenders, screw and belt
                conveyors, scissor lifts, plate rolling machines, hammer mills, destoners, seed cleaning machines, atta
                chakkis, hydro turbines and tensile structures - using advanced machines and high-quality raw materials.
              </p>
              <p>
                Our products are known for high strength, application-specific design, fine finish and rust resistance.
                Our facility at IMT Manesar includes procurement, production, quality control, warehousing and packaging
                units. Under {site.founder}&apos;s leadership, we strive for excellence and customer satisfaction.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6 relative" delay={120}>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 bezel">
                <div className="relative aspect-[3/4] rounded-[calc(2rem-0.375rem)] overflow-hidden">
                  <Image src="/assets/hydroTurbine/ht1.jpg" alt="Hydro turbine frame fabricated at U.S.T Enterprises" fill sizes="(min-width: 1024px) 28vw, 60vw" className="object-cover" />
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-4 pt-16">
                <div className="bezel">
                  <div className="relative aspect-square rounded-[calc(2rem-0.375rem)] overflow-hidden">
                    <Image src="/assets/waterCurtain/wcimg2.jpg" alt="Paint booth built by U.S.T Enterprises in operation" fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
                  </div>
                </div>
                <div className="rounded-[1.75rem] bg-accent-500 text-white p-5">
                  <p className="display-lg text-4xl">{new Date().getFullYear() - Number(site.foundingYear)}+</p>
                  <p className="text-sm text-white/85 mt-1">years of manufacturing</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scroll-lit statement: pinned, so the words light up while it stays in view (all screen sizes) */}
      <ScrollScene mode="pin" className="relative h-[190vh] md:h-[220vh] bg-primary-50">
        <div className="sticky top-0 h-[100svh] flex items-center overflow-hidden">
          <div className="absolute inset-0 blueprint-light" aria-hidden="true" />
          <div className="container-custom max-w-5xl relative">
            <p className="eyebrow bg-primary-900/5 text-primary-700 mb-8">Our promise</p>
            <WordReveal
              as="p"
              className="display-md text-[1.9rem] sm:text-4xl md:text-5xl text-primary-900 leading-[1.15]"
              segments={[
                { text: 'We are not traders.' },
                { text: 'Every machine with our name on it is cut, welded, finished and tested', accent: true },
                { text: 'on our own floor in IMT Manesar - so we can stand behind it for years.' },
              ]}
              tone="light"
            />
            <div className="mt-12 h-px w-full bg-primary-900/10 overflow-hidden" aria-hidden="true">
              <div className="progress-bar h-full bg-accent-500" />
            </div>
          </div>
        </div>
      </ScrollScene>

      <StatsBand />

      {/* Values */}
      <section className="section bg-white">
        <div className="container-custom max-w-7xl">
          <SectionHeading eyebrow="What drives us" title="Built on four simple commitments." />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 80} className="bezel">
                <div className="bezel-core h-full p-7">
                  <span className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center mb-8" aria-hidden="true">
                    <Icon size={26} weight="light" />
                  </span>
                  <h3 className="font-display font-semibold text-2xl tracking-tight text-primary-900">{title}</h3>
                  <p className="mt-3 text-primary-600 leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-primary-900 text-white relative overflow-hidden" aria-labelledby="journey-heading">
        <div className="absolute inset-0 blueprint opacity-60" aria-hidden="true" />
        <div className="container-custom max-w-7xl relative grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading light eyebrow="Our journey" title="Five decades of growth." subtitle="Milestones from a Gurgaon workshop to a pan-India machinery manufacturer." id="journey-heading" />
            </div>
          </div>
          {/* Timeline: the orange line is welded downward by sparks; each year lights up as the tip reaches it */}
          <div className="lg:col-span-8 relative">
            <span className="line-track absolute left-[0.4rem] top-2 bottom-2 w-px bg-white/15" aria-hidden="true" />
            <span className="line-fill absolute left-[0.4rem] top-2 bottom-2 w-px bg-accent-500 shadow-[0_0_10px_rgba(237,137,54,0.7)]" aria-hidden="true" />
            <WeldSparks mode="line" />
            <ol className="relative">
              {timeline.map((e, i) => (
                <Reveal as="li" key={e.year} delay={60} data-weld="" className="relative pl-12 pb-14 last:pb-0">
                  <span className="tl-dot absolute left-0 top-3 w-3.5 h-3.5 rounded-full bg-accent-500 ring-4 ring-primary-900 transition-all duration-500" aria-hidden="true" />
                  <p className="tl-year display-xl text-5xl md:text-7xl text-white/90">{e.year}</p>
                  <h3 className="mt-3 font-display font-semibold text-2xl tracking-tight">{e.title}</h3>
                  <p className="mt-2 text-primary-200 leading-relaxed max-w-xl">{e.description}</p>
                  {i === timeline.length - 1 && (
                    <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-1.5 text-sm text-accent-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse-dot" aria-hidden="true" /> And still building
                    </p>
                  )}
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <WhySplit eyebrow="Why U.S.T" />
      <ClientsMarquee />
    </>
  )
}
