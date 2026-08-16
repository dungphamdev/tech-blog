# Quickstart: Author Info Cleanup

## Purpose

Validate that the top menu no longer shows GitHub or LinkedIn while the About page links list shows
the corrected author profile URLs.

## Prerequisites

- Repository dependencies installed with `npm install` or `npm ci`
- Local development environment able to run the existing Astro site

## Local Validation

1. Run `npm run check`
2. Run `npm run build`
3. Open the site locally in development or preview mode

Expected outcome:
- The project validates and builds successfully
- The navigation and About page remain accessible

## Navigation Cleanup Scenario

1. Open the home page
2. Review the top navigation on desktop
3. Open the mobile menu if testing in a narrow viewport

Expected outcome:
- GitHub does not appear in the top menu
- LinkedIn does not appear in the top menu

## About Page Links Scenario

1. Open the About page
2. Review the links list

Expected outcome:
- GitHub appears in the links list and points to `https://github.com/dungphamdev`
- LinkedIn appears in the links list and points to `https://www.linkedin.com/in/dungphamdev/`
- Existing unrelated contact entries such as email remain visible

## Consistency Scenario

1. Compare the home page navigation and About page links list
2. Repeat in desktop and mobile layouts if needed

Expected outcome:
- Author profile links appear in the About page links list
- Author profile links do not appear in the top navigation

## Related References

- [data-model.md](./data-model.md)
- [author-link-ui.md](./contracts/author-link-ui.md)
