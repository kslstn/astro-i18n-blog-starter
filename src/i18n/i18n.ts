export type Locale = "en" | "nl" | "de" | string;

interface Fallback {
	[key: string]: string
}
type PathNames = {
	[key: string]: {
		[locale in Locale]: string
	}
};

export const defaultLocale: string = "en"
export const locales = ["en", "nl", "de"]
export const fallback: Fallback = {
	nl: "en",
}
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
	blog: {
		en: 'blog',
		de: 'blog',
		nl: 'blog'
	},
}
export const directoryNames: PathNames = {
	// Define the path for the tag pages (tags list, posts per tag).
	tags: {
		en: 'tag',
		de: 'thema',
		nl: 'onderwerp'
	},
	// Define the path for people's profile pages. Should arguably be the same as the locale's About page's slug.
	people: {
		en: 'about',
		de: 'ueber',
		nl: 'over'
	}
}