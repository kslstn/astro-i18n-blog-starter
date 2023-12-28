import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

const internationalizationSettingsMain = {
	defaultLocale: "en",
	locales: ["en", "nl", "de"],
}

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap({
			i18n: internationalizationSettingsMain
		})
	],
	i18n: {
		...internationalizationSettingsMain,
		fallback: {
			nl: "en",
		}
	}
});
