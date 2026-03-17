import { motion } from 'framer-motion'

export default function GlassCard({
  className = '',
  variant = 'dark',
  children,
  ...props
}) {
  const base =
    variant === 'light'
      ? 'glass-light text-secondary'
      : variant === 'strong'
        ? 'glass-strong text-secondary'
        : 'glass text-white'

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className={[
        'relative overflow-hidden rounded-2xl',
        base,
        'hover:shadow-lift transition-shadow duration-300',
        className,
      ].join(' ')}
      {...props}
    >
      <div className="relative">{children}</div>
    </motion.div>
  )
}


