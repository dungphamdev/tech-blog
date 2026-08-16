# Deployment Workflow Contract

## Purpose

Define the maintainer-facing behavior of the repository validation and publication workflow for the
GitHub Pages deployment feature.

## Actors

- Repository maintainer
- GitHub Actions workflow runner
- GitHub Pages hosting platform

## Triggers

- Pull request targeting `master`: validation only
- Push to `master`: validation and publication

## Validation Contract

- Proposed changes must receive a visible pass or fail result before maintainers treat them as
  release-ready.
- Validation must evaluate repository content and site generation readiness.
- Failed validation must block the change from being considered ready for public publication.

## Publication Contract

- Only approved changes merged to `master` may trigger public publication through the normal
  repository workflow.
- Publication must use repository-generated site output and must not require manual artifact
  upload.
- If publication fails, the previously successful public site must remain available.

## Visibility Contract

- Maintainers must be able to determine whether a run was validation-only, publication-eligible,
  or failed.
- Maintainers must be able to identify the repository revision associated with a publication
  outcome.
- Manual workflow dispatch may be used for maintainers' operational verification without changing
  the rule that normal public publication flows through `master`.

## Stability Contract

- Existing public article and page URLs must remain reachable after routine releases.
- Configuration changes that would alter public URL behavior must be reviewed as release-impacting
  changes.

## Out of Scope

- Manual content editing outside version control
- Non-GitHub hosting providers
- Runtime application backends or database-driven publishing
