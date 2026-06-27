# Enterprise Minimal

## Style Family

**Operational App Shell.** Pair this style with Spatial Dashboard, Command Center, Glass Motion, and Terminal Native when building practical software surfaces, but use Enterprise Minimal when governance, tables, policies, permissions, approvals, and auditability are the product.

Use Spatial Dashboard instead for a broader productivity workspace. Use Command Center for real-time incidents and telemetry. Use Glass Motion for premium analytics with translucent depth. Use Terminal Native for developer command workflows. Keep state behavior polished inside this style with explicit validation, loading, disabled, success, error, confirmation, and undo states.

## Client-Grade Demo Target

A generated Enterprise Minimal design must feel like mature admin software for a high-stakes governance task. Include semantic tables, filters, bulk actions, permission consequences, policy coverage, audit history, pending/approved/suspended states, destructive confirmation copy, and an explicit compliance or review context.

## Signature Artifact Rule

Add a signature permission consequence review in generated examples: role delta, affected users, audit reason, approval state, and confirmation copy must sit near the admin action.

## Node Library Rules

Use Chart.js only for admin coverage, audit volume, access-review progress, or compliance trend charts. Prefer native tables and forms for core workflows; library usage must not obscure semantic table and form structure.

Library use must be visible in the generated UI: include a Chart.js compliance, audit, or access-review chart beside semantic tables/forms, never replacing the table workflow.

## Purpose

Enterprise Minimal is a restrained admin and business-software style for permissions, tables, filters, audit logs, policies, compliance, and approval workflows.

## When To Use This Style

- Enterprise admin consoles.
- B2B SaaS settings and governance.
- Permission and policy management.
- Compliance, procurement, billing, and audit workflows.

## Visual Identity

Clean, scalable, professional, and dense enough for repeat use. Minimal means everything has a job, not that the page is empty.

## Reference-Level Outcome

A finished example should feel like mature enterprise software: persistent admin navigation, filters, table-heavy workflows, permission matrices, audit logs, policy controls, compliance context, and clear approval states.

## Information Architecture

- Use persistent admin navigation.
- Use page header with stable primary actions.
- Use toolbar filters before the main table.
- Use tables as first-class surfaces.
- Add permission matrix, audit trail, policy/compliance details, and approval states.
- Use drawers or detail panes for edits when needed.

## Signature Patterns

- Admin navigation
- Filter toolbar
- Dense data table
- Bulk actions
- Permission matrix
- Audit log
- Policy controls
- Approval states
- Compliance details
- Organization settings

## Core Design Principles

- Prioritize comprehension and trust.
- Keep actions predictable and near affected objects.
- Design for scale and long labels.
- Use tables, forms, and logs as primary UI.
- Make admin risk visible.
- Use restrained polish.
- Support bulk work.
- Show loading/error/empty/success states.
- Keep destructive actions explicit.
- Avoid decorative dashboard filler.

## Layout System

- Use sidebar, header, toolbar, table, and supporting panels.
- Keep spacing dense but breathable.
- Use drawers/detail panes for context-preserving edits.
- Keep primary actions stable.
- On mobile, convert tables into list-detail without hiding critical metadata.

## Color & Theme System

- Use neutral foundations and subtle dividers.
- Reserve strong color for status, risk, and primary action.
- Use consistent severity and permission colors.
- Avoid decorative gradients.
- Maintain disabled-state contrast.

## Typography System

- Use practical scanning sizes.
- Use tabular numbers for IDs/counts/dates.
- Use specific labels.
- Use clear helper and validation text.
- Avoid oversized headings in dense work areas.

## Motion Language

- Use quick subtle transitions for drawers, menus, validation, save states.
- Avoid decorative motion.
- Show progress for imports/exports.
- Keep table updates stable.
- Respect reduced motion.

## Component System

- Tables need sorting, filtering, selection, pagination, row actions.
- Filters need labels and stable values.
- Forms need labels, helper, validation, review states.
- Permission matrices need scopes and consequences.
- Audit logs need actor, action, target, timestamp.
- Modals confirm dangerous actions.
- Toasts report success/failure with next action.

## Product Realism Rules

- Use users, teams, roles, policies, invoices, logs, integrations.
- Show counts, pagination, timestamps, and long names.
- Include pending, approved, suspended, failed, and review states.
- Show compliance context like SOC2 export or audit reason.
- Use professional microcopy.

## Content Strategy

- Use plain business language.
- Explain consequences.
- Use specific role/scope labels.
- Keep success/error messages actionable.
- Avoid cute microcopy.

## Multi-Surface Requirements

- Show admin nav, table workflow, filters, bulk actions, permission matrix, audit logs, policy/compliance detail, approval states, and organization settings.
- Surfaces should support one admin governance task.

## Accessibility Rules

- Use semantic tables and form labels.
- Provide focus for table controls, filters, menus, modals.
- Maintain contrast in rows and disabled states.
- Associate errors with fields.
- Respect reduced motion.
- Keep keyboard bulk actions usable.

## Performance Rules

- Virtualize large tables/logs.
- Debounce filters/search.
- Avoid heavy effects.
- Batch updates.
- Keep initial load focused.
- Use CSS-only polish unless richer behavior is needed.

## Responsive Rules

- Collapse tables into list-detail.
- Keep filters accessible in drawers.
- Preserve primary/destructive action clarity.
- Do not hide critical metadata.
- Use comfortable touch targets.

## Best Use Cases

- Admin consoles
- Permission systems
- Compliance tools
- Procurement
- Billing and audit workflows

## Do Not Do

- Do not create decorative low-density dashboards.
- Do not hide destructive consequences.
- Do not use vague role labels.
- Do not rely on hover-only row actions.
- Do not make empty states whimsical.
- Do not omit loading/error states.
- Do not use color alone.
- Do not make tables horizontally unusable.
- Do not bury audit history.
- Do not add slow decorative motion.
- Do not oversimplify away scale.
- Do not hide bulk actions.

## Implementation Notes

- Start with information architecture and task flow.
- Build table, form, drawer, confirmation, and toast primitives.
- Use tokens for neutral surfaces, borders, focus, status.
- Keep examples self-contained with realistic rows.
- Use packages only for real table scale.
- Validate semantic tables, focus, mobile list-detail, and no demo edits.

## Demo Alignment Notes

The Northbank Admin demo demonstrates admin navigation, organization header, filter toolbar, user table, permission matrix, audit trail, and approval/status states.

The client-grade proof band reinforces that generated enterprise screens must prove scale, role scope, audit depth, and consequence-aware controls.
