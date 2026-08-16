## Context

The blog is statically generated with Astro and renders article pages through `BlogPostLayout.astro`. Posts already include `lang` and `translationKey`, where `translationKey` represents the logical article shared by translated MDX files. The site has a light/dark theme toggle implemented with a `dark` class on the root element.

## Goals / Non-Goals

**Goals:**
- Add comments without introducing a database, server runtime, or custom authentication.
- Use Giscus and GitHub Discussions as the backing comment system.
- Share one discussion thread across translations of the same article.
- Keep all Giscus identifiers and behavior flags centralized in site configuration.
- Avoid rendering a broken comments widget when repository/category IDs are not configured.

**Non-Goals:**
- Building a custom comment backend.
- Migrating comments from another provider.
- Supporting anonymous comments.
- Creating or configuring GitHub Discussion categories automatically.

## Decisions

### Use Giscus with GitHub Discussions

Embed Giscus below article content and use GitHub Discussions as the comment store.

Rationale: Giscus is common for developer-focused static blogs, aligns with the repository's GitHub Pages deployment model, and avoids backend infrastructure.

Alternatives considered:
- Disqus: more general-purpose, but less privacy-friendly and may introduce ads/tracking.
- Utterances: simpler, but issue-based rather than discussion-based.
- Custom backend: highest control, but conflicts with the static-site constraint.

### Map discussions by `translationKey`

Configure Giscus with `data-mapping="specific"` and set `data-term` to the article `translationKey`.

Rationale: using `translationKey` makes `/en/blog/<slug>` and `/vi/blog/<slug>` share one discussion thread while keeping the mapping stable if localized titles change.

Alternatives considered:
- Pathname mapping: simple, but creates separate threads for each language URL.
- Title mapping: fragile when titles are localized or edited.
- Specific discussion number: stable, but requires per-post manual setup and does not support automatic discussion creation.

### Centralize comments configuration

Add a comments configuration object to `site.config.ts` for required values:

```ts
comments: {
  enabled: boolean;
  provider: 'giscus';
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
}
```

Optional behavior settings can include reactions, metadata emission, input position, lazy loading, strict search, and light/dark theme names.

Rationale: this keeps generated Giscus IDs out of article/layout code and makes incomplete setup easy to detect.

### Render only for published posts

`BlogPostLayout.astro` should render the comments component only when `post.data.draft` is false and comments are enabled/configured.

Rationale: draft previews are local editorial artifacts and should not create or attach public GitHub Discussions.

### Synchronize theme with the site

The Giscus component should choose the initial theme from the document's current light/dark state and keep it synchronized after the reader toggles the blog theme. The initial theme should be derived from `document.documentElement.classList.contains('dark')`, mapped to configurable light/dark Giscus theme names from `site.config.ts`, and sent to Giscus after its iframe is available.

Subsequent blog theme changes should be detected by observing the root element's `class` attribute with `MutationObserver`. When the `dark` class changes, the component should update the loaded Giscus iframe via `postMessage` using Giscus's `setConfig` message:

```ts
{
  giscus: {
    setConfig: {
      theme: nextTheme,
    },
  },
}
```

Rationale: initial theme matching avoids a jarring embed, and update messages keep the widget consistent after toggling.

## Risks / Trade-offs

- GitHub Discussions not enabled -> Mitigation: omit the widget when config is incomplete and document the external setup.
- Giscus App not installed -> Mitigation: include setup steps and rely on Giscus's visible failure state during verification.
- Shared comments can mix English and Vietnamese -> Mitigation: this is an intentional product decision for one conversation per logical article.
- Public comment creation depends on GitHub accounts -> Mitigation: acceptable for a developer-focused technical blog.
- External script adds client-side JavaScript -> Mitigation: load only on article pages and use lazy loading.
- Theme synchronization depends on the Giscus iframe being ready -> Mitigation: retry initial theme application briefly and observe root theme changes for later updates.

## Migration Plan

1. Enable GitHub Discussions in the comments repository.
2. Install the Giscus GitHub App for the repository.
3. Choose or create a discussion category, such as `Announcements` or `Comments`.
4. Use giscus.app to obtain `repoId` and `categoryId`.
5. Add the centralized comments configuration.
6. Add the comments component below article content and verify shared discussions across `/en` and `/vi` article pages.
