# TECHNICAL SPECIFICATION — THE VALUE SHIFT

## 1. Project Overview

Build a frontend-first, interactive digital learning web application.

The application combines:
- Cinematic storytelling.
- Scroll-driven interactive experiences.
- Economic data visualization.
- Interactive global maps.
- A three-round branching economic strategy game.

The application should be modular, maintainable, responsive and optimized for modern browsers.

## 2. Technology Stack

- Framework: Next.js with App Router.
- Language: TypeScript with strict mode.
- Styling: Tailwind CSS.
- UI Components: shadcn/ui + Radix UI.
- Animation: GSAP + Framer Motion.
- Charts: Apache ECharts.
- Maps: MapLibre GL JS.
- State Management: Zustand.
- Validation: Zod.
- Icons: Lucide React.
- Persistence: LocalStorage.

Use stable compatible package versions. Avoid unnecessary dependencies.

## 3. Architecture

Follow a feature-based modular architecture.

Separate:
- Presentation components.
- Feature-specific business logic.
- Domain logic and simulation engine.
- Static datasets and configuration.
- Global application state.

Keep game logic independent from React components.

Do not introduce microservices, unnecessary backend services or complex architectural patterns.

## 4. Data Management

Use structured JSON/TypeScript datasets for:
- Economic concepts.
- Product supply chains.
- Global economic indicators.
- Vietnam economic indicators.
- Game scenarios and decisions.

Every factual economic dataset must include:
- Source.
- Reference year.
- Unit of measurement.
- Contextual notes.

Never invent factual statistics.

Clearly distinguish actual economic data from illustrative simulation values.

## 5. Game Engine

Implement a deterministic simulation engine using pure TypeScript.

Requirements:
- Three sequential decision rounds.
- Three choices per round.
- Conditional scenarios based on previous decisions.
- Five economic performance indicators.
- Configurable decision impacts.
- External world events.
- Dynamic final strategy profile.
- Persistent game progress using LocalStorage.

The scoring engine must be testable independently.

Do not use AI-generated scoring or random results.

## 6. Animation & Interaction

Use GSAP for scroll-driven storytelling and Framer Motion for UI interactions.

Requirements:
- Smooth scroll transitions.
- Interactive SVG visualizations.
- Animated charts and data flows.
- Interactive map exploration.
- Meaningful hover and click feedback.
- Reduced-motion accessibility support.

Avoid unnecessary animation and excessive visual effects.

## 7. Performance & Quality

- Responsive across desktop, tablet and mobile.
- Lazy-load heavy visual modules.
- Optimize image and video assets.
- Avoid unnecessary client-side JavaScript.
- Use semantic HTML and accessible interactions.
- Implement loading, empty and error states.
- Preserve user progress.
- Target Lighthouse Performance score of 90+ under representative testing conditions.

## 8. Testing

- Unit tests for scoring and branching logic.
- Component tests for interactive components.
- E2E tests for the complete user journey.
- Verify game results for representative decision combinations.
- Test responsive layouts and animation fallbacks.

## 9. Development Constraints

- Build incrementally, feature by feature.
- Prioritize working interactions over decorative mockups.
- Never hardcode business logic inside UI components.
- Avoid duplicating state.
- Use reusable components and typed interfaces.
- Do not add a backend unless a real requirement emerges.
- Keep the application easy to modify through Vibecoding.

## 10. Definition of Done

The application is considered functional when:
1. All seven experience sections are navigable.
2. Interactive visualizations work with real or clearly labeled illustrative data.
3. The economic concepts are presented progressively.
4. The three-round game produces deterministic results.
5. Final results accurately reflect the user's decisions.
6. User progress survives page refresh.
7. The website works on desktop and mobile.
8. No primary interaction is merely decorative or non-functional.