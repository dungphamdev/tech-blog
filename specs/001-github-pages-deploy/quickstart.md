# Quickstart: GitHub Pages Deployment Pipeline

## Purpose

Validate the deployment pipeline end to end for pull request checks and production publication.

## Prerequisites

- Repository dependencies installed with `npm install` or `npm ci`
- GitHub repository created with GitHub Pages enabled for Actions-based deployment
- Maintainer access to review workflow runs and repository Pages settings
- Placeholder site metadata replaced in project configuration before production release

## Local Validation

1. Run `npm run check`
2. Run `npm run build`
3. Confirm the site builds successfully and produces static output in `dist/`

Expected outcome:
- Type and content validation pass
- Static site output is generated successfully

## Pull Request Validation Scenario

1. Create a feature branch with a small content or configuration change
2. Open a pull request targeting `master`
3. Wait for the workflow run to complete
4. Review the validation result in GitHub Actions

Expected outcome:
- The workflow runs validation without publishing the site
- Maintainers can see a clear pass or fail result before merge

## Master Branch Publication Scenario

1. Merge an approved change into `master`
2. Wait for the deployment workflow to complete
3. Open the public GitHub Pages site
4. Verify that the updated content or configuration is visible

Expected outcome:
- The workflow validates and publishes automatically
- The public site reflects the merged repository state
- The published site resolves correctly under `/tech-blog/`

## URL Stability Check

1. Record one existing article URL and one existing page URL before release
2. Complete a release through the master branch publication flow
3. Visit the recorded URLs after deployment

Expected outcome:
- Both URLs remain reachable after the release

## Failure Recovery Check

1. Introduce a controlled invalid change in a test pull request
2. Confirm validation fails before merge
3. If a deployment failure is simulated after merge in a safe test environment, confirm the last
   successful public site remains available

Expected outcome:
- Invalid changes are surfaced before publication
- Readers do not lose access to the previously successful site

## Related References

- [data-model.md](./data-model.md)
- [deployment-workflow.md](./contracts/deployment-workflow.md)
