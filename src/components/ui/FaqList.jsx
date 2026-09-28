import { Plus } from '@phosphor-icons/react/dist/ssr'

// Server-rendered accessible FAQ accordion (content always in HTML for crawlers).
export default function FaqList({ faqs, defaultOpen = 0 }) {
  return (
    <div className="divide-y divide-primary-900/10">
      {faqs.map((faq, i) => (
        <details key={faq.question} className="faq group py-6" open={i === defaultOpen}>
          <summary className="flex items-start justify-between gap-6">
            <h3 className="font-display font-semibold text-lg md:text-xl tracking-tight text-primary-900 leading-snug">{faq.question}</h3>
            <span
              className="faq-icon shrink-0 w-9 h-9 rounded-full bg-primary-900/5 text-primary-800 flex items-center justify-center transition-all duration-500 ease-spring group-open:bg-accent-500 group-open:text-white"
              aria-hidden="true"
            >
              <Plus size={16} weight="bold" />
            </span>
          </summary>
          <p className="mt-4 text-primary-600 leading-relaxed pr-12 max-w-[70ch]">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
