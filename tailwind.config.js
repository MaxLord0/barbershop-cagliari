/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#0B0B0A',
        ink: '#141312',
        steel: '#7F8588',
        bone: '#F3EFE7',
        champagne: '#C8A96A',
        leather: '#6E4E37'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(200, 169, 106, 0.16)'
      }
    }
  },
  plugins: []
}
