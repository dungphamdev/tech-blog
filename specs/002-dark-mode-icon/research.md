# Research: Persistent Dark Mode Icon

## Decision: Use the design mockup as the primary visual authority

**Rationale**: The user explicitly redirected the planning work to `design/design.png`. The feature
should therefore be planned against the mockup's actual structure rather than the earlier
interpretation of the request text.

**Alternatives considered**:
- Continue using the earlier text-only interpretation: rejected because it no longer reflects the
  requested design target.
- Treat the mockup as optional inspiration only: rejected because the user asked to implement based
  on the design mockup.

## Decision: Place the theme control inside the shared header navigation, not as a floating button

**Rationale**: The mockup shows the toggle embedded in the top-right header controls near the user
avatar. That keeps the page structure calm and makes the theme control feel like part of the
navigation system rather than an overlay.

**Alternatives considered**:
- Use a floating viewport-pinned button: rejected because it does not match the mockup.
- Hide the toggle inside a mobile-only menu: rejected because the mockup preserves direct access to
  the control.

## Decision: Preserve the existing theme preference behavior

**Rationale**: The current site already applies and stores the selected theme. Reusing that
behavior keeps the feature small, reduces regression risk, and aligns with the constitution's
preference for minimal client-side complexity.

**Alternatives considered**:
- Rebuild theme state management entirely: rejected because the feature is about control design and
  placement, not theme persistence redesign.
- Move preference handling into a more complex shared state layer: rejected because the site is
  static and does not need that additional complexity.

## Decision: Render the control from a shared header/layout path so it appears on all public pages

**Rationale**: The feature requires the same icon on all pages. Placing the control in a shared
layout or shared common component path ensures consistency and reduces the chance of page-specific
drift.

**Alternatives considered**:
- Add separate page-level controls: rejected because it creates maintenance drift and breaks the
  consistency requirement.
- Keep the control inside one navigation variant only: rejected because mobile and desktop both
  need the same availability guarantee.

## Decision: Use a compact switch-style control with iconography and explicit theme labeling

**Rationale**: The mockup shows a pill-like toggle with icon cues and visible theme labeling rather
than a lone floating icon. This provides stronger visual clarity while still supporting accessible
interaction and focus states.

**Alternatives considered**:
- Use a text-only button: rejected because it does not match the mockup.
- Use an icon-only floating control: rejected because it does not match the mockup's combined
  switch-and-label treatment.

## Decision: Preserve identical layout structure between themes while adapting colors and emphasis

**Rationale**: The mockup emphasizes that light and dark modes should keep the same layout and
component hierarchy, with the change expressed through palette, contrast, and control styling. That
reduces layout surprise and keeps the reading experience stable.

**Alternatives considered**:
- Change layout structure between themes: rejected because the mockup keeps layout consistent.
- Treat dark mode as a full visual redesign: rejected because the feature scope is theme control and
  theme presentation alignment, not a full page redesign.
