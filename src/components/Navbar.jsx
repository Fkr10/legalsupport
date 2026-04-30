import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, MessageCircle, Mail, ShieldCheck, ArrowRight } from 'lucide-react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'
import { useI18n } from '../utils/i18n.js'
import { useDisclaimerAccepted } from '../context/DisclaimerContext.jsx'
import navigationData from '../data/navigation.json'
import contactData from '../data/contact.json'

const navItems = navigationData.primary
const { whatsapp, email } = contactData.contact

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang } = useI18n()
  const disclaimerAccepted = useDisclaimerAccepted()
  const closeMenu = () => setOpen(false)

  if (!disclaimerAccepted) return null

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ── Top Utility Bar — desktop only (DESIGN.md: brand-dark #08151F) ── */}
      <div className="hidden md:block bg-[#08151F] text-white/60 text-[11px]">
        <div className="container-max h-8 flex items-center justify-between gap-4">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-150"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A951] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C8A951]" />
            </span>
            <span className="font-[400] tracking-wide">
              {lang === 'hi' ? '24/7 आपातकालीन सहायता:' : '24/7 Emergency Support:'}
            </span>
            <span className="font-[400] text-[#E8D38A] hover:text-white transition-colors">{email}</span>
          </a>
          <span className="hidden lg:inline-flex items-center gap-1.5 text-white/50">
            <ShieldCheck className="h-3 w-3 text-[#C8A951]" />
            {lang === 'hi' ? '100% गोपनीय परामर्श' : '100% Confidential Consultation'}
          </span>
        </div>
      </div>

      {/* ── Main Nav Bar (DESIGN.md: white bg, backdrop blur, top-sm shadow) ── */}
      <div
        className="bg-white/95 backdrop-blur-[12px] border-b border-[#E5E7EB]"
        style={{ boxShadow: 'rgba(11,28,44,0.08) 0px 2px 8px 0px' }}
      >
        
        <div className="container-max h-[64px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop nav — DESIGN.md: 14px/400/navy, 6px hover bg */}
          <nav className="hidden lg:flex items-center gap-0.5 mx-auto" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'px-3 py-2 text-[14px] font-[400] rounded-[6px] transition-all duration-150',
                    isActive
                      ? 'text-[#C8A951] bg-[rgba(200,169,81,0.06)]'
                      : 'text-[#0B1C2C] hover:text-[#C8A951] hover:bg-[rgba(200,169,81,0.04)]',
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#E5E7EB] text-[#4B5563] hover:text-[#C8A951] hover:border-[#E8D38A] transition-all duration-150"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            {/* CTA: DESIGN.md primary gold button */}
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 min-h-[36px] px-4 py-2 bg-[#C8A951] text-[#0B1C2C] text-[14px] font-[400] rounded-[4px] hover:bg-[#B8960B] transition-colors duration-150 whitespace-nowrap"
            >
              {t('nav.cta')}
              <ArrowRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>

          {/* Mobile hamburger — DESIGN.md: 6px radius */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-[#E5E7EB] text-[#0B1C2C] hover:bg-[#F8F9FA] transition-colors duration-150"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <Motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.12 }}>
                  <X className="h-5 w-5" />
                </Motion.span>
              ) : (
                <Motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.12 }}>
                  <Menu className="h-5 w-5" />
                </Motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer (DESIGN.md: brand-dark #08151F) ── */}
      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-[#08151F] border-t border-white/[0.08]"
            style={{ boxShadow: 'rgba(11,28,44,0.35) 0px 14px 21px -14px' }}
          >
            <div className="container-max py-4 flex flex-col gap-1">
              {/* Email banner */}
              <a
                href={`mailto:${email}`}
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-[6px] bg-[rgba(200,169,81,0.15)] border border-[rgba(200,169,81,0.30)] px-4 py-3 mb-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A951] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8A951]" />
                </span>
                <div className="flex-1">
                  <div className="text-[10px] font-[400] tracking-[0.12em] uppercase text-[#E8D38A]">
                    {lang === 'hi' ? '24/7 सहायता' : '24/7 Support'}
                  </div>
                  <div className="text-[14px] font-[400] text-white mt-0.5">{email}</div>
                </div>
                <Mail className="h-4 w-4 text-[#E8D38A]" />
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
                      'flex items-center rounded-[6px] px-4 py-3 text-[14px] font-[400] transition-colors border-l-2',
                      isActive
                        ? 'text-[#E8D38A] bg-[rgba(200,169,81,0.12)] border-[#C8A951]'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.05] border-transparent',
                    ].join(' ')
                  }
                >
                  {t(item.key)}
                </NavLink>
              ))}

              {/* Bottom CTAs */}
              <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/20 px-4 py-2.5 text-[14px] font-[400] text-white/80 hover:bg-white/10 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <NavLink
                    to="/contact"
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#C8A951] px-4 py-2.5 text-[14px] font-[400] text-[#0B1C2C] hover:bg-[#B8960B] transition-colors"
                  >
                    {t('nav.cta')}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </NavLink>
                </div>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

