'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

/** images: [{ src, alt }] - thumbnails are server-rendered so Google Images can index every photo. */
export default function ProductGallery({ images, name }) {
  const [index, setIndex] = useState(0)
  const count = images.length
  const go = (i) => setIndex((i + count) % count)
  const current = images[index]

  return (
    <div className="min-w-0 w-full">
      <div className="bezel">
        <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-primary-50 group">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover animate-fade-up transition-transform duration-[1200ms] ease-spring group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-primary-900/50 to-transparent pointer-events-none" />

          {count > 1 && (
            <>
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <span className="rounded-full bg-primary-900/70 backdrop-blur-sm text-white px-3 py-1.5 text-xs font-medium tabular-nums" aria-live="polite">
                  {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm text-primary-900 flex items-center justify-center transition-all duration-500 ease-spring hover:bg-white active:scale-95"
                  aria-label={`Previous ${name} image`}
                >
                  <CaretLeft size={18} weight="bold" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  className="w-11 h-11 rounded-full bg-accent-500 text-white flex items-center justify-center transition-all duration-500 ease-spring hover:bg-accent-600 active:scale-95"
                  aria-label={`Next ${name} image`}
                >
                  <CaretRight size={18} weight="bold" aria-hidden="true" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {count > 1 && (
        <ul className="mt-4 flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {images.map((img, i) => (
            <li key={img.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1} of ${count}`}
                aria-current={i === index}
                className={`relative block w-20 h-16 md:w-24 md:h-20 rounded-2xl overflow-hidden transition-all duration-500 ease-spring ${
                  i === index ? 'ring-2 ring-accent-500 ring-offset-2' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="96px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
