import Config from '../../astro.config.mjs'

export function getLocaleFromUrl(url) {
  const [, lang] = url.split('/');
  if (Config.i18n.locales.includes(lang)) return lang;
  return Config.i18n.defaultLocale;
}
