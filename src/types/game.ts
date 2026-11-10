export interface EconomicMetrics {
  domesticValueCapture: number; // 0 - 100
  techCapability: number;        // 0 - 100
  employmentIncome: number;      // 0 - 100
  economicAutonomy: number;      // 0 - 100
  sustainability: number;        // 0 - 100
}

export type RoundId = 1 | 2 | 3;

export interface StrategicChoice {
  id: string;
  code: string; // e.g. "1A", "2B"
  title: string;
  subtitle: string;
  description: string;
  tradeoffs: {
    upside: string;
    downside: string;
  };
  impacts: Partial<EconomicMetrics>;
  theoreticalLink: string;
}

export interface GameRound {
  id: RoundId;
  title: string;
  subtitle: string;
  scenario: string;
  macroContext: string;
  choices: StrategicChoice[];
}

export interface SimulationResult {
  archetypeId: string;
  archetypeTitle: string;
  tagline: string;
  summary: string;
  metrics: EconomicMetrics;
  keyStrengths: string[];
  keyVulnerabilities: string[];
  strategicTradeoffsAccepted: string[];
  alternativePolicyRecommendation: string;
  academicReflection: string;
}

export interface GameState {
  currentRound: RoundId;
  selectedChoices: Record<RoundId, string | null>;
  history: {
    round: RoundId;
    choiceId: string;
    timestamp: number;
  }[];
  isCompleted: boolean;
}

