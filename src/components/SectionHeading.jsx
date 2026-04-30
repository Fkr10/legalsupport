import { motion as Motion } from 'framer-motion'
import { fadeUp } from '../utils/motion.js'

/**
 * DESIGN.md type scale:
 * eyebrow → 11px/400/uppercase/purple (#C8A951)
 * title   → 32px/300/−0.64px/navy (#0B1C2C) — Section Heading
 * desc    → 18px/300/slate (#4B5563)
 * Dark tone: white title + white/70 desc
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light', // 'light' | 'dark'
}) {
  const center = align === 'center'

  return (
    <Motion.div
      variants={fadeUp}
      className={['max-w-2xl', center ? 'text-center mx-auto' : 'text-left'].join(' ')}
    >
      {eyebrow && (
        <div
          className={[
            'inline-flex items-center gap-1.5',
            'text-[11px] font-[400] tracking-[0.12em] uppercase',
            tone === 'dark' ? 'text-[#E8D38A]' : 'text-[#C8A951]',
          ].join(' ')}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={[
          'mt-2',
          // DESIGN.md Section Heading: 32px/500/−0.64px - Bolder for visibility
          'text-[clamp(1.75rem,3vw+0.5rem,2rem)] font-[500] leading-[1.10]',
          'tracking-[-0.64px]',
          tone === 'dark' ? 'text-white' : 'text-[#0B1C2C]',
        ].join(' ')}
      >
        {title}
      </h2>

      {description && (
        <p
          className={[
            'mt-3 text-[1.125rem] font-[400] leading-[1.40]',
            tone === 'dark' ? 'text-white/70' : 'text-[#4B5563]',
          ].join(' ')}
        >
          {description}
        </p>
      )}
    </Motion.div>
  )
}



