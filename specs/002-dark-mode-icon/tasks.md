---

description: "Task list for implementing the persistent dark mode icon feature"
---

# Tasks: Persistent Dark Mode Icon

**Input**: Design documents from `/specs/002-dark-mode-icon/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No automated test tasks are included because the feature spec does not explicitly request TDD or new automated tests. Manual validation tasks are included from quickstart coverage.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g. US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the shared implementation surface for the theme control and identify the current theme toggle touchpoints.

- [X] T001 Review existing theme toggle usage in `src/components/common/ThemeToggle.astro`, `src/components/common/Header.astro`, and `src/layouts/BaseLayout.astro`
- [X] T002 Review shared theme styling constraints in `src/styles/global.css` for floating control placement, visibility, and overlap safety

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Prepare the shared component and layout structure required by all user stories.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T003 Refactor shared theme toggle structure in `src/components/common/ThemeToggle.astro` to support an icon-first floating control while preserving existing theme preference behavior
- [X] T004 [P] Update shared layout integration in `src/layouts/BaseLayout.astro` so the theme control is rendered from a site-wide path rather than page-specific markup
- [X] T005 [P] Remove or adapt header-specific theme button usage in `src/components/common/Header.astro` so the floating control becomes the single public theme entry point
- [X] T006 Define shared floating-control base styles and focus states in `src/styles/global.css`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Toggle Theme From a Persistent Icon (Priority: P1) 🎯 MVP

**Goal**: Replace the text button with a modern icon-based control that toggles light and dark themes from the top-right viewport area.

**Independent Test**: Open any public page, find the icon in the top-right area, activate it once to switch theme, and activate it again to switch back.

### Implementation for User Story 1

- [X] T007 [US1] Implement icon-based toggle markup, accessible labeling, and current-theme affordance in `src/components/common/ThemeToggle.astro`
- [X] T008 [US1] Update shared page composition in `src/layouts/BaseLayout.astro` so the icon renders on page load in a consistent top-right viewport position
- [X] T009 [US1] Replace legacy text-button styling with icon-control styling in `src/styles/global.css`
- [ ] T010 [US1] Manually validate the toggle interaction scenario from `specs/002-dark-mode-icon/quickstart.md` across a representative public page and capture any follow-up adjustments in `src/components/common/ThemeToggle.astro` and `src/styles/global.css`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Keep the Theme Control Visible While Scrolling (Priority: P2)

**Goal**: Keep the dark mode icon visible and usable during long reading sessions without requiring return to the header.

**Independent Test**: Open a long article page, scroll from top to bottom, confirm the icon stays visible, and toggle the theme near the bottom of the page.

### Implementation for User Story 2

- [X] T011 [US2] Update floating positioning behavior in `src/styles/global.css` so the icon remains visible during page scroll
- [X] T012 [US2] Adjust the toggle wrapper structure in `src/components/common/ThemeToggle.astro` to support persistent viewport-pinned visibility without breaking interaction
- [X] T013 [US2] Validate long-page scroll behavior against article layouts in `src/pages/index.astro`, `src/pages/about.astro`, and shared article rendering paths used by the site
- [ ] T014 [US2] Manually validate the scroll persistence scenario from `specs/002-dark-mode-icon/quickstart.md` and refine placement rules in `src/styles/global.css`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Provide a Consistent Theme Control Across the Site (Priority: P3)

**Goal**: Ensure the same persistent dark mode icon appears and behaves consistently across all public pages and preserves the selected theme across navigation.

**Independent Test**: Navigate between the home page, blog index, article page, tag page, category page, and about page and confirm the icon remains visible, consistent, and theme state persists.

### Implementation for User Story 3

- [X] T015 [P] [US3] Audit all public page entry points in `src/pages/` and shared layouts/components to confirm the floating icon is rendered consistently everywhere
- [X] T016 [US3] Update any page or shared layout exceptions in `src/pages/` and `src/layouts/BaseLayout.astro` so the control remains available across all public routes
- [X] T017 [US3] Verify persisted theme behavior across navigation and refresh using the existing theme preference logic in `src/components/common/ThemeToggle.astro` and related shared theme script paths
- [X] T018 [US3] Validate mobile and desktop overlap safety, then refine responsive spacing rules in `src/styles/global.css`
- [ ] T019 [US3] Manually validate the cross-page consistency, theme persistence, and mobile safety scenarios from `specs/002-dark-mode-icon/quickstart.md`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final cleanup and whole-feature validation across shared UI.

- [ ] T020 [P] Update any implementation notes needed for maintainers in `specs/002-dark-mode-icon/quickstart.md` if validation steps changed during delivery
- [X] T021 Run `npm run check` from the repository root and address any theme-control-related issues in `src/components/common/ThemeToggle.astro`, `src/components/common/Header.astro`, `src/layouts/BaseLayout.astro`, and `src/styles/global.css`
- [X] T022 Run `npm run build` from the repository root and address any theme-control-related issues in the affected source files

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel if needed
  - Or sequentially in priority order (P1 -> P2 -> P3)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational - no dependency on other user stories
- **User Story 2 (P2)**: Starts after Foundational - builds on the shared floating control introduced in US1
- **User Story 3 (P3)**: Starts after Foundational - validates and refines site-wide coverage and persistence after US1 and US2 behavior exists

### Within Each User Story

- Shared structure before page-level refinement
- Control markup before responsive polish
- Behavior updates before manual validation
- Story complete before final cross-cutting validation

### Parallel Opportunities

- `T004` and `T005` can run in parallel after `T003`
- `T015` can run in parallel with other US3 review work because it is an audit task
- `T020` can run in parallel with validation work if implementation has stabilized

---

## Parallel Example: User Story 3

```bash
Task: "Audit all public page entry points in src/pages/ and shared layouts/components to confirm the floating icon is rendered consistently everywhere"
Task: "Validate mobile and desktop overlap safety, then refine responsive spacing rules in src/styles/global.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate icon toggle behavior independently

### Incremental Delivery

1. Complete Setup + Foundational
2. Add User Story 1 and validate theme switching from the floating icon
3. Add User Story 2 and validate scroll persistence on long pages
4. Add User Story 3 and validate site-wide consistency, persistence, and mobile safety
5. Finish with cross-cutting validation and build checks

### Parallel Team Strategy

With multiple developers:

1. One developer handles `ThemeToggle.astro` behavior updates
2. One developer handles `BaseLayout.astro` and `Header.astro` integration cleanup
3. One developer handles `global.css` placement, responsive spacing, and overlap refinement

---

## Notes

- [P] tasks = different files or low-conflict audit/documentation work
- [Story] labels map tasks to user stories for traceability
- Each user story is independently testable through the manual scenarios already defined in `specs/002-dark-mode-icon/spec.md` and `specs/002-dark-mode-icon/quickstart.md`
- Keep implementation aligned with the constitution: static delivery, existing theme preference behavior, and minimal client-side JavaScript

## Phase 7: Convergence

- [X] T023 Refine shared theme transition styling in `src/styles/global.css` and `src/components/common/ThemeToggle.astro` to better match the smooth mockup-led theme change expected by FR-006 and plan: Performance Goals (partial)
- [X] T024 Perform a mockup-alignment pass against `design/design.png` and adjust `src/components/common/Header.astro`, `src/components/common/ThemeToggle.astro`, and `src/styles/global.css` so the top-right header control more closely matches the intended compact switch treatment on desktop and mobile per FR-001, FR-003, and FR-007 (partial)
- [ ] T025 Manually validate the updated header-integrated control across the scenarios in `specs/002-dark-mode-icon/quickstart.md` and capture any required follow-up adjustments in `src/components/common/Header.astro`, `src/components/common/ThemeToggle.astro`, and `src/styles/global.css` per SC-001, SC-002, SC-003, and SC-004 (partial)
- [X] T026 Append maintainer notes to `specs/002-dark-mode-icon/quickstart.md` describing the final mockup-aligned validation expectations and any differences from the earlier floating-toggle direction per plan: Structure Decision (partial)
