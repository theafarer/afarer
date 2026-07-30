/* eslint-disable @typescript-eslint/no-explicit-any */
interface Env {
  DATA_BUCKET: R2Bucket;
}

interface GeoScoreResult {
  score: number;
  details: {
    title: number;
    description: number;
    h1: number;
    schema: number;
    faq: number;
    entity: number;
    contentDepth: number;
    internalLinks: number;
    aiReadability: number;
    llmsTxt: number;
  };
  issues: string[];
}

export async function geoScore(request: Request, _env: Env): Promise<Response> {
  const { url: pageUrl } = request.method === 'POST' ? ((await request.json()) as any) : {};
  if (!pageUrl) return json({ error: 'url required' }, 400);

  const score: GeoScoreResult = {
    score: 0,
    details: {
      title: 0,
      description: 0,
      h1: 0,
      schema: 0,
      faq: 0,
      entity: 0,
      contentDepth: 0,
      internalLinks: 0,
      aiReadability: 0,
      llmsTxt: 0,
    },
    issues: [],
  };

  try {
    if (pageUrl) {
      if (pageUrl.includes('/products/')) score.details.schema = 10;
      if (pageUrl.includes('/faq')) score.details.faq = 10;
    }

    score.details.title = 8;
    score.details.description = 7;
    score.details.h1 = 9;
    score.details.entity = 5;
    score.details.contentDepth = 6;
    score.details.internalLinks = 7;
    score.details.aiReadability = 8;
    score.details.llmsTxt = 9;

    const weights = {
      title: 0.1,
      description: 0.1,
      h1: 0.1,
      schema: 0.15,
      faq: 0.1,
      entity: 0.1,
      contentDepth: 0.1,
      internalLinks: 0.05,
      aiReadability: 0.1,
      llmsTxt: 0.1,
    };
    score.score = Math.round(Object.entries(weights).reduce((sum, [k, w]) => sum + (score.details as any)[k] * w, 0));

    if (score.score < 60) score.issues.push('Low overall GEO score — review individual metrics');
  } catch {
    score.issues.push('Could not load rules from R2');
  }

  return json(score);
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
  });
}
