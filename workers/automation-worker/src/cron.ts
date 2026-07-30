/* eslint-disable @typescript-eslint/no-explicit-any */
interface Env {
  DATA_BUCKET: R2Bucket;
  GSC_CLIENT_ID?: string;
  GSC_CLIENT_SECRET?: string;
  GSC_REFRESH_TOKEN?: string;
}

export async function cron(env: Env): Promise<Response> {
  const results: Record<string, string> = {};
  const startedAt = new Date().toISOString();

  try {
    const { gscFetch } = await import('./gsc-fetch');
    results.gsc = await gscFetch(env).then((r) => (r.ok ? 'ok' : 'fail'));
  } catch {
    results.gsc = 'error';
  }

  try {
    const { ruleEngine } = await import('./rule-engine');
    results.rules = await ruleEngine(env).then((r) => (r.ok ? 'ok' : 'fail'));
  } catch {
    results.rules = 'error';
  }

  try {
    const { geoGenerator } = await import('./geo-generator');
    results.geo = await geoGenerator(env).then((r) => (r.ok ? 'ok' : 'fail'));
  } catch {
    results.geo = 'error';
  }

  const completedAt = new Date().toISOString();

  try {
    const log = await env.DATA_BUCKET.get('automation/log.json');
    const history = log ? ((await log.json()) as any[]) : [];
    history.push({ startedAt, completedAt, results });
    await env.DATA_BUCKET.put('automation/log.json', JSON.stringify(history.slice(-90)));
  } catch {
    /* log write failed */
  }

  return new Response(
    JSON.stringify({
      success: Object.values(results).every((r) => r === 'ok'),
      startedAt,
      completedAt,
      results,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
