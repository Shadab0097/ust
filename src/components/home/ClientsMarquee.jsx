import { site } from '@/data/site'

export default function ClientsMarquee() {
  const half = Math.ceil(site.clients.length / 2)
  const rows = [site.clients.slice(0, half), site.clients.slice(half)]

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden" aria-labelledby="clients-heading">
      <div className="container-custom max-w-7xl mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 id="clients-heading" className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-primary-900">
          Trusted on factory floors of
        </h2>
        <p className="text-primary-500 text-sm uppercase tracking-[0.2em]">Automotive &middot; Engineering &middot; Exports</p>
      </div>

      <div className="space-y-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        {rows.map((row, r) => (
          <ul key={r} className={`marquee-track flex w-max whitespace-nowrap ${r ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
            {[...row, ...row, ...row, ...row].map((c, i) => (
              <li
                key={i}
                aria-hidden={i >= row.length ? 'true' : undefined}
                className="mx-2 rounded-full px-6 md:px-8 py-3 md:py-4 bg-primary-50 ring-1 ring-primary-900/5 font-display font-medium text-lg md:text-2xl text-primary-800"
              >
                {c}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
