
import type { CollectionEntry } from 'astro:content';
import getSortedPosts from '@utilities/getSortedPosts';
import { slugifyStr, slugifyAll } from '@utilities/slugify';
import { defaultLocale } from '@i18n/i18n';
import { uiStrings} from '@i18n/ui';
import { getLocaleFromUrl } from '@src/i18n/utils';

export const getUniqueTags = (posts,  locale:string = '') => {
  
	const filteredPosts = posts
		.filter(function(entry){ return locale === '' ? true : getLocaleFromUrl(entry.slug) === locale })
		.filter(({ data }) => !data.draft)
		.filter(({ data }) => !data.secret)
	
  const tags = filteredPosts
    .flatMap(post => post.data.tags)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));

	return tags;
};

export const getPostsByTag = (posts: CollectionEntry<'blog'>[], tag: string, locale: string) =>
  getSortedPosts(posts.filter(post => slugifyAll(post.data.tags).includes(tag)), locale);

export const getTagPath = (locale:string, tag:string)=>{
  const localePath = locale === defaultLocale ? '' : `/${locale}`
  const tagDirectoryName = slugifyStr(uiStrings.tagDirectoryName[locale])
  const tagSlugified = slugifyStr(tag)
  return `${localePath}/${tagDirectoryName}/${tagSlugified}`
}