## Context

The site is a static Astro blog using content collections from `src/content/blog`, dynamic blog routes, shared layout metadata, RSS generation, and a header component. The current post slug is derived from the content entry id, and the only existing published article is stored as `src/content/blog/<post-slug>/index.mdx`.

## Goals / Non-Goals

**Goals:**
- Keep the site fully statically generated and compatible with GitHub Pages.
- Make localized URLs explicit and stable by prefixing supported languages in public routes.
- Allow each translation to have independent title, description, body, tags, category, dates, and draft status.
- Preserve a stable post identity across translations for language switching and alternate metadata.
- Keep client-side JavaScript minimal; language routing should be resolved at build time wherever possible.

**Non-Goals:**
- Automatic machine translation.
- Runtime language negotiation based on browser headers.
- A database, CMS, or external localization service.
- More than English and Vietnamese in the initial implementation.

## Decisions

### Use language-prefixed routes

Publish localized pages under `/en/...` and `/vi/...`, including home, blog index, article, tag, category, and feed pages.

Rationale: explicit language prefixes make sharing, canonical metadata, and static generation straightforward. They also avoid ambiguous default URLs as Vietnamese content is added.

Alternatives considered:
- Keep English at root and Vietnamese under `/vi`. This is shorter for English but creates uneven routing and more special cases.
- Use query parameters such as `?lang=vi`. This is weaker for static routing, SEO, and shareable canonical pages.

### Use one content file per language within a shared post folder

Represent translated posts as sibling files:

```text
src/content/blog/<post-slug>/en.mdx
src/content/blog/<post-slug>/vi.mdx
```

Each file should include `lang` and `translationKey` frontmatter. The `translationKey` should remain stable across language files and default to the shared folder slug for manually authored posts.

Rationale: this matches the user's preference for two files per post, keeps shared assets beside both translations, and makes missing translations natural.

Alternatives considered:
- Put language folders above posts, such as `blog/en/<slug>.mdx`. This makes language filtering easy but scatters shared article assets.
- Store all translations in one MDX file. This reduces file count but makes authoring and review noisier.

### Centralize language helpers

Add a small language model in TypeScript for supported languages, labels, default language, path construction, route validation, and translation lookup. Post utilities should expose language-aware queries such as all posts for a language, matching translations by `translationKey`, and language-specific URLs.

Rationale: route pages, header navigation, metadata, RSS, and related content need consistent behavior. Central helpers keep route files small and reduce drift.

### Generate alternate metadata at build time

Article pages should receive the active language, canonical URL, and available translated URLs from static path props. `BaseLayout` should render `<html lang>`, canonical links, and alternate-language links when provided.

Rationale: metadata is deterministic from content collection data, so there is no need for client-side mutation.

### Language switch fallback behavior

The header should receive or derive a target-language URL. On article pages, it should link to the matching translation when present; otherwise it should fall back to the target language blog index. On localized listing/static pages, it should link to the equivalent route in the other language when available.

Rationale: readers should never be sent to a 404 just because a translation is missing.

### RSS per language

Provide language-scoped feeds, preferably at `/en/rss.xml` and `/vi/rss.xml`. Keep any existing root `/rss.xml` as an English/default feed or redirect-equivalent static output if needed for backward compatibility.

Rationale: feed clients expect stable lists and should not receive duplicate translation entries unless they intentionally subscribe to multiple languages.

## Risks / Trade-offs

- Existing `/blog/<slug>` article URLs change to `/en/blog/<slug>` -> Mitigation: keep compatibility redirects or static fallback pages for existing article URLs when practical.
- Existing content must be migrated from `index.mdx` to language-specific files -> Mitigation: migrate the current article to `en.mdx` first and create `vi.mdx` only when translation content is available.
- Tags and categories may diverge between translations -> Mitigation: allow localized frontmatter but scope tag/category pages by active language.
- Missing translations can make the language switch feel inconsistent -> Mitigation: use deterministic fallbacks and avoid rendering links to missing article pages.

## Migration Plan

1. Extend content frontmatter schema with language and translation identity fields.
2. Migrate the existing article from `index.mdx` to `en.mdx`; add Vietnamese files only for translated articles.
3. Add language-prefixed routes and update existing links to generate language-aware URLs.
4. Add top-menu language switching and metadata support.
5. Add language-scoped RSS outputs.
6. Run build validation and manually inspect English and Vietnamese article/listing paths.
