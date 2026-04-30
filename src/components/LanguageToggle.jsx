import { useId } from 'react'
import { motion as Motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useI18n } from '../utils/i18n.js'

export default function LanguageToggle({ tone = 'dark' }) {
  const { lang, setLang } = useI18n()
  const isLight = tone === 'light'
  const toggleId = useId()

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={[
        'inline-flex items-center p-1 rounded-full text-[11px] font-bold tracking-widest shrink-0 transition-all duration-300',
        isLight
          ? 'bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 shadow-glass'
          : 'bg-black/5 border border-black/5 hover:bg-black/10 shadow-inner-soft',
      ].join(' ')}
    >
      <div className={['px-2 flex items-center shrink-0', isLight ? 'text-[#C8A951]/80' : 'text-[#0B1C2C]/50'].join(' ')}>
        <Languages className="w-3.5 h-3.5" strokeWidth={2.5} />
      </div>
      
      {[{ code: 'en', label: 'EN' }, { code: 'hi', label: 'HI' }].map(({ code, label }) => {
        const active = lang === code
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-label={`Switch to ${code === 'en' ? 'English' : 'Hindi'}`}
            aria-pressed={active}
            className={[
              'relative px-3 py-1.5 rounded-full transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent',
              active
                ? isLight ? 'text-[#0B1C2C]' : 'text-white'
                : isLight ? 'text-white/60 hover:text-white' : 'text-[#0B1C2C]/60 hover:text-[#0B1C2C]',
            ].join(' ')}
          >
            {active && (
              <Motion.div
                layoutId={`lang-pill-${toggleId}`}
                className={[
                  'absolute inset-0 rounded-full',
                  isLight ? 'bg-white shadow-soft' : 'bg-[#08151F] shadow-card',
                ].join(' ')}
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        )
      })}
    </div>
  )
}

