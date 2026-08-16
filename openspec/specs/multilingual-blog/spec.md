# Multilingual Blog Specification

## Purpose

Provides first-class English and Vietnamese blog experiences so readers can browse, share, and switch between localized versions of the same article while the site remains statically generated.

## Requirements

### Requirement: Language-specific public routes
The system SHALL publish localized public pages under supported language prefixes for English and Vietnamese.

#### Scenario: Localized article URL
- **WHEN** an English article and a Vietnamese translation exist for the same post
- **THEN** the system publishes them at language-specific URLs with matching article slugs under `/en/blog/` and `/vi/blog/`

#### Scenario: Localized listing URL
- **WHEN** a reader opens a blog index, tag page, category page, or home page for a supported language
- **THEN** the system displays that page under the matching language prefix

### Requirement: Separate content files per language
The system SHALL represent each localized article version as a separate Markdown or MDX content file.

#### Scenario: Article translation pair
- **WHEN** a post is available in English and Vietnamese
- **THEN** each language version has its own content body and localized frontmatter while sharing a stable translation identity

#### Scenario: Missing translation
- **WHEN** a post exists in only one supported language
- **THEN** the system still publishes the available language version without requiring placeholder content in the missing language

### Requirement: Language-scoped discovery
The system SHALL scope blog discovery pages to the active language.

#### Scenario: Blog index filtering
- **WHEN** a reader opens the English blog index
- **THEN** the system lists English posts only

#### Scenario: Tag and category filtering
- **WHEN** a reader opens a tag or category page in Vietnamese
- **THEN** the system lists only Vietnamese posts that match that tag or category

### Requirement: Top-menu language switching
The system SHALL provide a top-menu control that lets readers switch between English and Vietnamese.

#### Scenario: Switch to available translation
- **WHEN** a reader views an article that has a translation in the target language and activates the language switch
- **THEN** the system navigates to the translated article URL

#### Scenario: Switch when translation is missing
- **WHEN** a reader views an article that does not have a translation in the target language and activates the language switch
- **THEN** the system navigates to an appropriate page in the target language instead of a missing article URL

#### Scenario: Switch on non-article page
- **WHEN** a reader uses the language switch on a localized listing or static page
- **THEN** the system navigates to the equivalent page for the target language when that page exists

### Requirement: Language-aware metadata
The system SHALL expose language-aware document metadata for localized pages.

#### Scenario: Page language attribute
- **WHEN** a reader opens a localized page
- **THEN** the HTML document language matches the active language

#### Scenario: Search metadata
- **WHEN** a localized article page is generated
- **THEN** canonical and alternate-language metadata identify the current language URL and available translations

### Requirement: Localized feeds
The system SHALL provide RSS output that does not mix unrelated language versions in a single default article list.

#### Scenario: English feed
- **WHEN** a reader or feed client requests the English feed
- **THEN** the feed contains English posts only

#### Scenario: Vietnamese feed
- **WHEN** a reader or feed client requests the Vietnamese feed
- **THEN** the feed contains Vietnamese posts only
