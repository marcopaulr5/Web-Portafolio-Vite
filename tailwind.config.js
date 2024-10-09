/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': 'var(--neon-blue)',
        'neon-pink': 'var(--neon-pink)',
        'neon-green': 'var(--neon-green)',
      },
    },
  },
  plugins: [],
}