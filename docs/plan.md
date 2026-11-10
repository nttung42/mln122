# THE VALUE SHIFT
# IMPLEMENTATION PLAN & AI AGENT INSTRUCTIONS

**Version:** 1.0  
**Project:** THE VALUE SHIFT  
**Implementation approach:** AI-assisted modular development with Human-in-the-Loop validation  
**Primary objective:** Build a functional, immersive, interactive educational web experience.

---

# PART I — MASTER INSTRUCTIONS FOR AI CODING AGENT

## 1. Your role

You are the Lead Frontend Engineer and Implementation Agent responsible for building THE VALUE SHIFT.

Your responsibilities:

1. Understand the product and its documentation.
2. Break down implementation into independent modules.
3. Implement each module according to approved specifications.
4. Keep architecture, design and business logic consistent.
5. Test every module before marking it complete.
6. Present implementation evidence for human review.
7. Stop at designated Human-in-the-Loop (HITL) checkpoints.
8. Never silently change approved product requirements.

You are not authorized to independently redefine the product, academic content, simulation rules or design direction.

## 2. Source of truth

Read these documents before implementation:

```text
docs/
├── concept.md
├── technical-spec.md
├── ui-ux-define.md
├── content-research.md
├── information-architecture.md
├── implementation-plan-and-agent-instructions.md
│
├── design/
│   └── component-interaction-spec.md
│
├── game/
│   └── game-rules.md
│
└── quality/
    └── acceptance-criteria.md
```

Priority when interpreting requirements:

1. `concept.md`: product purpose and scope.
2. `content-research.md`: academic accuracy and content.
3. `information-architecture.md`: navigation and user flow.
4. `ui-ux-define.md`: visual and UX direction.
5. `technical-spec.md`: architecture and technology.
6. `component-interaction-spec.md`: component behavior.
7. `game-rules.md`: game mechanics and scoring.
8. This document: implementation sequence and execution rules.

If two documents conflict:

- Do not guess.
- Identify the conflicting requirements.
- Explain their impact.
- Propose a resolution.
- Wait for human approval if the conflict changes product behavior or architecture.

## 3. Global engineering rules

### Architecture

- Use the approved technology stack.
- Use TypeScript strict mode.
- Keep UI components separate from business logic.
- Keep game calculations independent from React.
- Use data-driven content instead of hardcoding content into large components.
- Prefer reusable components where reuse is meaningful.
- Avoid overengineering.
- Do not introduce unnecessary backend services.
- Do not introduce authentication or databases into the MVP.

### Code quality

- No unexplained `any`.
- No duplicated business logic.
- No giant page components.
- No placeholder buttons presented as completed features.
- No fake interactions.
- No hardcoded production data without source metadata.
- No random game scoring.
- No console errors or unhandled promise rejections.
- Handle loading, empty and error states.
- Follow accessible HTML and keyboard interaction patterns.

### Visual quality

- Follow the approved design system.
- Use the approved color palette and typography.
- Avoid generic dashboard templates.
- Avoid unnecessary gradients and glassmorphism.
- Avoid decorative animations without a learning purpose.
- Support responsive layouts.
- Support reduced-motion preferences.
- Do not change the overall visual direction without approval.

### Content integrity

- Never invent economic statistics.
- Never invent academic citations.
- Never treat illustrative data as real data.
- Keep source, year, unit and methodology metadata.
- Do not conflate Marxian surplus value with accounting profit or domestic value added.
- Preserve the academic accuracy guardrails in `content-research.md`.

### Animation

- GSAP: scroll-based timelines, pinning and complex sequences.
- Framer Motion: UI transitions, modal animations and micro-interactions.
- CSS: simple transitions and hover/focus effects.
- Never let GSAP and Framer Motion control the same DOM element simultaneously.

---

# PART II — EXECUTION WORKFLOW

## 4. Development lifecycle

Every module must follow this lifecycle:

```text
READ REQUIREMENTS
       ↓
ANALYZE DEPENDENCIES
       ↓
PROPOSE IMPLEMENTATION
       ↓
HUMAN APPROVAL (if required)
       ↓
IMPLEMENT
       ↓
RUN AUTOMATED TESTS
       ↓
SELF-REVIEW
       ↓
PRESENT EVIDENCE
       ↓
HUMAN REVIEW
       ↓
APPROVE / REQUEST CHANGES
       ↓
MOVE TO NEXT MODULE
```

Do not mark a module complete simply because its code has been generated.

## 5. HITL approval levels

| Level | Meaning | Agent behavior |
|---|---|---|
| H0 | Self-check | Agent can proceed independently |
| H1 | Human review | Agent presents evidence; human approves |
| H2 | Human decision required | Agent must stop before implementation or irreversible change |

### H0 — Self-check

Examples:
- Formatting.
- Type checking.
- Unit tests.
- Basic component implementation.
- Internal refactoring without behavior changes.

### H1 — Human review

Examples:
- Visual layout.
- Responsive behavior.
- Interaction quality.
- Content presentation.
- Animation quality.
- Module acceptance.

### H2 — Mandatory approval

Examples:
- Changing product scope.
- Changing core architecture.
- Changing academic claims or research interpretation.
- Changing simulation scoring rules.
- Adding external services or recurring costs.
- Replacing the approved design system.
- Removing or significantly changing a user-facing feature.

## 6. Mandatory module completion report

At the end of every module, produce:

```text
MODULE COMPLETION REPORT

Module:
Status: Complete / Blocked / Needs Review

1. Implemented
- ...

2. Files created or modified
- ...

3. Tests performed
- ...

4. Test results
- ...

5. Known issues
- ...

6. Design / content deviations
- ...

7. Screenshots or demo evidence
- ...

8. Human decisions required
- ...

9. Acceptance checklist
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

10. HITL decision
- [ ] Approved
- [ ] Changes requested
- [ ] Rejected
```

A module can only move to Approved after the required HITL review.

---

# PART III — PROJECT IMPLEMENTATION PLAN

# PHASE 0 — PROJECT AUDIT & FOUNDATION

**Objective:** Establish a stable development environment and understand the existing project before writing feature code.

**Priority:** Critical  
**HITL:** H1 / H2 for architecture changes

### Module 0.1 — Documentation audit

Agent instructions:

1. Read all existing product documents.
2. Extract functional requirements.
3. Extract non-functional requirements.
4. Identify missing specifications.
5. Create a dependency map.
6. Identify conflicting requirements.
7. Do not start building major UI modules until the audit is complete.

Checklist:

- [ ] Read `concept.md`.
- [ ] Read `technical-spec.md`.
- [ ] Read `ui-ux-define.md`.
- [ ] Read `content-research.md`.
- [ ] Read `information-architecture.md`.
- [ ] Identify missing `component-interaction-spec.md`.
- [ ] Identify missing `game-rules.md`.
- [ ] Identify missing `acceptance-criteria.md`.
- [ ] Produce a requirement summary.
- [ ] Produce a list of unresolved decisions.

**HITL-0.1: Documentation approval**

Human checks:

- [ ] Does the Agent understand the product correctly?
- [ ] Are the core features identified?
- [ ] Are there conflicting requirements?
- [ ] Are any critical assumptions being invented?

Approval: __________

### Module 0.2 — Project initialization

Agent instructions:

1. Inspect the existing repository.
2. Reuse the current project if it is already initialized correctly.
3. Initialize Next.js App Router if needed.
4. Configure TypeScript strict mode.
5. Configure Tailwind CSS.
6. Install approved dependencies.
7. Configure ESLint and formatting.
8. Create the initial folder structure.
9. Verify that the application runs.

Checklist:

- [ ] Initialize Next.js.
- [ ] Configure TypeScript.
- [ ] Configure Tailwind.
- [ ] Install shadcn/ui and required dependencies.
- [ ] Install Framer Motion.
- [ ] Install GSAP and ScrollTrigger.
- [ ] Install ECharts.
- [ ] Install MapLibre if needed.
- [ ] Install Zustand.
- [ ] Install Zod.
- [ ] Install Lucide React.
- [ ] Configure linting.
- [ ] Configure formatting.
- [ ] Configure environment variables.
- [ ] Create base folder structure.
- [ ] Verify `npm run dev`.
- [ ] Verify `npm run build`.
- [ ] Verify TypeScript and lint checks.

**HITL-0.2: Foundation approval**

Human checks:

- [ ] Application starts successfully.
- [ ] Build succeeds.
- [ ] Dependencies are appropriate.
- [ ] No unnecessary infrastructure was introduced.
- [ ] Folder structure is understandable.

Approval: __________

---

# PHASE 1 — DESIGN SYSTEM & APPLICATION SHELL

**Objective:** Build the visual foundation and global application structure.

**Dependencies:** Phase 0  
**HITL:** H1

### Module 1.1 — Design tokens

Agent instructions:

Implement the approved design tokens.

Color palette (Clean Editorial Light Mode):

```css
--color-midnight-navy: #F8FAFC;        /* Page background: Crisp Slate Paper */
--color-deep-surface: #FFFFFF;         /* Pure White card / dock */
--color-surface-elevated: #F1F5F9;     /* Elevated container / hover */
--color-electric-blue: #0284C7;        /* Primary: Sapphire Sky */
--color-warm-gold: #D97706;            /* Accent: Warm Amber Gold */
--color-growth-green: #16A34A;         /* Emerald Growth Green */
--color-warning: #DC2626;              /* Crimson Warning Red */
--color-off-white: #0F172A;            /* Primary Text: Deep Slate 900 Ink */
--color-muted-gray: #64748B;           /* Secondary Text: Slate 500 */
--color-border-subtle: #E2E8F0;        /* Crisp Border */
```

Typography:

- Headings: Space Grotesk or Sora.
- Body: Inter.
- Data and numbers: IBM Plex Mono.

Implement:

- [ ] Color tokens.
- [ ] Typography tokens.
- [ ] Spacing scale.
- [ ] Radius scale.
- [ ] Shadow system.
- [ ] Border system.
- [ ] Z-index conventions.
- [ ] Responsive breakpoints.
- [ ] Motion duration and easing tokens.
- [ ] Light/dark behavior if specified by the approved design.

**HITL-1.1: Design system review**

Human checks:

- [ ] Colors match the approved palette.
- [ ] Typography hierarchy feels correct.
- [ ] Text contrast is sufficient.
- [ ] Spacing feels consistent.
- [ ] Components do not look like a generic dashboard.

Approval: __________

### Module 1.2 — Reusable UI components

Implement only reusable components that are actually needed.

- [ ] Button.
- [ ] Icon button.
- [ ] Navigation link.
- [ ] Card.
- [ ] Badge / status label.
- [ ] Tooltip.
- [ ] Modal / dialog.
- [ ] Expandable panel.
- [ ] Progress indicator.
- [ ] Source citation component.
- [ ] Loading state.
- [ ] Empty state.
- [ ] Error state.

Each interactive component must have:
- Default state.
- Hover state.
- Focus state.
- Active state.
- Disabled state where applicable.
- Keyboard behavior.

**HITL-1.2: Component review**

Human checks:

- [ ] Components follow design tokens.
- [ ] Focus states are visible.
- [ ] Buttons and controls work.
- [ ] No component has decorative-only behavior.
- [ ] Components are reusable without unnecessary abstraction.

Approval: __________

### Module 1.3 — Application shell

Implement:

- [ ] Root layout.
- [ ] Global typography.
- [ ] Main navigation.
- [ ] Footer.
- [ ] Page container.
- [ ] Responsive navigation.
- [ ] Section navigator.
- [ ] Global progress indicator.
- [ ] Basic route structure.
- [ ] 404 page.

**HITL-1.3: Application shell review**

Human checks:

- [ ] Navigation is intuitive.
- [ ] Branding is consistent.
- [ ] Mobile navigation works.
- [ ] Routes work.
- [ ] Main layout supports scrollytelling.

Approval: __________

---

# PHASE 2 — LANDING & CINEMATIC HERO

**Objective:** Create the first impression and establish the central economic paradox.

**Dependencies:** Phase 1  
**HITL:** H1 / H2 for narrative changes

### Module 2.1 — Hero experience

Agent instructions:

Build a cinematic hero with:

- Background video.
- Poster fallback.
- Brand identity.
- Main headline.
- Supporting statement.
- Primary CTA.
- Scroll indicator.

Checklist:

- [ ] Hero video is optimized.
- [ ] Video uses muted autoplay.
- [ ] No automatic audio.
- [ ] Poster fallback works.
- [ ] Headline follows approved copy.
- [ ] CTA navigates to exploration.
- [ ] Video controls are accessible.
- [ ] Mobile fallback is optimized.
- [ ] Reduced-motion behavior is supported.

**HITL-2.1: Hero review**

Human checks:

- [ ] Does the first 5–10 seconds create curiosity?
- [ ] Is the central message understandable?
- [ ] Does the video support the narrative?
- [ ] Is the hero visually impressive without being distracting?
- [ ] Is loading performance acceptable?

Approval: __________

### Module 2.2 — Opening narrative

Implement:

- [ ] Opening statement.
- [ ] Core question.
- [ ] Initial interaction/poll.
- [ ] Transition to The Paradox.
- [ ] Opening narration/subtitles if required.

**HITL-2.2: Narrative review**

Human checks:

- [ ] The opening does not overstate economic claims.
- [ ] The question is easy to understand.
- [ ] The transition feels natural.
- [ ] The interaction adds value.

Approval: __________

---

# PHASE 3 — EXPLORATION MODULES

**Objective:** Implement the five learning sections.

**Dependencies:** Phase 1 and Phase 2  
**HITL:** H1 for every module; H2 for academic changes

Each module must be independently testable.

## Module 3.1 — THE PARADOX

Implement:

- [ ] Opening statement.
- [ ] Core question.
- [ ] Supporting visual.
- [ ] Initial poll.
- [ ] Answer selection state.
- [ ] Transition animation.
- [ ] Key takeaway.

Tests:

- [ ] Poll accepts one selection.
- [ ] User can skip.
- [ ] User can change selection.
- [ ] Completion state is saved.
- [ ] Content is responsive.

**HITL-3.1**

- [ ] Narrative is understandable.
- [ ] No unsupported economic claim.
- [ ] Visual matches the message.
- [ ] Interaction works.

Approval: __________

## Module 3.2 — FOLLOW THE PRODUCT

Implement an interactive product journey.

Components:

- [ ] Product visualization.
- [ ] Production stage nodes.
- [ ] Connection lines.
- [ ] Stage detail panel.
- [ ] Capability information.
- [ ] Ownership/control information.
- [ ] Deep Dive panel.
- [ ] Chain summary.

Tests:

- [ ] Every node is selectable.
- [ ] Node selection updates content.
- [ ] Keyboard interaction works.
- [ ] Mobile layout works.
- [ ] Reset works.
- [ ] Content is data-driven.

**HITL-3.2**

- [ ] The product journey is understandable.
- [ ] The visualization is not misleading.
- [ ] The distinction between production location and ownership is clear.
- [ ] Every interaction works.
- [ ] Mobile experience is acceptable.

Approval: __________

## Module 3.3 — DECODE THE VALUE

Implement the theoretical explainer.

Components:

- [ ] Commodity and value explanation.
- [ ] Labor power explanation.
- [ ] Working day visualization.
- [ ] Necessary labor visualization.
- [ ] Surplus labor visualization.
- [ ] Surplus value formula.
- [ ] Simulator controls.
- [ ] Deep Dive content.

Tests:

- [ ] Input validation works.
- [ ] Formula calculations are correct.
- [ ] Output updates immediately.
- [ ] Edge cases are handled.
- [ ] Formula is clearly explained.
- [ ] Illustrative assumptions are labeled.
- [ ] Responsive behavior works.

**HITL-3.3: Mandatory academic review**

- [ ] Definition of labor power is accurate.
- [ ] `c`, `v`, and `m` are explained correctly.
- [ ] `m' = m/v × 100%` is correct.
- [ ] Absolute and relative surplus value are distinguished.
- [ ] Simulator is not presented as a real payroll calculator.
- [ ] No conflation with accounting profit.

Approval: __________

## Module 3.4 — THE GLOBAL SHIFT

Implement:

- [ ] Interactive global map.
- [ ] Country/region selection.
- [ ] Industry filters.
- [ ] Production location layer.
- [ ] Value-added origin layer.
- [ ] Ownership/headquarters layer.
- [ ] Consumer market layer.
- [ ] Sankey diagram.
- [ ] Data source information.
- [ ] Illustrative data labels.

Tests:

- [ ] Map loads successfully.
- [ ] Filters update visualization.
- [ ] Country selection works.
- [ ] Data year and source are visible.
- [ ] Empty states work.
- [ ] Illustrative and actual data are visually distinguishable.
- [ ] Map has a fallback.

**HITL-3.4: Data and visualization review**

- [ ] Geography is correct.
- [ ] Data is not mixed across incompatible years.
- [ ] Sankey values are internally consistent.
- [ ] Ownership is not confused with production location.
- [ ] The visualization does not imply unsupported conclusions.

Approval: __________

## Module 3.5 — VIETNAM'S POSITION

Implement:

- [ ] Vietnam overview.
- [ ] Export performance chart.
- [ ] FDI vs domestic export chart.
- [ ] GVC participation chart.
- [ ] Technology/productivity indicators.
- [ ] Structural challenge section.
- [ ] Opportunity section.
- [ ] Source tooltips.
- [ ] Data methodology panel.
- [ ] Challenge CTA.

Tests:

- [ ] Charts use verified datasets.
- [ ] Each indicator includes a year and unit.
- [ ] Source link works.
- [ ] Chart labels are readable.
- [ ] Responsive layout works.
- [ ] No unsupported data points exist.
- [ ] Data can be updated without rewriting UI components.

**HITL-3.5: Mandatory content and research review**

- [ ] Export statistics match the source.
- [ ] FDI share is interpreted correctly.
- [ ] GVC indicators use the correct definitions.
- [ ] Domestic value added is not confused with surplus value.
- [ ] All charts distinguish actual and illustrative values.
- [ ] Conclusions are supported by evidence.

Approval: __________

---

# PHASE 4 — GAME ENGINE

**Objective:** Build the deterministic Vietnam 2040 simulation independently from the UI.

**Dependencies:** Game Rules & Simulation Specification must be approved.  
**HITL:** H2 before implementation of scoring rules.

### Module 4.1 — Game domain model

Implement:

- [ ] EconomicMetrics type.
- [ ] GameDecision type.
- [ ] GameRound type.
- [ ] ExternalEvent type.
- [ ] GameState type.
- [ ] ResultProfile type.
- [ ] Game configuration.
- [ ] Scenario configuration.

**HITL-4.1**

- [ ] Types reflect the approved game rules.
- [ ] Metrics are clearly defined.
- [ ] No UI-specific logic is inside domain types.

Approval: __________

### Module 4.2 — Scoring engine

Implement:

- [ ] Initial metric values.
- [ ] Decision impacts.
- [ ] Conditional effects.
- [ ] External shocks.
- [ ] Score boundaries.
- [ ] Round progression.
- [ ] Recalculation after changing decisions.
- [ ] Final metric calculation.

Rules:

- Same input must always produce the same output.
- No random scoring.
- No LLM-based scoring.
- No duplicate score accumulation.
- Every impact must have a documented reason.
- All numerical values are illustrative simulation parameters.

Tests:

- [ ] Unit tests for every decision.
- [ ] Unit tests for conditional effects.
- [ ] Unit tests for score bounds.
- [ ] Unit tests for changing previous decisions.
- [ ] Unit tests for external events.
- [ ] Unit tests for deterministic output.
- [ ] Unit tests for edge cases.

**HITL-4.2: Mandatory simulation approval**

- [ ] Are the five metrics meaningful?
- [ ] Are decision impacts logically consistent?
- [ ] Are trade-offs visible?
- [ ] Are short-term and long-term impacts distinguished?
- [ ] Are external shocks reasonable?
- [ ] Are score weights transparent?
- [ ] Are no choices universally optimal without context?

Approval: __________

### Module 4.3 — Result generator

Implement:

- [ ] Archetype classification.
- [ ] Hybrid profiles.
- [ ] Strength identification.
- [ ] Weakness identification.
- [ ] Alternative strategy suggestions.
- [ ] Decision explanations.
- [ ] Academic reflection mapping.

Tests:

- [ ] Same input gives the same archetype.
- [ ] Hybrid profile is possible.
- [ ] Result covers all five metrics.
- [ ] Alternative strategies explain trade-offs.
- [ ] Result does not make unsupported predictions.

**HITL-4.3**

- [ ] Archetypes make sense.
- [ ] Results are not misleading.
- [ ] No strategy is always labeled as the winner.
- [ ] Reflection connects to the learning content.

Approval: __________

---

# PHASE 5 — GAME UI & USER EXPERIENCE

**Objective:** Turn the approved game engine into a playable interactive experience.

**Dependencies:** Phase 4  
**HITL:** H1

### Module 5.1 — Challenge briefing

- [ ] Challenge landing.
- [ ] Scenario introduction.
- [ ] External world events.
- [ ] Rules explanation.
- [ ] Five metric descriptions.
- [ ] Start challenge CTA.

**HITL-5.1**

- [ ] User understands their role.
- [ ] User understands the scenario.
- [ ] User understands that this is a simulation.
- [ ] The interface is not overwhelming.

Approval: __________

### Module 5.2 — Decision rounds

For each round:

- [ ] Scenario presentation.
- [ ] Challenge description.
- [ ] Three decision cards.
- [ ] Trade-off explanation.
- [ ] Decision selection.
- [ ] Immediate feedback.
- [ ] Continue action.
- [ ] Previous round navigation.

Tests:

- [ ] Only one active decision per round.
- [ ] Decision selection updates game state.
- [ ] Previous decisions can be changed.
- [ ] Changing decisions recalculates metrics.
- [ ] State persists after refresh.
- [ ] All options have complete explanations.

**HITL-5.2**

- [ ] Choices are understandable.
- [ ] Trade-offs are balanced in presentation.
- [ ] Feedback does not imply an absolute right answer.
- [ ] Navigation is intuitive.
- [ ] Game is playable on mobile.

Approval: __________

### Module 5.3 — Result dashboard

- [ ] Strategic profile.
- [ ] Five metrics visualization.
- [ ] Decision breakdown.
- [ ] Strengths and weaknesses.
- [ ] Alternative strategies.
- [ ] Academic reflection.
- [ ] Replay.
- [ ] Review decisions.
- [ ] Return to Explore.

**HITL-5.3**

- [ ] All results match engine output.
- [ ] Metrics are understandable.
- [ ] Archetype description is accurate.
- [ ] Simulation disclaimer is visible.
- [ ] Replay works.
- [ ] Result persists after refresh.

Approval: __________

---

# PHASE 6 — EXPERIENCE INTEGRATION

**Objective:** Connect all modules into one coherent experience.

**Dependencies:** Phases 1–5  
**HITL:** H1

### Module 6.1 — Navigation integration

- [ ] Connect Home to Explore.
- [ ] Connect all exploration sections.
- [ ] Connect Explore to Challenge.
- [ ] Connect Challenge to Result.
- [ ] Connect Result back to Explore.
- [ ] Support direct URL access.
- [ ] Support browser back/forward.
- [ ] Support section navigator.

### Module 6.2 — Progress management

- [ ] Save current section.
- [ ] Save completed sections.
- [ ] Save skipped sections.
- [ ] Save current game round.
- [ ] Save selected decisions.
- [ ] Save final result.
- [ ] Resume experience.
- [ ] Restart experience.
- [ ] Handle invalid local storage data.
- [ ] Handle local storage unavailable.

### Module 6.3 — Global transitions

- [ ] Consistent section transitions.
- [ ] Consistent page transitions.
- [ ] Consistent loading behavior.
- [ ] Consistent navigation state.
- [ ] No animation conflicts.
- [ ] No broken scroll positions.
- [ ] Reduced-motion behavior.

**HITL-6: End-to-end experience review**

Human performs the entire journey:

- [ ] Start from Home.
- [ ] Complete The Paradox.
- [ ] Explore a product stage.
- [ ] Use Working Day Simulator.
- [ ] Explore Global Value Chain.
- [ ] Review Vietnam data.
- [ ] Start Vietnam 2040.
- [ ] Complete all three rounds.
- [ ] View result.
- [ ] Refresh and resume.
- [ ] Restart and replay.

Approval: __________

---

# PHASE 7 — QUALITY ASSURANCE & OPTIMIZATION

**Objective:** Make the experience stable, accessible and performant.

**Dependencies:** Phase 6  
**HITL:** H1

### Module 7.1 — Functional testing

- [ ] Test all navigation links.
- [ ] Test all primary CTAs.
- [ ] Test all interactive diagrams.
- [ ] Test all simulator inputs.
- [ ] Test all filters.
- [ ] Test all game decisions.
- [ ] Test result generation.
- [ ] Test progress persistence.
- [ ] Test refresh behavior.
- [ ] Test error and empty states.

### Module 7.2 — Responsive testing

Test at representative widths:

- [ ] 1440px desktop.
- [ ] 1280px laptop.
- [ ] 1024px tablet landscape.
- [ ] 768px tablet portrait.
- [ ] 390px mobile.
- [ ] 360px small mobile.

Check:

- [ ] No horizontal overflow.
- [ ] Text remains readable.
- [ ] Charts remain usable.
- [ ] Map controls work.
- [ ] Game cards fit.
- [ ] Navigation works.
- [ ] No hover-only interactions.

### Module 7.3 — Performance

- [ ] Lazy-load heavy modules.
- [ ] Optimize video.
- [ ] Optimize images.
- [ ] Avoid unnecessary JavaScript.
- [ ] Lazy-load maps where appropriate.
- [ ] Avoid unnecessary re-renders.
- [ ] Avoid layout shifts.
- [ ] Use appropriate font loading.
- [ ] Check bundle size.
- [ ] Test production build.
- [ ] Run Lighthouse on representative routes.

Target:

- Lighthouse Performance >= 90 under representative testing conditions.
- No major accessibility or SEO issues.
- Core interactions remain responsive.

The target is a quality goal, not a guarantee. Document any limitations caused by maps, video, devices or third-party resources.

### Module 7.4 — Accessibility

- [ ] Semantic HTML.
- [ ] Keyboard navigation.
- [ ] Visible focus indicators.
- [ ] Appropriate contrast.
- [ ] Alt text.
- [ ] Captions/transcripts for meaningful video.
- [ ] Accessible dialogs.
- [ ] Accessible form labels.
- [ ] Reduced-motion support.
- [ ] No critical information communicated only by color.

### Module 7.5 — Final academic audit

- [ ] All statistics have sources.
- [ ] All data has year and unit.
- [ ] All illustrative values are labeled.
- [ ] All formulas are checked.
- [ ] All economic concepts are reviewed.
- [ ] All conclusions are evidence-based.
- [ ] No fabricated references.
- [ ] Simulation disclaimer is visible.

**HITL-7: Final quality approval**

Human checks:

- [ ] Complete user journey works.
- [ ] No critical functional defects.
- [ ] No critical academic errors.
- [ ] Responsive experience is acceptable.
- [ ] Performance is acceptable.
- [ ] Visual direction is consistent.
- [ ] Game simulation is understandable.
- [ ] Sources are accessible.

Approval: __________

---

# PHASE 8 — RELEASE & HANDOVER

**Objective:** Prepare a stable MVP release and hand over the project.

### Module 8.1 — Production preparation

- [ ] Production build succeeds.
- [ ] Environment variables documented.
- [ ] No secrets committed.
- [ ] Asset paths verified.
- [ ] Metadata configured.
- [ ] Open Graph configured.
- [ ] Favicon configured.
- [ ] Error handling reviewed.
- [ ] Deployment instructions written.

### Module 8.2 — Handover documentation

- [ ] README.
- [ ] Installation guide.
- [ ] Development guide.
- [ ] Folder structure overview.
- [ ] Data update guide.
- [ ] Game configuration guide.
- [ ] Testing guide.
- [ ] Known limitations.
- [ ] Deployment guide.

### Module 8.3 — Final human approval

- [ ] Final production build reviewed.
- [ ] All P0 features completed.
- [ ] No unresolved critical bugs.
- [ ] No unapproved scope changes.
- [ ] Documentation complete.
- [ ] Deployment approved.

**HITL-8: Release authorization**

Final decision:

- [ ] Approved for MVP release.
- [ ] Approved with known limitations.
- [ ] Rejected — further work required.

Human approval: __________

---

# PART IV — PROJECT EXECUTION CONTROL

# 7. Module status tracking

Use the following status values:

| Status | Meaning |
|---|---|
| NOT_STARTED | Not started |
| IN_PROGRESS | Currently implementing |
| SELF_REVIEW | Agent testing its work |
| WAITING_HITL | Waiting for human approval |
| CHANGES_REQUESTED | Human requested changes |
| BLOCKED | Cannot continue due to dependency |
| APPROVED | Human approved |
| COMPLETED | Accepted and integrated |

A module must not be marked COMPLETED before its HITL requirements are satisfied.

## 8. Master project checklist

### Foundation

- [ ] Phase 0 — Project audit and initialization.
- [ ] Phase 1 — Design system and application shell.

### Core experience

- [ ] Phase 2 — Landing and Hero.
- [ ] Phase 3.1 — The Paradox.
- [ ] Phase 3.2 — Follow the Product.
- [ ] Phase 3.3 — Decode the Value.
- [ ] Phase 3.4 — The Global Shift.
- [ ] Phase 3.5 — Vietnam's Position.

### Strategy simulation

- [ ] Phase 4 — Game Engine.
- [ ] Phase 5 — Game UI.

### Integration and release

- [ ] Phase 6 — Experience Integration.
- [ ] Phase 7 — QA and Optimization.
- [ ] Phase 8 — Release and Handover.

## 9. Parallel execution policy

Modules may be developed in parallel only when their dependencies are stable.

Possible parallel work:

| Workstream A | Workstream B | Condition |
|---|---|---|
| Design system | Research data preparation | Approved tokens and data schema |
| Product Journey | Working Day Simulator | Shared application shell is stable |
| Vietnam charts | Global map | Data contracts are agreed |
| Game engine | Exploration UI | Game rules are approved |
| Game UI | Final exploration polish | Game engine API is stable |

Do not parallelize:

- Multiple agents changing global design tokens.
- Multiple agents changing application routing.
- Multiple agents modifying the same game engine files.
- Content and data schema changes without coordination.
- GSAP and Framer Motion implementations on the same DOM elements.

One agent must act as the integration owner.

## 10. Change management

When human feedback requests a change:

1. Identify affected modules.
2. Identify dependencies.
3. Explain the impact.
4. Update the relevant documentation.
5. Implement the approved change.
6. Rerun affected tests.
7. Request HITL approval again.

Do not patch UI code to hide a deeper architectural or content problem.

## 11. Stop conditions

The Agent must stop and ask for human input when:

- An academic claim is unclear or unsupported.
- A data source is missing or contradictory.
- A game scoring rule is ambiguous.
- A design change alters the product direction.
- A requested feature requires new infrastructure or paid services.
- A dependency cannot be satisfied.
- A major requirement conflicts with an existing document.
- The implementation would significantly expand the approved scope.

For minor implementation details, use reasonable defaults and document the decision.

---

# PART V — FINAL DEFINITION OF DONE

THE VALUE SHIFT MVP is complete only when:

- [ ] All P0 modules are implemented.
- [ ] All P0 module HITL checkpoints are approved.
- [ ] All core user flows work.
- [ ] All major interactions are functional.
- [ ] Game scoring is deterministic.
- [ ] Progress survives refresh.
- [ ] Academic claims are reviewed.
- [ ] Real data is traceable to sources.
- [ ] Illustrative data is labeled.
- [ ] Responsive experience works.
- [ ] Accessibility basics are implemented.
- [ ] Production build succeeds.
- [ ] Documentation is handed over.
- [ ] Human approves the final release.

**FINAL EXECUTION PRINCIPLE**

Build in small, verifiable modules.

Do not optimize for the number of files generated or the speed of code generation.

Optimize for:

**Correctness → Functionality → Consistency → Experience Quality → Performance.**

Every module must be demonstrably working before it is considered complete.