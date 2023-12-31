import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { defaultLocale, locales } from './src/i18n/i18n';

const sitemapLocales = Object.fromEntries(locales.map((_, i) => [locales[i], locales[i]])) // Create an object with keys and values based on locales

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap({
			i18n: {
				defaultLocale: defaultLocale,
				locales: sitemapLocales,
			}
		})
	],
	i18n: {
		defaultLocale: defaultLocale,
		locales: locales,
	}
});
