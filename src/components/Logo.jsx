import { Link } from 'react-router-dom'

export default function Logo({ variant = 'light' }) {
  // Determine which logo to use based on variant
  const logoSrc = variant === 'dark' 
    ? '/storage/brand/legalsupportnow-mark-dark.svg'
    : '/storage/brand/legalsupportnow-mark-new.svg'

  return (
    <Link 
      to="/" 
      className="group inline-flex items-center transition-transform duration-300 hover:scale-105"
      title="LegalSupportNow - Criminal Defense & Legal Support"
    >
      {/* Logo Mark - New Professional Design */}
      <img
        src={logoSrc}
        alt="LegalSupportNow - Professional Legal Support"
        className={[
          'h-auto w-40 transition-all duration-300',
          'group-hover:shadow-lg group-hover:scale-110',
          'shadow-soft',
          'rounded-lg'
        ].join(' ')}
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}

