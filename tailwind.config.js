/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        barEnter: {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        orbPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.25' },
          '50%': { transform: 'scale(1.05)', opacity: '0.35' },
        },
        animationIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatingPoints: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '20%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        'bar-enter': 'barEnter 0.8s ease-out forwards',
        'orb-pulse': 'orbPulse 5s ease-in-out infinite',
        'animation-in': 'animationIn 0.8s ease-out both',
        'floating-points': 'floatingPoints 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
