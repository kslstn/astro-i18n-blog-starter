import getPagePath from '@utilities/getPagePath'
import { directoryNames } from '@i18n/i18n';
import { site } from '@src/consts'


export function getRelativePostPath(locale:string, collection:string, slug:string, addLeadingSlash:boolean = true){
  const
		trueSlug = slug.slice(slug.indexOf('/') + 1), // remove /[locale]/ from start of slug
		collectionDirectory = [directoryNames.collections[collection][locale]];
  return getPagePath(locale, collectionDirectory, trueSlug, addLeadingSlash)
}

export function getAbsolutePostPath(locale:string, collection:string, slug:string){
	return `${site}${getRelativePostPath(locale, collection, slug, true)}`
}
