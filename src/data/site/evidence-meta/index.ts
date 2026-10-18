import type { EvidenceMetaMap } from './types';
import { evidenceMetaAr } from './ar';
import { evidenceMetaCs } from './cs';
import { evidenceMetaDa } from './da';
import { evidenceMetaEl } from './el';
import { evidenceMetaEs } from './es';
import { evidenceMetaFi } from './fi';
import { evidenceMetaIt } from './it';
import { evidenceMetaNl } from './nl';
import { evidenceMetaNo } from './no';
import { evidenceMetaPl } from './pl';
import { evidenceMetaPt } from './pt';
import { evidenceMetaRo } from './ro';
import { evidenceMetaRu } from './ru';
import { evidenceMetaSv } from './sv';
import { evidenceMetaTh } from './th';
import { evidenceMetaTr } from './tr';

export const EVIDENCE_META_OVERRIDES: Record<string, EvidenceMetaMap> = {
  ar: evidenceMetaAr,
  cs: evidenceMetaCs,
  da: evidenceMetaDa,
  el: evidenceMetaEl,
  es: evidenceMetaEs,
  fi: evidenceMetaFi,
  it: evidenceMetaIt,
  nl: evidenceMetaNl,
  no: evidenceMetaNo,
  pl: evidenceMetaPl,
  pt: evidenceMetaPt,
  ro: evidenceMetaRo,
  ru: evidenceMetaRu,
  sv: evidenceMetaSv,
  th: evidenceMetaTh,
  tr: evidenceMetaTr,
};
