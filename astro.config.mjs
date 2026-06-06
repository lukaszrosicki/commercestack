// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroIcons from 'astro-icons';

export default defineConfig({
  site: 'https://lukaszrosicki.github.io', //[cite: 1]
  base: '/commercestack', // Mapowanie bazy pod GitHub Pages podkatalog
  output: 'static', //[cite: 1]
  integrations: [
    tailwind({
      // Wyciszamy automatyczne wstrzykiwanie, ponieważ plik global.css 
      // dostarcza dyrektywy @tailwind bezpośrednio przez warstwę PostCSS
      applyBaseStyles: false, 
    }),
    astroIcons(),
  ],
});