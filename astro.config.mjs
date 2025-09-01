import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://muhayat.github.io/',
  integrations: [tailwind({ applyBaseStyles: true })],
});
