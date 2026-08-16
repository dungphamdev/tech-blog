## 1. External Setup

- [x] 1.1 Enable GitHub Discussions for the comments repository.
- [x] 1.2 Install the Giscus GitHub App for the comments repository.
- [x] 1.3 Create or select the discussion category that Giscus will use.
- [x] 1.4 Capture `repoId` and `categoryId` from giscus.app for `dungphamdev/tech-blog`.

## 2. Configuration

- [x] 2.1 Add centralized comments configuration to `src/site.config.ts`.
- [x] 2.2 Include required Giscus identifiers and behavior flags in the configuration shape.
- [x] 2.3 Add a helper or guard that detects whether the Giscus configuration is complete.

## 3. Comments Component

- [x] 3.1 Create a comments component that embeds Giscus with centralized configuration.
- [x] 3.2 Configure Giscus with `data-mapping="specific"` and `data-term` from the post `translationKey`.
- [x] 3.3 Configure Giscus to load lazily and use the selected discussion category only.
- [x] 3.4 Add initial light/dark theme synchronization between the site theme and Giscus.
- [x] 3.6 Add post-load theme synchronization so Giscus updates when the blog theme is toggled without a page reload.
- [x] 3.5 Ensure incomplete configuration omits the widget instead of rendering a broken embed.

## 4. Article Integration

- [x] 4.1 Render the comments component below published article content in `BlogPostLayout.astro`.
- [x] 4.2 Do not render comments for draft posts.
- [x] 4.3 Verify English and Vietnamese versions of the same article pass the same `translationKey` as the Giscus term.

## 5. Validation

- [x] 5.1 Run Astro type checking and build validation.
- [x] 5.2 Verify a published article includes the Giscus embed when configuration is complete.
- [x] 5.3 Verify a draft article does not include the Giscus embed.
- [x] 5.4 Verify the English and Vietnamese article pages point to the same Giscus discussion term.
- [x] 5.5 Verify toggling the blog theme after Giscus loads updates the Giscus iframe theme without a page reload.
