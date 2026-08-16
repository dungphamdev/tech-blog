# Data Model: Author Info Cleanup

## Navigation Link Set

Represents the collection of links shown in the shared top navigation.

**Fields**
- `items`: the links rendered in the top menu
- `layout_variant`: desktop or mobile navigation presentation
- `visibility_scope`: where the links are shown across public pages

**Validation Rules**
- Must include primary site navigation items
- Must not include GitHub or LinkedIn items after this feature is applied
- Must behave consistently in desktop and mobile layouts

## Author Profile Link

Represents a public author profile destination shown to readers.

**Fields**
- `label`: display name such as GitHub or LinkedIn
- `destination`: public URL for the profile
- `display_location`: where the link appears in the site UI

**Validation Rules**
- GitHub destination must be `https://github.com/dungphamdev`
- LinkedIn destination must be `https://www.linkedin.com/in/dungphamdev/`
- Author profile links for this feature must appear in the About page links list

## About Page Links List

Represents the About page section that contains author-related links.

**Fields**
- `entries`: visible link items shown to readers
- `content_role`: author contact and profile information
- `page_context`: About page only

**Validation Rules**
- Must include the corrected GitHub and LinkedIn profile links
- Must preserve unrelated author contact items such as email
- Must remain the canonical public location for these author profile links in this feature

## Relationships

- One `Navigation Link Set` is rendered across many public pages
- One `About Page Links List` contains many `Author Profile Link` entries
- The same `Author Profile Link` values must not conflict between shared config and displayed UI
