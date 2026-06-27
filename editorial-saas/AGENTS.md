# Editorial SaaS

## Style Family

**Product Storytelling and Launch.** Pair this style with Bento Motion, Premium Dark, and Spatial 3D, but use Editorial SaaS when the page should feel authored: premise, typographic rhythm, product evidence, case study, comparison, and refined conversion.

Use Bento Motion instead for modular proof tiles. Use Premium Dark for technical infrastructure/security credibility. Use Spatial 3D when layered depth clarifies the product model. Use the type-motion guidance in this playbook when the editorial page needs kinetic launch energy without becoming a separate typography-only style.

## Client-Grade Demo Target

A generated Editorial SaaS design must feel like a serious product article that could close an executive buyer. Include a point of view, deliberate type rhythm, source-backed artifact, case-study metric, quote with attribution, comparison or pricing proof, and a conversion moment. Kinetic text is allowed only when it clarifies reading order and remains readable under reduced motion.

## Signature Artifact Rule

Add a signature annotated evidence artifact in generated examples: a source-backed table, highlighted claim, proof metric, and conversion cue should interrupt the editorial story.

## Node Library Rules

Use GSAP for restrained headline, artifact, quote, and caption reveals. Avoid animation packages that split every word unless the final page remains readable and the source order stays semantic.

Library use must be visible in the generated UI: GSAP should drive authored line/artifact reveals that feel editorial, while the page remains readable with scripts disabled.

## Purpose

Editorial SaaS is a magazine-quality product website style for SaaS companies that need narrative authority, art direction, case-study proof, and conversion without template sameness.

## When To Use This Style

- Premium SaaS launches.
- Case-study-driven product sites.
- Finance, design, AI, or strategy tools with a point of view.
- Product pages that should feel authored rather than templated.
- Brand-forward launches where type rhythm, line breaks, and restrained text motion carry the story.

## Visual Identity

Editorial, asymmetric, typographically confident, rhythmic, and evidence-rich. It uses spreads, deliberate line breaks, side notes, artifacts, quotes, restrained type motion, and whitespace like a serious publication.

## Reference-Level Outcome

A finished page should read like a strong product feature in a magazine while still converting: premise, narrative, product artifact, case study, metrics, pricing/comparison, and CTA.

## Information Architecture

- Lead with a sharp editorial premise or distinctive typographic opening.
- Use feature spreads with headline, deck, side note, artifact, and caption.
- Include customer story or pull quote as proof.
- Add comparison/pricing or business outcome.
- End with a refined conversion moment.

## Signature Patterns

- Editorial hero
- Article-like product narrative
- Feature spread
- Side note
- Annotated product artifact
- Pull quote
- Case-study proof
- Pricing/comparison section
- Founder/product note
- Expressive type hero
- Animated headline lines
- Typography-led CTA

## Core Design Principles

- Lead with a point of view.
- Use typography contrast as a brand signal.
- Treat type as structure, not decoration.
- Use motion to clarify reading order, never to obscure the message.
- Treat product screenshots/artifacts as evidence.
- Use asymmetry without breaking scanability.
- Keep conversion visible.
- Avoid repetitive card grids.
- Use captions to add proof.
- Keep body text readable.
- Make every section feel authored.
- Balance story with SaaS clarity.

## Layout System

- Use editorial grids with columns, side notes, and feature spreads.
- Vary section scale intentionally.
- Let artifacts interrupt reading at proof moments.
- Use statement, proof, contrast, detail, and action sections when the page needs stronger kinetic pacing.
- Keep captions attached to artifacts.
- On mobile, recompose into clean reading order.

## Color & Theme System

- Use restrained paper/ink/graphite or deep editorial palettes.
- Use one accent for annotations and cues.
- Avoid rainbow SaaS gradients.
- Keep product evidence distinct from prose.
- Use borders and rules like publication structure.

## Typography System

- Pair expressive serif/display type with readable sans body.
- Use deliberate line breaks for desktop and mobile.
- Use scale, weight, case, and spacing to create rhythm.
- Keep animated text legible before, during, and after motion.
- Use decks, captions, pull quotes, and annotations.
- Do not use display type inside dense product artifacts.
- Keep body line length comfortable.

## Motion Language

- Use masked reveals, image/artifact wipes, and quote fades sparingly.
- Pace motion like reading.
- Animate proof artifacts only when it supports argument.
- Respect reduced motion.
- Ensure animated text remains readable and does not convey meaning only through animation order.
- Do not delay content.

## Component System

- Hero should feel like an editorial opening.
- Feature spreads include text, artifact, caption, and side note.
- Artifacts should show real product data.
- Pull quotes need attribution and relevance.
- Pricing/comparison sections should stay refined.
- Forms and CTAs should be simple, text-led, and visually integrated with the typographic system.

## Product Realism Rules

- Use specific audiences and customer situations.
- Show real workflow states, source tables, approvals, metrics, and outcomes.
- Use believable case-study names and contexts.
- Include business metrics with units.
- Avoid vague brand manifesto without product proof.

## Content Strategy

- Write with authority and specificity.
- Use compact memorable claims that can survive large display treatment.
- Use captions as evidence.
- Balance narrative paragraphs with product data.
- Use CTAs such as Request briefing or Book product tour.

## Multi-Surface Requirements

- Show editorial hero, narrative spread, product artifact, customer story, case-study metrics, pricing/comparison, and final CTA.
- When using kinetic editorial treatment, include animated headline lines, a concrete proof state, and a typography-led conversion moment.
- Surfaces should feel like parts of one article-like argument.

## Accessibility Rules

- Maintain contrast for serif and display text.
- Preserve semantic heading order.
- Provide focus for nav, forms, links, and CTAs.
- Respect reduced motion.
- Ensure animated text remains readable and does not convey meaning only through animation order.
- Keep mobile reading order clear.
- Do not disconnect side notes from related content.

## Performance Rules

- Optimize large editorial media.
- Avoid constant scroll animation.
- Do not split large text into too many animated nodes.
- Use transform, opacity, and masks carefully for text reveals.
- Use CSS transforms/opacity for reveals.
- Lazy-load below-fold media.
- Keep font loading efficient.
- Use CSS artifacts when images are unnecessary.

## Responsive Rules

- Turn spreads into single-column reading order.
- Redesign line breaks instead of only shrinking type.
- Keep captions attached.
- Avoid orphaned side notes.
- Preserve CTA visibility.

## Best Use Cases

- Premium SaaS
- Finance products
- Design/AI tools
- Case-study pages
- Category creation pages
- Brand-forward launch pages

## Do Not Do

- Do not make a generic centered SaaS hero.
- Do not use editorial type without readable body.
- Do not hide product proof behind prose.
- Do not overuse pull quotes.
- Do not use random magazine styling.
- Do not hide conversion.
- Do not rely on stock imagery.
- Do not animate reading excessively.
- Do not animate text into illegibility.
- Do not rely on gradient text as the concept.
- Do not animate every word independently.
- Do not let asymmetry break scanning.
- Do not use repetitive feature cards.
- Do not write vague manifestos only.
- Do not detach captions from artifacts.

## Implementation Notes

- Start with story outline, copy rhythm, and type scale, then grid.
- Build reusable hero, spread, artifact, quote, metric, case-study, CTA, and line-reveal blocks.
- Use CSS variables for paper, ink, accent, rules, focus.
- Keep examples self-contained with CSS product artifacts when possible.
- Use packages only for real media/animation needs.
- Verify mobile reading order, contrast, focus, and reduced motion.

## Demo Alignment Notes

The Ledger & Line demo demonstrates an editorial finance SaaS story with a sharp hero, spread layout, side note, source table artifact, pull quote, feature proof, and conversion section. This playbook also carries the former standalone typography guidance for expressive display scale, deliberate line breaks, and restrained headline motion inside editorial launch pages.

The client-grade proof band reinforces that generated editorial pages must connect the narrative argument to measurable buyer value, source coverage, and an authored conversion moment.
