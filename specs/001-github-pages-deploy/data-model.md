# Data Model: GitHub Pages Deployment Pipeline

## Deployment Candidate

Represents a repository state being evaluated for release.

**Fields**
- `branch_name`: source branch associated with the candidate
- `commit_sha`: exact repository revision under evaluation
- `change_scope`: summary of what changed, such as content, configuration, or layout
- `review_state`: whether the change is proposed, approved, merged, or rejected

**Validation Rules**
- Must originate from version-controlled repository content
- Must map to a unique commit SHA
- Must be tied to a branch context that determines whether validation-only or publication behavior
  applies

## Validation Result

Represents the outcome of pre-publication checks for a deployment candidate.

**Fields**
- `candidate_sha`: commit SHA of the evaluated candidate
- `status`: pass or fail
- `started_at`: validation start time
- `completed_at`: validation finish time
- `failure_summary`: concise description of why validation failed, if applicable

**Validation Rules**
- Every candidate evaluated for publication readiness must produce exactly one final validation
  status
- A failed validation result must prevent the candidate from being treated as release-ready

## Publication Event

Represents an attempted public release triggered by repository workflow.

**Fields**
- `candidate_sha`: commit SHA being released
- `trigger_branch`: branch that triggered the publication event
- `status`: queued, running, succeeded, or failed
- `published_url`: public site URL associated with the release
- `completed_at`: publication completion time

**Validation Rules**
- Publication events may occur only from the default release branch
- A failed event must not replace the last successful published release

## Published Release

Represents the version of the site currently available to readers.

**Fields**
- `commit_sha`: repository revision currently represented on the public site
- `published_at`: timestamp of successful publication
- `site_url`: canonical public site address
- `url_stability_state`: confirmation that previously published URLs remain reachable

**Validation Rules**
- There can be only one current published release at a time
- Published release metadata must reference a successful publication event
- URL stability must be verified for existing public routes after routine releases

## Relationships

- A `Deployment Candidate` produces one `Validation Result`
- An approved `Deployment Candidate` may trigger one `Publication Event`
- A successful `Publication Event` becomes the current `Published Release`
- A failed `Publication Event` leaves the previous `Published Release` unchanged
