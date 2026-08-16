# Author Link UI Contract

## Purpose

Define the reader-facing behavior for navigation cleanup and About page author links.

## Actors

- Reader browsing the site on desktop
- Reader browsing the site on mobile
- Maintainer reviewing author profile destinations

## Navigation Contract

- The shared top navigation must include primary site navigation items only.
- GitHub and LinkedIn must not appear in the top navigation on desktop or mobile.

## About Page Contract

- The About page links list must display GitHub and LinkedIn entries.
- The GitHub entry must point to `https://github.com/dungphamdev`.
- The LinkedIn entry must point to `https://www.linkedin.com/in/dungphamdev/`.

## Consistency Contract

- Readers must encounter author profile links in the About page links list, not in the top menu.
- Shared author profile values must stay aligned wherever they are rendered for this feature.

## Out of Scope

- Redesigning the About page layout
- Adding new social platforms
- Changing public article or page URLs
