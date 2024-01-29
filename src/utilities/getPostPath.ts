import getPagePath from '@utilities/getPagePath'
import { collectionDirectoryNames } from '@i18n/i18n';
import { locales } from '@i18n/i18n';
import { site } from '@src/consts'

export function getRelativePostPath(locale: string, collection: string, slug: string, addLeadingSlash: boolean = true): string{
  const
		trueSlug = slug.slice(slug.indexOf('/') + 1), // remove /[locale]/ from start of slug
		collectionDirectory = [collectionDirectoryNames[collection][locale]];
	if (locales.includes(locale)) return getPagePath(locale, collectionDirectory, trueSlug, addLeadingSlash)
	else throw new Error(`Unknown locale: ${locale}`)
}

export function getAbsolutePostPath(locale: string, collection: string, slug: string): string{
	return `${site}${getRelativePostPath(locale, collection, slug, true)}`
}
