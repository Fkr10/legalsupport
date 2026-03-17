import { useI18n } from '../utils/i18n.js'

export default function LanguageToggle({ tone = 'dark' }) {
  const { lang, setLang } = useI18n()
  const isLight = tone === 'light'

  return (
    <div
      className={[
        'inline-flex items-center rounded-full p-1 text-xs font-semibold w-[86px] shrink-0',
        isLight
          ? 'border border-white/20 bg-white/10 backdrop-blur-md text-white'
          : 'border border-black/10 bg-white/80 text-primary',
      ].join(' ')}
    >
      <button
        className={[
          'flex-1 py-1.5 rounded-full transition whitespace-nowrap text-center',
          lang === 'hi'
            ? isLight
              ? 'bg-white/20 text-white'
              : 'bg-primary text-white'
            : isLight
              ? 'text-white/80 hover:text-white'
              : 'text-secondary/70 hover:text-primary',
        ].join(' ')}
        onClick={() => setLang('hi')}
        aria-label="Switch to Hindi"
      >
        HI
      </button>
      <button
        className={[
          'flex-1 py-1.5 rounded-full transition whitespace-nowrap text-center',
          lang === 'en'
            ? isLight
              ? 'bg-white/20 text-white'
              : 'bg-primary text-white'
            : isLight
              ? 'text-white/80 hover:text-white'
              : 'text-secondary/70 hover:text-primary',
        ].join(' ')}
        onClick={() => setLang('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}

