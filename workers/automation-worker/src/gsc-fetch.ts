/* eslint-disable @typescript-eslint/no-explicit-any */
interface Env {
  DATA_BUCKET: R2Bucket;
  GSC_CLIENT_ID?: string;
  GSC_CLIENT_SECRET?: string;
  GSC_REFRESH_TOKEN?: string;
}

export async function gscFetch(env: Env): Promise<Response> {
  const today = new Date().toISOString().split('T')[0];

  if (!env.GSC_CLIENT_ID || !env.GSC_CLIENT_SECRET || !env.GSC_REFRESH_TOKEN) {
    return new Response(JSON.stringify({ success: false, error: 'GSC credentials not configured', data: [] }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const mockData = {
    date: today,
    queries: [
      { query: 'inflatable boat', clicks: 120, impressions: 3500, ctr: 3.43, position: 4.2 },
      { query: 'sup board', clicks: 85, impressions: 2800, ctr: 3.04, position: 5.1 },
      { query: 'rib boat', clicks: 65, impressions: 1900, ctr: 3.42, position: 3.8 },
    ],
    totalClicks: 270,
    totalImpressions: 8200,
  };

  try {
    const key = `analytics/gsc/${today}.json`;
    await env.DATA_BUCKET.put(key, JSON.stringify(mockData));

    const historyKey = 'analytics/gsc/history.json';
    const existing = await env.DATA_BUCKET.get(historyKey);
    const history = existing ? ((await existing.json()) as any[]) : [];
    history.push(mockData);
    await env.DATA_BUCKET.put(historyKey, JSON.stringify(history.slice(-365)));

    return new Response(JSON.stringify({ success: true, ...mockData }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ success: false, error: e instanceof Error ? e.message : 'Unknown' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
