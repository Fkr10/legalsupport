import { NavLink, Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { Menu, X, PhoneCall } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import { useI18n } from '../utils/i18n.js'

const navItems = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.practice', to: '/practice-areas' },
  { key: 'nav.about', to: '/about' },
  { key: 'nav.blog', to: '/blog' },
  { key: 'nav.contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change/click
  const closeMenu = () => setOpen(false)

  const wrapperClass = useMemo(() => {
    const base = 'fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b'
    if (scrolled)
      return `${base} bg-white/98 border-black/10 shadow-soft backdrop-blur-sm`
    return `${base} backdrop-blur-lg bg-primary/15 border-white/10`
  }, [scrolled])

  return (
    <header className={wrapperClass}>
      <div className="container-max h-[70px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [
                  'pb-0.5 transition-colors duration-150',
                  scrolled
                    ? 'text-secondary/80 hover:text-primary'
                    : 'text-white/85 hover:text-white',
                  'link-underline',
                  isActive
                    ? scrolled
                      ? 'text-primary'
                      : 'text-white'
                    : '',
                ].join(' ')
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <LanguageToggle tone={scrolled ? 'dark' : 'light'} />
          <Button as="link" to="/contact" variant="accent" className="shrink-0 whitespace-nowrap">
            <PhoneCall className="h-3.5 w-3.5 shrink-0" />
            {t('nav.cta')}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={[
            'md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200',
            scrolled
              ? 'border-black/10 bg-white text-primary shadow-soft'
              : 'border-white/20 bg-white/10 text-white backdrop-blur-md',
          ].join(' ')}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-black/8"
          >
            <div className="container-max py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className="flex items-center rounded-xl px-4 py-3.5 min-h-[52px] font-semibold text-primary hover:bg-primary/5 transition-colors border border-transparent hover:border-black/8"
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="pt-3 border-t border-black/8 mt-2 flex flex-col gap-3">
                <LanguageToggle tone="dark" />
                <Button as="link" to="/contact" variant="accent" className="w-full justify-center" onClick={closeMenu}>
                  <PhoneCall className="h-4 w-4" />
                  {t('nav.cta')}
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}


