import { Link } from 'react-router-dom'

export default function Logo({ variant = 'light' }) {
  // Determine which logo to use based on variant
  const logoSrc = variant === 'dark' 
    ? '/logo-dark.svg'
    : '/logo.svg'

  return (
    <Link 
      to="/" 
      className="group inline-flex items-center transition-transform duration-300 hover:scale-105 shrink-0"
      title="LegalSupportNow - Criminal Defense & Legal Support"
    >
      {/* Logo Mark - New Professional Design */}
      <img
        src={logoSrc}
        alt="LegalSupportNow - Professional Legal Support"
        className={[
          'h-auto w-60 transition-all duration-300',
          'group-hover:scale-105'
        ].join(' ')}
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}

