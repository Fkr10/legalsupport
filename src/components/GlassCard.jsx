import { motion } from 'framer-motion'

/**
 * DESIGN.md card variants:
 * light  → white bg, #E5E7EB border, elevated shadow
 * dark   → rgba(255,255,255,0.06) bg for brand-dark sections
 * strong → white bg, ambient shadow (blog/reading panels)
 */
const variants = {
  light: {
    base: 'bg-white border border-[#E5E7EB]',
    shadow: 'shadow-elevated',
  },
  strong: {
    base: 'bg-white border border-[#E5E7EB]',
    shadow: 'shadow-standard',
  },
  dark: {
    base: 'bg-white/[0.06] border border-white/[0.12]',
    shadow: '',
  },
}

export default function GlassCard({
  className = '',
  variant = 'light',
  children,
  ...props
}) {
  const v = variants[variant] ?? variants.light

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={[
        'relative overflow-hidden',
        'rounded-[6px]',          // DESIGN.md: 6px comfortable radius for cards
        v.base,
        v.shadow,
        'transition-shadow duration-250',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </motion.div>
  )
}



