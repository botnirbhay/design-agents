# Terminal Native

## Style Family

**Developer Operations Surface.** Pair this style with Premium Dark, Command Center, and Enterprise Minimal when building technical products, but use Terminal Native when commands, logs, panes, sessions, config, shortcuts, and expert keyboard workflows are the primary UI.

Use Premium Dark instead for a technical marketing launch. Use Command Center for operator telemetry and incident triage. Use Enterprise Minimal for admin tables and policy workflows. Keep copy, retry, loading, and error states explicit inside terminal-inspired tools.

## Client-Grade Demo Target

A generated Terminal Native design must feel like a real developer workflow. Include command input, session rail, stdout/stderr or diff tabs, environment context, config preview, docs/help, shortcuts, copy/retry/cancel actions, exit status, owner, duration, actionable error, and success/warning/failed/pending states.

## Signature Artifact Rule

Add a signature run context packet in generated examples: command, environment, exit status, trace ID, owner, duration, config diff, and fix command must be visible.

## Node Library Rules

Use GSAP sparingly for pane transitions, cursor/output emphasis, and command-state changes. Avoid decorative terminal effects; library motion must reinforce command execution, error state, retry, copy, and fix paths.

Library use must be visible in the generated UI: GSAP should emphasize command execution states, pane transitions, and retry/fix paths, not create fake terminal theatrics.

## Purpose

Terminal Native is a developer-first interface style inspired by terminals, command palettes, logs, CLIs, panes, and technical workflows without fake hacker theatrics.

## When To Use This Style

- Developer tools.
- Deployment and pipeline products.
- Infrastructure consoles.
- CLI companion UIs.
- Data pipeline or observability tools for expert users.

## Visual Identity

Crisp, textual, command-oriented, dense, and authentic. Text, commands, output, logs, environment context, and keyboard shortcuts become the visual system.

## Reference-Level Outcome

A finished example should feel like a real devtool: terminal shell, command palette, pipeline/log output, environment/status panels, config preview, docs/help, shortcuts, and actionable error/success states.

## Information Architecture

- Use top status/action bar.
- Use split panes for sessions, terminal output, and context.
- Keep command input persistent.
- Add lower panels for config preview, docs/help, environments, snippets.
- Show copy, retry, cancel, inspect actions.

## Signature Patterns

- Terminal-inspired shell
- Command palette
- Session rail
- Deployment pipeline output
- Log viewer
- Environment/status panel
- CLI snippets
- Config preview
- Docs/help panel
- Keyboard shortcut hints

## Core Design Principles

- Keyboard interaction is primary.
- Use real commands and structured output.
- Show context: project, branch, env, owner, duration, exit status.
- Make errors actionable.
- Use monospace intentionally.
- Keep motion minimal.
- Do not fake hacking visuals.
- Support copy, retry, cancel, inspect.
- Use panes to separate command, output, and context.
- Keep terminal text readable.

## Layout System

- Use command bars, split panes, output regions, history/session rails, and context panels.
- Keep prompt and active output prominent.
- Use tabs for stdout/stderr/diff or environments.
- Collapse split panes into stacked tabs on mobile.
- Avoid marketing sections inside the tool surface.

## Color & Theme System

- Use dark terminal-inspired palettes with strong contrast.
- Use semantic colors for success, warning, error, info.
- Keep syntax color restrained.
- Use borders and backgrounds to separate panes.
- Avoid neon overload.

## Typography System

- Use monospace for commands, logs, code, IDs, output.
- Use sans only for longer explanatory text if helpful.
- Use stable line height and tabular alignment.
- Keep prompts and labels consistent.
- Avoid tiny terminal text.

## Motion Language

- Use cursor blink, output streaming, and pane transitions sparingly.
- Make loading explicit.
- Respect reduced motion by disabling blink/streaming.
- Avoid fake scan animations.
- Do not stream logs too fast.

## Component System

- Command input needs suggestions/history/focus.
- Terminal output needs stdout/stderr states and wrapping.
- Session rail shows running/failed/success.
- Context panel shows owner, branch, env, exit, duration.
- Config preview shows real keys.
- Docs panel provides actionable help.
- Buttons include copy, retry, cancel, inspect, disabled, success states.

## Product Realism Rules

- Use real project names, environments, branches, deploys, traces, tokens, jobs.
- Show stdout, stderr, exit status, duration, owner.
- Use actionable error messages.
- Represent success, warning, failed, pending, locked states.
- Include CLI snippets and config values that make sense.

## Content Strategy

- Use concise technical labels.
- Avoid fake hacker jargon.
- Make errors explain fix commands.
- Use keyboard hints like Ctrl K.
- Keep docs/help short and contextual.

## Multi-Surface Requirements

- Show terminal shell, command palette/session rail, deployment pipeline/log output, environment context, config preview, docs/help, shortcut hints, and error/success actions.
- Surfaces should support one technical workflow from command to fix.

## Accessibility Rules

- Provide focus for command input, panes, tabs, and controls.
- Maintain contrast for syntax and severity.
- Do not rely only on color for errors.
- Respect reduced motion.
- Keep text zoom usable.
- Use labels for inputs and pane headings.

## Performance Rules

- Virtualize long logs/history.
- Batch streaming output.
- Avoid expensive cursor/scan animations.
- Keep panes lightweight.
- Debounce command suggestions.
- Limit visible log sample in static demos.

## Responsive Rules

- Collapse panes into tabs or stacked output.
- Keep command input persistent.
- Make copy/retry touch-friendly.
- Provide wrap controls for logs.
- Preserve environment context.

## Best Use Cases

- Devtools
- CLI products
- Deployment systems
- Infrastructure consoles
- Data pipelines

## Do Not Do

- Do not use fake hacker visuals.
- Do not make everything neon green.
- Do not hide errors in vague banners.
- Do not rely only on mouse.
- Do not use monospace for long marketing paragraphs.
- Do not animate logs too fast.
- Do not omit copy/retry/cancel.
- Do not make command context ambiguous.
- Do not use tiny unreadable terminal text.
- Do not copy an OS terminal exactly.
- Do not omit environment/owner/status.
- Do not make errors non-actionable.

## Implementation Notes

- Design command objects, output records, and execution states explicitly.
- Build accessible keyboard behavior first.
- Use CSS variables for terminal colors, status, focus, and panes.
- Keep examples self-contained with static log data.
- Use packages only for real terminal emulation/editor needs.
- Validate focus order, wrapping, reduced motion, and mobile panes.

## Demo Alignment Notes

The ForgeCLI demo demonstrates a terminal shell with session rail, stdout/stderr tabs, command prompt, run context, config preview, docs/help, environments, and copy/retry/cancel states.

The client-grade proof band reinforces that generated terminal-native tools must prove environments, exit state, duration, owner, actionable errors, and copy/retry/cancel paths.
