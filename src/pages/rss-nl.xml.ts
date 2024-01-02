import rss from '@astrojs/rss';
import { siteTitle, siteDescription } from '../consts';
import { getPostsToRenderInRSS } from '@utilities/getPostsToRenderInRSS';

export async function GET(context) {
	const postsToRender = await getPostsToRenderInRSS(context, 'nl', 'blog')

	return rss({
		title: siteTitle,
		description: siteDescription,
		site: context.site,
		items: postsToRender,
	});
}
