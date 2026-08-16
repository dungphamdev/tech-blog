## Why

Readers need a way to discuss articles, ask follow-up questions, and leave feedback without adding a custom backend to the static blog. Giscus fits the blog's GitHub-centered technical audience and keeps discussion moderation inside GitHub Discussions.

## What Changes

- Add Giscus-powered comments below published blog posts.
- Use one shared GitHub Discussion per logical article across translations by mapping Giscus to the post `translationKey`.
- Keep comments hidden on draft posts.
- Add centralized Giscus configuration for repository, category, theme, and behavior settings.
- Synchronize the Giscus theme with the blog's current light/dark mode, including after readers toggle the theme.

## Capabilities

### New Capabilities
- `blog-comments`: Article comment rendering, shared discussion mapping, draft visibility, and Giscus configuration behavior.

### Modified Capabilities
- None.

## Impact

- Affected code: site configuration, blog post layout, a new comments component, and theme integration around the embedded Giscus script.
- External setup: GitHub Discussions must be enabled for the comments repository, the Giscus GitHub App must be installed, and the selected discussion category must exist.
- Dependencies: No database or server-side runtime is required; the blog remains statically generated.
