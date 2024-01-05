export const defaultLocale:string = "en"
export const locales:Array<string> = ["en", "nl", "de"]
export const fallback:object = {
	nl: "en",
}

export const directoryNames = {
	// Define the paths for collections
	collections: {
		blog: {
			en: 'blog',
			de: 'blog',
			nl: 'blog'
		},
	},
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