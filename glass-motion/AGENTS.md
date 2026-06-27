# Glass Motion

## Style Family

**Operational App Shell.** Pair this style with Spatial Dashboard, Command Center, and Enterprise Minimal when building dashboards, but use Glass Motion when premium translucent layering is part of the product feel and the data remains readable.

Use Spatial Dashboard instead for repeated-use productivity workspaces with command bars, queues, and drawers. Use Command Center for urgent telemetry and incidents. Use Enterprise Minimal for restrained admin, policy, and table workflows. Use Bento Motion when glass-like cards are merely marketing tiles rather than an app shell.

## Client-Grade Demo Target

A generated Glass Motion design must feel like premium analytics software with usable data in the foreground. Include a named dashboard context, readable chart wells, filters, forecast confidence, alert ownership, delayed/degraded states, recent activity, and business-value proof. Glass material should create hierarchy; it must not reduce contrast or replace product substance.

## Signature Artifact Rule

Add a signature forecast inspector in generated examples: glass layers should frame solid readable wells for confidence, freshness, owner, and business impact.

## Node Library Rules

Use Chart.js for readable forecast, revenue, or confidence charts inside solid data wells. Use GSAP for glass layer focus transitions, but keep blur and motion secondary to legibility.

Library use must be visible in the generated UI: include a Chart.js forecast or confidence chart inside a clear data well, with glass layers framing rather than obscuring it.

## Purpose

Glass Motion is a premium dashboard and app-shell style using frosted glass, translucency, layered depth, and calm motion while preserving serious data readability.

## When To Use This Style

- Premium analytics dashboards.
- Fintech, revenue, portfolio, or AI insight products.
- Interfaces where layered controls, inspectors, and filters benefit from depth.
- Brand-forward app experiences that still need practical data density.

## Visual Identity

Atmospheric, translucent, and spatial, but never washed out. Glass surfaces frame important layers while dense data sits in clearer wells.

## Reference-Level Outcome

A finished example should feel like a real analytics product floating in a layered environment, with readable charts, filters, alerts, team/account panels, and forecast modules that benefit from glass rather than suffer under it.

## Information Architecture

- Create a layered app shell with translucent nav, side insight stack, main analytics surface, and inspector or alert panel.
- Keep critical controls in the clearest foreground layer.
- Use solid or semi-solid wells inside glass for charts, tables, and dense rows.
- Connect account, forecast, activity, and alert regions with shared filters and timestamps.

## Signature Patterns

- Layered glass app shell
- Translucent navigation
- Readable main analytics surface
- Foreground filter toolbar
- Insight stack
- Alert inspector
- Team/account panel
- Comparison or forecast module
- Recent activity feed

## Core Design Principles

- Readability beats transparency.
- Use blur to separate depth layers, not as a universal skin.
- Give every glass layer a clear job.
- Anchor primary actions on the clearest foreground panel.
- Use one consistent lighting model for highlights and shadows.
- Pair glass panels with solid data wells.
- Keep small labels brighter and heavier than normal muted text.
- Reduce overlap on mobile.
- Use motion to imply focus transitions, not floating chaos.
- Never let background ambience compete with content.

## Layout System

- Use a background ambience, midground panels, and foreground controls.
- Place side and inspector panels around a dominant analytics canvas.
- Use generous gaps so shadows and blur have room.
- Keep sticky panels only when they improve orientation.
- Stack panels in task order on mobile.

## Color & Theme System

- Use deep gradients or rich dark foundations.
- Use translucent fills with subtle border highlights.
- Keep text high contrast against composited backgrounds.
- Reserve glow for active, selected, or primary states.
- Use semantic colors for risk, success, alerts, and forecast confidence.

## Typography System

- Use crisp modern headings and practical dashboard text sizes.
- Avoid thin, low-opacity text on glass.
- Keep filter labels and values short.
- Use numeric hierarchy for key metrics.
- Use captions only when they remain readable at final opacity.

## Motion Language

- Use slow ambient background motion only if it stays behind content.
- Animate panels with opacity, scale, and slight vertical drift.
- Use hover glow or border-light changes sparingly.
- Use modal transitions as depth changes.
- Disable floating, animated gradients, and blur motion under reduced motion.

## Component System

- Glass nav must remain readable over all scroll positions.
- Charts need clear labels and high-contrast fills.
- Filters should be tappable and visually foregrounded.
- Insight cards need source, confidence, or timestamp.
- Alert panels need severity, owner, and action.
- Tables should use semi-solid rows.
- Buttons need filled, outline, ghost, disabled, and focus states.

## Product Realism Rules

- Use believable business objects such as accounts, renewals, segments, forecasts, regions, and owners.
- Include values, percentages, risk states, freshness, and export actions.
- Show delayed syncs, slipped renewals, and confidence scores.
- Add recent activity and team presence.
- Represent empty/loading/error states as calm dashboard states, not decorative messages.

## Content Strategy

- Use concise dashboard language.
- Put task-critical copy in foreground panels.
- Pair atmospheric hero copy with concrete balances, alerts, and insights.
- Keep long prose out of glass panels.
- Use CTA labels such as Run forecast or Export board.

## Multi-Surface Requirements

- Show at least nav, main analytics canvas, filters, alert inspector, activity feed, and comparison/forecast surface.
- Surfaces should share the same filter context and data story.

## Accessibility Rules

- Check contrast against composited backgrounds.
- Provide focus rings visible on translucent and gradient areas.
- Do not depend on backdrop-filter support for critical content.
- Use labels and text for status, not glow alone.
- Keep tab order logical through layers.
- Avoid tiny low-opacity captions.

## Performance Rules

- Use backdrop blur sparingly.
- Avoid animated blur across large surfaces.
- Prefer transform and opacity for layer motion.
- Simplify blur and shadows on mobile.
- Avoid stacking many translucent layers over animated backgrounds.
- Provide static fallback backgrounds.

## Responsive Rules

- Reduce overlap and blur intensity on small screens.
- Stack side, main, and inspector regions in task order.
- Keep primary filters and actions near the top.
- Replace hover glow with persistent active states.
- Maintain chart readability without horizontal scrolling.

## Best Use Cases

- Fintech dashboards
- Revenue analytics
- AI insight products
- Premium account workspaces
- Forecasting tools

## Do Not Do

- Do not apply glass everywhere.
- Do not put small gray text on translucent surfaces.
- Do not use noisy image backgrounds.
- Do not rely on glow for state.
- Do not make forms unreadable over gradients.
- Do not animate blur continuously.
- Do not let disabled/error/selected states look alike.
- Do not create a generic card grid with blur added.
- Do not hide filters.
- Do not sacrifice keyboard focus.
- Do not stack too many translucent panels.
- Do not make the page a poster instead of an app.

## Implementation Notes

- Define glass material tokens for fill opacity, blur, border, shadow, and highlight.
- Create solid content wells for dense data.
- Use CSS variables for status colors and focus rings.
- Keep examples self-contained unless real charting requires a package.
- Preview with and without backdrop-filter support.
- Validate reduced motion, contrast, and mobile stacking.

## Demo Alignment Notes

The Aurelian Lens demo shows a glass analytics shell with side insights, a forecast toolbar, chart metrics, an alert inspector, comparison table, and recent activity.

The client-grade proof band reinforces that generated glass dashboards must keep revenue, forecast confidence, alert ownership, and source freshness readable above the visual material.
