/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // === BRAND COLORS - change here to restyle whole site ===
        brand: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          200: '#b9ccff',
          300: '#8aaaff',
          400: '#5680ff',
          500: '#2d57ff',  // Primary brand blue
          600: '#1a3eeb',
          700: '#1530c8',
          800: '#1728a0',
          900: '#192680',
          950: '#0f1650',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Dark theme surface colors
        dark: {
          950: '#060611',
          900: '#0c0d1e',
          850: '#10112a',
          800: '#151630',
          750: '#1a1c3a',
          700: '#1f2244',
          600: '#2a2d58',
          500: '#373b6e',
        }
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'xs':   ['0.7rem',  { lineHeight: '1rem' }],
        'sm':   ['0.78rem', { lineHeight: '1.25rem' }],
        'base': ['0.875rem',{ lineHeight: '1.5rem' }],
        'lg':   ['0.975rem',{ lineHeight: '1.6rem' }],
        'xl':   ['1.1rem',  { lineHeight: '1.75rem' }],
        '2xl':  ['1.3rem',  { lineHeight: '1.9rem' }],
        '3xl':  ['1.6rem',  { lineHeight: '2rem' }],
        '4xl':  ['2rem',    { lineHeight: '2.4rem' }],
        '5xl':  ['2.5rem',  { lineHeight: '2.8rem' }],
        '6xl':  ['3rem',    { lineHeight: '3.2rem' }],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'pulse-slow':   'pulse 4s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'fade-up':      'fadeUp 0.7s ease forwards',
        'fade-in':      'fadeIn 0.5s ease forwards',
        'slide-right':  'slideRight 0.6s ease forwards',
        'glow':         'glow 3s ease-in-out infinite',
        'marquee':      'marquee 30s linear infinite',
      },
      keyframes: {
        float:      { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        fadeUp:     { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:     { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideRight: { '0%': { opacity: '0', transform: 'translateX(-24px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        glow:       { '0%,100%': { boxShadow: '0 0 20px rgba(45,87,255,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(45,87,255,0.6)' } },
        marquee:    { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        'glow-sm':  '0 0 15px rgba(45,87,255,0.25)',
        'glow':     '0 0 30px rgba(45,87,255,0.35)',
        'glow-lg':  '0 0 60px rgba(45,87,255,0.4)',
        'gold':     '0 0 25px rgba(245,158,11,0.4)',
        'card':     '0 4px 24px rgba(0,0,0,0.35)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
