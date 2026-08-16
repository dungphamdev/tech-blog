## Purpose

Adds article comments powered by GitHub Discussions so readers can participate in a shared conversation for each logical blog post without requiring a custom backend.

## ADDED Requirements

### Requirement: Published articles show comments
The system SHALL render a comments area below the content of published blog posts.

#### Scenario: Published article comments
- **WHEN** a reader opens a published blog article
- **THEN** the article page includes a comments area after the article body

### Requirement: Draft articles hide comments
The system SHALL NOT render the comments widget for draft blog posts.

#### Scenario: Draft article preview
- **WHEN** a draft blog article is rendered in a non-production preview
- **THEN** the article page does not include the comments widget

### Requirement: Translations share one discussion
The system SHALL map translated versions of the same logical article to the same GitHub Discussion.

#### Scenario: English and Vietnamese article versions
- **WHEN** English and Vietnamese pages share the same article translation identity
- **THEN** both pages use that shared identity as the comments discussion term

### Requirement: Comments use centralized configuration
The system SHALL read Giscus repository, category, and behavior settings from centralized site configuration.

#### Scenario: Complete comments configuration
- **WHEN** the comments configuration includes all required Giscus identifiers
- **THEN** the article page renders the Giscus widget with those settings

#### Scenario: Incomplete comments configuration
- **WHEN** required Giscus identifiers are missing
- **THEN** the article page omits the comments widget instead of rendering a broken embed

### Requirement: Comments respect theme mode
The system SHALL render Giscus with a theme that matches the site's current light or dark appearance.

#### Scenario: Light mode
- **WHEN** the page is displayed in light mode
- **THEN** the comments widget uses a light-compatible Giscus theme

#### Scenario: Dark mode
- **WHEN** the page is displayed in dark mode
- **THEN** the comments widget uses a dark-compatible Giscus theme

#### Scenario: Theme toggle after comments load
- **WHEN** the reader toggles the blog between light and dark mode after the comments widget has loaded
- **THEN** the comments widget updates to the matching Giscus theme without requiring a page reload
