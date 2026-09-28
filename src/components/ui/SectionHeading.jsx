import Reveal from './Reveal'

/** Section intro: eyebrow pill + display heading + optional lead. */
export default function SectionHeading({ title, subtitle, eyebrow, centered = false, light = false, as: Tag = 'h2', className = '', id }) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-6 ${light ? 'bg-white/5 ring-1 ring-white/10 text-primary-200' : 'bg-primary-900/5 text-primary-700'}`}>{eyebrow}</p>
      )}
      <Tag id={id} className={`display-lg text-3xl sm:text-4xl md:text-5xl ${light ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${centered ? 'mx-auto' : ''} max-w-2xl ${light ? 'text-primary-100/80' : 'text-primary-600'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
