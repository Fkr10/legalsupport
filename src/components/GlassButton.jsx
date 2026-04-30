import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * DESIGN.md button variants (Navy + Gold legal aesthetic):
 * primary  → gold bg (#C8A951), navy text (#0B1C2C), 4px radius, gold glow on hover
 * ghost    → transparent, gold text, gold border
 * dark     → navy bg (#0B1C2C), white text
 * secondary → white bg, navy text, border
 * dark-outline → white border on dark sections
 */

const base = [
  'inline-flex items-center justify-center gap-2',
  'text-btn font-regular leading-none',
  'transition-all duration-150',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A951] focus-visible:ring-offset-2',
  'active:scale-[0.98]',
  'disabled:opacity-40 disabled:pointer-events-none',
  'min-h-[44px] px-[18px] py-[10px] whitespace-nowrap',
  'rounded-[4px]',          // DESIGN.md: conservative 4px radius for buttons
].join(' ')

const variants = {
  primary:
    'bg-[#C8A951] text-[#0B1C2C] border border-transparent hover:bg-[#B8960B] shadow-[rgba(200,169,81,0.25)_0px_8px_20px_0px] hover:shadow-[rgba(200,169,81,0.35)_0px_14px_28px_0px]',
  ghost:
    'bg-transparent text-[#C8A951] border border-[rgba(200,169,81,0.40)] hover:bg-[rgba(200,169,81,0.08)] hover:border-[#C8A951]',
  dark:
    'bg-[#0B1C2C] text-white border border-transparent hover:opacity-90',
  secondary:
    'bg-white text-[#0B1C2C] border border-[#E5E7EB] hover:shadow-[rgba(11,28,44,0.15)_0px_15px_35px_0px]',
  // On dark (#08151F) sections — white outlined
  'dark-outline':
    'bg-transparent text-white border border-white/30 hover:bg-white/10',
}

function Wrap({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex ${className}`}
    >
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
  wrapClassName = '',
  ...props
}) {
  const cls = [base, variants[variant] ?? variants.primary, className].join(' ')

  if (as === 'link' && to) {
    return (
      <Wrap className={wrapClassName}>
        <Link className={cls} to={to} {...props}>{children}</Link>
      </Wrap>
    )
  }

  if (as === 'a' && href) {
    return (
      <Wrap className={wrapClassName}>
        <a className={cls} href={href} {...props}>{children}</a>
      </Wrap>
    )
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cls}
      {...props}
    >
      {children}
    </motion.button>
  )
}



