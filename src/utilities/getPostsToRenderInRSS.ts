import { getRelativePostPath } from '@utilities/getPostPath';
import getPublishedPosts from '@utilities/getPublishedPosts';
import {getLocaleFromUrl} from '@i18n/utilities';
import type { APIContext } from 'astro';

export async function getPostsToRenderInRSS(_context: APIContext, locale: string, collection: "blog") {
	const posts = (await getPublishedPosts(locale, collection))
		.slice(0, 50)
		.map((post) => ({
			...post.data,
			link: getRelativePostPath(locale || getLocaleFromUrl(post.slug), collection, post.slug),
			body: post.body
		}));
	return posts
}