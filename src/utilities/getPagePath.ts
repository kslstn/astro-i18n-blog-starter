import { defaultLocale } from '@i18n/i18n';
import { slugifyStr } from '@utilities/slugify';


export default function getPagePath(locale:string, directories:Array<string>, slug:string){
  const localePath = locale === defaultLocale ? '' : `/${locale}`
  let  directoryPath = ''
	directories.map((dir)=> directoryPath += `/${ slugifyStr(dir)}`)
  slug = `/${slugifyStr(slug)}`
  return `${localePath}${directoryPath}${slug}`
}