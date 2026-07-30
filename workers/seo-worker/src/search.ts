/* eslint-disable @typescript-eslint/no-explicit-any */
interface Env {
  DATA_BUCKET: R2Bucket;
}

interface SearchIndex {
  keyword: string;
  results: Array<{
    type: 'product' | 'page' | 'blog' | 'faq';
    title: string;
    url: string;
    snippet: string;
    lang: string;
  }>;
}

export async function search(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || (request.method === 'POST' ? ((await request.json()) as any).keyword : '');
  if (!q || q.length < 2) return json({ keyword: q, results: [] });

  const lang = url.searchParams.get('lang') || 'en';

  try {
    const obj = await env.DATA_BUCKET.get(`search/index.json`);
    if (!obj) return json({ keyword: q, results: [] });

    const index: SearchIndex = await obj.json();
    const kw = q.toLowerCase();
    const results = index.results
      .filter((r) => r.lang === lang && (r.title.toLowerCase().includes(kw) || r.snippet.toLowerCase().includes(kw)))
      .slice(0, 20);

    return json({ keyword: q, results });
  } catch {
    return json({ keyword: q, results: [] });
  }
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
  });
}
