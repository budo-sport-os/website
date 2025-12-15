// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://budo-sport-os.github.io',
	base: '/website',
	integrations: [mdx(), sitemap()],
});
