import Link from 'next/link'
import JsonLd from './JsonLd'
import { breadcrumbSchema } from '@/lib/seo'

/** items: [{ name, path }] - last item is the current page. */
export default function Breadcrumbs({ items, light = true }) {
  const all = [{ name: 'Home', path: '/' }, ...items]
  const base = light ? 'text-primary-300' : 'text-primary-500'
  const hover = light ? 'hover:text-white' : 'hover:text-primary-900'
  const current = light ? 'text-white' : 'text-primary-900'

  return (
    <>
      <nav aria-label="Breadcrumb" className={`mb-8 text-xs uppercase tracking-[0.16em] ${base}`}>
        <ol className="flex flex-wrap items-center gap-y-1">
          {all.map((item, i) => {
            const last = i === all.length - 1
            return (
              <li key={item.path} className="flex items-center">
                {last ? (
                  <span aria-current="page" className={`font-semibold ${current}`}>{item.name}</span>
                ) : (
                  <>
                    <Link href={item.path} className={`transition-colors ${hover}`}>{item.name}</Link>
                    <span className="mx-3 w-1 h-1 rounded-full bg-accent-500" aria-hidden="true" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  )
}
