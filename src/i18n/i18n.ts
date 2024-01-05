export const defaultLocale:string = "en"
export const locales:Array<string> = ["en", "nl", "de"]
export const fallback:object = {
	nl: "en",
}

// Define the paths for collections
export const collectionDirectoryNames = {
	blog: {
		en: 'blog',
		de: 'blog',
		nl: 'blog'
	}
}

// Define the path for the tag pages (tags list, posts per tag):
export const tagDirectoryNames = {
	en: 'tag',
	de: 'thema',
	nl: 'onderwerp'
}