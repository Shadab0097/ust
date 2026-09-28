'use client'

import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'

/**
 * Category filter. Cards are server-rendered and passed in as elements, so every product
 * is in the initial HTML; filtering only toggles visibility on the client.
 */
export default function ProductFilter({ categories, items }) {
  const [active, setActive] = useState('All')
  const count = active === 'All' ? items.length : items.filter((i) => i.category === active).length

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto no-scrollbar">
          <div className="inline-flex gap-1.5 p-1.5 rounded-full bg-primary-900/[0.04] ring-1 ring-primary-900/5 whitespace-nowrap" role="group" aria-label="Filter products by category">
            {['All', ...categories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-spring ${
                  active === c ? 'bg-primary-900 text-white shadow-[0_6px_20px_-8px_rgba(16,42,67,0.6)]' : 'text-primary-700 hover:bg-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <p className="text-sm text-primary-500 shrink-0" aria-live="polite">
          Showing <span className="font-semibold text-primary-900">{count}</span> of {items.length} machines
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {items.map((item, i) => (
          <li key={item.key} hidden={active !== 'All' && item.category !== active}>
            <Reveal delay={(i % 3) * 80} className="h-full">{item.element}</Reveal>
          </li>
        ))}
      </ul>
    </>
  )
}
