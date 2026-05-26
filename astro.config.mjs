// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'; // 1. Musimy to zaimportować na górze

// https://astro.build/config
export default defineConfig({
  site: 'https://lukaszrosicki.github.io',
  base: '/commercestack/',
  
  // 2. Icon ląduje w integracjach Astro
  integrations: [
    icon()
  ],

  // 3. Tailwind v4 zostaje tutaj jako plugin Vite
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});