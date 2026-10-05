const LANGUAGES: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  pt: 'Português',
  ar: 'العربية',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  ru: 'Русский',
  pl: 'Polski',
  nl: 'Nederlands',
  sv: 'Svenska',
  no: 'Norsk',
  el: 'Ελληνικά',
  tr: 'Türkçe',
  fi: 'Suomi',
  cs: 'Čeština',
  da: 'Dansk',
  ro: 'Română',
  th: 'ไทย',
  hr: 'Hrvatski',
  hu: 'Magyar',
  sk: 'Slovenčina',
  bg: 'Български',
  sl: 'Slovenščina',
  sr: 'Српски',
  id: 'Bahasa Indonesia',
  he: 'עברית',
  ms: 'Bahasa Melayu',
  lt: 'Lietuvių',
  lv: 'Latviešu',
  et: 'Eesti',
  tl: 'Tagalog',
};

const DEFAULT_LANG = 'en';

const LOCALE_MAP: Record<string, string> = {
  KR: 'ko',
  JP: 'ja',
  FR: 'fr',
  DE: 'de',
  ES: 'es',
  PT: 'pt',
  BR: 'pt',
  IT: 'it',
  PL: 'pl',
  RU: 'ru',
  SA: 'ar',
  AE: 'ar',
  EG: 'ar',
  NL: 'nl',
  SE: 'sv',
  NO: 'no',
  GR: 'el',
  TR: 'tr',
  FI: 'fi',
  CZ: 'cs',
  DK: 'da',
  RO: 'ro',
  TH: 'th',
  HR: 'hr',
  HU: 'hu',
  SK: 'sk',
  BG: 'bg',
  SI: 'sl',
  RS: 'sr',
  ID: 'id',
  IL: 'he',
  MY: 'ms',
  LT: 'lt',
  LV: 'lv',
  EE: 'et',
  PH: 'tl',
};

const ACCEPT_LANG_MAP: Record<string, string> = {
  ko: 'ko',
  ja: 'ja',
  fr: 'fr',
  de: 'de',
  es: 'es',
  pt: 'pt',
  it: 'it',
  pl: 'pl',
  ru: 'ru',
  ar: 'ar',
  nl: 'nl',
  sv: 'sv',
  no: 'no',
  el: 'el',
  tr: 'tr',
  fi: 'fi',
  cs: 'cs',
  da: 'da',
  ro: 'ro',
  th: 'th',
  hr: 'hr',
  hu: 'hu',
  sk: 'sk',
  bg: 'bg',
  sl: 'sl',
  sr: 'sr',
  id: 'id',
  he: 'he',
  ms: 'ms',
  lt: 'lt',
  lv: 'lv',
  et: 'et',
  tl: 'tl',
};

const ASSETS_BASE = 'https://assets.afarer.com';
const I18N_EXCLUDED = [
  '/api',
  '/keystatic',
  '/admin',
  '/login',
  '/internal',
  '/images',
  '/assets',
  '/favicon',
  '/llms',
  '/solutions-diving-center-boats',
  '/solutions-fishing-boat-solutions',
  '/solutions-marine-tourism-equipment',
  '/solutions-rescue-watercraft',
  '/solutions-yacht-tender-solutions',
  '/adventure-sup',
  '/all-around-sup',
  '/beginner-sup',
  '/fishing-sup',
  '/inflatable-sup',
  '/kids-sup',
  '/lightweight-sup',
  '/performance-sup',
  '/private-label-sup',
  '/sup-accessories',
  '/sup-manufacturer',
  '/touring-sup',
  '/travel-sup',
  '/ultra-stable-sup',
  '/whitewater-sup',
  '/yoga-sup',
  '/odm-sup-board',
  '/oem-sup-board',
  // root-only pages with no /en/ equivalent: without exclusion the EN rewrite
  // below turns them into live 404s (dist root asset exists but is never served)
  '/ai-context',
  '/about/afarer-brand',
  '/bundles',
  '/compare/pvc-vs-hypalon',
  '/guides/kayak-techniques',
  '/resources/download-catalog',
  '/solutions/diving-center-boats',
  '/solutions/fishing-boat-solutions',
  '/solutions/marine-tourism-equipment',
  '/solutions/oem-brands',
  '/solutions/rescue-watercraft',
  '/solutions/yacht-tender-solutions',
  '/research/board-hull-design',
  '/research/eva-foam-technology',
  '/research/fin-systems-guide',
  '/research/fusion-lamination-vs-glue',
  '/research/military-grade-pvc-specs',
  '/research/quality-testing-standards',
  '/research/sup-manufacturing-process',
  '/research/sup-paddle-technology',
  '/research/sup-valve-types',
  '/research/uv-printing-vs-eva-block',
];
const ASSET_PREFIXES = ['/images', '/files'];

function hasExtension(url: string): boolean {
  return /\.[a-z0-9]+(\?.*)?$/i.test(url);
}

function shouldSkipI18n(url: string): boolean {
  if (hasExtension(url)) return true;
  return I18N_EXCLUDED.some((p) => url === p || url.startsWith(p + '/'));
}

function shouldRedirectToR2(url: string): boolean {
  return ASSET_PREFIXES.some((p) => url === p || url.startsWith(p + '/'));
}

function detectLocale(request: Request): string {
  const cookie = request.headers.get('cookie') || '';
  const cookieMatch = cookie.match(/(?:^|;\s*)x-user-locale=([a-z]{2})(?:;|$)/);
  if (cookieMatch && LANGUAGES[cookieMatch[1]]) return cookieMatch[1];

  const country = request.headers.get('cf-ipcountry');
  if (country && LOCALE_MAP[country]) return LOCALE_MAP[country];

  const acceptLang = request.headers.get('accept-language');
  if (acceptLang) {
    const tags = acceptLang.split(',').map((t) => {
      const parts = t.trim().split(';q=');
      return { lang: parts[0].split('-')[0], q: parseFloat(parts[1]) || 1 };
    });
    tags.sort((a, b) => b.q - a.q);
    for (const t of tags) {
      if (ACCEPT_LANG_MAP[t.lang]) return ACCEPT_LANG_MAP[t.lang];
    }
  }

  return DEFAULT_LANG;
}

function setSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export const onRequest: (...args: any[]) => any = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (shouldRedirectToR2(pathname)) {
    return setSecurityHeaders(Response.redirect(ASSETS_BASE + pathname, 301));
  }

  if (shouldSkipI18n(pathname)) {
    return setSecurityHeaders(await next());
  }

  const pathLang = pathname.split('/')[1]?.split('?')[0] || '';
  const hasLangPrefix = pathLang in LANGUAGES;

  if (hasLangPrefix && pathLang === DEFAULT_LANG) {
    if (pathname === `/${DEFAULT_LANG}` || pathname === `/${DEFAULT_LANG}/`) {
      return setSecurityHeaders(Response.redirect(url.origin + '/' + url.search, 308));
    }
  }

  if (!hasLangPrefix) {
    const detected = detectLocale(request);
    if (detected !== DEFAULT_LANG) {
      const dest = pathname === '/' || pathname === '' ? `/${detected}/` : `/${detected}${pathname}`;
      return setSecurityHeaders(Response.redirect(url.origin + dest + url.search, 302));
    }
    // Rewrite to default language prefix so static files at /en/... are served
    const rewriteDest = pathname === '/' || pathname === '' ? `/${DEFAULT_LANG}/` : `/${DEFAULT_LANG}${pathname}`;
    const rewriteUrl = new URL(rewriteDest, url.origin);
    return setSecurityHeaders(await next(rewriteUrl.toString()));
  }

  return setSecurityHeaders(await next());
};
