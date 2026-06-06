// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Adres URL Twojej witryny docelowej na GitHub Pages
  site: 'https://lukaszrosicki.github.io',
  
  // Krytyczne dla prawidłowego mapowania zasobów (CSS/JS) w podkatalogu repozytorium
  base: '/commercestack',
  
  // Statyczna generacja stron (SSG) – optymalna pod GitHub Pages
  output: 'static',
  
  integrations: [
    tailwind({
      // true (domyślnie): Astro automatycznie wstrzykuje style bazowe (@tailwind base, components, utilities).
      // Jeśli posiadasz własny plik global.css z dyrektywami @tailwind i konfiguracją PostCSS,
      // możesz zmienić tę wartość z powrotem na false.
      applyBaseStyles: true,
    }),
  ],
});