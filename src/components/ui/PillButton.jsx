import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

const tones = {
  accent: { btn: 'bg-accent-500 text-white hover:bg-accent-600', icon: 'bg-white/15' },
  light: { btn: 'bg-white text-primary-900 hover:bg-primary-50', icon: 'bg-primary-900/5' },
  dark: { btn: 'bg-primary-900 text-white hover:bg-primary-800', icon: 'bg-white/10' },
  ghost: { btn: 'bg-white/5 text-white ring-1 ring-white/20 hover:bg-white/10', icon: 'bg-white/10' },
  outline: { btn: 'bg-transparent text-primary-900 ring-1 ring-primary-900/15 hover:bg-primary-900/5', icon: 'bg-primary-900/5' },
}

/** Pill CTA with a nested "island" arrow. Internal hrefs use next/link. */
export default function PillButton({ href, children, tone = 'accent', size = 'md', icon: Icon = ArrowUpRight, className = '', ...props }) {
  const t = tones[tone] || tones.accent
  const pad = size === 'lg' ? 'pl-7 pr-2 py-2 text-base' : 'pl-5 pr-1.5 py-1.5 text-sm'
  const iconSize = size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'
  const cls = `pill-btn group inline-flex items-center gap-3 rounded-full font-semibold transition-all duration-500 ease-spring active:scale-[0.98] ${pad} ${t.btn} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <span className={`pill-icon ${iconSize} rounded-full flex items-center justify-center ${t.icon}`} aria-hidden="true">
        <Icon size={size === 'lg' ? 18 : 16} weight="bold" />
      </span>
    </>
  )

  if (/^(https?:|tel:|mailto:)/.test(href)) {
    const ext = /^https?:/.test(href)
    return (
      <a href={href} className={cls} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} {...props}>
      {inner}
    </Link>
  )
}
