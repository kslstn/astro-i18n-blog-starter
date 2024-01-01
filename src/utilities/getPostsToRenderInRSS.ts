import { getCollection } from 'astro:content';
import { getLocaleFromUrl } from '@i18n/utils';
import { getPostPath } from '@utilities/getPostPath';

export async function getPostsToRenderInRSS(context, collection:String, locales:Array) {
	const posts = await getCollection(collection);
	let postsToRender = []
	for (let locale of locales) {
		const localePosts = posts
			.filter(function (entry) { return !entry.secret && !entry.draft })
			.filter(function (entry) { return getLocaleFromUrl(entry.slug) === locale })
			.sort(
				(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
			)
			.slice(0, 50)
			.map((post) => ({
				...post.data,
				link: getPostPath(locale, collection, post.slug),
			}));
		postsToRender.push(...localePosts)
	}
	return postsToRender
}