import getPagePath from '@utilities/getPagePath'
import { collectionDirectoryNames } from '@i18n/i18n';

export default function getPostPath(locale:string, collection:string, slug:string){
  const
		trueSlug = slug.slice(slug.indexOf('/') + 1), // remove /[locale]/ from start of slug
		collectionDirectory = [collectionDirectoryNames[collection][locale]];
  return getPagePath(locale, collectionDirectory, trueSlug)
}
