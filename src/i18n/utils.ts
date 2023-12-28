import Config from '../../astro.config.mjs'

export function getLocaleFromUrl(url:string) {
  if (url === undefined) return undefined
  const parts = url.split('/').filter(function (el) {return el !== ''})
  let match = ''
  parts.forEach((part)=>{
    if (Config.i18n.locales.includes(part)) match = part
  })
  if (match) return match
  return Config.i18n.defaultLocale;
}

export function localeIsInUrl(locale:string, url:string){
  return url.split('/').filter(function (el) {return el !== ''}).includes(locale)
}

export async function getStaticPaths(pages) {
  return pages.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}