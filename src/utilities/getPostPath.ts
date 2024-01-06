import getPagePath from '@utilities/getPagePath'
import { directoryNames } from '@i18n/i18n';

export default function getPostPath(locale:string, collection:string, slug:string, addLeadingSlash:boolean = true){
  const
		trueSlug = slug.slice(slug.indexOf('/') + 1), // remove /[locale]/ from start of slug
		collectionDirectory = [directoryNames.collections[collection][locale]];
  return getPagePath(locale, collectionDirectory, trueSlug, addLeadingSlash)
}
