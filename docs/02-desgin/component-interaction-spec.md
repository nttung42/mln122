# COMPONENT INTERACTION SPECIFICATION
## THE VALUE SHIFT

**Version:** 1.0  
**Status:** Approved Specification  
**Design System Reference:** `docs/02-desgin/ui-ux-define.md`  

---

## 1. Global Component States & Behaviors

Every interactive element (Buttons, Cards, Sliders, Tabs, Modals) must support 6 discrete interaction states:

1. **Default:** Stable resting appearance adhering to contrast guidelines (minimum 4.5:1 text contrast).
2. **Hover:** Subtle elevation, background tint shift (e.g. `bg-surface-elevated`), or border glow (`border-electric-blue/40`). Cursor: `pointer`.
3. **Focus-Visible:** Prominent focus ring (`ring-2 ring-electric-blue ring-offset-2 ring-offset-midnight-navy`) enabled on keyboard navigation.
4. **Active/Pressed:** Scale down (`scale-[0.98]`) or inward shadow for tactile feedback.
5. **Selected/Active Mode:** Border illuminated with Warm Gold (`#D97706`) or Electric Blue (`#0284C7`) with corresponding badge indicator.
6. **Disabled:** Opacity 50%, `cursor-not-allowed`, no hover or click events triggered.

---

## 2. Core Interactive Widgets

### 2.1. The Working Day & Value Simulator (`<WorkingDaySimulator />`)
- **Location:** Section 03 (Decode the Value)
- **Controls:**
  - Slider 1: Total Working Day Hours ($T \in [6, 14]$, step $0.5$, default $8\text{h}$)
  - Slider 2: Necessary Labor Time ($v \in [2, 6]$, step $0.5$, default $4\text{h}$, constrained $v < T$)
  - Slider 3: Constant Capital / Organic Composition ($c/v \in [1, 8]$, step $0.5$, default $3$)
- **Visual Display:**
  - Stacked bar visualization of Working Day: $[0 \to v]$ (Variable Capital - Necessary Labor) colored Electric Blue; $[v \to T]$ (Surplus Labor $m$) colored Warm Gold.
  - Value summary box: $W = c + v + m$, Surplus Value Rate $m' = (m/v) \times 100\%$.
  - Dynamic explanatory callout updating in real-time based on slider position.

### 2.2. Product Journey Layered Explorer (`<ProductJourneyExplorer />`)
- **Location:** Section 02 (Follow the Product)
- **Components:**
  - Center stage: Interactive exploded view of smartphone stages.
  - 6 Node triggers: Raw Materials, Components, Design & R&D, Assembly, Branding, Global Distribution.
  - Node selection: Clicking or pressing Enter on a node expands the stage detail drawer with:
    - Contributing actors & geographies.
    - Tangible vs. intangible assets required.
    - Power & governance dynamics (who dictates margins).
    - Deep Dive trigger modal button.

### 2.3. Decision Card Component (`<DecisionCard />`)
- **Location:** Section 06 (Vietnam 2040 Decision Rounds)
- **Anatomy:**
  - Option Label (A, B, C) with strategy title.
  - Strategic thesis description (2-3 sentences).
  - Explicit Trade-off Grid:
    - **Upside / Key Gain:** Highlighted with Growth Green indicator icon.
    - **Downside / Sacrifice:** Highlighted with Warning Red indicator icon.
  - Action trigger: Select button / entire card clickable.
  - State: Selected card displays gold border with active checkmark pill.

### 2.4. Radar & Metric Bar Dashboard (`<MetricsDashboard />`)
- **Location:** Section 06 & Section 07 (Vietnam 2040)
- **Displays:**
  - 5 animated metric progress meters $[0 \to 100]$:
    - Domestic Value Capture
    - Technology Capability
    - Employment & Income
    - Economic Autonomy
    - Sustainability
  - Real-time diff animations ($+15$ in green or $-10$ in red) on card selection.

