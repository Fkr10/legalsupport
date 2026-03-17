import { Link } from 'react-router-dom'
import { useI18n } from '../utils/i18n.js'

export default function Logo({ variant = 'dark' }) {
  const isLight = variant === 'light'
  const { t } = useI18n()
  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <img
        src="/storage/brand/legalsupportnow-mark.svg"
        alt="LegalSupportNow"
        className="h-9 w-9 rounded-2xl shadow-soft"
        loading="eager"
        decoding="async"
      />
      <div className="leading-tight">
        <div
          className={[
            'font-sans text-lg font-semibold tracking-tight',
            isLight ? 'text-white' : 'text-primary',
          ].join(' ')}
        >
          LegalSupportNow
        </div>
        <div
          className={[
            'text-xs font-medium',
            isLight ? 'text-white/70' : 'text-secondary/70',
          ].join(' ')}
        >
          {t('footer.premiumTag')}
        </div>
      </div>
    </Link>
  )
}

