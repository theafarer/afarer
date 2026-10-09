export interface EvidenceBodyMetric {
  label: string;
  value: string;
}

export interface EvidenceBodyComparison {
  label: string;
  before: string;
  after: string;
}

export interface EvidenceBodyEntry {
  client: string;
  product: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  outcomeMetrics: EvidenceBodyMetric[];
  beforeAfter?: EvidenceBodyComparison[];
}

export type EvidenceBodyMap = Record<string, EvidenceBodyEntry>;
