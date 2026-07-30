import { cron } from './cron';
import { geoGenerator } from './geo-generator';
import { gscFetch } from './gsc-fetch';
import { ruleEngine } from './rule-engine';
import { taskExport } from './task-export';
import { geoScore } from './geo-score';

interface Env {
  DATA_BUCKET: R2Bucket;
  GSC_CLIENT_ID?: string;
  GSC_CLIENT_SECRET?: string;
  GSC_REFRESH_TOKEN?: string;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS')
      return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': '*' } });

    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/api\/automation/, '') || '/';

    try {
      switch (path) {
        case '/run':
          return await cron(env);
        case '/geo-generate':
          return await geoGenerator(env);
        case '/gsc-fetch':
          return await gscFetch(env);
        case '/rules/run':
          return await ruleEngine(env);
        case '/tasks/export':
          return await taskExport(request, env);
        case '/geo/score':
          return await geoScore(env);
        default:
          return json(
            {
              error: 'Not found',
              endpoints: ['/run', '/geo-generate', '/gsc-fetch', '/rules/run', '/tasks/export', '/geo/score'],
            },
            404
          );
      }
    } catch (e) {
      return json({ error: e instanceof Error ? e.message : 'Internal error' }, 500);
    }
  },

  // Cloudflare Cron Trigger (daily 02:00)
  async scheduled(_event: unknown, env: Env, _ctx: unknown): Promise<void> {
    await cron(env);
  },
};
