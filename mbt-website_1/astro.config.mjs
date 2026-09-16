import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: change `site` to your real domain before deploying.
export default defineConfig({
  site: 'https://minibrainsplay.com.au',
  integrations: [sitemap()],
});
