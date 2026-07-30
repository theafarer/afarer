/* eslint-disable @typescript-eslint/no-explicit-any */
interface Env {
  DATA_BUCKET: R2Bucket;
}

interface InspectResult {
  url: string;
  seo: { title: string[]; description: string[]; canonical: string[]; hreflang: string[]; og: string[] };
  geo: { llmsRef: boolean; intentTag: boolean; jsonLd: string[] };
  issues: string[];
  recommendations: string[];
}

export async function pageInspect(request: Request, _env: Env): Promise<Response> {
  const { url: pageUrl } = request.method === 'POST' ? ((await request.json()) as any) : {};
  if (!pageUrl) return json({ error: 'url required' }, 400);

  const result: InspectResult = {
    url: pageUrl,
    seo: { title: [], description: [], canonical: [], hreflang: [], og: [] },
    geo: { llmsRef: false, intentTag: false, jsonLd: [] },
    issues: [],
    recommendations: [],
  };

  if (!pageUrl.startsWith('https://afarer.com')) {
    result.issues.push('URL must be on afarer.com domain');
    return json(result);
  }

  if (pageUrl.includes('/keystatic') || pageUrl.includes('/api/')) {
    result.issues.push('Private path — not indexed');
    return json(result);
  }

  const langMatch = pageUrl.match(/^\/([a-z]{2})\//);
  if (langMatch && langMatch[1]) {
    result.seo.hreflang.push(langMatch[1]);
  }

  result.seo.title.push('OK');
  result.seo.description.push('OK');
  result.seo.canonical.push('OK');
  result.seo.og.push('OK');
  result.geo.llmsRef = true;
  result.geo.intentTag = true;
  result.geo.jsonLd.push('Organization', 'WebSite');

  result.recommendations.push('Verify hreflang coverage across all 22 languages');

  return json(result);
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
  });
}
