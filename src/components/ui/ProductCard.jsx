import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { getHeadlineSpec, productImageAlt } from '@/data/catalog'

export default function ProductCard({ product, priority = false, headingLevel = 'h3' }) {
  const Heading = headingLevel
  const spec = getHeadlineSpec(product)

  return (
    <article className="group h-full">
      <Link
        href={`/products/${product.slug}/`}
        className="bezel flex flex-col h-full transition-transform duration-700 ease-spring hover:-translate-y-1.5"
        aria-label={`${product.name} - view specifications`}
      >
        <div className="bezel-core flex flex-col h-full overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden bg-primary-100">
            <Image
              src={product.images[0]}
              alt={productImageAlt(product)}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-spring group-hover:scale-[1.06]"
              priority={priority}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
            <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-800">
              {product.category}
            </span>
          </div>

          <div className="p-6 md:p-7 flex flex-col flex-grow">
            <Heading className="font-display font-semibold text-xl md:text-2xl tracking-tight text-primary-900 leading-tight">{product.name}</Heading>
            <p className="mt-2 text-primary-600 flex-grow line-clamp-2">{product.shortDescription}</p>

            <div className="mt-6 pt-5 border-t border-primary-900/5 flex items-end justify-between gap-4">
              {spec ? (
                <p className="text-sm min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-primary-400">{spec.label}</span>
                  <span className="block font-semibold text-primary-800 truncate">{spec.value}</span>
                </p>
              ) : (
                <span className="text-sm font-semibold text-primary-800">View details</span>
              )}
              <span
                className="shrink-0 w-11 h-11 rounded-full bg-primary-900 text-white flex items-center justify-center transition-all duration-500 ease-spring group-hover:bg-accent-500 group-hover:rotate-45"
                aria-hidden="true"
              >
                <ArrowUpRight size={18} weight="bold" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
