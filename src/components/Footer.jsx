import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import { useI18n } from '../utils/i18n.js'
import footerData from '../data/footer.json'
import contactData from '../data/contact.json'

export default function Footer() {
  const { t } = useI18n()
  const { company, quickLinks } = footerData
  const { offices } = contactData

  return (
    // DESIGN.md: brand-dark (#08151F) full-width section for immersive brand cadence
    <footer className="bg-[#08151F] mt-20">
      {/* Main footer grid */}
      <div className="container-max py-16 grid gap-10 md:grid-cols-12">

        {/* Brand column */}
        <div className="md:col-span-5">
          <Logo variant="dark" />
          <p className="mt-5 text-[16px] font-[300] leading-[1.40] text-white/60 max-w-sm">
            {t('footer.desc')}
          </p>
          {/* Language toggle */}
          <div className="mt-6">
            <LanguageToggle tone="light" />
          </div>
          {/* Trust badge */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-[4px] bg-white/[0.06] border border-white/[0.10] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A951]" />
            <span className="text-[11px] font-[400] tracking-[0.1em] uppercase text-white/50">
              100% Confidential
            </span>
          </div>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3">
          <div className="text-[11px] font-[400] tracking-[0.14em] uppercase text-white/40 mb-4">
            {t('footer.quickLinks')}
          </div>
          <div className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[14px] font-[300] text-white/60 hover:text-white link-underline w-fit transition-colors duration-150"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <div className="text-[11px] font-[400] tracking-[0.14em] uppercase text-white/40 mb-4">
            {t('footer.contact')}
          </div>
          <div className="flex flex-col gap-3 text-[14px] font-[300] text-white/60">
            <a href={company.phone.tel} className="flex items-center gap-2.5 hover:text-white transition-colors duration-150">
              <Phone className="h-4 w-4 text-[#C8A951] shrink-0" />
              {company.phone.display}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors duration-150">
              <Mail className="h-4 w-4 text-[#C8A951] shrink-0" />
              {company.email}
            </a>
            <div className="mt-1 flex flex-col gap-2.5">
              {offices.map((office) => (
                <a
                  key={office.id}
                  href={office.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2.5 hover:text-white transition-colors duration-150 group"
                >
                  <MapPin className="h-4 w-4 text-[#C8A951] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[12px] font-[400] text-[#C8A951] group-hover:text-[#E8D38A] transition-colors">
                      {office.label}
                    </div>
                    <div className="text-[13px] leading-snug">{office.address}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08]">
        <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] font-[300] text-white/35">
            © {new Date().getFullYear()} LegalSupportNow. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4 text-[12px] font-[300] text-white/35">
            <span>Legal disclaimer applies</span>
            <span className="text-white/15">·</span>
            <Link to="/contact" className="hover:text-white/60 transition-colors duration-150">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}



