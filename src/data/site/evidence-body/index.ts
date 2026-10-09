import { bodyOverrides as csBody } from './cs';
import { bodyOverrides as daBody } from './da';
import { bodyOverrides as esBody } from './es';
import { bodyOverrides as itBody } from './it';
import { bodyOverrides as jaBody } from './ja';
import { bodyOverrides as koBody } from './ko';
import { bodyOverrides as nlBody } from './nl';
import { bodyOverrides as noBody } from './no';
import { bodyOverrides as plBody } from './pl';
import { bodyOverrides as ptBody } from './pt';
import { bodyOverrides as ruBody } from './ru';
import { bodyOverrides as svBody } from './sv';
import type { EvidenceBodyMap } from './types';

export const EVIDENCE_BODY_OVERRIDES: Record<string, EvidenceBodyMap> = {
  cs: csBody,
  da: daBody,
  es: esBody,
  it: itBody,
  ja: jaBody,
  ko: koBody,
  nl: nlBody,
  no: noBody,
  pl: plBody,
  pt: ptBody,
  ru: ruBody,
  sv: svBody,
};
export type { EvidenceBodyEntry, EvidenceBodyComparison, EvidenceBodyMetric } from './types';
