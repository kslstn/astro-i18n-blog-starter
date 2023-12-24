import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

const i18n = {
	defaultLocale: "en",
	locales: ["en", "nl"]
}


// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap({
			i18n: i18n
		})
	],

	i18n: i18n

});
