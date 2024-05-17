import type { Locale } from "./i18n";

interface TypeUIStrings {
	[key: string]: {
		[locale in Locale] : string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
	}
}

export const uiStrings: TypeUIStrings = {
	siteDescription: {
		en: 'All the basics for a brand-new blog.',
		de: 'Die Basics für eine niegelnagelneues Blog',
		nl: 'De start voor een gloednieuw blog',
	},
	skipLink: {
		en: 'Skip to content',
		de: 'Zum Inhalt springen',
		nl: 'Naar inhoud springen',
	},
	pageTranslationsAvailableIn: {
		en: 'This page is also available in',
		de: 'Diese Seite gibt es auch auf',
		nl: 'Deze tekst is ook beschikbaar in het'
	},
	en: {
		en: 'English',
		de: 'englisch',
		nl: 'Engels',
	},
	de: {
		en: 'German',
		de: 'deutsch',
		nl: 'Duits',
	},
	nl: {
		en: 'Dutch',
		de: 'niederländisch',
		nl: 'Nederlands'
	},
	tagHeadingSingular: {
		en: 'Tag',
		de: 'Thema',
		nl: 'Onderwerp'
	},
	tagHeadingPlural: {
		en: 'Tags',
		de: 'Themen',
		nl: 'Onderwerpen'
	},
	postsPerTagPageDescription: {
		en: "Posts about",
		de: 'Posts zum Thema',
		nl: 'Posts met onderwerp'
	},
	personProfilePageDescription: {
		en: "Profile of",
		de: 'Profil von',
		nl: 'Profiel van'
	},
	pageNotFoundHeading: {
		en: 'Page not found',
		de: 'Seite nicht gefunden',
		nl: 'Pagina niet gevonden'
	},
	pageNotFoundBody: {
		en: '404!',
		de: '404!',
		nl: '404!'
	},
};
