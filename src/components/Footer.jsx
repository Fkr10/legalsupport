import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { useI18n } from '../utils/i18n.js'
import footerData from '../data/footer.json'
import contactData from '../data/contact.json'

export default function Footer() {
  const { t } = useI18n()
  const { company, quickLinks } = footerData
  const { contact } = contactData
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
            {quickLinks.map((link) => (
              <Link key={link.to} className="text-white/70 hover:text-white link-underline w-fit transition-colors" to={link.to}>
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-white/50 mb-4">
            {t('footer.contact')}
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <a href={company.phone.tel} className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Phone className="h-4 w-4 text-accent shrink-0" />
              {company.phone.display}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-accent shrink-0" />
              {company.email}
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>{company.address}</span>
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


