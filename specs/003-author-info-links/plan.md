# Implementation Plan: Author Info Cleanup

**Branch**: `003-author-info-links` | **Date**: 2026-08-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-author-info-links/spec.md`

**Note**: This template is filled in by the `$speckit-plan` command; its definition describes the execution workflow.

## Summary

Remove GitHub and LinkedIn from the shared top navigation while keeping the corrected author
profile links in the About page links list. The implementation will stay inside the existing Astro
site by updating the shared header, About page content, and centralized site profile configuration
so author profile information appears only in the intended place.

## Technical Context

**Language/Version**: TypeScript and Astro component templates running on Node.js 22.x

**Primary Dependencies**: Astro, Tailwind CSS, shared author profile values in `src/site.config.ts`

**Storage**: N/A

**Testing**: `npm run check`, `npm run build`, and manual navigation/About page validation

**Target Platform**: Static GitHub Pages site rendered in modern desktop and mobile browsers

**Project Type**: Static web application

**Performance Goals**: No noticeable navigation or About page regression; link cleanup should not
introduce extra client-side behavior

**Constraints**: Must remain static, must not introduce a database, must preserve stable public
URLs, and must keep the About page as the canonical location for these author profile links

**Scale/Scope**: One shared header update, one About page links update, and one shared site profile
value correction

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Pass: The work stays within the fixed Astro and TypeScript stack defined by the constitution.
- Pass: The feature remains fully static and does not introduce any backend or database dependency.
- Pass: The feature keeps author information portable in version-controlled site content and config.
- Pass: No additional client-side JavaScript is required for this feature.
- Pass: No public URLs or published article routes are changed.

## Project Structure

### Documentation (this feature)

```text
specs/003-author-info-links/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   `-- author-link-ui.md
`-- tasks.md
```

### Source Code (repository root)

```text
src/
|-- components/
|   `-- common/
|       `-- Header.astro
|-- pages/
|   `-- about.astro
|-- site.config.ts
`-- styles/
    `-- global.css
```

**Structure Decision**: Keep the implementation inside the existing single-project Astro site,
centered on the shared header component, the About page, and the shared site profile configuration.

## Complexity Tracking

No constitution violations or extra complexity justifications are required for this feature.
