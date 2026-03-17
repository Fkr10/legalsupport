import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link 
      to="/" 
      className="group inline-flex items-center transition-transform duration-300 hover:scale-105"
    >
      {/* Logo Mark */}
      <img
        src="/storage/brand/legalsupportnow-mark.svg"
        alt="LegalSupportNow"
        className={[
          'h-20 w-40 rounded-2xl transition-all duration-300',
          'group-hover:shadow-lg group-hover:scale-110',
          'shadow-soft'
        ].join(' ')}
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}

