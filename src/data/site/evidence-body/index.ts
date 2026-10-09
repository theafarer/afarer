import { bodyOverrides as esBody } from './es';
import { bodyOverrides as itBody } from './it';
import { bodyOverrides as jaBody } from './ja';
import { bodyOverrides as koBody } from './ko';
import { bodyOverrides as ptBody } from './pt';
import { bodyOverrides as ruBody } from './ru';
import type { EvidenceBodyMap } from './types';

export const EVIDENCE_BODY_OVERRIDES: Record<string, EvidenceBodyMap> = {
  es: esBody,
  it: itBody,
  ja: jaBody,
  ko: koBody,
  pt: ptBody,
  ru: ruBody,
};
export type { EvidenceBodyEntry, EvidenceBodyComparison, EvidenceBodyMetric } from './types';
