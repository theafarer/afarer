/* eslint-disable @typescript-eslint/no-explicit-any */
interface Env {
  AI: { run: (model: string, inputs: any) => Promise<any> };
  VECTORIZE: { query: (vector: number[], opts?: any) => Promise<any> };
}

const AI_GATEWAY = '@cf/baai/bge-base-en-v1.5';
const LLM_MODEL = '@cf/meta/llama-3.2-3b-instruct';

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/api/, '') || '/';

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    try {
      switch (path) {
        case '/chat':
          return await handleChat(request, env);
        case '/ask':
          return await handleAsk(request, env);
        case '/search':
          return await handleSearch(request, env);
        case '/embed':
          return await handleEmbed(request, env);
        case '/quota':
        case '/ai/quota':
          return handleQuota();
        case '/sitemap':
        case '/ai/sitemap':
          return handleSitemap();
        default:
          return json({ error: 'Not found' }, 404);
      }
    } catch (e) {
      return json({ error: e instanceof Error ? e.message : 'Internal error' }, 500);
    }
  },
};

async function embed(text: string, env: Env): Promise<number[]> {
  const result = await env.AI.run(AI_GATEWAY, { text: [text] });
  return result.data?.[0] || result[0] || [];
}

async function handleChat(request: Request, env: Env): Promise<Response> {
  const { question, history = [] } = (await request.json()) as any;
  if (!question) return json({ error: 'Question required' }, 400);

  const queryEmbedding = await embed(question, env);
  const vectorResults = await env.VECTORIZE.query(queryEmbedding, { topK: 5, returnVectors: false });
  const context = (vectorResults?.matches || [])
    .map((m: any) => m.metadata?.text || '')
    .filter(Boolean)
    .join('\n');

  const system = `You are a sales agent for afarer, a marine manufacturing company. Qualify the lead, recommend specific products, and include a call to action (quote, sample, or consultation). Cite sources from the context.\n\nContext:\n${context || 'No specific context found. Use general knowledge.'}`;
  const messages = [
    { role: 'system', content: system },
    ...history.map((m: any) => ({ role: m.role, content: m.content })),
    { role: 'user', content: question },
  ];

  const response = await env.AI.run(LLM_MODEL, { messages, stream: false });
  return json({ answer: (response as any).response || '', context });
}

async function handleAsk(request: Request, env: Env): Promise<Response> {
  const { question, history = [] } = (await request.json()) as any;
  if (!question) return json({ error: 'Question required' }, 400);

  const queryEmbedding = await embed(question, env);
  const vectorResults = await env.VECTORIZE.query(queryEmbedding, { topK: 10, returnVectors: false });
  const matches = (vectorResults?.matches || []).map((m: any) => ({
    score: m.score,
    text: m.metadata?.text?.slice(0, 500),
    url: m.metadata?.url,
    title: m.metadata?.title,
  }));

  const context = matches.map((m: any) => `[${m.title}](${m.url}): ${m.text}`).join('\n\n');
  const system = `You are a sales agent for afarer, a marine manufacturing company. Your goal is to qualify leads and recommend products. Follow these guidelines:

1. Understand the customer's application, environment, and requirements before recommending.
2. Recommend specific product models with reasons why they fit the use case.
3. Mention relevant specifications (size, material, capacity, engine compatibility) to demonstrate expertise.
4. If the customer mentions a budget or quantity, factor that into your response.
5. Always include a call to action —offer a quote, sample, or consultation.
6. Be professional and helpful. If you don't know something, say so rather than guessing.
7. Cite sources from the context when available.

Context:
${context || 'No specific products found.'}`;

  const messages = [
    { role: 'system', content: system },
    ...history.map((m: any) => ({ role: m.role, content: m.content })),
    { role: 'user', content: question },
  ];

  const response = await env.AI.run(LLM_MODEL, { messages, stream: false });
  return json({ answer: (response as any).response || '', matches });
}

async function handleSearch(request: Request, env: Env): Promise<Response> {
  const { query } = (await request.json()) as any;
  if (!query) return json({ error: 'Query required' }, 400);

  const queryEmbedding = await embed(query, env);
  const vectorResults = await env.VECTORIZE.query(queryEmbedding, { topK: 20, returnVectors: false });
  const results = (vectorResults?.matches || []).map((m: any) => ({
    score: m.score,
    title: m.metadata?.title || '',
    url: m.metadata?.url || '',
    snippet: m.metadata?.text?.slice(0, 300) || '',
  }));

  return json({ results });
}

async function handleEmbed(request: Request, env: Env): Promise<Response> {
  const { text } = (await request.json()) as any;
  if (!text) return json({ error: 'Text required' }, 400);

  const vectors = await embed(text, env);
  return json({ vectors, dimensions: vectors.length });
}

function handleQuota(): Response {
  return json({ status: 'ok', provider: 'workers-ai', quota: 'usage-based' });
}

function handleSitemap(): Response {
  const baseUrl = 'https://afarer.com';
  return json({
    pages: [
      `${baseUrl}/en/`,
      `${baseUrl}/fr/`,
      `${baseUrl}/de/`,
      `${baseUrl}/es/`,
      `${baseUrl}/pt/`,
      `${baseUrl}/ar/`,
      `${baseUrl}/it/`,
      `${baseUrl}/ru/`,
      `${baseUrl}/pl/`,
      `${baseUrl}/nl/`,
      `${baseUrl}/sv/`,
      `${baseUrl}/no/`,
      `${baseUrl}/el/`,
      `${baseUrl}/tr/`,
      `${baseUrl}/fi/`,
      `${baseUrl}/cs/`,
      `${baseUrl}/da/`,
      `${baseUrl}/ro/`,
      `${baseUrl}/th/`,
      `${baseUrl}/hr/`,
      `${baseUrl}/hu/`,
      `${baseUrl}/sk/`,
      `${baseUrl}/bg/`,
      `${baseUrl}/sl/`,
      `${baseUrl}/sr/`,
      `${baseUrl}/id/`,
      `${baseUrl}/he/`,
      `${baseUrl}/ms/`,
      `${baseUrl}/lt/`,
      `${baseUrl}/lv/`,
      `${baseUrl}/et/`,
      `${baseUrl}/tl/`,
    ],
  });
}
