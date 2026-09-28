import Image from 'next/image'
import { CurrencyInr, Lightning, Clock, ShieldCheck, PencilRuler, Wrench } from '@phosphor-icons/react/dist/ssr'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/data/site'

const reasons = [
  { icon: CurrencyInr, title: 'Direct manufacturer pricing', text: 'Everything is fabricated at our own IMT Manesar works - no traders, no mark-ups, GST invoice.' },
  { icon: PencilRuler, title: 'Application engineering', text: 'Machines sized for your material, capacity and floor layout, not pulled off a shelf.' },
  { icon: Lightning, title: 'Energy-optimised designs', text: 'Right-sized motors, blowers and VFD drives that cut running costs for years.' },
  { icon: ShieldCheck, title: 'Quality you can inspect', text: 'ISO 9001 processes, stage-wise checks and trial runs you can witness in person.' },
  { icon: Clock, title: 'Lead times you can plan on', text: 'In-house cutting, welding and finishing keep delivery dates honest.' },
  { icon: Wrench, title: 'Service after commissioning', text: 'Erection, operator training, spares and AMC support across Delhi NCR and India.' },
]

export default function WhySplit({ eyebrow = 'Chapter 05 \u00b7 Why U.S.T' }) {
  return (
    <section className="relative bg-primary-50 py-24 md:py-36 overflow-hidden" aria-labelledby="why-heading">
      <div className="absolute inset-0 blueprint-light" aria-hidden="true" />
      <div className="container-custom max-w-7xl relative grid lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow bg-primary-900/5 text-primary-700 mb-6">{eyebrow}</p>
            <h2 id="why-heading" className="font-display font-wide font-semibold tracking-[-0.03em] leading-[1] text-4xl md:text-6xl text-primary-900 text-balance">
              Why plant heads keep coming back.
            </h2>
            <p className="mt-6 text-lg text-primary-600 leading-relaxed max-w-md">
              Five decades of heavy fabrication have taught us that the best machine is the one you never have to think about.
            </p>
            <div className="mt-10 rounded-[2rem] p-1.5 bg-white ring-1 ring-primary-900/5 hidden md:block">
              <div className="relative aspect-[16/10] rounded-[calc(2rem-0.375rem)] overflow-hidden">
                <Image src="/assets/seedCleaning/sc2.jpg" alt="Seed cleaning machines being assembled at the U.S.T Enterprises factory" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
                <p className="absolute bottom-5 left-6 right-6 text-white text-sm">
                  On the floor at {site.address.streetAddress.split(',').slice(-1)[0].trim()} - batch of seed graders before dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7 border-t border-primary-900/10">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal as="li" key={r.title} delay={i * 60} className="group border-b border-primary-900/10 py-8 md:py-10 grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10">
                <span className="font-display text-sm tabular-nums text-primary-400 pt-2">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                  <span className="w-14 h-14 shrink-0 rounded-2xl bg-white ring-1 ring-primary-900/5 text-accent-600 flex items-center justify-center transition-all duration-500 ease-spring group-hover:bg-accent-500 group-hover:text-white group-hover:-rotate-6" aria-hidden="true">
                    <Icon size={26} weight="light" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-2xl md:text-[1.75rem] tracking-tight text-primary-900">{r.title}</h3>
                    <p className="mt-2 text-primary-600 leading-relaxed max-w-[48ch]">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
