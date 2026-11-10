# ACCEPTANCE CRITERIA & QUALITY GATES
## THE VALUE SHIFT

**Version:** 1.0  
**Status:** Approved Specification  
**Scope:** MVP Quality Standards, Verification Checklists, Test Gates

---

## 1. Overall Acceptance Principles

1. **Zero Fake Interactions:** Every button, node, slider, filter, and card must perform its real state update or trigger an authentic modal/transition. No non-functional placeholder buttons.
2. **Zero Inaccurate Data:** Factual statistics must trace directly to registered sources (`SRC-01` to `SRC-09`). Simulation scores must be labeled as illustrative pedagogical metrics.
3. **Determinism:** The game engine must pass unit tests proving $f(\text{Decisions}) \equiv \text{Result}$ with zero deviation across runs.
4. **State Persistence:** Any progress through the 7 sections or 3 game rounds must survive page refresh and browser reopening via LocalStorage.
5. **Universal Accessibility & Responsiveness:** Fully operable across viewports (1440px, 1280px, 1024px, 768px, 390px, 360px) with full keyboard tab navigation and visible focus rings.

---

## 2. Phase-by-Phase Quality Gates

### Gate 0: Foundation & Environment (Phase 0)
- `npm.cmd run build` finishes with exit code 0 and zero TypeScript errors (`tsc --noEmit`).
- ESLint passes with zero warnings/errors.
- Tailwind CSS utility classes compile properly with CSS custom property design tokens.

### Gate 1: Design System & Shell (Phase 1)
- Color tokens match the approved palette: Midnight Navy (`#0B1220`), Deep Surface (`#151F30`), Electric Blue (`#398BCE`), Warm Gold (`#E7B85C`), Growth Green (`#42B88A`), Warning (`#E47770`), Muted Gray (`#9BA9BA`), Off White (`#F2F4F7`).
- Typography adheres to: Headings (Space Grotesk), Body (Inter), Monospace/Numbers (IBM Plex Mono).
- Global progress indicator updates synchronously as user scrolls or navigates sections.
- Reduced-motion media query (`prefers-reduced-motion`) disables heavy GSAP/Framer transitions.

### Gate 2: The Paradox & Hero (Phase 2)
- Video loads with `muted autoplay loop playsinline` attributes.
- Poster image loads as fallback on slow networks or when video is blocked.
- Poll interaction accepts a single vote, visually highlights the selection, enables skip, and stores the state without blocking forward navigation.

### Gate 3: Core Exploration Sections (Phase 3)
- **Module 3.2 (Follow the Product):**
  - All 6 supply chain stages (Raw materials, Components, R&D, Assembly, Branding, Distribution) can be clicked or tabbed via keyboard.
  - Selecting a stage updates the center visual layer and right-hand details drawer.
  - Reset and Deep Dive buttons function properly.
- **Module 3.3 (Decode the Value):**
  - Working Day Simulator recalculates $W = c + v + m$ and $m' = (m/v) \times 100\%$ instantaneously on slider change.
  - Input boundary enforcement: Necessary labor $v \ge 1\text{h}$, Working day $\ge v$, $c \ge 0$.
  - Clear visual disclaimer identifying illustrative model assumptions.
- **Module 3.4 (The Global Shift):**
  - Interactive map/diagram renders properly without memory leaks.
  - Country inspection cards open cleanly showing value-added distribution.
- **Module 3.5 (Vietnam's Position):**
  - ECharts render with responsive auto-resizing.
  - Every chart displays clear source links, year, and unit metadata tooltips.

### Gate 4 & 5: Simulation Engine & UI (Phases 4 & 5)
- Automated Vitest/Jest test suite achieves 100% test pass rate for all decision combinations ($3^3 = 27$ branch trajectories).
- Score bounds are strictly clamped within $[0, 100]$.
- Changing a round 1 decision while on round 3 correctly recalculates subsequent rounds and archetype result.
- Replay and review decisions functions restore game state without corrupting historical logs.

### Gate 6 & 7: Experience Integration & Production QA (Phases 6 & 7)
- Lighthouse Performance $\ge 90$ on representative desktop and mobile profiles.
- No horizontal layout overflow at 360px viewport width.
- LocalStorage error handling: Gracefully degrades to memory state if LocalStorage is disabled or in private browsing mode.

