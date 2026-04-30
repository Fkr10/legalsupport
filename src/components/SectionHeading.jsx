import { motion as Motion } from 'framer-motion'
import { fadeUp } from '../utils/motion.js'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light', // 'light' | 'dark'
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleClass = tone === 'dark' ? 'text-white' : 'text-primary'
  const descClass = tone === 'dark' ? 'text-white/80' : 'text-secondary/70'
  const eyebrowClass =
    tone === 'dark'
      ? 'text-accent border-l-2 border-accent pl-3'
      : 'text-accent'

  return (
    <Motion.div
      variants={fadeUp}
      className={['max-w-2xl', alignClass].join(' ')}
    >
      {eyebrow ? (
        <div
          className={[
            'text-[11px] font-bold tracking-[0.2em] uppercase',
            eyebrowClass,
          ].join(' ')}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={[
          'mt-3 text-3xl sm:text-4xl font-bold tracking-tight',
          titleClass,
        ].join(' ')}
      >
        {title}
      </h2>
      {description ? (
        <p className={['mt-4 text-base sm:text-lg leading-relaxed', descClass].join(' ')}>
          {description}
        </p>
      ) : null}
    </Motion.div>
  )
}


