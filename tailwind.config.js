/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── DESIGN.md: Criminal Defense Law Firm Navy + Gold ──
        // Primary Brand
        'navy':         '#0B1C2C',   // Deep Navy - brand identity, headings
        'navy-dark':    '#08151F',   // Dark Navy - footer, immersive sections
        'navy-mid':     '#122233',   // Navy Mid - card surfaces in dark sections
        'gold':         '#C8A951',   // Gold - primary CTA, interactive accents
        'gold-h':       '#B8960B',   // Gold Hover - darker for hover states
        'gold-l':       '#E8D38A',   // Gold Light - accents on dark backgrounds
        'gold-sub':     'rgba(200,169,81,0.12)',   // Gold Subtle - hover surfaces
        'gold-border':  'rgba(200,169,81,0.30)',   // Gold Border - featured cards
        
        // Text Scale
        'text-heading': '#0B1C2C',   // Primary headings
        'text-label':   '#1F3650',   // Secondary labels
        'text-body':    '#4B5563',   // Standard text
        'text-muted':   '#6B7280',   // Captions, metadata
        
        // Surfaces & Borders
        'surface':      '#FFFFFF',   // Card and panel background
        'surface-alt':  '#F8F9FA',   // Slightly off-white sections
        'border-default': '#E5E7EB',   // Standard card borders
        'border-navy':  'rgba(11,28,44,0.12)',  // Navy-tinted borders
        
        // Semantic
        'success':      '#15BE53',   // Positive status
        'success-text': '#0D7A34',   // Text on success badges
        'warning':      '#D97706',   // Deadlines, urgency
        'error':        '#DC2626',   // Form errors, critical
        
        // Legacy aliases for component compatibility
        primary:    '#0B1C2C',       // Deep Navy
        secondary:  '#08151F',       // Dark Navy
        accent:     '#C8A951',       // Gold
        background: '#FFFFFF',
        'section-alt': '#F8F9FA',
      },
      fontFamily: {
        // sohne-var not available via CDN; Inter at weight 300/400 is the closest web-safe substitute
        sans:  ['Inter', 'SF Pro Display', 'system-ui', '-apple-system', 'sans-serif'],
        mono:  ['Source Code Pro', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontWeight: {
        light:   '300',
        regular: '400',
        medium:  '500',
        bold:    '700',
      },
      fontSize: {
        'display':   ['3.5rem',  { lineHeight: '1.03', letterSpacing: '-1.4px',  fontWeight: '300' }],
        'display-lg':['3rem',    { lineHeight: '1.15', letterSpacing: '-0.96px', fontWeight: '300' }],
        'section-h': ['2rem',    { lineHeight: '1.10', letterSpacing: '-0.64px', fontWeight: '300' }],
        'sub-lg':    ['1.625rem',{ lineHeight: '1.12', letterSpacing: '-0.26px', fontWeight: '300' }],
        'sub':       ['1.375rem',{ lineHeight: '1.10', letterSpacing: '-0.22px', fontWeight: '300' }],
        'body-lg':   ['1.125rem',{ lineHeight: '1.40', fontWeight: '300' }],
        'body-md':   ['1rem',    { lineHeight: '1.40', fontWeight: '300' }],
        'btn':       ['1rem',    { lineHeight: '1.00', fontWeight: '400' }],
        'btn-sm':    ['0.875rem',{ lineHeight: '1.00', fontWeight: '400' }],
        'nav-link':  ['0.875rem',{ lineHeight: '1.00', fontWeight: '400' }],
        'caption':   ['0.8125rem',{ lineHeight: '1.00', fontWeight: '400' }],
        'caption-sm':['0.75rem', { lineHeight: '1.33', fontWeight: '300' }],
        'micro':     ['0.625rem',{ lineHeight: '1.15', fontWeight: '300' }],
      },
      boxShadow: {
        // ── DESIGN.md: Navy-tinted shadow system (law firm authority) ──
        'ambient': 'rgba(11,28,44,0.06) 0px 3px 6px 0px',
        'standard': 'rgba(11,28,44,0.08) 0px 15px 35px 0px',
        'elevated': 'rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px',
        'deep':     'rgba(11,28,44,0.35) 0px 14px 21px -14px, rgba(0,0,0,0.10) 0px 8px 17px -8px',
        'gold-glow': 'rgba(200,169,81,0.25) 0px 8px 20px 0px',
        'top-sm':   'rgba(11,28,44,0.08) 0px 2px 8px 0px',
        // Legacy aliases for compatibility
        soft:  'rgba(11,28,44,0.06) 0px 3px 6px 0px',
        card:  'rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px',
        lift:  'rgba(11,28,44,0.08) 0px 15px 35px 0px',
        glass: 'rgba(11,28,44,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px',
      },
      borderRadius: {
        // DESIGN.md: 4px-8px conservative scale
        'micro':  '1px',
        'sm':     '4px',
        'md':     '5px',
        'DEFAULT':'6px',
        'lg':     '8px',
        // Legacy — large radii from OLD design; keep so existing classes don't crash
        'xl':  '8px',  // clamped to 8px per DESIGN.md
        '2xl': '8px',
        '3xl': '8px',
      },
      maxWidth: {
        content: '1080px',
        prose:   '68ch',
      },
      spacing: {
        // DESIGN.md dense small-end scale extras
        '0.5': '2px',
        '1':   '4px',
        '1.5': '6px',
        '2':   '8px',
        '2.5': '10px',
        '3':   '12px',
        '3.5': '14px',
        '4':   '16px',
        '4.5': '18px',
        '5':   '20px',
      },
      lineHeight: {
        reading: '1.875',
        tight:   '1.03',
        snug:    '1.12',
      },
      animation: {
        'fade-in':    'fadeIn 0.25s ease-in-out both',
        'slide-up':   'slideUp 0.25s ease-in-out both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}



