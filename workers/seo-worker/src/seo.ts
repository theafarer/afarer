/* eslint-disable @typescript-eslint/no-explicit-any */
interface Env {
  DATA_BUCKET: R2Bucket;
}

export async function seoRouter(request: Request, env: Env, path: string): Promise<Response> {
  switch (path) {
    case '/seo/analyze':
      return handleAnalyze(request, env);
    case '/seo/tasks':
      return handleTasks(request, env);
    case '/seo/report':
      return handleReport(request, env);
    case '/seo/history':
      return handleHistory(request, env);
    default:
      return json({ error: 'SEO endpoint not found' }, 404);
  }
}

async function handleAnalyze(request: Request, _env: Env): Promise<Response> {
  const { url: pageUrl } = request.method === 'POST' ? ((await request.json()) as any) : {};
  if (!pageUrl) return json({ error: 'url required' }, 400);

  return json({
    url: pageUrl,
    analysis: 'basic',
    issues: ['No meta description found', 'Missing FAQ schema'],
    score: 72,
    timestamp: new Date().toISOString(),
  });
}

async function handleTasks(_request: Request, env: Env): Promise<Response> {
  let tasks: any[] = [];

  try {
    const obj = await env.DATA_BUCKET.get('seo/tasks/current.json');
    if (obj) tasks = (await obj.json()) as any[];
  } catch {
    /* no tasks */
  }

  if (tasks.length === 0) {
    tasks = [{ id: 'demo-1', type: 'missing_faq', page: '/en/products/sup-explorer-11', priority: 'high' }];
  }

  return json({ tasks, count: tasks.length });
}

async function handleReport(_request: Request, _env: Env): Promise<Response> {
  void _env;
  return json({
    generated: new Date().toISOString(),
    totalPages: 0,
    avgGeoScore: 0,
    issuesByType: {} as Record<string, number>,
    topTasks: [] as string[],
    summary: 'Report generation — R2 data not yet available',
  });
}

async function handleHistory(_request: Request, env: Env): Promise<Response> {
  let history: any[] = [];

  try {
    const obj = await env.DATA_BUCKET.get('analytics/gsc/history.json');
    if (obj) history = (await obj.json()) as any[];
  } catch {
    /* no history */
  }

  return json({ history, total: history.length });
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
  });
}
