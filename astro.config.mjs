import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://conservice.com.co/',
  i18n: {
    defaultLocale: 'es',
    locales: ['es']
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: true
    }
  }), mdx()]
});