import {getLocaleFromUrl} from '@src/i18n/utils'

const getSortedPosts = (posts, locale) => {
  return posts
    .filter(({ data }) => !data.draft)
    .filter(({ data }) => !data.secret)
		.filter(function(entry){ return getLocaleFromUrl(entry.slug) === locale })
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedPosts;