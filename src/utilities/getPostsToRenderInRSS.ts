import getPostPath from '@utilities/getPostPath';
import getPublishedPosts from '@utilities/getPublishedPosts';

export async function getPostsToRenderInRSS(context, locale:String, collection:String) {
	const posts = (await getPublishedPosts(locale, collection))
		.slice(0, 50)
		.map((post) => ({
			...post.data,
			link: getPostPath(locale, collection, post.slug),
		}));
	return posts
}