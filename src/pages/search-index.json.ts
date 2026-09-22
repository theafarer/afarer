/* eslint-disable @typescript-eslint/no-explicit-any */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import yaml from 'js-yaml';

export const prerender = true;

const SITE = '';

function stripHtml(html: string): string {
  return String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function excerpt(s: string, n = 140): string {
  s = String(s || '').trim();
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trim() + '...';
}

function plainText(value: any): string {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(plainText).join(' ');
  if (typeof value === 'object') return Object.values(value).map(plainText).join(' ');
  return String(value);
}

const pageRawModules: Record<string, string> = import.meta.glob('/src/data/pages/*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const staticPages: { url: string; title: string; excerpt: string; tags: string[] }[] = [
  {
    url: '/technology',
    title: 'Technology',
    excerpt:
      'afarer technology: drop-stitch core construction, military-grade PVC, fiberglass deep-V hulls, Hypalon tubes, and air deck floor systems.',
    tags: ['technology', 'drop-stitch', 'PVC', 'materials'],
  },
  {
    url: '/safety',
    title: 'Safety',
    excerpt:
      'afarer safety standards: CE certification, SOLAS compliance, pressure and buoyancy testing, and product safety guidelines.',
    tags: ['safety', 'certification', 'CE', 'SOLAS'],
  },
  {
    url: '/ai-context',
    title: 'AI Context',
    excerpt:
      'afarer AI context page for search engines and LLM crawlers. Defines relevance boundaries, use cases, and recommendation rules.',
    tags: ['ai', 'context', 'llm'],
  },
  {
    url: '/distributors',
    title: 'Become a afarer Partner',
    excerpt: 'Global distributor and partnership opportunities with afarer water sports equipment.',
    tags: ['distributor', 'partner', 'wholesale'],
  },
  {
    url: '/guides',
    title: 'Guides',
    excerpt:
      'Beginner guides for SUP and water sports. Learn how to choose your SUP, safety tips, inflatable vs hard board comparisons, and paddling techniques.',
    tags: ['guides', 'beginner', 'SUP'],
  },
  {
    url: '/products/bundles',
    title: 'Bundle Deals',
    excerpt:
      'Save on afarer product bundles and package deals. Starter packs, touring kits, family packages, and more.',
    tags: ['bundles', 'deals', 'packages', 'save'],
  },
  {
    url: '/size-guide',
    title: 'Size Guide',
    excerpt:
      'Find the right size inflatable SUP for your needs. Compare dimensions, weight capacities, and recommended uses.',
    tags: ['size', 'guide', 'dimensions', 'capacity'],
  },
  {
    url: '/products/compare',
    title: 'Product Comparison',
    excerpt: 'Compare afarer inflatable SUPs and accessories side by side. Length, width, weight, capacity, and more.',
    tags: ['compare', 'comparison', 'specs', 'side-by-side'],
  },
  {
    url: '/randdcenter',
    title: 'R&D Center',
    excerpt:
      'afarer Research & Development —PVC fabric testing, RF welding, hydrodynamic testing, and quality control for inflatable SUPs.',
    tags: ['r&d', 'research', 'engineering', 'testing'],
  },
  {
    url: '/404',
    title: 'Page Not Found',
    excerpt: 'Sorry, the page you are looking for has drifted out to sea. Use the links below to find your way back.',
    tags: ['404', 'error', 'not-found'],
  },
  {
    url: '/faq',
    title: 'Frequently Asked Questions',
    excerpt:
      'Find answers to common questions about afarer inflatable SUPs — pricing, shipping, warranty, OEM partnerships, rentals, resorts, and retail distribution.',
    tags: ['faq', 'questions', 'answers', 'help', 'b2b', 'oem', 'support'],
  },
  {
    url: '/en/whitepaper/oem-sup-manufacturing-guide',
    title: 'OEM SUP Manufacturing Guide — White Paper',
    excerpt:
      'Comprehensive guide to OEM inflatable SUP manufacturing: material selection, production processes, quality control, factory audits, and supply chain management.',
    tags: ['whitepaper', 'oem', 'manufacturing', 'guide', 'b2b', 'supply-chain'],
  },
  {
    url: '/resources',
    title: 'Resource Center',
    excerpt:
      'afarer resource center for B2B partners: white papers, industry reports, case studies, ROI calculator, and business tools for SUP OEM, resorts, and rental operators.',
    tags: ['resources', 'b2b', 'whitepaper', 'roi', 'calculator', 'partners'],
  },
];

const guides: { slug: string; title: string; excerpt: string; tags: string[] }[] = [
  {
    slug: 'beginner-guide',
    title: "Beginner's Guide to SUP Paddling",
    excerpt:
      'Step-by-step guide for first-time SUP paddlers. Learn stance, stroke technique, turning, safety checks, and how to launch.',
    tags: ['beginner', 'SUP', 'paddling'],
  },
  {
    slug: 'choosing-paddle',
    title: 'Choosing the Right Paddle',
    excerpt:
      'Guide to selecting the right SUP paddle: materials (aluminum, fiberglass, carbon), blade shapes, shaft types, and sizing for your height.',
    tags: ['paddle', 'choosing', 'materials', 'sizing'],
  },
  {
    slug: 'how-to-choose-your-sup',
    title: 'How to Choose Your SUP',
    excerpt:
      'Learn how to choose the right inflatable SUP board based on length, width, volume, skill level, and water environment.',
    tags: ['choosing', 'SUP', 'buying-guide'],
  },
  {
    slug: 'inflatable-repair',
    title: 'Inflatable SUP Care & Repair',
    excerpt:
      'Complete guide to repairing inflatable SUPs. Puncture repair, valve replacement, seam repair, and preventive maintenance.',
    tags: ['repair', 'maintenance', 'puncture', 'care'],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Inflatable vs Hard SUP Board',
    excerpt:
      'Compare inflatable drop-stitch SUP boards vs rigid epoxy/fiberglass boards. Portability, durability, performance, storage, and cost differences explained.',
    tags: ['inflatable', 'hard', 'comparison', 'vs'],
  },
  {
    slug: 'sup-techniques',
    title: 'SUP Paddling Techniques',
    excerpt: 'Learn proper SUP paddling technique: forward stroke, sweep stroke, draw stroke, and bracing.',
    tags: ['SUP', 'techniques', 'paddling', 'stroke'],
  },
  {
    slug: 'multi-day-trip',
    title: 'Multi-Day Paddling Trip Planning',
    excerpt:
      'Plan and pack for multi-day SUP expeditions. Gear checklist, camping considerations, navigation, food, and safety for extended trips.',
    tags: ['multi-day', 'trip', 'planning', 'expedition'],
  },
  {
    slug: 'paddling-techniques',
    title: 'SUP Paddling Techniques',
    excerpt:
      'Master forward stroke, sweep turn, reverse stroke, cross-bow turn, and bracing techniques for efficient and confident SUP paddling.',
    tags: ['SUP', 'paddling', 'techniques', 'stroke'],
  },
  {
    slug: 'safety-tips',
    title: 'Water Safety Tips',
    excerpt:
      'Essential safety practices for SUP paddling: weather checks, PFD selection, leash use, cold water awareness, and navigation rules.',
    tags: ['safety', 'tips', 'PFD', 'weather'],
  },
  {
    slug: 'sup-fishing',
    title: 'SUP Fishing Guide',
    excerpt:
      'Learn how to fish from an inflatable SUP. Board selection, gear setup, casting techniques, and safety tips for stand-up paddleboard fishing.',
    tags: ['fishing', 'SUP', 'angling', 'gear'],
  },
  {
    slug: 'sup-fitness',
    title: 'SUP for Fitness & Cross-Training',
    excerpt:
      'Use stand-up paddleboarding as a full-body workout. Learn SUP fitness routines, calorie burn, muscle groups engaged, and training plans.',
    tags: ['fitness', 'workout', 'cross-training', 'exercise'],
  },
  {
    slug: 'sup-maintenance',
    title: 'SUP Maintenance & Storage Guide',
    excerpt:
      'Complete guide to cleaning, storing, and maintaining your inflatable SUP board. UV protection, valve care, pressure management, and winter storage.',
    tags: ['maintenance', 'storage', 'cleaning', 'care'],
  },
  {
    slug: 'sup-with-kids',
    title: 'SUP with Kids',
    excerpt:
      'Family paddling guide: age recommendations, safety gear for children, kid-friendly boards, tips for keeping young paddlers engaged.',
    tags: ['kids', 'family', 'children', 'safety'],
  },
  {
    slug: 'sup-yoga',
    title: 'SUP Yoga Guide',
    excerpt:
      'Practice yoga on an inflatable SUP. Board selection, poses for beginners and advanced, anchoring tips, and the benefits of paddling plus yoga.',
    tags: ['yoga', 'SUP', 'fitness', 'flexibility'],
  },
  {
    slug: 'understanding-specs',
    title: 'Understanding SUP Board Specs',
    excerpt:
      'Decode SUP board specifications: volume, length, width, thickness, weight capacity, hull shape, and how each spec affects paddling performance.',
    tags: ['specs', 'specifications', 'understanding', 'dimensions'],
  },
  {
    slug: 'weather-conditions',
    title: 'Reading Weather & Water Conditions',
    excerpt:
      'Learn to read weather forecasts, wind patterns, tides, and currents for safe SUP paddling. Know when to go and when to stay ashore.',
    tags: ['weather', 'conditions', 'safety', 'forecast'],
  },
];

export const GET: APIRoute = async () => {
  const items: any[] = [];

  try {
    const posts = await getCollection('post');
    for (const post of posts) {
      if (post.data.draft) continue;
      const body = post.body || '';
      const fm: any = post.data;
      items.push({
        title: fm.title || 'Untitled',
        url: `${SITE}/news/${post.id.replace(/\.(md|mdx)$/i, '')}`,
        excerpt: excerpt(fm.excerpt || fm.summary || fm.description || stripHtml(body)),
        type: 'article',
        tags: fm.tags || [],
      });
    }
  } catch {
    /* noop */
  }

  try {
    const products = await getCollection('product');
    for (const product of products) {
      if (product.data.draft) continue;
      const body = product.body || '';
      const fm: any = product.data;
      const price = fm.price || {};
      items.push({
        title: fm.title || 'Untitled',
        url: `${SITE}/products/${product.id.replace(/\.(md|mdx)$/i, '')}`,
        excerpt: excerpt(fm.excerpt || fm.summary || fm.description || stripHtml(body)),
        type: 'product',
        image: fm.image || '',
        price: price.amount || '',
        currency: price.currency || 'USD',
        tags: fm.tags || [fm.category].filter(Boolean),
      });
    }
  } catch {
    /* noop */
  }

  const pageSlugs = ['home', 'about', 'contact'];
  for (const slug of pageSlugs) {
    const modulePath = `/src/data/pages/${slug}.yaml`;
    const raw = pageRawModules[modulePath];
    let data: any = {};
    if (raw) {
      try {
        data = yaml.load(raw) || {};
      } catch {
        /* noop */
      }
    }
    const heroKey = slug === 'home' || slug === 'about' ? 'hero' : 'hero_text';
    const hero = data[heroKey] || {};
    const sectionTitles: string[] = [];
    for (const [k, v] of Object.entries(data)) {
      if (k === heroKey) continue;
      const t = (v as any)?.title;
      if (typeof t === 'string') sectionTitles.push(t);
    }
    const url = slug === 'home' ? `${SITE}/` : `${SITE}/${slug}`;
    const title =
      (typeof hero?.title === 'string' ? stripHtml(hero.title) : slug.charAt(0).toUpperCase() + slug.slice(1)) || slug;
    items.push({
      title,
      url,
      excerpt: excerpt(plainText(hero?.subtitle || hero?.content || sectionTitles.join(' '))),
      type: 'page',
      tags: [slug, ...sectionTitles].slice(0, 6),
    });
  }

  for (const page of staticPages) {
    items.push({ ...page });
  }

  for (const guide of guides) {
    items.push({
      title: guide.title,
      url: `${SITE}/guides/${guide.slug}`,
      excerpt: guide.excerpt,
      type: 'guide',
      tags: guide.tags,
    });
  }

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
