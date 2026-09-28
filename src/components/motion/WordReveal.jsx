/**
 * Splits text into words whose opacity is driven by the nearest ScrollScene's --p.
 * Pass segments: [{ text, accent?: true }]. Server component - plain HTML output.
 */
export default function WordReveal({ segments, as: Tag = 'p', className = '', speed = 1 }) {
  const words = []
  segments.forEach((seg) => {
    seg.text
      .split(/\s+/)
      .filter(Boolean)
      .forEach((w) => words.push({ w, accent: seg.accent }))
  })

  return (
    <Tag className={`word-reveal ${className}`} style={{ '--n': words.length, '--k': speed }}>
      {words.map((item, i) => (
        <span key={i} className={`w ${item.accent ? 'text-accent-400' : ''}`} style={{ '--i': i }}>
          {item.w}{' '}
        </span>
      ))}
    </Tag>
  )
}
