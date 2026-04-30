import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, PhoneCall, MessageCircle, Mail, ShieldCheck } from 'lucide-react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { useI18n } from '../utils/i18n.js'
import { useDisclaimerAccepted } from '../context/DisclaimerContext.jsx'
import navigationData from '../data/navigation.json'
import contactData from '../data/contact.json'

const navItems = navigationData.primary
const { phone, whatsapp, email } = contactData.contact

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang } = useI18n()
  const disclaimerAccepted = useDisclaimerAccepted()

  const closeMenu = () => setOpen(false)

  if (!disclaimerAccepted) return null

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ── Top Utility Bar (desktop only) ── */}
      <div className="hidden md:block bg-[#08151f] text-white/70 text-xs border-b border-white/5">
        <div className="container-max h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href={`mailto:${email}`} className="group inline-flex items-center gap-2 hover:text-white transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-semibold tracking-wide">
                {lang === 'hi' ? '24/7 आपातकालीन सहायता:' : '24/7 Emergency Support:'}
              </span>
              <span className="font-bold text-accent group-hover:text-white transition-colors">{email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              {lang === 'hi' ? '100% गोपनीय परामर्श' : '100% Confidential Consultation'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <div className="bg-primary border-b border-white/10 shadow-lg">
        <div className="container-max h-[68px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop nav (centered) */}
          <nav className="hidden lg:flex items-center gap-1 mx-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200',
                    isActive
                      ? 'text-accent bg-white/5'
                      : 'text-white/70 hover:text-white hover:bg-white/5',
                  ].join(' ')
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <Button as="link" to="/contact" variant="accent" className="shrink-0 whitespace-nowrap">
              <PhoneCall className="h-3.5 w-3.5 shrink-0" />
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <Motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-5 w-5" />
                </Motion.span>
              ) : (
                <Motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-5 w-5" />
                </Motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-primary border-t border-white/10 shadow-2xl"
          >
            <div className="container-max py-4 flex flex-col gap-1">
              {/* Emergency banner inside mobile menu */}
              <a
                href={`mailto:${email}`}
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl bg-accent/10 border border-accent/30 px-4 py-3 mb-2"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <div className="flex-1">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-accent">
                    {lang === 'hi' ? '24/7 सहायता' : '24/7 Support'}
                  </div>
                  <div className="text-sm font-bold text-white">{email}</div>
                </div>
                <Mail className="h-4 w-4 text-accent" />
              </a>

              {/* Nav links */}
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      'flex items-center rounded-lg px-4 py-3 font-semibold transition-colors border-l-2',
                      isActive
                        ? 'text-accent bg-accent/10 border-accent'
                        : 'text-white/80 hover:text-white hover:bg-white/8 border-transparent',
                    ].join(' ')
                  }
                >
                  {t(item.key)}
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/8 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <Button as="link" to="/contact" variant="accent" className="justify-center" onClick={closeMenu}>
                    <PhoneCall className="h-4 w-4" />
                    {t('nav.cta')}
                  </Button>
                </div>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
