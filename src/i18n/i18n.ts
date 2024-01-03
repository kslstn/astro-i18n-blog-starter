export const defaultLocale:string = "en"
export const locales:Array<String> = ["en", "nl", "de"]
export const fallback:object = {
	nl: "en",
}

// Define the path for the tag pages (tags list, posts per tag):
export const tagDirectoryNames = {
	en: 'tag',
	de: 'thema',
	nl: 'onderwerp'
}