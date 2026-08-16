# Theme Control UI Contract

## Purpose

Define the reader-facing behavior of the mockup-aligned dark mode control across the public site.

## Actors

- Reader using desktop layout
- Reader using mobile layout
- Keyboard or assistive-technology user interacting with the theme control

## Placement Contract

- The control must appear in the top-right header/navigation area shown by `design/design.png`.
- The control must read as part of the shared header UI rather than as a floating overlay.
- Desktop and mobile layouts must preserve direct access to the control in a visually consistent
  top-right position.

## Interaction Contract

- The control must use a compact switch or pill treatment with iconography and theme cue text that
  matches the mockup direction.
- A single interaction must switch the site between light and dark themes.
- The control must expose an accessible label describing the action.

## Persistence Contract

- The selected theme must remain active when the reader navigates to another page.
- The visible theme on page load must match the saved preference when one exists.

## Coverage Contract

- The control must appear on all public pages.
- Desktop and mobile layouts must both provide the control in a usable way through the shared header
  pattern.

## Safety Contract

- The control must not crowd or break the existing header navigation layout.
- Theme changes must preserve the same page structure between light and dark modes.
- Focus visibility and activation behavior must remain clear for keyboard users.

## Out of Scope

- Redesigning the full site color palette
- Adding additional theme modes beyond the existing light and dark behavior
- Introducing user accounts or server-side preference storage
