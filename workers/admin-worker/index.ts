/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtVerify, SignJWT } from 'jose';
import yaml from 'js-yaml';

interface Env {
  SESSION_SECRET?: string;
  GITHUB_TOKEN?: string;
  GITHUB_OWNER?: string;
  GITHUB_REPO?: string;
  ADMIN_USERNAME?: string;
  ADMIN_PASSWORD_HASH?: string;
}

const SESSION_DURATION = 24 * 60 * 60 * 1000;

const CORS = {
  'Access-Control-Allow-Origin': 'https://afarer.com',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...CORS } });
}

function getSecret(env: Env): Uint8Array {
  return new TextEncoder().encode(env.SESSION_SECRET || 'fallback-secret-change-me');
}

function getSecretStr(env: Env): string {
  return env.SESSION_SECRET || 'fallback-secret-change-me';
}

// Legacy HMAC token format used by Astro SSR pages (src/lib/auth.ts)
async function createSessionToken(username: string, env: Env): Promise<string> {
  const expiresAt = Date.now() + SESSION_DURATION;
  const payload = `${username}|${expiresAt}`;
  const key = getSecretStr(env);
  const encoder = new TextEncoder();
  const hmacKey = encoder.encode(key);
  const msg = encoder.encode(payload);
  // Simple HMAC-SHA256 using Web Crypto API
  return crypto.subtle
    .importKey('raw', hmacKey, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
    .then((importedKey) => crypto.subtle.sign('HMAC', importedKey, msg))
    .then((sig) => {
      const hmac = Array.from(new Uint8Array(sig))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
      return btoa(`${payload}|${hmac}`).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      if (path === '/api/auth/login' && request.method === 'POST') {
        return await handleLogin(request, env);
      }
      if (path === '/api/auth/logout') {
        return handleLogout();
      }
      if (path === '/api/auth/change-password') {
        return json(
          {
            success: false,
            error: 'Password can only be changed via wrangler: npx wrangler secret put ADMIN_PASSWORD_HASH',
          },
          400
        );
      }
      if (path.startsWith('/api/admin/')) {
        const session = await authenticate(request, env);
        if (!session) return json({ error: 'Unauthorized' }, 401);
        return await handleAdmin(request, env, path);
      }
      return json({ error: 'Not found' }, 404);
    } catch (e) {
      return json({ error: e instanceof Error ? e.message : 'Internal error' }, 500);
    }
  },
};

async function handleLogin(request: Request, env: Env): Promise<Response> {
  const { username, password } = (await request.json()) as any;
  if (username !== (env.ADMIN_USERNAME || 'admin') || password !== (env.ADMIN_PASSWORD_HASH || 'admin')) {
    return json({ error: 'Invalid credentials' }, 401);
  }

  const jwtToken = await new SignJWT({ role: 'admin', sub: username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(getSecret(env));

  const sessionToken = await createSessionToken(username, env);
  const body = JSON.stringify({ token: jwtToken, user: { username, role: 'admin' }, success: true });
  const headers = new Headers({ 'Content-Type': 'application/json', ...CORS });
  headers.append(
    'Set-Cookie',
    `ks-admin-session=${sessionToken}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`
  );
  headers.append('Set-Cookie', `ks-auth=1; Path=/; Secure; SameSite=Lax; Max-Age=86400`);
  return new Response(body, { status: 200, headers });
}

function handleLogout(): Response {
  const headers = new Headers({ 'Content-Type': 'application/json', ...CORS });
  headers.append('Set-Cookie', 'ks-admin-session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');
  headers.append('Set-Cookie', 'ks-auth=; Path=/; Secure; SameSite=Lax; Max-Age=0');
  return new Response(JSON.stringify({ success: true }), { status: 200, headers });
}

async function verifySessionCookie(value: string, secret: string): Promise<{ username: string } | null> {
  try {
    const base64 = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (value.length % 4)) % 4);
    const decoded = atob(base64);
    const parts = decoded.split('|');
    if (parts.length !== 3) return null;
    const [username, expiresAtStr, signature] = parts;
    if (Date.now() > Number(expiresAtStr)) return null;
    const encoder = new TextEncoder();
    const key = encoder.encode(secret);
    const msg = encoder.encode(`${username}|${expiresAtStr}`);
    const cryptoKey = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const sig = await crypto.subtle.sign('HMAC', cryptoKey, msg);
    const hex = Array.from(new Uint8Array(sig))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    if (hex !== signature) return null;
    return { username };
  } catch {
    return null;
  }
}

async function authenticate(request: Request, env: Env): Promise<{ sub: string; role: string } | null> {
  const auth = request.headers.get('Authorization');
  if (auth?.startsWith('Bearer ')) {
    try {
      const { payload } = await jwtVerify(auth.slice(7), getSecret(env));
      return payload as any;
    } catch {
      return null;
    }
  }
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/(?:^|;\s*)ks-admin-session=([^;]+)/);
  if (match) {
    const result = await verifySessionCookie(match[1], getSecretStr(env));
    if (result) return { sub: result.username, role: 'admin' };
  }
  return null;
}

async function handleAdmin(request: Request, env: Env, path: string): Promise<Response> {
  const token = env.GITHUB_TOKEN;
  if (!token) return json({ error: 'GitHub token not configured' }, 500);

  const owner = env.GITHUB_OWNER || 'afarer';
  const repo = env.GITHUB_REPO || 'official';
  const api = `https://api.github.com/repos/${owner}/${repo}`;

  if (path === '/api/admin/list' && request.method === 'GET') {
    const dir = urlParam(request, 'dir') || 'src/content/news';
    const res = await fetch(`${api}/contents/${dir}`, {
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'afarer-admin' },
    });
    const data = await res.json();
    return json(data);
  }

  if (path === '/api/admin/read' && request.method === 'GET') {
    const filePath = urlParam(request, 'path') || '';
    const branch = urlParam(request, 'branch') || 'main';
    const format = urlParam(request, 'format');
    const readUrl = `${api}/contents/${filePath}${branch !== 'main' ? `?ref=${branch}` : ''}`;
    const res = await fetch(readUrl, { headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'afarer-admin' } });
    const data = await res.json();

    if (data.content && data.encoding === 'base64') {
      const decoded = b64decode(data.content);

      if (format === 'yaml') {
        try {
          const parsed = yaml.load(decoded);
          return json({ ...data, decoded, parsed });
        } catch {
          return json({ ...data, decoded, parsed: null, parseError: 'YAML parse failed' });
        }
      }

      if (format === 'frontmatter') {
        let frontmatter: Record<string, any> = {};
        let body = decoded;
        const match = decoded.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
        if (match) {
          try {
            frontmatter = (yaml.load(match[1]) as Record<string, any>) || {};
          } catch {
            /* ignore */
          }
          body = decoded.slice(match[0].length);
        }
        return json({ ...data, decoded, parsed: frontmatter, body });
      }

      return json({ ...data, decoded });
    }

    return json(data);
  }

  if (path === '/api/admin/create' && request.method === 'POST') {
    const { path: filePath, content, message, branch } = (await request.json()) as any;
    const res = await fetch(`${api}/contents/${filePath}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'afarer-admin', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: message || 'Create via admin',
        content: b64encode(content || ''),
        branch: branch || 'main',
      }),
    });
    const data = await res.json();
    return json(data, res.status);
  }

  if (path === '/api/admin/update' && request.method === 'POST') {
    const body = (await request.json()) as any;

    // Handle format: 'yaml' — serialize data object to YAML string
    if (body.format === 'yaml' && body.data) {
      body.content = yaml.dump(body.data, { lineWidth: -1, noRefs: true, sortKeys: false });
      body.message = body.commitMessage || body.message || 'Update via admin';
    }

    const { path: filePath, content, sha, message, branch } = body;
    const targetBranch = branch || 'main';
    const res = await fetch(`${api}/contents/${filePath}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'afarer-admin', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: message || 'Update via admin',
        content: b64encode(content || ''),
        sha,
        branch: targetBranch,
      }),
    });
    const data = await res.json();
    return json(data, res.status);
  }

  if (path === '/api/admin/delete' && request.method === 'POST') {
    const { path: filePath, sha, message, branch } = (await request.json()) as any;
    const res = await fetch(`${api}/contents/${filePath}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'afarer-admin', 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message || 'Delete via admin', sha, branch: branch || 'main' }),
    });
    return json({ success: res.ok }, res.status);
  }

  if (path === '/api/admin/publish' && request.method === 'POST') {
    // Merge draft branch into main, triggering Cloudflare Pages deployment
    const res = await fetch(`${api}/merges`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'afarer-admin', 'Content-Type': 'application/json' },
      body: JSON.stringify({ base: 'main', head: 'draft', commit_message: 'Publish drafts to production' }),
    });
    if (res.status === 204) {
      return json({ success: true, message: 'Nothing to publish — draft is up to date with main' });
    }
    const data = await res.json();
    if (res.status === 409) {
      return json(
        { success: false, error: 'Merge conflict between draft and main. Resolve manually on GitHub.', conflict: data },
        409
      );
    }
    return json({ success: res.ok, ...data }, res.status);
  }

  if (path === '/api/admin/save-token' && request.method === 'POST') {
    const body = (await request.json()) as any;
    if (body?.action === 'clear') {
      const headers = new Headers({ 'Content-Type': 'application/json', ...CORS });
      headers.append('Set-Cookie', 'ks-gh-token=; Path=/; Secure; SameSite=Lax; Max-Age=0');
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }
    const newToken = body?.token;
    const verified =
      typeof newToken === 'string' && (newToken.startsWith('ghp_') || newToken.startsWith('github_pat_'));
    if (!verified)
      return json({ success: false, error: 'Invalid token format. Must start with ghp_ or github_pat_' }, 400);
    const headers = new Headers({ 'Content-Type': 'application/json', ...CORS });
    headers.append(
      'Set-Cookie',
      `ks-gh-token=${encodeURIComponent(newToken)}; Path=/; Secure; SameSite=Lax; Max-Age=${30 * 24 * 60 * 60}`
    );
    return new Response(JSON.stringify({ success: true, verified: true }), { status: 200, headers });
  }

  return json({ error: 'Admin endpoint not found', path }, 404);
}

function urlParam(request: Request, key: string): string | null {
  const url = new URL(request.url);
  return url.searchParams.get(key);
}

function b64encode(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function b64decode(b64: string): string {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}
