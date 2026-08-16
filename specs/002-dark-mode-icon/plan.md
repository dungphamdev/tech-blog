# Implementation Plan: Persistent Dark Mode Icon

**Branch**: `002-dark-mode-icon` | **Date**: 2026-08-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-dark-mode-icon/spec.md`

## Summary

Rework the existing theme control to match the visual authority in `design/design.png`. The target
experience is a header-integrated theme toggle in the top-right navigation area with a compact
switch treatment, theme-specific iconography, smooth theme transitions, and consistent layout
structure between light and dark modes. The implementation should preserve the current theme
preference behavior while aligning the site UI more closely with the mockup's refined control
presentation instead of using a floating viewport control.

## Technical Context

**Language/Version**: TypeScript and Astro component templates running on Node.js 22.x

**Primary Dependencies**: Astro, Tailwind CSS, existing site theme script behavior, existing
global CSS variables, `design/design.png` as the visual reference for control placement and styling

**Storage**: Browser local preference storage only

**Testing**: `npm run check`, `npm run build`, and manual comparison against `design/design.png`
across key pages and breakpoints

**Target Platform**: Static GitHub Pages site rendered in modern desktop and mobile browsers

**Project Type**: Static web application

**Performance Goals**: Theme toggle interaction should feel immediate, theme changes should read as
smooth rather than abrupt, and the control should not introduce noticeable layout shift in the
header or page content

**Constraints**: Must remain static, must not introduce a database, must minimize client-side
JavaScript, must preserve the current theme preference behavior, and must follow the control
placement and visual hierarchy implied by `design/design.png`

**Scale/Scope**: One shared header-level theme control used across all public pages in the existing
Astro site

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Pass: The feature stays within the fixed Astro and TypeScript stack defined by the constitution.
- Pass: The design remains fully static and does not introduce any backend or database dependency.
- Pass: The work reuses the current theme preference mechanism rather than adding unnecessary
  complexity.
- Pass: The plan minimizes client-side JavaScript and limits dynamic behavior to the reader-facing
  theme interaction itself.
- Pass: No changes alter public URLs or route behavior.

## Project Structure

### Documentation (this feature)

```text
specs/002-dark-mode-icon/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   `-- theme-control-ui.md
`-- tasks.md
```

### Source Code (repository root)

```text
src/
|-- components/
|   |-- article/
|   `-- common/
|       |-- Header.astro
|       `-- ThemeToggle.astro
|-- layouts/
|   `-- BaseLayout.astro
|-- pages/
|-- styles/
|   `-- global.css
`-- utils/

public/
```

**Structure Decision**: Keep the implementation inside the existing single-project Astro site,
centered on shared header/theme components and global styling so the control appears consistently in
the top-right navigation area across every page, matching the mockup-led design direction.

## Complexity Tracking

No constitution violations or extra complexity justifications are required for this feature.
