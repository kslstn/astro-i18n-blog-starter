import { type CollectionEntry, getCollection } from 'astro:content';
import {getLocaleFromUrl} from '@i18n/utilities'

export default async function getPublishedPosts(locale: string, collection: "blog" = 'blog', sort: string = 'reverseChronological'){
  let posts = (await getCollection(collection)).filter(({ data }) => !data.secret)
  if (locale !== '') posts = posts.filter(function(entry:CollectionEntry<'blog'>){ return getLocaleFromUrl(entry.slug) === locale })
  if (sort === 'reverseChronological') posts = posts.sort((a:CollectionEntry<'blog'>, b:CollectionEntry<'blog'>) =>
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
  return posts
};