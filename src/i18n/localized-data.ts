import { guides } from '~/data/guides';
import type { GuideRecord } from '~/data/guides';
import { contentV2Records } from '~/data/content-v2';
import type { ContentV2Record } from '~/data/content-v2';
import { guidesFr } from '~/data/guides.fr';
import { contentV2RecordsFr } from '~/data/content-v2.fr';
import { guidesDe } from '~/data/guides.de';
import { contentV2RecordsDe } from '~/data/content-v2.de';

export function getGuidesForLang(lang: string | undefined): GuideRecord[] {
  if (lang === 'fr') {
    return guidesFr;
  }
  if (lang === 'de') {
    return guidesDe;
  }
  return guides;
}

export function getContentV2ForLang(lang: string | undefined): ContentV2Record[] {
  if (lang === 'fr') {
    return contentV2RecordsFr;
  }
  if (lang === 'de') {
    return contentV2RecordsDe;
  }
  return contentV2Records;
}
