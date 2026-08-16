## 1. Content Model

- [x] 1.1 Add supported-language constants and helper types for English and Vietnamese.
- [x] 1.2 Extend the blog content schema with `lang` and `translationKey` frontmatter fields.
- [x] 1.3 Update post slug, URL, filtering, and translation lookup utilities to use language-aware content entries.
- [x] 1.4 Migrate the existing published post from `index.mdx` to `en.mdx` with matching `lang` and `translationKey` metadata.

## 2. Localized Routes

- [x] 2.1 Add localized home routes for `/en` and `/vi` using active-language post lists.
- [x] 2.2 Add localized blog index routes for `/en/blog` and `/vi/blog`.
- [x] 2.3 Replace or supplement the article route with language-prefixed article generation under `/:lang/blog/:slug`.
- [x] 2.4 Add localized tag routes that generate tag pages per language.
- [x] 2.5 Add localized category routes that generate category pages per language.
- [x] 2.6 Preserve practical compatibility for existing root or `/blog` URLs with default-language routing or redirects.

## 3. Navigation and Metadata

- [x] 3.1 Update layout props so pages can provide active language, canonical URL, and alternate-language URLs.
- [x] 3.2 Render the correct `<html lang>`, canonical link, and alternate-language links for localized pages.
- [x] 3.3 Update the header to render a language switch control in the top menu.
- [x] 3.4 Compute language switch targets for article pages, including fallback behavior when a translation is missing.
- [x] 3.5 Compute equivalent language switch targets for localized listing and static pages.
- [x] 3.6 Ensure header links, post cards, article tags, category links, and "view all" links preserve the active language.

## 4. Feeds and Related Content

- [x] 4.1 Add language-scoped RSS feed output for English posts.
- [x] 4.2 Add language-scoped RSS feed output for Vietnamese posts.
- [x] 4.3 Keep the existing root RSS output compatible as the default-language feed when practical.
- [x] 4.4 Update related-post behavior to avoid mixing languages.

## 5. Validation

- [x] 5.1 Run TypeScript and Astro build validation.
- [x] 5.2 Verify generated routes include English and Vietnamese home, blog, article, tag, category, and RSS pages.
- [x] 5.3 Manually inspect the top-menu language switch on article and listing pages.
- [x] 5.4 Validate that missing article translations do not produce broken language-switch links.
