# Quickstart: Persistent Dark Mode Icon

## Purpose

Validate that the new dark mode control matches `design/design.png`, stays integrated with the
shared header, and preserves theme behavior across the site.

## Prerequisites

- Repository dependencies installed with `npm install` or `npm ci`
- Local development environment able to run the existing Astro site
- `design/design.png` available as the visual comparison reference
- Theme control changes implemented in shared site UI rather than page-specific markup

## Local Validation

1. Run `npm run check`
2. Run `npm run build`
3. Open the site locally in development or preview mode

Expected outcome:
- The project validates and builds successfully
- No page loses access to the theme control

## Mockup Alignment Scenario

1. Open the home page
2. Compare the header theme control to `design/design.png`
3. Confirm the control sits in the top-right header area rather than floating over page content
4. Activate the control once
5. Activate it again

Expected outcome:
- The control visually follows the mockup direction with a compact switch-like treatment
- The site switches themes immediately with each activation

## Cross-Page Consistency Scenario

1. Open the home page, blog index, an article page, a tag page, a category page, and the about page
2. Check the top-right header area on each page

Expected outcome:
- The same dark mode control appears consistently on each public page

## Theme Persistence Scenario

1. Activate dark mode on one page
2. Navigate to another public page
3. Refresh the page if needed during manual testing

Expected outcome:
- The selected theme remains active across navigation
- The control remains available and usable after navigation

## Mobile Safety Scenario

1. Open the site in a narrow mobile viewport
2. Visit a short page and a long page
3. Confirm the control remains available in the header/navigation area without breaking menu layout

Expected outcome:
- The header-integrated control remains usable on mobile
- The control does not obstruct key content or conflict with other header actions

## Related References

- [data-model.md](./data-model.md)
- [theme-control-ui.md](./contracts/theme-control-ui.md)

## Maintainer Notes

- The current feature direction is the header-integrated toggle shown by `design/design.png`.
- Earlier task history for this feature referenced a floating viewport toggle; that is no longer the
  intended design target.
- Final sign-off should compare the desktop and mobile header control against the mockup before
  marking manual validation tasks complete.
- If visual refinements are needed after browser review, prefer adjusting `src/components/common/Header.astro`,
  `src/components/common/ThemeToggle.astro`, and `src/styles/global.css` rather than introducing a
  separate page-level control.
