---

description: "Task list for implementing the author info cleanup feature"
---

# Tasks: Author Info Cleanup

**Input**: Design documents from `/specs/003-author-info-links/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No automated test tasks are included because the feature spec does not explicitly request TDD or new automated tests. Manual validation tasks are included from quickstart coverage.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the current author link sources and shared UI touchpoints.

- [X] T001 Review author profile link usage in `src/components/common/Header.astro`, `src/pages/about.astro`, and `src/site.config.ts`
- [X] T002 Review public navigation behavior in desktop and mobile layouts for `src/components/common/Header.astro`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Prepare the shared author profile values and shared navigation structure used by all user stories.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T003 Update shared author profile destinations in `src/site.config.ts` to `https://github.com/dungphamdev` and `https://www.linkedin.com/in/dungphamdev/`
- [X] T004 [P] Confirm `src/components/common/Header.astro` and `src/pages/about.astro` both read author profile values from `src/site.config.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Simplify the Top Menu (Priority: P1) 🎯 MVP

**Goal**: Remove GitHub and LinkedIn from the shared top navigation so the header stays focused on core site navigation.

**Independent Test**: Open the site on desktop and mobile, inspect the top menu, and confirm GitHub and LinkedIn are no longer present there.

### Implementation for User Story 1

- [X] T005 [US1] Remove GitHub and LinkedIn items from the shared navigation in `src/components/common/Header.astro`
- [X] T006 [US1] Preserve primary site navigation layout and menu behavior in `src/components/common/Header.astro` after link removal
- [ ] T007 [US1] Manually validate the navigation cleanup scenario from `specs/003-author-info-links/quickstart.md` on desktop and mobile layouts

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Show Correct Author Links on the About Page (Priority: P2)

**Goal**: Display the correct GitHub and LinkedIn profile destinations in the About page links list.

**Independent Test**: Open the About page and confirm the links list contains the exact GitHub and LinkedIn URLs provided in the feature request.

### Implementation for User Story 2

- [X] T008 [US2] Update the About page links list in `src/pages/about.astro` to display the corrected GitHub and LinkedIn profile links
- [X] T009 [US2] Preserve existing unrelated contact entries such as email in `src/pages/about.astro`
- [ ] T010 [US2] Manually validate the About page links scenario from `specs/003-author-info-links/quickstart.md`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Keep Author Information Consistent (Priority: P3)

**Goal**: Ensure author profile links appear only in the intended About page location and stay consistent with shared values.

**Independent Test**: Compare the home page navigation and About page links list and confirm the profile links appear only on the About page and match the configured destinations.

### Implementation for User Story 3

- [X] T011 [P] [US3] Audit public author profile link exposure across `src/components/common/Header.astro`, `src/pages/about.astro`, and other shared author references driven by `src/site.config.ts`
- [X] T012 [US3] Resolve any conflicting author profile link presentation in the affected source files so the About page remains the intended location
- [ ] T013 [US3] Manually validate the consistency scenario from `specs/003-author-info-links/quickstart.md`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and cleanup across shared UI.

- [ ] T014 [P] Update any maintainer notes needed in `specs/003-author-info-links/quickstart.md` if validation steps change during delivery
- [X] T015 Run `npm run check` from the repository root and address any author-link-related issues in `src/components/common/Header.astro`, `src/pages/about.astro`, and `src/site.config.ts`
- [X] T016 Run `npm run build` from the repository root and address any author-link-related issues in the affected source files

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - no dependency on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - depends on corrected shared profile values from `src/site.config.ts`
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - builds on the completed navigation and About page cleanup

### Within Each User Story

- Shared configuration before UI cleanup
- Core implementation before manual validation
- Story complete before final cross-cutting validation

### Parallel Opportunities

- `T004` can run in parallel after `T003`
- `T011` can run in parallel with other audit/review work in User Story 3
- `T014` can run in parallel with final validation if implementation has stabilized

---

## Parallel Example: User Story 3

```bash
Task: "Audit public author profile link exposure across src/components/common/Header.astro, src/pages/about.astro, and other shared author references driven by src/site.config.ts"
Task: "Update any maintainer notes needed in specs/003-author-info-links/quickstart.md if validation steps change during delivery"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery

1. Complete Setup + Foundational → shared author link source ready
2. Add User Story 1 → Test independently → header cleanup is ready
3. Add User Story 2 → Test independently → About page link corrections are ready
4. Add User Story 3 → Test independently → author info consistency is ready
5. Finish with cross-cutting validation and build checks

### Parallel Team Strategy

With multiple developers:

1. One developer updates `src/site.config.ts`
2. One developer handles `src/components/common/Header.astro`
3. One developer handles `src/pages/about.astro` and validation notes

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
