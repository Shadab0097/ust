import WeldSparks from './WeldSparks'

/**
 * Splits text into words whose opacity is driven by the nearest ScrollScene's --p,
 * with welding sparks following the word that is currently lighting up.
 * Pass segments: [{ text, accent?: true }]. Text stays plain server-rendered HTML (SEO-safe).
 * tone: 'dark' (light text on dark bg, default) | 'light' (dark text on light bg).
 */
export default function WordReveal({ segments, as: Tag = 'p', className = '', speed = 1, tone = 'dark' }) {
  const words = []
  segments.forEach((seg) => {
    seg.text
      .split(/\s+/)
      .filter(Boolean)
      .forEach((w) => words.push({ w, accent: seg.accent }))
  })

  return (
    <Tag className={`word-reveal relative ${className}`} style={{ '--n': words.length, '--k': speed }} data-tone={tone}>
      {words.map((item, i) => (
        <span key={i} className={`w ${item.accent ? 'text-accent-400' : ''}`} style={{ '--i': i }}>
          {item.w}{' '}
        </span>
      ))}
      <WeldSparks mode="words" tone={tone} />
    </Tag>
  )
}
