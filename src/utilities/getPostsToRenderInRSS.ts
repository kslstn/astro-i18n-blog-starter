import getPostPath from '@utilities/getPostPath';
import getPublishedPosts from '@utilities/getPublishedPosts';
import {getLocaleFromUrl} from '@i18n/utilities';

export async function getPostsToRenderInRSS(context, locale:string, collection:string) {
	const posts = (await getPublishedPosts(locale, collection))
		.slice(0, 50)
		.map((post) => ({
			...post.data,
			link: getPostPath(locale || getLocaleFromUrl(post.slug), collection, post.slug),
		}));
	return posts
}