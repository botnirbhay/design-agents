# Bento Motion

## Style Family

**Product Storytelling and Launch.** Pair this style with Editorial SaaS, Premium Dark, and Spatial 3D when building marketing or launch pages, but use Bento Motion when the story is best understood through many connected product proof tiles.

Use Editorial SaaS instead for article-like authority, case-study narrative, or type-led launch energy. Use Premium Dark for technical infrastructure/security launches. Use Spatial 3D when depth explains layered product relationships.

## Client-Grade Demo Target

A generated Bento Motion design must feel like a real operating room for one product scenario, not a decorative card collage. Every tile needs a job: product preview, metric, owner, source freshness, integration health, warning state, customer impact, or CTA. Include a large enterprise dossier or equivalent buyer-proof tile with account impact, policy gates, source freshness, and revenue or operational exposure.

## Signature Artifact Rule

Add a signature launch-room command matrix in generated examples: include account impact, source freshness, policy gates, revenue exposure, and owner state inside the bento system.

## Node Library Rules

Use GSAP for bento tile choreography and Chart.js for product metrics when static CSS charts would undersell the operating-room feel. Chart.js examples should be labeled with real launch signals such as risk pressure, approval latency, or source freshness.

Library use must be visible in the generated UI: include at least one Chart.js metric tile or proof chart inside the bento grid, and use GSAP to choreograph card priority rather than applying equal animation everywhere.

## Purpose

Bento Motion is a product-marketing and SaaS storytelling style built around animated, asymmetric bento systems. It turns many product capabilities into a coherent information architecture rather than a decorative card grid.

## When To Use This Style

- AI productivity and workflow SaaS landing pages.
- Collaboration products with many connected features.
- Analytics, operations, and launch-management tools that need proof, metrics, and workflow states above the fold.
- Product launches where scanability and visual richness both matter.

## Visual Identity

Modular, crisp, energetic, and product-dense. The page uses unequal cards, explicit card roles, refined shadows, contained motion, and realistic product artifacts so the grid reads as a living operating system.

## Reference-Level Outcome

A finished page should feel like a flagship SaaS homepage where every tile proves something: a metric, workflow, integration, product preview, customer result, or conversion path. The user should understand the product story by scanning the grid before reading the copy.

## Information Architecture

- Start with premium navigation and a strong hero tied directly to a dominant bento preview.
- Use multiple bento zones, such as overview, workflow proof, metrics, integrations, customer activity, and CTA.
- Give the largest card the richest product surface, not just a bigger headline.
- Connect cards through shared product objects, statuses, owners, and timestamps.
- Close with a CTA tile or band that feels like the natural next card in the system.

## Signature Patterns

- Bento storytelling grid
- Dominant product preview tile
- Metric proof tiles with units and trend context
- Workflow sequence tiles
- Automation/status tiles
- Team activity tiles
- Integration tiles
- Customer proof tile
- CTA tile integrated into the grid

## Core Design Principles

- Every card must have a clear role and business meaning.
- Use asymmetry to create priority, not novelty.
- Make product evidence visible inside the same tile that makes the claim.
- Vary card size, density, and motion intensity intentionally.
- Use motion to show relationships between signals, actions, and outcomes.
- Keep card gutters stable so hover states never collide.
- Prefer labels, values, rows, and status chips over long paragraph copy.
- Let one dominant proof tile anchor the first viewport.
- Make responsive order preserve overview, proof, then action.
- Use empty space around dense clusters so the grid remains premium.

## Layout System

- Use CSS grid with deliberate spans: wide hero cards, tall workflow cards, compact metric cards, and smaller proof cards.
- Avoid equal-size matrices unless the section is intentionally comparative.
- Group related cards into visible clusters.
- Keep min-heights stable to prevent animation layout shift.
- On mobile, collapse into a curated story order with the primary preview early.

## Color & Theme System

- Use a calm neutral foundation with one or two strategic accents.
- Apply gradients only to priority cards, chart fills, or CTA surfaces.
- Use layered borders and soft shadows for depth.
- Keep semantic color consistent for success, warning, risk, and active states.
- Avoid random rainbow accents that do not map to content hierarchy.

## Typography System

- Use a confident headline scale for the hero and compact card titles.
- Make metrics large, tabular when useful, and paired with timeframe or unit labels.
- Use short card titles and concrete labels such as Approval latency or Sync health.
- Keep body text sparse inside cards.
- Avoid similar sizes for title, label, and caption.

## Motion Language

- Stagger card entrances or chart fills lightly.
- Use subtle hover lift, border light, or content emphasis on interactive cards.
- Animate important mini demos with progress sweeps, bar fills, or workflow steps.
- Do not animate every tile equally.
- Under reduced motion, preserve static hierarchy and disable loops, parallax, and lifts.

## Component System

- Navigation should be compact and premium, with direct product/CTA links.
- Cards should be reusable primitives with role variants: preview, metric, workflow, proof, integration, CTA.
- Charts need labels, units, or obvious product meaning.
- Workflow cards should show sequence, owner, state, and outcome.
- Integration chips should include sync or health state.
- Buttons should have visible hover, active, focus, and disabled states.

## Product Realism Rules

- Invent a believable product name and specific audience.
- Use product objects such as launch rooms, approvals, blockers, tasks, sources, and owners.
- Show real states: blocked, draft, synced, approved, degraded, ready.
- Include metrics with units and time windows.
- Use timestamps, initials, team activity, confidence scores, and source names.
- Include warning and success states, not only happy-path cards.
- Make microcopy sound like a product surface, not marketing filler.

## Content Strategy

- Write tile copy as evidence, not slogans.
- Use concise product labels and concrete proof points.
- Keep CTAs aligned with the grid story.
- Use customer quotes sparingly and attach them to a workflow outcome.
- Avoid generic feature names if a product-specific noun is available.

## Multi-Surface Requirements

- Show a marketing page plus embedded product preview.
- Include workflow, metrics, team activity, integrations, proof, and CTA surfaces.
- The surfaces should share the same product scenario and not feel like unrelated cards.

## Accessibility Rules

- Use semantic headings despite visual grid order.
- Maintain contrast on gradients and tinted cards.
- Provide visible keyboard focus for links, buttons, chips, and card controls.
- Do not hide critical explanations behind hover-only reveals.
- Keep text readable inside compact tiles on mobile.
- Use non-color status cues such as labels and icons.

## Performance Rules

- Prefer transform and opacity animation.
- Limit looping effects to the most important tiles.
- Avoid heavy blur stacks and animated shadows across many cards.
- Use CSS/SVG for charts and mini demos before video or canvas.
- Pause or remove nonessential motion on mobile and reduced-motion devices.

## Responsive Rules

- Collapse grids into a deliberate narrative stack.
- Place the dominant product preview early.
- Preserve card role labels and actions on touch devices.
- Reduce hover-only behavior and keep tap targets comfortable.
- Use stable aspect ratios for fixed-format previews.

## Best Use Cases

- AI productivity SaaS
- Product operations platforms
- Collaboration tools
- Analytics products
- Launch and workflow automation pages

## Do Not Do

- Do not create repetitive equal cards.
- Do not use generic icons as the main proof.
- Do not make every card glow or animate.
- Do not use fake charts without labels or meaning.
- Do not bury the CTA in a low-contrast tile.
- Do not make decorative gradients compete with product evidence.
- Do not let hover reveal critical content.
- Do not make mobile order random.
- Do not overfill every card with paragraphs.
- Do not use all cards at the same visual intensity.
- Do not detach metrics from timeframe or unit.
- Do not turn the grid into a feature checklist.

## Implementation Notes

- Define tokens for surface, border, shadow, accent, status, focus, and motion.
- Build reusable card role classes before composing sections.
- Represent card data with clear labels, values, statuses, and actions.
- Keep examples self-contained with inline CSS/SVG unless a repo convention says otherwise.
- Use packages only for a real charting or animation need that CSS cannot meet.
- Preview desktop and mobile, then verify focus rings, reduced motion, local links, and no overflow.

## Demo Alignment Notes

The current RelayGrid demo demonstrates the style with a hero preview, asymmetric bento grid, workflow and metric tiles, team activity, integrations, customer proof, and an integrated CTA.

The client-grade proof band and enterprise dossier reinforce that generated bento pages must include buyer-facing operational impact, policy gates, source freshness, and revenue or account exposure.
