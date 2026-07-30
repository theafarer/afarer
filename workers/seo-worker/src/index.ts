import { search } from './search';
import { geoScore } from './geo-score';
import { pageInspect } from './page-inspect';
import { seoRouter } from './seo';

interface Env {
  DATA_BUCKET: R2Bucket;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS')
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });

    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/api/, '') || '/';

    try {
      switch (path) {
        case '/search':
          return await search(request, env);
        case '/geo-score':
          return await geoScore(request, env);
        case '/page-inspect':
          return await pageInspect(request, env);
        default:
          if (path.startsWith('/seo/')) return await seoRouter(request, env, path);
          return json({ error: 'Not found' }, 404);
      }
    } catch (e) {
      return json({ error: e instanceof Error ? e.message : 'Internal error' }, 500);
    }
  },
};
