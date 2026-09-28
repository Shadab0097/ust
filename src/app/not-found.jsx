import Link from 'next/link'
import PillButton from '@/components/ui/PillButton'
import { getAllProducts } from '@/data/catalog'

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  const products = getAllProducts().slice(0, 8)
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-primary-900 text-white overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 blueprint opacity-60" aria-hidden="true" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[50rem] h-[26rem] rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
      <div className="container-custom max-w-4xl relative text-center">
        <p className="display-xl text-[9rem] md:text-[14rem] leading-none text-white/10 select-none" aria-hidden="true">404</p>
        <h1 className="display-lg text-4xl md:text-6xl -mt-10 md:-mt-16">This page went off the line.</h1>
        <p className="mt-6 text-lg text-primary-200 max-w-xl mx-auto">
          The page you are looking for may have moved or no longer exists. Try one of our machines instead.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <PillButton href="/" size="lg">Back to home</PillButton>
          <PillButton href="/products/" tone="ghost" size="lg">View products</PillButton>
        </div>
        <ul className="mt-14 flex flex-wrap justify-center gap-2">
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}/`} className="inline-block text-sm rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-1.5 text-primary-100 hover:bg-white/10">
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
