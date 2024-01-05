import getPagePath from '@src/utilities/getPagePath';
import getPublishedPosts from '@utilities/getPublishedPosts';
import { slugifyStr, slugifyAll } from '@utilities/slugify';
import { tagDirectoryNames } from '@i18n/i18n';

export async function getUniqueTags(collection, locale:string = ''){
  
  // Tag is slugified here just in case in other places we'd use a different method to slugify it.
  type tags = [{
    slugified: string;
    name: string;
  }]
  
  const tags = (await getPublishedPosts(locale, collection, ''))
    .flatMap(post => post.data.tags)
    .map(tag => ({ slugified: slugifyStr(tag), name: tag }))
    .filter((value, index, self) =>
      self.findIndex(tag => tag.slugified === value.slugified) === index
    )
    .sort((tagA, tagB) => tagA.slugified.localeCompare(tagB.slugified));

	return tags;
};

export async function getPostsByTag(collection:string, tag:string, locale:string) {
  return (await getPublishedPosts(locale, collection)).filter(post => slugifyAll(post.data.tags).includes(slugifyStr(tag)))
}

export const getTagPath = (locale:string, tag:string)=>{
  const directories = [tagDirectoryNames[locale]]
  return getPagePath(locale, directories, tag)
}