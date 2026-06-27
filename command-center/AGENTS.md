# Command Center

## Style Family

**Operational App Shell.** Pair this style with Spatial Dashboard, Glass Motion, Enterprise Minimal, and Terminal Native when building dense tools, but use Command Center when time-sensitive triage, severity, telemetry, incidents, and operator action dominate.

Use Spatial Dashboard instead for everyday workspace overview and task context. Use Glass Motion for premium analytics where depth is atmospheric. Use Enterprise Minimal for governance tables and admin workflows. Use Terminal Native when command execution, logs, and developer keyboard workflows are the core surface.

## Client-Grade Demo Target

A generated Command Center design must feel like an operator can make a correct decision within seconds. Include one named incident, severity, affected service or region, live metrics, incident queue, logs, runbook, owner, acknowledgement age, escalation path, and post-incident note. Density is valuable only when severity and next action remain obvious.

## Signature Artifact Rule

Add a signature incident decision rail in generated examples: severity, owner, runbook step, acknowledgement age, and customer communication must be visible together.

## Node Library Rules

Use Chart.js for live telemetry, burn-rate, incident-volume, or service-health charts. Use GSAP only for brief acknowledgement/filter transitions; do not animate urgent data in a way that harms triage.

Library use must be visible in the generated UI: include a Chart.js telemetry chart for burn rate, incident volume, latency, or service health, with labels and severity context.

## Purpose

Command Center is a dense, high-signal operations dashboard style for monitoring, incident response, telemetry, cybersecurity, and real-time systems.

## When To Use This Style

- Observability and SRE consoles.
- Cybersecurity operations.
- Financial or logistics monitoring.
- Any workflow where triage speed matters more than marketing polish.

## Visual Identity

Serious, dense, readable, and alert-aware. The interface prioritizes what is wrong, how bad it is, who owns it, what changed, and what action comes next.

## Reference-Level Outcome

A finished example should feel like a real operator console with live health, severity hierarchy, incident queue, logs, service map, runbook, timeline/actions, and notes.

## Information Architecture

- Place global health, time range, filters, and operator actions at the top.
- Use overview metrics before incident detail.
- Provide split regions for incident queue, logs, service map, runbook, and notes.
- Keep filters and escalation actions visible.
- Use density without burying severity.

## Signature Patterns

- Severity-first incident queue
- System health overview
- Live telemetry metrics
- Log stream
- Service map
- Runbook steps
- Operator action bar
- Escalation detail
- Post-incident notes

## Core Design Principles

- Triage first.
- Use density to increase signal.
- Show severity, owner, age, and impact together.
- Do not let normal messages look critical.
- Use semantic color plus labels.
- Keep logs readable.
- Keep controls close to data.
- Batch live changes.
- Make dangerous actions explicit.
- Support keyboard-heavy workflows.

## Layout System

- Use dense grids with overview spanning top.
- Use list-detail or split views.
- Keep time range and severity filters persistent.
- Use tables/logs/timelines where efficient.
- On mobile, prioritize critical alerts and actions.

## Color & Theme System

- Use dark or hybrid high-contrast foundations.
- Apply severity colors consistently for normal, info, warning, critical, resolved.
- Use restrained accents so real alerts stand out.
- Use row highlights and labels together.
- Keep chart palettes distinguishable.

## Typography System

- Use compact readable type.
- Use tabular numerals for metrics and timestamps.
- Use monospace for logs, traces, IDs, and commands.
- Make alert title, severity, owner, and age scannable.
- Avoid oversized headings except top-level totals.

## Motion Language

- Highlight value changes briefly.
- Pulse only actionable urgency.
- Keep charts stable.
- Animate filtering and resolution calmly.
- Reduced motion uses static highlights.
- Do not animate every update.

## Component System

- Metrics show value, unit, trend, freshness.
- Alerts show severity, source, owner, timestamp, impact, actions.
- Logs support search/filter/severity/wrap/copy.
- Service maps show dependency health.
- Runbooks show ordered steps and start/complete actions.
- Notes support incident summary and handoff.

## Product Realism Rules

- Use service, region, incident, owner, SLO, trace, rollback, acknowledgement, escalation terms.
- Include timestamps, event rates, durations, and affected regions.
- Show degraded, critical, acknowledged, pending, resolved states.
- Use realistic log lines and trace IDs.
- Include post-incident and communication details.

## Content Strategy

- Write operational copy, not marketing copy.
- Alert text should state source, severity, time, and action.
- Use filters named in system language.
- Use logs and timelines as evidence.
- Keep notes professional and specific.

## Multi-Surface Requirements

- Show health overview, live metrics, incident queue, logs, filters, service map, timeline/runbook, escalation actions, and post-incident notes.
- All surfaces should describe one operational event.

## Accessibility Rules

- Maintain contrast for dense text and alerts.
- Provide focus for filters, tables, row actions, and controls.
- Use labels/shapes in addition to color.
- Respect reduced motion for live pulses.
- Allow zoom without overlap.
- Announce critical changes carefully.

## Performance Rules

- Virtualize large logs and tables.
- Batch real-time updates.
- Avoid heavy blur and decorative animation.
- Use efficient chart rendering.
- Pause nonessential updates when hidden.
- Limit visible log volume in static demos.

## Responsive Rules

- Prioritize critical alerts, health, and actions.
- Simplify tables into list-detail.
- Keep filters reachable.
- Reduce animation.
- Avoid horizontal scrolling that hides triage data.

## Best Use Cases

- Observability
- SRE incident response
- Security operations
- Real-time logistics
- Financial monitoring

## Do Not Do

- Do not waste space with low-density cards.
- Do not make alerts look like normal rows.
- Do not hide filters.
- Do not rely only on color.
- Do not animate every metric.
- Do not use decorative gradients.
- Do not omit owner/age/action.
- Do not use fake log gibberish.
- Do not bury runbooks.
- Do not make dangerous actions casual.
- Do not use tiny unreadable logs.
- Do not ignore keyboard workflows.

## Implementation Notes

- Map monitor, filter, investigate, acknowledge, resolve, report.
- Define severity tokens and row density.
- Use static sample data with realistic volumes.
- Keep demos self-contained.
- Use packages only for true chart/log scale.
- Validate focus, contrast, reduced motion, and mobile triage order.

## Demo Alignment Notes

The Sentinel Ops demo demonstrates global health, critical incident metrics, incident queue, logs, service map, runbook steps, and post-incident notes.

The client-grade proof band reinforces that generated command centers must connect severity, ownership, runbook progress, traffic impact, and acknowledgement timing.
