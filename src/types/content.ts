export interface DataSourceMeta {
  name: string;
  url: string;
  publicationYear?: number;
  datasetVersion?: string;
}

export interface ResearchDataPoint {
  id: string;
  title: string;
  value: number;
  unit: string;
  year: number;
  geography: string;
  indicator: string;
  source: DataSourceMeta;
  methodologyNote?: string;
  interpretation: string;
  status: "verified" | "illustrative" | "pending";
}

export interface SupplyChainStage {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  economicActivity: string;
  keyCapabilities: string[];
  keyActors: string[];
  geographies: string[];
  assetType: "tangible" | "intangible" | "mixed";
  governancePower: "high" | "medium" | "low";
  valueShareEstimated: number; // illustrative %
  description: string;
  deepDive: {
    marxianPerspective: string;
    gvcPerspective: string;
  };
}

export interface WorkingDayModel {
  totalHours: number;
  necessaryHours: number;
  surplusHours: number;
  constantCapitalRatio: number; // c/v
  surplusValueRate: number;     // m/v * 100%
  totalValue: number;           // W = c + v + m
}

