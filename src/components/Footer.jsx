import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { useI18n } from '../utils/i18n.js'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="mt-20 border-t-2 border-accent/30 bg-primary">
      <div className="container-max py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo variant="light" />
          <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 mb-4">
            {t('footer.quickLinks')}
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link className="text-white/70 hover:text-white link-underline w-fit transition-colors" to="/practice-areas">
              {t('nav.practice')}
            </Link>
            <Link className="text-white/70 hover:text-white link-underline w-fit transition-colors" to="/about">
              {t('nav.about')}
            </Link>
            <Link className="text-white/70 hover:text-white link-underline w-fit transition-colors" to="/blog">
              {t('nav.blog')}
            </Link>
            <Link className="text-white/70 hover:text-white link-underline w-fit transition-colors" to="/contact">
              {t('nav.contact')}
            </Link>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 mb-4">
            {t('footer.contact')}
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <a href="tel:+919876543210" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Phone className="h-4 w-4 text-accent shrink-0" />
              +91 98765 43210
            </a>
            <a href="mailto:support@legalsupportnow.in" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-accent shrink-0" />
              support@legalsupportnow.in
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>4th Floor, DLF Plaza, M.G. Road, Gurugram, Haryana 122002</span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/40">
            © {new Date().getFullYear()} LegalSupportNow. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  )
}


