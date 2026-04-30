import { useI18n } from '../utils/i18n.js'

export default function LanguageToggle({ tone = 'dark' }) {
  const { lang, setLang } = useI18n()
  const isLight = tone === 'light'

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={[
        'inline-flex items-center gap-0.5 rounded-lg p-0.5 text-[11px] font-bold tracking-wide shrink-0',
        isLight
          ? 'bg-white/10 border border-white/20 backdrop-blur-md'
          : 'bg-gray-100 border border-gray-200',
      ].join(' ')}
    >
      {[{ code: 'en', label: 'EN' }, { code: 'hi', label: 'HI' }].map(({ code, label }) => {
        const active = lang === code
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-label={`Switch to ${code === 'en' ? 'English' : 'Hindi'}`}
            aria-pressed={active}
            className={[
              'px-2.5 py-0.5 rounded-md transition-all duration-200 whitespace-nowrap',
              active
                ? isLight
                  ? 'bg-white text-primary shadow-sm font-extrabold'
                  : 'bg-primary text-white shadow-sm font-extrabold'
                : isLight
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-gray-500 hover:text-primary hover:bg-gray-200',
            ].join(' ')}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

