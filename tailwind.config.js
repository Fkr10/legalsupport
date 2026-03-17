/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1C2C',
        secondary: '#1F2937',
        accent: '#C8A951',
        background: '#F8F9FA',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 16px rgba(11, 28, 44, 0.08)',
        card: '0 2px 8px rgba(11, 28, 44, 0.06), 0 8px 24px rgba(11, 28, 44, 0.08)',
        lift: '0 8px 24px rgba(11, 28, 44, 0.12), 0 24px 48px rgba(11, 28, 44, 0.10)',
        glass: '0 8px 32px rgba(11, 28, 44, 0.18)',
        glow: '0 0 0 1px rgba(200,169,81,0.25), 0 8px 32px rgba(200,169,81,0.20)',
        'inner-soft': 'inset 0 1px 2px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        content: '1200px',
        prose: '68ch',
      },
      lineHeight: {
        reading: '1.85',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out both',
        'slide-up': 'slideUp 0.5s ease-out both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}


