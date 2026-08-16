<!--
Sync Impact Report
Version change: 2.0.0 -> 2.0.1
Modified principles:
- None
Added sections:
- None
Removed sections:
- None
Follow-up TODOs:
- None
-->
# Tech Blog Constitution

## Core Principles

### I. Prefer Static Generation
The site MUST prefer static generation for public pages and articles. Dynamic runtime behavior
MAY be added only when it is required for a clear reader-facing or maintainer-facing feature.

### II. Keep Content Portable
Article content MUST remain portable Markdown or MDX stored in version control. Content SHOULD
avoid formats that lock articles to a single hosting provider, database, or proprietary editor.

### III. Minimize Client-Side JavaScript
Client-side JavaScript MUST be limited to features that require browser interaction, such as
theme switching, comments, or diagrams. Static HTML and CSS MUST be preferred for reading flows.

### IV. Avoid Unneeded Databases
The project MUST NOT introduce a database unless a feature cannot be reasonably delivered with
static files, version-controlled content, or approved third-party services.

### V. Preserve Stable Public URLs
Published article URLs MUST remain stable. If a published URL must change, the change MUST include
a redirect or documented migration path before release.

## Technology

- Astro is the required site framework.
- TypeScript is the required language for typed site logic and configuration.
- Markdown and MDX are the required formats for article content.
- Giscus is the required comment system.
- GitHub Actions is the required CI/CD system.
- GitHub Pages is the required hosting platform.

## Business Rules

- Articles are public once published.
- Only repository maintainers MAY publish articles.
- Article content MUST be version controlled.
- Comments MUST require GitHub authentication through Giscus.
- Articles MAY have multiple tags.
- Published article URLs SHOULD remain stable and MUST preserve reader access when changed.
- Draft articles MUST NOT be treated as published content.

## Governance

This constitution controls specifications, plans, tasks, implementation, review, and publication
decisions for this repository. Conflicts with other project guidance MUST be resolved in favor of
this constitution unless this constitution is amended.

Amendments MUST update this file and include a Sync Impact Report. Versioning follows semantic
versioning: MAJOR for incompatible governance changes, MINOR for new or expanded rules, and PATCH
for clarifications.

Compliance MUST be reviewed before planning, implementation, and publication. Exceptions MUST
state the reason, scope, and follow-up action required to return to compliance.

**Version**: 2.0.1 | **Ratified**: 2026-08-16 | **Last Amended**: 2026-08-16
