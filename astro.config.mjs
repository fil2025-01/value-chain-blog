// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update once hosting/domain is decided
  site: 'https://example.com',
  integrations: [sitemap()]
});