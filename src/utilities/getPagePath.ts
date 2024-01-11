import { defaultLocale } from '@i18n/i18n';
import slugify from '@sindresorhus/slugify';

export default function getPagePath(locale: string, directories:Array<string>, slug: string, addLeadingSlash: boolean = true){
  const leadingSlash = addLeadingSlash ? '/' : ''
  const localePath = locale === defaultLocale ? '' : `${locale}/`
  let directoryPath = ''
	directories.map((dir)=> directoryPath += `${ slugify(dir)}/`)
  slug = `${slugify(slug)}`
  return `${leadingSlash}${localePath}${directoryPath}${slug}`
}