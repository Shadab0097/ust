import CountUp from '@/components/motion/CountUp'
import Reveal from '@/components/ui/Reveal'

const stats = [
  { value: 55, suffix: '+', label: 'Years of manufacturing', note: 'Founded in Gurgaon, 1970' },
  { value: 1000, suffix: '+', label: 'Projects delivered', note: 'Across 15+ Indian states' },
  { value: 100, suffix: '+', label: 'Industrial clients', note: 'Auto, pharma, food, cement' },
  { value: 15, suffix: '', label: 'Machine lines', note: 'Designed & built in-house' },
]

export default function StatsBand() {
  return (
    <section className="relative bg-primary-900 text-white py-20 md:py-28 overflow-hidden" aria-label="Company in numbers">
      <div className="absolute inset-0 blueprint opacity-60" aria-hidden="true" />
      <div className="container-custom max-w-7xl relative">
        <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="border-b border-r border-white/10 p-6 md:p-10">
              <dt className="text-sm md:text-base text-primary-200 order-2">{s.label}</dt>
              <dd className="font-display font-wide font-semibold tracking-[-0.04em] leading-none text-5xl md:text-7xl my-4">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dd className="text-xs uppercase tracking-[0.18em] text-primary-400">{s.note}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
