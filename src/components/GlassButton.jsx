import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const base =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98]'

const variants = {
  primary:
    'bg-accent text-primary border border-accent/30 shadow-soft hover:shadow-glow hover:brightness-105',
  secondary:
    'bg-white text-primary border border-black/10 shadow-soft hover:bg-white hover:shadow-card',
  dark:
    'bg-primary text-white border border-white/10 shadow-glass hover:bg-primary/90',
  glass:
    'glass-button',
}

function Wrap({ children }) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.div>
  )
}

export default function GlassButton({
  as = 'button',
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const cls = [base, variants[variant] || variants.primary, className].join(' ')

  if (as === 'link' && to) {
    return (
      <Wrap>
        <Link className={cls} to={to} {...props}>
          {children}
        </Link>
      </Wrap>
    )
  }

  if (as === 'a' && href) {
    return (
      <Wrap>
        <a className={cls} href={href} {...props}>
          {children}
        </a>
      </Wrap>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cls}
      {...props}
    >
      {children}
    </motion.button>
  )
}


