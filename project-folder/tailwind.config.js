/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
        'orbitron': ['Orbitron', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-2px, -2px)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '30%': { transform: 'translate(2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '50%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(-2px, 2px)' },
          '70%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '90%': { transform: 'translate(-2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      colors: {
        'vapor-pink': '#ff69b4',
        'vapor-purple': '#9370db',
        'neon-blue': '#00ffff',
      },
    },
  },
  plugins: [],
}