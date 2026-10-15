import { guides } from '~/data/guides';
import type { GuideRecord } from '~/data/guides';
import { contentV2Records } from '~/data/content-v2';
import type { ContentV2Record } from '~/data/content-v2';
import { guidesFr } from '~/data/guides.fr';
import { contentV2RecordsFr } from '~/data/content-v2.fr';
import { guidesDe } from '~/data/guides.de';
import { guidesEs } from '~/data/guides.es';
import { guidesIt } from '~/data/guides.it';
import { guidesPt } from '~/data/guides.pt';
import { guidesNl } from '~/data/guides.nl';
import { guidesDa } from '~/data/guides.da';
import { guidesSv } from '~/data/guides.sv';

import { guidesPl } from '~/data/guides.pl';

import { guidesCs } from '~/data/guides.cs';
import { contentV2RecordsDe } from '~/data/content-v2.de';
import { faqs } from '~/data/faq';
import type { FaqRecord } from '~/data/faq';
import { faqsFr } from '~/data/faq.fr';
import { faqsDe } from '~/data/faq.de';
import { faqsEs } from '~/data/faq.es';
import { faqsIt } from '~/data/faq.it';
import { faqsJa } from '~/data/faq.ja';
import { faqsKo } from '~/data/faq.ko';
import { faqsPt } from '~/data/faq.pt';
import { faqsRu } from '~/data/faq.ru';
import { faqsCs } from '~/data/faq.cs';
import { faqsDa } from '~/data/faq.da';
import { faqsNl } from '~/data/faq.nl';
import { faqsNo } from '~/data/faq.no';
import { faqsPl } from '~/data/faq.pl';
import { faqsSv } from '~/data/faq.sv';
import { faqsAr } from '~/data/faq.ar';
import { faqsEl } from '~/data/faq.el';
import { faqsFi } from '~/data/faq.fi';
import { faqsRo } from '~/data/faq.ro';
import { faqsTh } from '~/data/faq.th';
import { faqsTr } from '~/data/faq.tr';

export function getGuidesForLang(lang: string | undefined): GuideRecord[] {
  if (lang === 'fr') {
    return guidesFr;
  }
  if (lang === 'de') {
    return guidesDe;
  }
  if (lang === 'es') {
    return guidesEs;
  }
  if (lang === 'it') {
    return guidesIt;
  }
  if (lang === 'pt') {
    return guidesPt;
  }
  if (lang === 'nl') {
    return guidesNl;
  }
  if (lang === 'da') {
    return guidesDa;
  }
  if (lang === 'sv') {
    return guidesSv;
  }
  if (lang === 'pl') {
    return guidesPl;
  }
  if (lang === 'cs') {
    return guidesCs;
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

const faqsByLang: Record<string, FaqRecord[]> = {
  en: faqs,
  fr: faqsFr,
  de: faqsDe,
  es: faqsEs,
  it: faqsIt,
  ja: faqsJa,
  ko: faqsKo,
  pt: faqsPt,
  ru: faqsRu,
  cs: faqsCs,
  da: faqsDa,
  nl: faqsNl,
  no: faqsNo,
  pl: faqsPl,
  sv: faqsSv,
  ar: faqsAr,
  el: faqsEl,
  fi: faqsFi,
  ro: faqsRo,
  th: faqsTh,
  tr: faqsTr,
};

export function getFaqsForLang(lang: string | undefined): FaqRecord[] {
  return (lang ? faqsByLang[lang] : undefined) ?? faqs;
}
