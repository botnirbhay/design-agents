# Spatial Dashboard

## Style Family

**Operational App Shell.** Pair this style with Glass Motion, Command Center, Enterprise Minimal, and AI Copilot when building app-like workspaces, but use Spatial Dashboard when persistent navigation, command areas, overview panels, queues, timelines, and drawers form a daily-use product.

Use Glass Motion instead when frosted material and premium analytics are the defining trait. Use Command Center for urgent incident triage. Use Enterprise Minimal for admin tables and governance. Use AI Copilot when agent planning, approvals, and generated outputs are the main feature. Use Spatial 3D for marketing pages where depth explains a model.

## Client-Grade Demo Target

A generated Spatial Dashboard design must feel like a daily-use workspace. Include persistent navigation, command/search, selected project context, overview metrics, queue, timeline, notifications, detail drawer, quick actions, filters, and loading/error/empty states. Depth should clarify hierarchy and selected objects, not create card clutter.

## Signature Artifact Rule

Add a signature selected-object drawer in generated examples: queue item, timeline context, owner, due date, notifications, and quick action should remain connected.

## Node Library Rules

Use Chart.js for dashboard metrics and GSAP for drawer/focus transitions. The workspace should still be usable if scripts fail: navigation, selected object, queue, and quick actions must remain visible in HTML.

Library use must be visible in the generated UI: include a Chart.js dashboard chart and use GSAP for drawer/focus transitions without allowing proof sections to overlap the app shell.

## Purpose

Spatial Dashboard is a layered workspace style for daily-use dashboards with side navigation, command areas, panels, queues, drawers, and depth-based hierarchy.

## When To Use This Style

- Rich productivity dashboards.
- Project, analytics, and AI workspaces.
- Tools that need primary canvas plus contextual detail.
- Apps where focus and context must coexist.

## Visual Identity

Immersive but practical. Panels feel arranged in depth, yet data hierarchy, stable controls, and repeated-use efficiency remain the priority.

## Reference-Level Outcome

A finished dashboard should feel like a real workspace someone could use every day: persistent navigation, search/command area, overview, task queue, timeline, notifications, detail drawer, and quick actions.

## Information Architecture

- Use persistent side navigation and top command/search region.
- Create a primary dashboard canvas with stable metrics and charts.
- Add secondary panels for task queues, timelines, notifications, and quick actions.
- Use a detail drawer to preserve context.
- Keep settings and filters reachable.

## Signature Patterns

- Layered workspace shell
- Persistent side navigation
- Top command/search area
- Primary overview canvas
- Insight/task queue
- Detail drawer
- Timeline panel
- Quick actions
- Depth hierarchy

## Core Design Principles

- Depth clarifies hierarchy, not decoration.
- Keep primary tasks in stable regions.
- Use floating panels only for context or focus.
- Make data readable before adding depth.
- Avoid card clutter.
- Show selected objects clearly.
- Keep commands close to effects.
- Use compact dashboard typography.
- Support keyboard navigation through layers.
- Keep mobile information priority intact.

## Layout System

- Use sidebar, command bar, main canvas, and secondary panels.
- Use grid areas with stable sizes.
- Let drawers overlap or offset slightly on desktop.
- Keep critical metrics near the top.
- Collapse layers into stacked panels or drawers on mobile.

## Color & Theme System

- Use neutral workspace surfaces.
- Apply accent to selected panels, filters, and actions.
- Use semantic status colors consistently.
- Keep backgrounds calmer than data panels.
- Use shadows and borders to signal layer order.

## Typography System

- Use compact readable labels and numbers.
- Use tabular numerals for metrics.
- Keep headings modest inside work surfaces.
- Avoid marketing-scale type inside panels.
- Use units and freshness labels.

## Motion Language

- Use panel lift, drawer transitions, and focus fades sparingly.
- Animate changes to show where content moved.
- Keep live updates calm.
- Disable depth transitions under reduced motion.
- Do not animate dense tables or charts aggressively.

## Component System

- Sidebars show navigation and context.
- Command bars support search, filters, and quick actions.
- Panels need title, scope, controls, and states.
- Charts need legends/labels.
- Queues show owner, due date, and status.
- Drawers show selected object details.
- Tables need sorting/filtering if present.

## Product Realism Rules

- Use real project objects, owners, due dates, risks, tasks, and insights.
- Show selected object state.
- Include notifications and activity timestamps.
- Represent empty/loading/error states for panels.
- Use quick actions that affect visible objects.

## Content Strategy

- Use operational labels over marketing copy.
- Keep panel text compact.
- Phrase commands as tasks.
- Use specific filter names and context labels.
- Avoid vague dashboard titles.

## Multi-Surface Requirements

- Show side nav, command/search, project overview, task/insight queue, analytics panels, timeline, notifications/detail drawer, quick actions, and settings/context controls.
- Surfaces should share the same selected project or workspace.

## Accessibility Rules

- Provide focus for nav, command input, filters, panels, tables, and drawer controls.
- Maintain contrast across layered surfaces.
- Respect reduced motion.
- Keep tab order logical despite overlap.
- Use readable text sizes.
- Use labels beyond color for status.

## Performance Rules

- Avoid expensive perspective on many panels.
- Use transform/opacity for drawers.
- Throttle live data updates.
- Virtualize large tables/logs.
- Simplify shadows on low-powered devices.
- Pause nonessential motion when hidden.

## Responsive Rules

- Collapse sidebar into top or drawer navigation.
- Keep primary metrics and selected object visible.
- Turn floating command panels into inline controls.
- Reduce depth and hover effects.
- Preserve task/action order.

## Best Use Cases

- Project dashboards
- AI workspaces
- Analytics tools
- Productivity platforms
- Admin workbenches

## Do Not Do

- Do not create random card clutter.
- Do not use depth that hurts scanning.
- Do not hide primary actions in floating controls only.
- Do not put perspective on dense tables.
- Do not waste space with decoration.
- Do not animate data updates noisily.
- Do not ignore keyboard paths.
- Do not make every panel float equally.
- Do not hide filters.
- Do not use oversized marketing headings.
- Do not detach drawers from selected objects.
- Do not let mobile order become incoherent.

## Implementation Notes

- Define workspace regions before visual styling.
- Create tokens for depth, panel, border, focus, and status.
- Represent panels with title, scope, data, controls, and state.
- Keep static demos self-contained.
- Use packages only for serious chart/table behavior.
- Verify keyboard order, mobile stacking, focus, and no overlap.

## Demo Alignment Notes

The Atlas Desk demo demonstrates a layered dashboard shell with side nav, command bar, overview metrics, chart, detail drawer, task queue, timeline, and quick actions.

The client-grade proof band reinforces that generated spatial dashboards must prove daily-use value through selected context, queues, timelines, metrics, and stable actions.
