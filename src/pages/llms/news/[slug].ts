import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from 'astrowind:config';

export const prerender = true;

export async function getStaticPaths() {
  // EN-only: localized posts (ids like 'de/<slug>') carry a '/' that cannot fit this
  // single-segment [slug] route; llms endpoints stay English-only.
  const posts = await getCollection('post', ({ id }) => !id.includes('/'));
  return posts.map((p) => ({ params: { slug: p.id } }));
}

export const GET: APIRoute = async ({ params }) => {
  const posts = await getCollection('post', (p) => p.id === params.slug);
  const entry = posts[0];
  if (!entry) {
    return new Response('Not found', { status: 404 });
  }

  const { data, body } = entry;
  const lines: string[] = [];

  lines.push(`# ${data.title}`);
  lines.push('');
  if (data.publishDate) lines.push(`- **Published**: ${data.publishDate.toISOString().split('T')[0]}`);
  if (data.author) lines.push(`- **Author**: ${data.author}`);
  if (data.category) lines.push(`- **Category**: ${data.category}`);
  if (data.tags?.length) lines.push(`- **Tags**: ${data.tags.join(', ')}`);
  if (data.excerpt) lines.push(`- **Excerpt**: ${data.excerpt}`);
  if (data.image) lines.push(`- **Image**: ${data.image}`);
  lines.push('');

  if (body?.trim()) {
    lines.push(body.trim());
  }

  lines.push('');
  lines.push('---');
  lines.push(`Source: ${SITE?.site || 'https://afarer.com'}/news/${entry.id}`);

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
