# GAME RULES & SIMULATION SPECIFICATION
## VIETNAM 2040: THE STRATEGIC LEADERSHIP CHALLENGE

**Version:** 1.0  
**Status:** Approved Specification  
**Architecture:** Pure TypeScript, Deterministic, React-Independent  
**Engine Location:** `src/lib/game/`

---

## 1. Simulation Philosophy & Guardrails

1. **Deterministic Core:** Given the identical sequence of decisions, the simulation MUST always produce the identical quantitative scores and qualitative verdict. Random number generation (`Math.random`) and AI/LLM-generated scoring are strictly prohibited.
2. **Explicit Pedagogical Trade-offs:** There is NO "perfect" or universally dominant strategy. Every strategic choice yields positive advancements in certain dimensions while creating deliberate trade-offs, vulnerabilities, or transition costs in others.
3. **Illustrative Simulation Disclaimer:** All numerical metrics and coefficients are illustrative pedagogical parameters designed to model structural trade-offs in Marxist political economy and Global Value Chain (GVC) dynamics. They do not constitute econometric forecasts of Vietnam's GDP or actual 2040 macro statistics.
4. **Independent Domain Engine:** All game state management, round progression, impact aggregation, and result generation logic must remain in pure TypeScript modules (`src/lib/game/`) without any dependency on React components or browser DOM.

---

## 2. Core Economic Metrics (State Vector)

The simulation tracks five normalized core performance indicators ($S_i \in [0, 100]$):

| Metric ID | Indicator Name | Economic Meaning | Baseline (2025/2026) |
|---|---|---|:---:|
| `domesticValueCapture` | **Domestic Value Capture (DVC)** | Proportion of product value, surplus value ($m$), and supply chain margin retained domestically within Vietnamese enterprises vs. transferred overseas to multinational headquarters. | 35 |
| `techCapability` | **Technological Capability (TC)** | Level of domestic R&D, IP ownership, complex labor skills ($v_{\text{complex}}$), and sovereign industrial know-how. | 30 |
| `employmentIncome` | **Employment & Worker Welfare (EW)** | Aggregate quality of employment, living wage levels ($v$), worker protections, and resilience against technological displacement. | 60 |
| `economicAutonomy` | **Economic Autonomy & Resilience (AR)** | Diversification and independence from foreign capital flight, trade shocks, and geopolitical supply chain bottlenecks. | 40 |
| `sustainability` | **Environmental & Systemic Sustainability (SUS)** | Clean energy transition, ESG compliance, resource efficiency, and long-term fiscal/ecological viability. | 50 |

---

## 3. Decision Matrix (3 Rounds $\times$ 3 Options)

### Round 1: Growth Model Driver
*Context: Global supply chain restructuring and shifting trade corridors.*

- **Choice 1A: FDI-Led Expansion (`FDI_FIRST`)**
  - *Strategy:* Aggressive tax incentives, land clearance, and streamlined regulations to maximize foreign direct investment inflows.
  - *Impacts:*
    - `domesticValueCapture`: $+5$ (low domestic linkages, profits repatriated)
    - `techCapability`: $+10$ (spillover from assembly equipment)
    - `employmentIncome`: $+15$ (mass assembly jobs created)
    - `economicAutonomy`: $-15$ (vulnerable to external investor flight)
    - `sustainability`: $-5$ (resource pressure)
  - *Pedagogical Rationale:* High job creation and rapid GDP volume, but retains predominantly variable capital ($v$) with high capital flight risk.

- **Choice 1B: Domestic Linkage & Ecosystem (`DOMESTIC_LINKAGE`)**
  - *Strategy:* Mandatory local sourcing incentives, Tier-2/Tier-3 supplier incubation programs, and joint-venture frameworks.
  - *Impacts:*
    - `domesticValueCapture`: $+20$ (higher domestic value-added)
    - `techCapability`: $+15$ (technology transfer to local vendors)
    - `employmentIncome`: $+10$ (stable skilled manufacturing jobs)
    - `economicAutonomy`: $+15$ (rooted domestic supply ecosystem)
    - `sustainability`: $+5$ (localized supply chains, lower logistics footprint)
  - *Pedagogical Rationale:* Balanced structural transition; fosters domestic enterprise accumulation.

- **Choice 1C: Sovereign Tech & R&D Leapfrog (`TECH_FIRST`)**
  - *Strategy:* Heavy state capital allocation into national R&D labs, semiconductor pilot lines, and domestic deep-tech venture funding.
  - *Impacts:*
    - `domesticValueCapture`: $+15$ (IP creation potential)
    - `techCapability`: $+25$ (rapid rise in domestic patenting and engineering)
    - `employmentIncome`: $-5$ (capital-intensive; short-term displacement/high retraining barrier)
    - `economicAutonomy`: $+20$ (strategic technological self-reliance)
    - `sustainability`: $0$ (high energy demand of computing/clean rooms)
  - *Pedagogical Rationale:* Accelerates transition to complex labor, but incurs heavy upfront capital risks.

---

### Round 2: Labor & Productivity Transformation
*Context: Rapid acceleration of generative AI, automated robotics, and rising regional wage competition.*

- **Choice 2A: Preserve Cost Competitiveness (`COST_ADVANTAGE`)**
  - *Strategy:* Flexible labor standards, controlled wage growth, and expanding labor-intensive manufacturing zones.
  - *Impacts:*
    - `domesticValueCapture`: $-5$ (low-margin assembly trap)
    - `techCapability`: $-10$ (disincentive for firms to automate or upgrade)
    - `employmentIncome`: $-10$ (wage stagnation relative to inflation)
    - `economicAutonomy`: $-10$ (high vulnerability to lower-cost nations like Bangladesh/India)
    - `sustainability`: $-10$ (prolonged resource/labor extraction)
  - *Pedagogical Rationale:* Secures immediate baseline employment, but locks economy into bottom of the Smile Curve.

- **Choice 2B: Human Capital & Complex Labor Investment (`HUMAN_CAPITAL`)**
  - *Strategy:* National retraining initiative, STEM scholarship endowment, engineering universities, and digital upskilling.
  - *Impacts:*
    - `domesticValueCapture`: $+15$ (higher skilled labor contribution to value)
    - `techCapability`: $+20$ (workforce can absorb advanced tech)
    - `employmentIncome`: $+20$ (rising real wages for skilled labor)
    - `economicAutonomy`: $+10$ (versatile, highly adaptable labor force)
    - `sustainability`: $+10$ (improved operational efficiency and knowledge economy)
  - *Pedagogical Rationale:* Directly upgrades Marx's "commodity of labor-power" from simple to complex labor, boosting domestic value creation capacity.

- **Choice 2C: Accelerated Automation & Smart Factories (`AUTOMATION_FIRST`)**
  - *Strategy:* Generous subsidies for industrial robotics, AI-driven logistics, and automated semiconductor testing facilities.
  - *Impacts:*
    - `domesticValueCapture`: $+10$ (lower unit production waste)
    - `techCapability`: $+20$ (modern capital infrastructure $c$)
    - `employmentIncome`: $-15$ (technological unemployment / structural displacement)
    - `economicAutonomy`: $+5$ (high output resilience against demographic aging)
    - `sustainability`: $+5$ (energy-optimized automation)
  - *Pedagogical Rationale:* Drives up organic composition of capital ($c/v$); creates surge in surplus value but threatens severe relative surplus population without safety nets.

---

### Round 3: Global Value Capture Strategy
*Context: Defining Vietnam's role in the global division of labor and international trade.*

- **Choice 3A: Global Mega-Factory Scaling (`SCALE_MANUFACTURING`)**
  - *Strategy:* Expand world-scale industrial parks, port logistics, and contract manufacturing volume for global tier-1 brands.
  - *Impacts:*
    - `domesticValueCapture`: $+5$ (large aggregate volume, thin per-unit margin)
    - `techCapability`: $+5$ (process optimization know-how)
    - `employmentIncome`: $+10$ (broad employment base)
    - `economicAutonomy`: $-10$ (heavily dependent on global consumer demand cycles)
    - `sustainability`: $-15$ (heavy carbon, water, and industrial waste footprint)
  - *Pedagogical Rationale:* Dominates manufacturing volume, but remains dependent on foreign brand owners for high-margin capture.

- **Choice 3B: Core Technology & IP Ownership (`OWN_TECHNOLOGY`)**
  - *Strategy:* Focus on domestic fabless chip design, specialized AI software, proprietary component patents, and licensing.
  - *Impacts:*
    - `domesticValueCapture`: $+25$ (captures high upstream surplus value $m$)
    - `techCapability`: $+25$ (sovereign design and patent portfolio)
    - `employmentIncome`: $+5$ (high salaries for engineers, narrower workforce distribution)
    - `economicAutonomy`: $+25$ (control over intellectual property and upstream supply)
    - `sustainability`: $+10$ (high-value, asset-light knowledge products)
  - *Pedagogical Rationale:* Positions Vietnam at the upstream peak of the Smile Curve.

- **Choice 3C: National Brands & Global Channels (`BUILD_BRANDS`)**
  - *Strategy:* Build Vietnamese consumer brand champions, global marketing channels, direct-to-consumer e-commerce, and retail footprints.
  - *Impacts:*
    - `domesticValueCapture`: $+20$ (captures downstream commercial margin)
    - `techCapability`: $+10$ (design, UX, and software integration)
    - `employmentIncome`: $+15$ (broad commercial, creative, and managerial careers)
    - `economicAutonomy`: $+15$ (direct customer ownership independent of third-party OEMs)
    - `sustainability`: $+5$ (brand equity values ESG compliance)
  - *Pedagogical Rationale:* Positions Vietnam at the downstream peak of the Smile Curve.

---

## 4. Conditional Synergy & Friction Modifiers

When specific combinations of choices are made across rounds, cross-round synergy or penalty modifiers apply:

1. **The Technology-Human Capital Synergy:**
   - *Condition:* If `TECH_FIRST` (Round 1) + `HUMAN_CAPITAL` (Round 2)
   - *Bonus:* `techCapability` $+10$, `domesticValueCapture` $+10$
   - *Rationale:* Hardware investments match an educated workforce capable of operating and inventing with it.

2. **The Automation-Labor Clash Friction:**
   - *Condition:* If `FDI_FIRST` (Round 1) + `AUTOMATION_FIRST` (Round 2)
   - *Penalty:* `employmentIncome` $-10$, `economicAutonomy` $-10$
   - *Rationale:* Foreign firms automate their Vietnamese subsidiaries, repatriating capital while shedding local jobs without domestic safety nets.

3. **The Upstream-Downstream Power Synergy:**
   - *Condition:* If `DOMESTIC_LINKAGE` (Round 1) + `OWN_TECHNOLOGY` or `BUILD_BRANDS` (Round 3)
   - *Bonus:* `domesticValueCapture` $+10$, `economicAutonomy` $+10$
   - *Rationale:* Strong local industrial base provides the foundation for sovereign tech and brands.

---

## 5. Result Archetypes & Classification Logic

Every playthrough concludes with a detailed strategic assessment based on final metric distribution:

| Archetype ID | Title | Primary Driver / Profile |
|---|---|---|
| `TECH_UPGRADER` | **The Technology Sovereign** | High `techCapability` ($\ge 75$) and High `domesticValueCapture` ($\ge 65$). |
| `SUSTAINABLE_INNOVATOR` | **The Balanced Modernizer** | Balanced scores across all 5 metrics with `sustainability` $\ge 65$ and `humanCapital` focus. |
| `DOMESTIC_CHAMPION` | **The National Ecosystem Builder** | High `economicAutonomy` ($\ge 70$) and High `domesticValueCapture` ($\ge 65$). |
| `GLOBAL_FACTORY` | **The Global Assembly Hub** | High `employmentIncome` ($\ge 70$) but Low `domesticValueCapture` ($< 50$) and Low `techCapability` ($< 45$). |
| `VULNERABLE_PRODUCER` | **The Fragile Processor** | Low `economicAutonomy` ($< 40$) and High external dependence. |

---

## 6. Deterministic Result Interface

```typescript
export interface EconomicMetrics {
  domesticValueCapture: number; // 0 - 100
  techCapability: number;        // 0 - 100
  employmentIncome: number;      // 0 - 100
  economicAutonomy: number;      // 0 - 100
  sustainability: number;        // 0 - 100
}

export interface SimulationResult {
  archetypeId: string;
  archetypeTitle: string;
  summary: string;
  metrics: EconomicMetrics;
  keyStrengths: string[];
  keyVulnerabilities: string[];
  strategicTradeoffsAccepted: string[];
  alternativePolicyRecommendation: string;
  academicReflection: string;
}
```

