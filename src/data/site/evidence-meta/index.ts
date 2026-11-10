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
import { evidenceMetaHr } from './hr';
import { evidenceMetaHu } from './hu';
import { evidenceMetaSk } from './sk';
import { evidenceMetaBg } from './bg';
import { evidenceMetaSl } from './sl';
import { evidenceMetaSr } from './sr';
import { evidenceMetaId } from './id';
import { evidenceMetaHe } from './he';
import { evidenceMetaMs } from './ms';
import { evidenceMetaLt } from './lt';
import { evidenceMetaLv } from './lv';
import { evidenceMetaEt } from './et';
import { evidenceMetaTl } from './tl';

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
  hr: evidenceMetaHr,
  hu: evidenceMetaHu,
  sk: evidenceMetaSk,
  bg: evidenceMetaBg,
  sl: evidenceMetaSl,
  sr: evidenceMetaSr,
  id: evidenceMetaId,
  he: evidenceMetaHe,
  ms: evidenceMetaMs,
  lt: evidenceMetaLt,
  lv: evidenceMetaLv,
  et: evidenceMetaEt,
  tl: evidenceMetaTl,
};
