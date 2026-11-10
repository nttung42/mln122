import { calculateMetrics, generateSimulationResult } from "./engine";
import { RoundId } from "@/types/game";

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(`Assertion Failed: ${message}`);
  }
}

console.log("=== Testing Game Engine Determinism & Integrity ===");

// Test 1: Determinism (Same input gives same output)
const choicesA: Record<RoundId, string | null> = {
  1: "TECH_FIRST",
  2: "HUMAN_CAPITAL",
  3: "OWN_TECHNOLOGY",
};

const res1 = generateSimulationResult(choicesA);
const res2 = generateSimulationResult(choicesA);

assert(
  JSON.stringify(res1) === JSON.stringify(res2),
  "Game engine must be 100% deterministic"
);
console.log("✓ Test 1 Passed: Output is 100% deterministic across multiple runs");

// Test 2: Synergy Modifier Applied (TECH_FIRST + HUMAN_CAPITAL)
assert(
  res1.metrics.techCapability >= 75,
  "Tech capability should be >= 75 with tech synergy"
);
assert(
  res1.archetypeId === "TECH_SOVEREIGN",
  "Result should be classified as TECH_SOVEREIGN archetype"
);
console.log("✓ Test 2 Passed: Tech-Human Capital synergy modifier correctly triggered");

// Test 3: Metric Clamping [0, 100]
const choicesExtreme: Record<RoundId, string | null> = {
  1: "COST_ADVANTAGE", // even if bad code is passed
  2: "COST_ADVANTAGE",
  3: "SCALE_MANUFACTURING",
};
const resExtreme = calculateMetrics(choicesExtreme);
for (const [key, val] of Object.entries(resExtreme)) {
  assert(val >= 0 && val <= 100, `Metric ${key} (${val}) must be within [0, 100]`);
}
console.log("✓ Test 3 Passed: All metrics strictly clamped within [0, 100]");

// Test 4: Backtracking Recalculation
const initialChoices: Record<RoundId, string | null> = {
  1: "FDI_FIRST",
  2: "COST_ADVANTAGE",
  3: "SCALE_MANUFACTURING",
};
const initialMetrics = calculateMetrics(initialChoices);

// Change Round 1 to TECH_FIRST
const updatedChoices: Record<RoundId, string | null> = {
  ...initialChoices,
  1: "TECH_FIRST",
};
const updatedMetrics = calculateMetrics(updatedChoices);

assert(
  updatedMetrics.techCapability > initialMetrics.techCapability,
  "Updating round 1 choice must immediately recalculate downstream metrics"
);
console.log("✓ Test 4 Passed: Backtracking and changing prior rounds successfully recalculates metrics");

console.log("=== All 4 Engine Verification Tests Passed Successfully! ===");

