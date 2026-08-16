# Data Model: Persistent Dark Mode Icon

## Theme Control

Represents the shared header-level theme switch that readers use to change site themes.

**Fields**
- `placement`: where the control appears within the header/navigation region
- `presentation_mode`: compact switch treatment with iconography and visible theme cue
- `interaction_label`: accessible name that describes the action
- `layout_variant`: the display behavior used across desktop and mobile contexts

**Validation Rules**
- Must appear in the top-right header control area
- Must visually align with the design shown in `design/design.png`
- Must be present across all public page contexts

## Theme Preference

Represents the reader's active theme choice.

**Fields**
- `current_theme`: active theme value such as light or dark
- `source`: where the theme choice came from, such as saved preference or initial page state
- `persistence_state`: whether the preference continues across page navigation

**Validation Rules**
- Must change when the reader activates the control
- Must remain consistent when the reader moves between pages
- Must match the visible site theme on page load

## Page Context

Represents a public page where the shared header-level theme control must remain available.

**Fields**
- `page_type`: landing, blog listing, article, tag, category, or about page
- `header_layout`: desktop or mobile header/navigation arrangement
- `layout_density`: how much existing UI is near the top-right header area

**Validation Rules**
- Every public page type must expose the same theme control
- Desktop and mobile header layouts must both keep the control accessible

## Relationships

- One `Theme Control` manipulates one active `Theme Preference`
- One `Theme Preference` must remain consistent across many `Page Context` instances
- Each `Page Context` must expose the same `Theme Control` behavior with consistent header placement
