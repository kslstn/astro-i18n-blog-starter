import rss from '@astrojs/rss';
import { siteTitle, siteDescription } from '../consts';
import { getPostsToRenderInRSS } from '@utilities/getPostsToRenderInRSS';
import { locales } from '@i18n/i18n';

export async function GET(context){
	const postsToRender = await getPostsToRenderInRSS(context, 'blog', locales)

	return rss({
		title: siteTitle,
		description: siteDescription,
		site: context.site,
		items: postsToRender,
	});
}
