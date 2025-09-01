import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://muhayat-lab.github.io/', // <- domain baru (tanpa subfolder)
  integrations: [tailwind({ applyBaseStyles: true })],
});
