---

description: "Task list for GitHub Pages deployment pipeline"
---

# Tasks: GitHub Pages Deployment Pipeline

**Input**: Design documents from `/specs/001-github-pages-deploy/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: No additional automated test tasks are generated because the feature specification does
not request TDD or new test suites. Validation is performed through existing build and workflow
checks.

**Organization**: Tasks are grouped by user story to enable independent implementation and
validation.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g. `US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Align repository metadata and deployment prerequisites with the implementation plan

- [X] T001 Review current deployment configuration in .github/workflows/deploy.yml, astro.config.mjs, src/site.config.ts, and README.md against specs/001-github-pages-deploy/plan.md
- [X] T002 Update project deployment guidance in README.md to describe the master-branch GitHub Pages release flow and required maintainer setup steps
- [X] T003 [P] Replace placeholder site identity values in src/site.config.ts with repository-specific production values required for GitHub Pages publication
- [X] T004 [P] Replace placeholder site URL configuration in astro.config.mjs with the production GitHub Pages URL and any required base-path behavior

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared release pipeline behavior all user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Update branch triggers, permissions, and concurrency rules in .github/workflows/deploy.yml to align the workflow with the master-branch publication contract
- [X] T006 [P] Add validation gating steps in .github/workflows/deploy.yml so proposed changes must pass `npm run check` and `npm run build` before being considered release-ready
- [X] T007 [P] Add workflow status clarity in .github/workflows/deploy.yml so maintainers can distinguish validation-only pull request runs from publish-on-master runs
- [X] T008 Confirm GitHub Pages repository settings requirements and maintainer prerequisites in specs/001-github-pages-deploy/quickstart.md and README.md

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Publish the Site From the Master Branch (Priority: P1) 🎯 MVP

**Goal**: Publish approved master-branch changes automatically to the public GitHub Pages site

**Independent Test**: Merge a valid change into `master` and verify the workflow publishes the
updated site without manual artifact upload steps

### Implementation for User Story 1

- [X] T009 [US1] Finalize the build-to-pages artifact flow in .github/workflows/deploy.yml so successful master-branch runs upload the generated `dist/` output for publication
- [X] T010 [US1] Finalize the deployment job in .github/workflows/deploy.yml so successful master-branch runs publish to GitHub Pages automatically
- [X] T011 [US1] Update README.md with the production publication path, including how maintainers trigger deployment through normal master-branch workflow
- [X] T012 [US1] Validate end-to-end publication behavior and expected outcomes in specs/001-github-pages-deploy/quickstart.md against the implemented workflow

**Checkpoint**: User Story 1 should publish the site from `master` and be testable on its own

---

## Phase 4: User Story 2 - Validate Changes Before Release (Priority: P2)

**Goal**: Ensure proposed changes are checked clearly and blocked from release when validation fails

**Independent Test**: Open a pull request with a safe change and verify it receives a visible
validation result without triggering publication

### Implementation for User Story 2

- [X] T013 [US2] Refine pull request validation behavior in .github/workflows/deploy.yml so pull requests targeting `master` run checks without publishing
- [X] T014 [P] [US2] Add or update workflow step names and summaries in .github/workflows/deploy.yml so maintainers can quickly identify pass, fail, and release-ready states
- [X] T015 [US2] Document validation expectations, failure handling, and maintainer review flow in README.md
- [X] T016 [US2] Update specs/001-github-pages-deploy/contracts/deployment-workflow.md to match the final validation behavior if implementation details require clarifying the maintainer contract

**Checkpoint**: User Story 2 should provide clear pre-release validation independent of publication

---

## Phase 5: User Story 3 - Preserve Stable Reader Access During Deployment (Priority: P3)

**Goal**: Protect existing public URLs and keep the last successful site available across releases

**Independent Test**: Release a routine change and verify previously published page and article
URLs remain reachable after deployment

### Implementation for User Story 3

- [X] T017 [US3] Review and adjust Astro site URL and path handling in astro.config.mjs so published routes remain stable on GitHub Pages
- [X] T018 [P] [US3] Review generated public metadata behavior in public/robots.txt and src/site.config.ts so public URLs and site identity remain consistent after deployment
- [X] T019 [US3] Document URL stability and rollback expectations in README.md and specs/001-github-pages-deploy/quickstart.md
- [X] T020 [US3] Verify the workflow behavior in .github/workflows/deploy.yml leaves the previous successful site intact when a release attempt fails

**Checkpoint**: User Story 3 should preserve reader-facing URLs and expected release resilience

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, validation, and feature closeout

- [X] T021 [P] Reconcile planning artifacts in specs/001-github-pages-deploy/research.md, specs/001-github-pages-deploy/data-model.md, specs/001-github-pages-deploy/contracts/deployment-workflow.md, and specs/001-github-pages-deploy/quickstart.md with the implemented workflow
- [X] T022 Run end-to-end validation steps from specs/001-github-pages-deploy/quickstart.md and record any follow-up fixes in README.md
- [X] T023 [P] Run `npm run check` and `npm run build` from the repository root and address any final deployment-related regressions

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and delivers the MVP publication flow
- **User Story 2 (P2)**: Starts after Foundational and builds on the same workflow without
  requiring User Story 1 tasks to be incomplete
- **User Story 3 (P3)**: Starts after Foundational and depends on the deployment flow being in
  place so URL stability can be validated

### Parallel Opportunities

- `T003` and `T004` can run in parallel
- `T006` and `T007` can run in parallel
- `T014` can run in parallel with `T013` once workflow structure is stable
- `T018` can run in parallel with `T017`
- `T021` and `T023` can run in parallel at polish time

---

## Parallel Example: User Story 2

```bash
Task: "Refine pull request validation behavior in .github/workflows/deploy.yml so pull requests targeting `master` run checks without publishing"
Task: "Add or update workflow step names and summaries in .github/workflows/deploy.yml so maintainers can quickly identify pass, fail, and release-ready states"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate publication from `master`

### Incremental Delivery

1. Deliver publication automation first through User Story 1
2. Add stronger pre-release validation visibility through User Story 2
3. Add URL stability and failure resilience hardening through User Story 3

### Parallel Team Strategy

1. Complete Setup and Foundational work together
2. After the workflow base is stable, split ownership across publication behavior, validation
   clarity, and URL stability tasks

---

## Notes

- [P] tasks touch different files or can be completed after a shared prerequisite stabilizes
- Story labels map each task to a single independently testable user story
- The suggested MVP scope is User Story 1 only
