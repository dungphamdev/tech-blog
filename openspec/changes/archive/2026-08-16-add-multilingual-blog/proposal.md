## Why

The blog currently publishes content and navigation as a single English-only experience. Adding first-class English and Vietnamese support lets each article have language-specific content while keeping URLs, discovery pages, and navigation predictable.

## What Changes

- Add language-aware blog post publishing for English and Vietnamese.
- Represent each translated post as its own Markdown/MDX content file under a shared article folder.
- Add language-prefixed public routes for home, blog index, article pages, tag pages, and category pages.
- Add a top-menu language switch that links to the matching translation when available and falls back to the target language's equivalent listing page when it is not.
- Set language-aware document metadata, canonical URLs, and alternate-language links for localized pages.
- Filter post listings, tags, categories, RSS items, and related content by the active language.

## Capabilities

### New Capabilities
- `multilingual-blog`: Localized blog content, routes, navigation, metadata, and language switching for English and Vietnamese.

### Modified Capabilities
- None.

## Impact

- Affected code: Astro content schema, blog post utilities, blog/article routes, listing routes, base layout metadata, header navigation, RSS generation, and existing post file organization.
- Affected content: Existing blog posts need to move from a single `index.mdx` file to language-specific MDX files such as `en.mdx` and `vi.mdx` in the same post folder.
- Dependencies: No new runtime service or database is expected; the feature should remain statically generated.
