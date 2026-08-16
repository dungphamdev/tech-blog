# Research: GitHub Pages Deployment Pipeline

## Decision: Keep a single GitHub Actions workflow for validation and Pages publication

**Rationale**: The repository uses one workflow that validates pull requests and deploys on pushes
to `master`. Preserving a single workflow keeps maintainer visibility simple,
matches the small scope of the site, and supports the constitution's preference for minimal
operational complexity.

**Alternatives considered**:
- Split validation and deployment into separate workflow files: rejected because it adds extra
  indirection without clear benefit for a single static site.
- Manual deployment outside CI: rejected because it weakens release consistency and maintainer
  visibility.

## Decision: Use `npm run check` and `npm run build` as the release gate

**Rationale**: These commands align with the existing Astro toolchain and directly validate the two
main risks in this project: content or typing errors, and broken static output generation. They
also match the README guidance and fit the constitution's requirement for static, version-
controlled publishing.

**Alternatives considered**:
- Build-only validation: rejected because type and content-schema issues can slip through before
  static build output is reviewed.
- Custom validation scripts: rejected because the existing project scripts already express the
  required checks clearly.

## Decision: Publish only from `master`

**Rationale**: The feature spec defines maintainers and approved `master` branch changes as the
source of public publication. Publishing only from `master` creates a clean rule that is easy to
explain, protect, and audit in repository settings and workflow behavior.

**Alternatives considered**:
- Publish from tags: rejected because the spec focuses on normal repository workflow rather than a
  separate release ceremony.
- Publish from any branch on demand: rejected because it increases the risk of accidental public
  releases.

## Decision: Preserve the last successful site when a deployment fails

**Rationale**: GitHub Pages deployments are artifact-based, so a failed build or failed deployment
should leave the existing published artifact untouched. This behavior directly supports the feature
requirement that the site remain available at the last successful version if a new release fails.

**Alternatives considered**:
- Clear the live site on failure: rejected because it would create reader-facing outages.
- Retry automatically without first surfacing the failure: rejected because it can hide broken
  changes from maintainers.

## Decision: Treat site URL and repository metadata as deployment prerequisites

**Rationale**: The repo still contains placeholder values in `astro.config.mjs` and
`src/site.config.ts`. For GitHub Pages to publish correctly and produce valid absolute URLs, these
values must be treated as required release configuration rather than optional cleanup.

**Alternatives considered**:
- Leave placeholders until after deployment: rejected because it produces incorrect canonical URLs
  and weakens the public release contract.
- Infer values dynamically without configuration: rejected because it makes site identity harder to
  reason about and verify.

## Decision: Keep deployment contracts documentation-based rather than API-based

**Rationale**: This feature exposes a repository workflow and maintainers' operating contract, not
a public HTTP API. A documented workflow contract better captures the triggers, gates, outcomes,
and failure behavior maintainers depend on.

**Alternatives considered**:
- Define machine-readable API contracts: rejected because the feature does not introduce a service
  interface.
- Skip contracts entirely: rejected because the planning phase calls for explicit interface
  documentation when external systems like GitHub Actions and GitHub Pages are involved.
