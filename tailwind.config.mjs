/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
  darkMode: 'class',
  // Brak spacji wewnątrz nawiasów klamrowych jest krytyczny dla poprawnego działania reguł glob
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Zapewnienie zgodności fallbacku dla klasy font-sans użytej w Layout.astro
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}