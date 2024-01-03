import getPublishedPosts from '@utilities/getPublishedPosts';
import { slugifyStr, slugifyAll } from '@utilities/slugify';
import { defaultLocale } from '@i18n/i18n';
import { uiStrings} from '@i18n/ui';

export async function getUniqueTags(collection, locale:string = ''){
  type tags = [{
    tag: string;
    tagName: string;
  }]
  
  const tags = (await getPublishedPosts(locale, collection, ''))
    .flatMap(post => post.data.tags)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter((value, index, self) =>
      self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));

	return tags;
};

export async function getPostsByTag(collection:string, tag:string, locale:string) {
  return (await getPublishedPosts(locale, collection)).filter(post => slugifyAll(post.data.tags).includes(tag))
}

export const getTagPath = (locale:string, tag:string)=>{
  const localePath = locale === defaultLocale ? '' : `/${locale}`
  const tagDirectoryName = slugifyStr(uiStrings.tagDirectoryName[locale])
  const tagSlugified = slugifyStr(tag)
  return `${localePath}/${tagDirectoryName}/${tagSlugified}`
}