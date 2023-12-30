import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { defaultLocale, locales, fallback } from './src/i18n';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap({
			i18n: {
				defaultLocale: defaultLocale,
				locales: locales,
			}
		})
	],
	i18n: {
		defaultLocale: defaultLocale,
		locales: locales,
		fallback: fallback
	}
});
