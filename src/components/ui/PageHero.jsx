import Image from 'next/image'

/**
 * Shared cinematic hero for inner pages.
 * children -> rendered above the title (breadcrumbs). `aside` -> optional right column (lg+).
 */
export default function PageHero({ title, subtitle, image, eyebrow, aside, children }) {
  return (
    <section className="page-hero">
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-25" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/85 to-primary-900/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 blueprint opacity-50" aria-hidden="true" />
      <div className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />

      <div className="container-custom max-w-7xl relative z-10">
        {children}
        <div className={`grid gap-12 items-end ${aside ? 'lg:grid-cols-12' : ''}`}>
          <div className={aside ? 'lg:col-span-7' : 'max-w-4xl'}>
            {eyebrow && (
              <p className="eyebrow bg-white/10 ring-1 ring-white/15 text-white/85 mb-6 animate-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                {eyebrow}
              </p>
            )}
            <h1 className="display-xl text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: '60ms' }}>
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl text-primary-100/80 leading-relaxed text-pretty animate-fade-up" style={{ animationDelay: '160ms' }}>
                {subtitle}
              </p>
            )}
          </div>
          {aside && (
            <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '260ms' }}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
