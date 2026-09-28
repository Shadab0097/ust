// Renders one or more JSON-LD blocks. Escapes "<" so data can never break out of the <script>.
export default function JsonLd({ data }) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean)
  return items.map((item, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
    />
  ))
}
