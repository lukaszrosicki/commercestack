/** @type {import('tailwindcss').Config} */
export default {
  // Wskazanie Astro komponentów, layoutów i stron do analizy klas narzędziowych
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Tutaj w przyszłości rozbudujesz design system projektu (kolory, fonty)
    },
  },
  plugins: [],
}