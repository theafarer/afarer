import { bodyOverrides as arBody } from './ar';
import { bodyOverrides as csBody } from './cs';
import { bodyOverrides as daBody } from './da';
import { bodyOverrides as elBody } from './el';
import { bodyOverrides as esBody } from './es';
import { bodyOverrides as fiBody } from './fi';
import { bodyOverrides as itBody } from './it';
import { bodyOverrides as jaBody } from './ja';
import { bodyOverrides as koBody } from './ko';
import { bodyOverrides as nlBody } from './nl';
import { bodyOverrides as noBody } from './no';
import { bodyOverrides as plBody } from './pl';
import { bodyOverrides as ptBody } from './pt';
import { bodyOverrides as roBody } from './ro';
import { bodyOverrides as ruBody } from './ru';
import { bodyOverrides as svBody } from './sv';
import { bodyOverrides as thBody } from './th';
import { bodyOverrides as trBody } from './tr';
import type { EvidenceBodyMap } from './types';

export const EVIDENCE_BODY_OVERRIDES: Record<string, EvidenceBodyMap> = {
  ar: arBody,
  cs: csBody,
  da: daBody,
  el: elBody,
  es: esBody,
  fi: fiBody,
  it: itBody,
  ja: jaBody,
  ko: koBody,
  nl: nlBody,
  no: noBody,
  pl: plBody,
  pt: ptBody,
  ro: roBody,
  ru: ruBody,
  sv: svBody,
  th: thBody,
  tr: trBody,
};
export type { EvidenceBodyEntry, EvidenceBodyComparison, EvidenceBodyMetric } from './types';
