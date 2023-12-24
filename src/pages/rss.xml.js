import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteTitle, siteDescription } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: siteTitle,
		description: siteDescription,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
