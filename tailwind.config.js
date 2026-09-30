/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDFBF7',
          100: '#F7F3EA',
          200: '#EDE4D1',
          300: '#DECFAF',
          400: '#CCA867',
          500: '#B88E44',
          600: '#9E6E2D',
          700: '#8A5C22',
          800: '#724B1C',
          900: '#5A3B16',
          gold: '#B88E44',
          ochre: '#9E6E2D',
          darkOchre: '#8A5D23',
          footer: '#9B6B2B',
          cream: '#FAF8F4',
          card: '#F6F3EC',
          border: '#E8E1D3',
          dark: '#222222',
          textMuted: '#68645E'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(158, 110, 45, 0.08)',
        'card': '0 10px 25px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'hover': '0 14px 28px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
