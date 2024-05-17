# Astro i18n blog starter

> [Live demo](https://astro-i18n-blog-starter.netlify.app/)

I found that out of the box, the Astro 4.5 [blog example](https://github.com/withastro/astro/tree/latest/examples/blog) and [internationalization/localization (i18n)](https://docs.astro.build/en/guides/internationalization/) features require quite a bit of work to become a fully working, SEO-optimized and screen reader-friendly blog. This project attempts to make getting started a bit easier.

## Requirements and goals

- Use built-in features and reduce additional dependencies where possible. The assumption is that the Astro team will expand i18n features and that parts of this setup can be replaced with built-in functions in the future.
- Add a minimum of styling and hard-coded settings, so you can quickly get to styling and configuring your own site.
- Allow for multiple collections (don't abuse collections for localization)
- Separate layouts, components and content; make sure all content is saved in markdown and data files.
- Support the features below!

## Features

- ⛓️ Linked translations via a reference property: no need for matching slugs between locales.
- 🏖️ Allow adding pages for a new locale with minimal effort; use the default locale* as a fallback for missing settings and strings.
- 🏷️ Content tags á la WordPress
- 🗺️ Sitemap support with translation links
- 📡 Localized RSS Feeds
- 🌍 Customizable URL structure, like `domain.tld/locale/directory/slug`
- 🪽 Skip to content link for screen reader and keyboard users
- 👩‍💼 Localized author profiles from a single data file
- 🔏 Secret/draft state to exclude posts from rendering
- 🔚 404 Page not found page
- 🐭 Ultra minimal styling without CSS classes with [new.css](https://newcss.net/) (remove only two lines of code to remove it!)
- 🔗 `target="_blank"` for external links with [Rehype plugin](https://github.com/rehypejs/rehype-external-links)
- 😉 Separate favicon for dev server to not get confused between dev and production

*) This is why the Dutch demo pages have an English header menu; no Dutch menu items were defined.

Based on the official [blog example](https://github.com/withastro/astro/tree/latest/examples/blog), this setup still has:

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Markdown & MDX support

## 🚀 Project Structure

You'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── i18n/
│   │   ├── i18n.ts ← Set up locales here
│   │   ├── uiStrings.js ← Localized headings, labels, etc.
│   │   └── utilities ← i18n-specific functions
│   ├── layouts/
│   ├── styles/
│   ├── utilities/
│   ├── consts.ts ← Settings loaded by astro.config.mjs
│   ├── env.d.ts
│   ├── header.ts ← Settings for header menus, optionally per locale
│   └── people.ts ← Bylines and author profile pages
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains collections of related markdown and MDX documents. A 'blog' collection has been defined already.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All default commands can be run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## To do

- [ ] Get feedback. This is my third Astro project, but it's I noticed while making this, that I'm very much a novice Astro user. Feel free to [contact me](https://www.kooslooijesteijn.net/contact) and make pull requests.
- [ ] Although there are no errors or known issues, your editor may show a few squiggly lines caused missing/faulty TypeScript settings.
