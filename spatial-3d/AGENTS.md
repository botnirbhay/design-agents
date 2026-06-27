# Spatial 3D

## Style Family

**Product Storytelling and Launch.** Pair this style with Bento Motion, Editorial SaaS, and Premium Dark, but use Spatial 3D when depth, layers, perspective, and inspectable planes explain the product model.

Use Spatial Dashboard instead when the result should be a daily-use workspace rather than a marketing/explainer page. Use Editorial SaaS for narrative progression and type-led storytelling. Use Bento Motion for modular feature proof. Use Premium Dark for technical credibility. Use Glass Motion when translucent app depth is the main surface.

## Client-Grade Demo Target

A generated Spatial 3D design must use depth to explain a product model. Include meaningful planes such as roadmap, risk, customer, region, architecture, or integration; stable labels; flatten/focus controls; metrics; owners; dependencies; incomplete states; and a static/mobile fallback. Do not use unrelated floating shapes.

## Signature Artifact Rule

Add a signature layer manifest in generated examples: every depth plane must map to a named product layer with owner, metric, dependency, or incomplete state.

## Node Library Rules

Use Three.js only when the spatial model benefits from real 3D inspection. Keep labels, primary text, and controls in normal HTML; provide static or CSS-flattened fallbacks for reduced motion and mobile.

Library use must be visible in the generated UI: when Three.js is used, the scene must be a product model or layer stack with adjacent HTML labels, controls, and fallback content.

## Purpose

Spatial 3D is a premium product style using CSS-based depth, perspective, layered mockups, and tactile motion to explain systems without heavy 3D overhead.

## When To Use This Style

- Futuristic SaaS product pages.
- Architecture, planning, design, and AI tools with layered concepts.
- Products where depth clarifies relationships.
- Memorable hero pages that should remain performant.

## Visual Identity

Layered, tactile, clean, and restrained. Depth supports product meaning through planes, shadows, scale, and perspective rather than unrelated floating shapes.

## Reference-Level Outcome

A finished page should feel spatial and inspectable while still reading like a serious product site. Users should understand what each layer represents and how depth helps the workflow.

## Information Architecture

- Use a stable text/navigation layer and a spatial product hero.
- Represent product domains as meaningful planes or layered mockups.
- Follow with feature, architecture, metrics, and integration surfaces.
- Keep controls outside moving layers.
- End with an action that invites inspection or sharing.

## Signature Patterns

- Layered 3D-like hero
- Perspective product planes
- Architecture layer
- Floating mockups with labels
- Stable control panel
- Depth-aware feature cards
- Flatten/focus controls
- Static fallback composition

## Core Design Principles

- Depth must explain the product.
- Keep primary text outside transformed layers.
- Use one consistent light source.
- Prefer CSS transforms before WebGL.
- Make labels stable and readable.
- Limit cursor/reactive motion.
- Flatten on mobile or reduced motion.
- Use product-related objects, not random shapes.
- Keep controls easy to target.
- Avoid body text on tilted planes.

## Layout System

- Place primary spatial composition beside or behind clear copy.
- Use perspective consistently across grouped elements.
- Give transformed objects enough space to avoid clipping.
- Follow the hero with flat readable sections.
- On mobile, stack or flatten planes.

## Color & Theme System

- Use polished neutrals with enough contrast between layers.
- Use shadows and highlights from one imagined light source.
- Apply accent color to active states and product-relevant planes.
- Keep backgrounds calm.
- Avoid saturated gradients on every object.

## Typography System

- Keep headings and body copy crisp and grounded.
- Use labels and callouts that remain readable.
- Avoid tilted primary text.
- Use concise layer names.
- Use metrics with clear units and status.

## Motion Language

- Use small tilt, parallax, depth shifts, and slow float only on spatial objects.
- Avoid requiring cursor motion to access information.
- Use scroll to separate layers when useful.
- Disable tilt, parallax, and rotation under reduced motion.
- Do not animate large shadows continuously.

## Component System

- Spatial planes should contain meaningful product UI.
- Feature cards may tilt lightly on hover but settle readable.
- Controls such as Flatten, Focus layer, Share orbit should stay flat.
- Metrics and integration chips should be normal UI.
- Loading states should be lightweight and explicit.

## Product Realism Rules

- Use layer names tied to the product: roadmap, architecture, customer, risk, region.
- Show owners, status chips, dependencies, confidence, and integration names.
- Include architecture or workflow metadata.
- Represent warnings and incomplete states.
- Avoid abstract object names.

## Content Strategy

- Explain why depth matters.
- Use tactile verbs such as inspect, layer, orbit, align, preview.
- Keep copy concise and outside transformed objects.
- Use labels as product evidence, not decoration.

## Multi-Surface Requirements

- Show spatial hero, layered mockups, workflow preview, architecture/system layer, metrics, integrations, and final CTA.
- Surfaces should describe one connected layered product model.

## Accessibility Rules

- Keep essential content as normal text.
- Provide focus for controls around spatial scenes.
- Maintain contrast for labels and planes.
- Respect reduced motion with a static layered composition.
- Do not require hover or rotation.
- Use meaningful descriptions for visual layers.

## Performance Rules

- Prefer CSS transforms over canvas/WebGL.
- Avoid high-poly models unless truly necessary.
- Pause offscreen ambient motion.
- Avoid animating expensive filters and shadows.
- Use compressed assets if any.
- Provide low-powered fallbacks.

## Responsive Rules

- Disable cursor-dependent tilt on touch.
- Flatten depth and reduce overlap.
- Keep labels readable.
- Avoid horizontal overflow.
- Keep controls direct and visible.

## Best Use Cases

- AI planning tools
- Architecture products
- Creative/design tools
- Roadmap platforms
- Layered system explainers

## Do Not Do

- Do not use unrelated floating shapes.
- Do not make navigation depend on camera movement.
- Do not place body text on tilted planes.
- Do not require WebGL for simple depth.
- Do not hide controls in moving objects.
- Do not create motion sickness.
- Do not sacrifice load time.
- Do not make labels jitter.
- Do not clip transformed elements.
- Do not use inconsistent shadows.
- Do not make depth purely decorative.
- Do not ignore static fallback states.

## Implementation Notes

- Choose CSS, canvas, or Three.js deliberately; default to CSS.
- Build useful static content first.
- Define perspective, shadow, and layer tokens.
- Represent layers as product objects with labels and statuses.
- Use packages only when real 3D interaction is essential.
- Verify framing, no overflow, reduced motion, and mobile flattening.

## Demo Alignment Notes

The OrbitLayer demo demonstrates CSS perspective planes, product layer labels, feature cards, metrics, controls, and reduced-motion flattening.

The client-grade proof band reinforces that generated spatial explainers must tie each layer to a product object, dependency, owner, metric, or incomplete state.
