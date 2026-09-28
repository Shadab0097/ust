import ScrollScene from '@/components/motion/ScrollScene'
import WordReveal from '@/components/motion/WordReveal'

// Chapter 0: a pinned manifesto that lights up word-by-word as you scroll.
export default function Manifesto() {
  return (
    <ScrollScene id="story" mode="pin" className="relative h-[170vh] md:h-[220vh] bg-primary-900 text-white scroll-mt-0">
      <div className="sticky top-0 h-[100svh] flex items-center overflow-hidden blueprint">
        <div className="absolute -top-40 right-0 w-[40rem] h-[40rem] rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />
        <div className="container-custom max-w-6xl relative">
          <p className="eyebrow bg-white/5 ring-1 ring-white/10 text-primary-200 mb-10">Chapter 01 &middot; Our story</p>
          <h2 className="sr-only">Our story</h2>
          <WordReveal
            className="font-display font-medium tracking-[-0.025em] leading-[1.12] text-[1.9rem] sm:text-4xl md:text-5xl lg:text-[3.6rem] text-balance"
            segments={[
              { text: 'In 1970, a small steel workshop opened its doors in Gurgaon.' },
              { text: 'Five decades later,', accent: true },
              { text: 'the machines we build clean the air, finish the parts, move the loads and mill the grain for factories across India.' },
              { text: 'Every one of them still starts the same way - with steel, a drawing and your process.', accent: true },
            ]}
          />
          <div className="mt-14 h-px w-full bg-white/10 overflow-hidden" aria-hidden="true">
            <div className="progress-bar h-full bg-accent-500" />
          </div>
          <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.22em] text-primary-300">
            <span>1970</span>
            <span>Today</span>
          </div>
        </div>
      </div>
    </ScrollScene>
  )
}
