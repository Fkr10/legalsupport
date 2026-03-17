import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useI18n } from '../utils/i18n.js'

export default function TestimonialSlider({ testimonials = [] }) {
  const { t } = useI18n()
  const items = useMemo(() => testimonials.filter(Boolean), [testimonials])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const timer = setInterval(() => setIdx((v) => (v + 1) % items.length), 6500)
    return () => clearInterval(timer)
  }, [items.length])

  if (!items.length) return null
  const current = items[idx]

  return (
    <div className="rounded-2xl bg-white shadow-lift overflow-hidden border border-black/[0.06]">
      <div className="p-7 sm:p-10">
        {/* Header row */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              className="h-10 w-10 rounded-xl border border-black/10 bg-background hover:bg-primary/5 hover:border-primary/20 transition-colors grid place-items-center"
              onClick={() => setIdx((v) => (v - 1 + items.length) % items.length)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 text-primary" />
            </button>
            <button
              className="h-10 w-10 rounded-xl border border-black/10 bg-background hover:bg-primary/5 hover:border-primary/20 transition-colors grid place-items-center"
              onClick={() => setIdx((v) => (v + 1) % items.length)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 text-primary" />
            </button>
          </div>
        </div>

        {/* Quote body */}
        <div className="min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
            >
              <Quote className="h-7 w-7 text-accent/40 mb-3" />
              <p className="text-secondary text-lg sm:text-xl leading-relaxed font-medium">
                {current.quote}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-black/6">
                <div>
                  <div className="font-bold text-primary">{current.name}</div>
                  <div className="text-sm text-secondary/60 mt-0.5">{current.context}</div>
                </div>
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-secondary/40 bg-black/5 rounded-full px-3 py-1.5">
                  {t('common.verifiedClient')}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={[
                'h-2 rounded-full transition-all duration-300',
                i === idx ? 'w-8 bg-accent' : 'w-2 bg-primary/15 hover:bg-primary/25',
              ].join(' ')}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


