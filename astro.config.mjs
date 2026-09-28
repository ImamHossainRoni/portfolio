import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// SITE_URL / BASE_PATH let the site be served from a subpath
// (e.g. https://imamhossainroni.github.io/portfolio/) before the custom domain is live.
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://imamhossainroni.me',
  base: process.env.BASE_PATH || '/',
  integrations: [mdx(), sitemap(), tailwind()]
});
