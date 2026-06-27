# AI Copilot

## Style Family

**AI Assistance Workspace.** Pair this style with Spatial Dashboard when the product includes AI inside a broader workspace, but use AI Copilot when the core experience is an explicit agent run: prompt, plan, tool execution, approval, generated output, and audit trail.

Use Spatial Dashboard when the product is a general workspace with AI as one panel rather than the main actor. For quieter contextual AI, use AI Copilot in a suggestion-first mode with fewer tool-call and approval surfaces.

## Client-Grade Demo Target

A generated AI Copilot design must feel like an accountable agent run, not a chat UI. Include a named business workflow, visible plan lifecycle, tool-call cards, approval checkpoints, generated output preview, source panel, memory/trust controls, owners, consequences, and at least one blocked or risky state. The demo proof band shows how to summarize systems touched, approvals required, time saved, and why each artifact matters to a buyer.

## Signature Artifact Rule

Add a signature approval ledger in generated examples: each row should show the affected system, reversibility, approval owner, and evidence source.

## Node Library Rules

Use GSAP for short, inspectable lifecycle choreography: plan steps, tool cards, approval cards, and output previews may enter with subtle staggered motion. Do not use heavy animation libraries for chat text streaming; the product proof is the action ledger and approval model.

Library use must be visible in the generated UI: GSAP should animate the agent lifecycle, approval ledger, or tool execution states so motion demonstrates progress and control.

## Purpose

AI Copilot is an agentic workflow interface style for composing tasks, reviewing plans, monitoring tool execution, approving actions, and inspecting generated outputs with human control.

## When To Use This Style

- AI assistants that act on business systems.
- Workflow automation products with approvals.
- Research, coding, operations, and support copilots.
- Products where chat, sources, previews, and action cards must coexist.

## Visual Identity

Calm, intelligent, structured, and trustworthy. The UI feels less like a chatbot and more like a controlled workspace where user intent becomes a plan, tool steps, previews, approvals, and audited outcomes.

## Reference-Level Outcome

A finished example should feel like a real agent workspace: the user can issue a request, inspect the AI plan, see execution state, approve risky steps, review output, edit or regenerate, and understand sources and memory context.

## Information Architecture

- Use a main composer/task column plus a product workspace for the active plan and output.
- Include context/source panels, memory chips, trust controls, and approval cards.
- Separate intent, plan, execution, output, and final action.
- Keep risky approvals adjacent to affected objects.
- Provide status rails or timelines for multi-step work.

## Signature Patterns

- Agent composer
- Task plan timeline
- Tool execution cards
- Approval checkpoint
- Generated output review
- Context/source panel
- Memory chips
- Trust and control panel
- Undo/retry/cancel actions
- Human-in-the-loop risk states

## Core Design Principles

- Center the user command while making structured execution inspectable.
- Show what the agent is doing in concise state cards.
- Separate recommendations, drafts, queued actions, and completed actions.
- Make human approval explicit before external side effects.
- Expose sources and confidence without noisy internals.
- Design every lifecycle state: idle, planning, running, blocked, failed, waiting, approved, complete.
- Use calm hierarchy to reduce cognitive load.
- Keep generated output editable and reviewable.
- Provide cancel, pause, retry, regenerate, accept, and undo.
- Never imply an action completed before it did.

## Layout System

- Use central composer and output surfaces with secondary panels for context, sources, memory, and trust.
- Place previews near the prompt or plan step that created them.
- Use cards for action states instead of walls of assistant prose.
- On mobile, prioritize composer, active step, and current approval.
- Keep action controls close to affected records.

## Color & Theme System

- Use calm neutrals with one AI accent.
- Reserve semantic colors for approval, risk, warning, danger, and completion.
- Use tinted backgrounds to distinguish user input, AI output, system status, and previews.
- Avoid magical gradients as the main trust signal.
- Make disabled, pending, and blocked states visually distinct.

## Typography System

- Use readable conversational text with strong action labels.
- Keep status copy short: Searching sources, Drafting plan, Waiting for approval.
- Use compact metadata for sources, confidence, timestamps, tools, and owners.
- Use monospace only for code, commands, logs, or structured output.
- Break long outputs into reviewable sections.

## Motion Language

- Use streaming or progressive reveal only where it builds trust.
- Animate plan steps as queued, running, blocked, and complete.
- Use subtle progress pulses and completion settles.
- Avoid constant motion while users review or approve.
- Under reduced motion, show chunked updates and static state changes.

## Component System

- Composer supports text, attachments, commands, and suggestion chips.
- Plan cards show intent, affected objects, owner, risk, and controls.
- Tool cards show service, status, timestamp, and result.
- Approval cards distinguish reversible from irreversible actions.
- Output previews support edit, regenerate, accept, copy, and compare.
- Source panels show provenance and freshness.
- Trust controls include pause, memory, data-source, and audit settings.

## Product Realism Rules

- Use believable tasks, records, users, sources, and systems.
- Show affected objects and downstream consequences.
- Represent approvals with owner, risk level, reversibility, and timestamp.
- Include blocked, failed, retrying, complete, and undo states.
- Use realistic microcopy for drafts, plans, tool calls, and confirmations.
- Do not invent fake certainty when context is incomplete.

## Content Strategy

- Write task-oriented labels such as Draft customer update or Approve send.
- Keep assistant prose concise and actionable.
- Use structured plan steps instead of chain-of-thought text.
- Place provenance near generated output.
- Use CTAs that clarify human control.

## Multi-Surface Requirements

- Show AI composer, plan timeline, tool execution, approval card, output preview, context/source panel, and trust controls.
- Surfaces should represent one connected workflow from prompt to reviewed result.

## Accessibility Rules

- Use semantic regions for composer, conversation, plan, output, and sources.
- Provide visible focus for chips, composer controls, cards, and approvals.
- Announce progress politely without flooding screen readers.
- Maintain contrast for subtle AI state colors.
- Respect reduced motion for typing and progress effects.
- Keep source and risk metadata readable.

## Performance Rules

- Virtualize long conversations and logs.
- Batch streaming updates when token animation would jank.
- Debounce suggestions and command search.
- Lazy-load heavy previews.
- Keep background effects minimal.
- Simplify live indicators on low-powered devices.

## Responsive Rules

- Prioritize composer, active task, and current approval.
- Collapse sources and memory into tabs or drawers.
- Keep previews readable and horizontally safe.
- Use touch-friendly chips and action cards.
- Preserve proximity between output and approval controls.

## Best Use Cases

- AI workflow products
- Internal agent workspaces
- Research and support assistants
- Coding copilots
- Human-in-the-loop automation tools

## Do Not Do

- Do not make a generic chat window.
- Do not hide actions inside prose.
- Do not show vague working states.
- Do not omit approval for risky actions.
- Do not show fake chain-of-thought walls.
- Do not bury sources away from output.
- Do not make streaming text the main proof.
- Do not use low-contrast chips.
- Do not imply autonomous certainty.
- Do not make cancel/retry hard to find.
- Do not mix draft and completed states.
- Do not over-animate while reviewing.

## Implementation Notes

- Model agent lifecycle states explicitly.
- Create components for composer, plan step, tool call, approval, source, preview, and trust panel.
- Represent data as tasks, sources, risks, owners, and actions.
- Keep static demos self-contained with realistic sample data.
- Use packages only for real editor/document preview needs.
- Verify focus, reduced motion, status semantics, and mobile priority order.

## Demo Alignment Notes

The Northstar Copilot demo demonstrates the style with a composer-led workspace, plan and execution surfaces, generated previews, approval controls, context panels, memory chips, and trust-oriented states.

The client-grade proof band reinforces that generated AI workspaces must expose systems touched, approvals required, time-to-outcome, and object-level provenance.
