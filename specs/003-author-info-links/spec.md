# Feature Specification: Author Info Cleanup

**Feature Branch**: `003-author-info-links`

**Created**: 2026-08-16

**Status**: Draft

**Input**: User description: "correct author info: remove the "github" and linkedin items in top menu. Display autho info in the about page. on the links list. linkedin: https://www.linkedin.com/in/dungphamdev/ github: https://github.com/dungphamdev"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Simplify the Top Menu (Priority: P1)

As a reader, I want the top navigation menu to exclude direct GitHub and LinkedIn links so that the
header stays focused on primary site navigation.

**Why this priority**: The navigation is visible on every page, so correcting it delivers the most
immediate improvement to the public site experience.

**Independent Test**: Can be fully tested by opening any public page and confirming the top menu
shows the primary site navigation without GitHub or LinkedIn items.

**Acceptance Scenarios**:

1. **Given** a reader opens the site on desktop, **When** they view the top menu, **Then** the
   GitHub and LinkedIn items are not shown there.
2. **Given** a reader opens the site on mobile, **When** they open the menu, **Then** the GitHub
   and LinkedIn items are not shown there.

---

### User Story 2 - Show Correct Author Links on the About Page (Priority: P2)

As a reader, I want the About page links list to show the correct author GitHub and LinkedIn
profiles so that I can find the author's public profiles in the intended place.

**Why this priority**: The About page is the proper location for author profile information, and
the links need to be accurate.

**Independent Test**: Can be fully tested by opening the About page and confirming the links list
contains the provided GitHub and LinkedIn URLs.

**Acceptance Scenarios**:

1. **Given** a reader opens the About page, **When** they review the links list, **Then** they see
   a GitHub link pointing to `https://github.com/dungphamdev`.
2. **Given** a reader opens the About page, **When** they review the links list, **Then** they see
   a LinkedIn link pointing to `https://www.linkedin.com/in/dungphamdev/`.

---

### User Story 3 - Keep Author Information Consistent (Priority: P3)

As a reader, I want author profile information to appear consistently in the intended location so
that I do not see conflicting profile links across the site.

**Why this priority**: Consistency reduces confusion and keeps the site structure clean.

**Independent Test**: Can be tested by checking the top navigation and About page together to
confirm the profile links appear only in the About page links section.

**Acceptance Scenarios**:

1. **Given** a reader moves between the home page and the About page, **When** they compare where
   author profile links appear, **Then** the profile links appear in the About page links list and
   not in the top navigation.
2. **Given** a maintainer updates the author profile values for this feature, **When** the site is
   reviewed, **Then** the GitHub and LinkedIn destinations match the values provided in the feature
   request.

### Edge Cases

- The top menu changes between desktop and mobile layouts; both versions must omit GitHub and
  LinkedIn items.
- The About page links list already contains multiple author contact methods; adding or correcting
  GitHub and LinkedIn must not remove unrelated items such as email.
- Public pages outside the About page must not continue showing outdated author profile links in the
  main navigation.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST remove the GitHub item from the top navigation menu.
- **FR-002**: The system MUST remove the LinkedIn item from the top navigation menu.
- **FR-003**: The system MUST display the author's GitHub profile in the About page links list.
- **FR-004**: The system MUST display the author's LinkedIn profile in the About page links list.
- **FR-005**: The system MUST use `https://github.com/dungphamdev` as the GitHub destination for
  this feature.
- **FR-006**: The system MUST use `https://www.linkedin.com/in/dungphamdev/` as the LinkedIn
  destination for this feature.
- **FR-007**: The system MUST keep the top navigation focused on primary site navigation items
  rather than author profile links.

### Key Entities *(include if feature involves data)*

- **Navigation Link Set**: The collection of items displayed in the site's top menu.
- **Author Profile Link**: A public profile destination for the author, such as GitHub or
  LinkedIn, shown in the About page links list.
- **About Page Links List**: The section of the About page where author contact and profile links
  are displayed.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of tested top navigation layouts no longer show GitHub or LinkedIn items.
- **SC-002**: 100% of tested About page views show the GitHub and LinkedIn links with the exact
  destinations provided in the feature request.
- **SC-003**: Readers can identify the author's public profile links in one place on the site,
  without conflicting top-menu profile entries.

## Assumptions

- The About page links list is the intended long-term location for author profile links.
- The current email entry on the About page remains in scope to keep, not remove.
- No other author profile locations beyond the top menu and About page are intended to change in
  this feature.
