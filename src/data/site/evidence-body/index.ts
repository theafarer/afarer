import { bodyOverrides as arBody } from './ar';
import { bodyOverrides as csBody } from './cs';
import { bodyOverrides as daBody } from './da';
import { bodyOverrides as elBody } from './el';
import { bodyOverrides as esBody } from './es';
import { bodyOverrides as fiBody } from './fi';
import { bodyOverrides as itBody } from './it';
import { bodyOverrides as nlBody } from './nl';
import { bodyOverrides as noBody } from './no';
import { bodyOverrides as plBody } from './pl';
import { bodyOverrides as ptBody } from './pt';
import { bodyOverrides as roBody } from './ro';
import { bodyOverrides as ruBody } from './ru';
import { bodyOverrides as svBody } from './sv';
import { bodyOverrides as thBody } from './th';
import { bodyOverrides as trBody } from './tr';
import { bodyOverrides as hrBody } from './hr';
import { bodyOverrides as huBody } from './hu';
import { bodyOverrides as skBody } from './sk';
import { bodyOverrides as bgBody } from './bg';
import { bodyOverrides as slBody } from './sl';
import { bodyOverrides as srBody } from './sr';
import { bodyOverrides as idBody } from './id';
import { bodyOverrides as heBody } from './he';
import { bodyOverrides as msBody } from './ms';
import { bodyOverrides as ltBody } from './lt';
import { bodyOverrides as lvBody } from './lv';
import { bodyOverrides as etBody } from './et';
import { bodyOverrides as tlBody } from './tl';
import type { EvidenceBodyMap } from './types';

export const EVIDENCE_BODY_OVERRIDES: Record<string, EvidenceBodyMap> = {
  ar: arBody,
  cs: csBody,
  da: daBody,
  el: elBody,
  es: esBody,
  fi: fiBody,
  it: itBody,
  nl: nlBody,
  no: noBody,
  pl: plBody,
  pt: ptBody,
  ro: roBody,
  ru: ruBody,
  sv: svBody,
  th: thBody,
  tr: trBody,
  hr: hrBody,
  hu: huBody,
  sk: skBody,
  bg: bgBody,
  sl: slBody,
  sr: srBody,
  id: idBody,
  he: heBody,
  ms: msBody,
  lt: ltBody,
  lv: lvBody,
  et: etBody,
  tl: tlBody,
};
export type { EvidenceBodyEntry, EvidenceBodyComparison, EvidenceBodyMetric } from './types';
