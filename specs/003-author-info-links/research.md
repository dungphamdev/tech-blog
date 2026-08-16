# Research: Author Info Cleanup

## Decision: Remove author profile links from the shared top navigation

**Rationale**: The feature explicitly asks for GitHub and LinkedIn to be removed from the top menu
so the header remains focused on primary site navigation.

**Alternatives considered**:
- Keep the links in both the top menu and About page: rejected because it preserves the duplication
  the feature is trying to remove.
- Hide the links only on one breakpoint: rejected because the spec requires both desktop and mobile
  top navigation layouts to omit them.

## Decision: Keep author profile links in the About page links list

**Rationale**: The About page is already the intended location for author information, so it is the
correct place to keep public profile links.

**Alternatives considered**:
- Move profile links into the footer: rejected because the feature request specifically points to
  the About page links list.
- Remove profile links entirely from the site: rejected because the feature still requires GitHub
  and LinkedIn to be displayed on the About page.

## Decision: Correct shared profile destinations through the centralized site configuration

**Rationale**: The current site already reads author profile URLs from `src/site.config.ts`. Using
that shared source keeps navigation and About page content aligned without duplicating hardcoded
values.

**Alternatives considered**:
- Hardcode new profile URLs directly into the About page only: rejected because it risks future
  inconsistency with other author references.
- Add a new data source for author links: rejected because the existing shared config is sufficient.
