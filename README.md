# Design Agents

This repo is a curated library of high-end UI style agents. Each style folder contains two connected assets:

- `AGENTS.md` is the reusable design playbook. This is the main product: someone can give it to an agent and get work in the same design direction.
- `demo/index.html` is the proof page. It shows what that playbook should produce when the rules are followed well.

The demos are intentionally built as real product surfaces, not generic mood boards

## Quick Start

Install dependencies:

```powershell
$env:https_proxy = $null
$env:http_proxy = $null
npm install --cache .\.npm-cache
```

Run the local static server:

```powershell
npm run dev
```

Open:

```text
http://localhost:4173/
```

Use the local server instead of opening HTML files directly, because several demos import packages from `node_modules`.

Validate the repo:

```powershell
npm run check
```

## Active Styles

| Style | Folder | Libraries | What the demo proves |
| --- | --- | --- | --- |
| AI Copilot | `ai-copilot` | GSAP | Accountable AI assistant workspace with approvals, tool execution, confidence, and traceability. |
| Bento Motion | `bento-motion` | GSAP, Chart.js | Launch-room bento system with real product metrics, motion hierarchy, and executive-ready tiles. |
| Command Center | `command-center` | GSAP, Chart.js | Incident and operations surface with telemetry, runbook state, priority queues, and live-status rhythm. |
| Editorial SaaS | `editorial-saas` | GSAP | Editorial product storytelling with kinetic type moments, proof-led sections, and SaaS credibility. |
| Enterprise Minimal | `enterprise-minimal` | GSAP, Chart.js | Quiet governance/admin workflow with restrained density, auditability, and decision-ready structure. |
| Glass Motion | `glass-motion` | GSAP, Chart.js | Premium translucent analytics surface with readable glass layers and concrete data artifacts. |
| Premium Dark | `premium-dark` | GSAP, Chart.js | Dark technical product launch page with security posture, performance evidence, and controlled contrast. |
| Spatial 3D | `spatial-3d` | GSAP, Three.js | Layered 3D product model with depth, motion, and interactive spatial composition. |
| Spatial Dashboard | `spatial-dashboard` | GSAP, Chart.js | Daily-use dashboard workspace with spatial layout, operational signals, and artifact rows that do not overlap the UI. |
| Terminal Native | `terminal-native` | GSAP | Developer operations surface with command-first layout, logs, diffs, and terminal-native interaction patterns. |

## Style Families

The root `index.html` groups styles into four families:

- Product Storytelling and Launch: `bento-motion`, `editorial-saas`, `premium-dark`, `spatial-3d`
- Operational App Shells: `glass-motion`, `spatial-dashboard`, `command-center`, `enterprise-minimal`
- AI Assistance Workspaces: `ai-copilot`
- Specialized Surface Layers: `terminal-native`

One-card families are compact in the launcher so the page does not leave large empty grid space.

## Repo Structure

```text
.
|-- index.html
|-- package.json
|-- scripts/
|   |-- check-demos.mjs
|   `-- serve.mjs
|-- ai-copilot/
|   |-- AGENTS.md
|   `-- demo/index.html
`-- ...
```

Every active style folder follows the same contract:

```text
style-name/
|-- AGENTS.md
`-- demo/index.html
```

## Authoring Contract

When a style changes, update both the demo and `AGENTS.md`. The demo is the visual evidence; `AGENTS.md` is the reusable instruction set that should recreate similar work.

Each `AGENTS.md` must include:

- `## Style Family`
- `## Client-Grade Demo Target`
- `## Signature Artifact Rule`
- `## Node Library Rules`

Each demo must include:

- A `client-proof` section showing why the design is commercially credible.
- A `signature-artifact` section showing the unique artifact that style should produce.
- GSAP-powered motion.
- A visible package-powered component when the style uses Chart.js or Three.js.

The goal is not to maximize the number of styles. The goal is to keep a small set of distinct, premium, reproducible directions where each one can justify why a client would pay for it.


## Open For Contributions

This repo is open for contributions, improvements, and design refinements. Contributions should keep the library premium, distinct, and reproducible.

Good contributions usually do one of these:

- Improve a demo so it feels more like a real client-ready product.
- Update the matching `AGENTS.md` so the same design direction can be recreated by another agent.
- Improve validation, local tooling, or launcher usability.
- Remove overlap between styles instead of adding another similar style.

Before opening a contribution, run:

```powershell
npm run check
```

A style contribution is incomplete if it updates only the demo or only `AGENTS.md`. The visual proof and the reusable rules should stay in sync.

## Library Rules

- GSAP is the baseline motion library for all demos.
- Chart.js is used for product metrics, operational telemetry, analytics, and dashboard proof.
- Three.js is used only where spatial or 3D product modeling is part of the style.

Do not add a package just to make the repo look more technical. Add it only when the demo and corresponding `AGENTS.md` explain how that library supports the design language.

## Removed Or Merged Styles

The style set was intentionally reduced to avoid overlap:

- `ambient-intelligence` was removed.
- `cinematic-product` was removed.
- `microinteractions` was removed.
- `kinetic-type` was removed as a standalone style, and its useful animation/type guidance was merged into `editorial-saas`.

`glass-motion` remains active as its own style.

## Quality Check

Run this before considering the library ready:

```powershell
npm run check
```

The checker confirms that active style folders have the required `AGENTS.md` sections, required demo markers, package-backed proof, and valid root launcher links.



