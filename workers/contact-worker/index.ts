import { randomUUID } from 'node:crypto';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SPAM_KEYWORDS = /\b(viagra|cialis|crypto airdrop|investment opportunity|casino|betting)\b/i;
const URL_RE = /https?:\/\/|\bwww\./i;
const BBCODE_URL_RE = /\[url[=\]]|\[\/url\]/i;

// Known disposable / throwaway email domains (includes domains observed in live spam runs).
const DISPOSABLE_DOMAINS = new Set([
  'usmailerbox.org',
  'mailbox2000.org',
  'kenzomail.info',
  'mailinator.com',
  'guerrillamail.com',
  'guerrillamail.info',
  'sharklasers.com',
  'grr.la',
  '10minutemail.com',
  '10minutemail.net',
  'tempmail.com',
  'tempmail.net',
  'temp-mail.org',
  'tempmailo.com',
  'yopmail.com',
  'trashmail.com',
  'trashmail.de',
  'throwawaymail.com',
  'getnada.com',
  'dispostable.com',
  'maildrop.cc',
  'mintemail.com',
  'mohmal.com',
  'emailondeck.com',
  'fakeinbox.com',
  'mytemp.email',
  'spambog.com',
  'tempail.com',
  'tempinbox.com',
  'mailnesia.com',
  'discard.email',
  '1secmail.com',
  '1secmail.org',
  'moakt.com',
  'tmail.ws',
  'tmpmail.org',
  'bccto.me',
  'chacuo.net',
  'smailpro.com',
  'mailpoof.com',
  'inboxkitten.com',
  'tempr.email',
  'muellmail.com',
  'spam4.me',
  'burnermail.io',
  'linshiyouxiang.net',
]);

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Best-effort in-memory rate limit (per isolate). Cuts burst spam even though
// Cloudflare isolates may recycle; durable enforcement comes from Turnstile.
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 8;
const rateHits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  if (!ip) return false;
  const now = Date.now();
  const hits = (rateHits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX) {
    rateHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  rateHits.set(ip, hits);
  if (rateHits.size > 1000) {
    for (const [key, times] of rateHits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) rateHits.delete(key);
    }
  }
  return false;
}

async function verifyTurnstile(token: string, ip: string, secret: string): Promise<boolean> {
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token, remoteip: ip }),
    });
    const outcome = (await res.json()) as { success?: boolean };
    return outcome.success === true;
  } catch {
    return false;
  }
}

// Minimal D1 surface used by this worker (avoids a @cloudflare/workers-types dependency).
interface D1Result {
  success: boolean;
}
interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  run(): Promise<D1Result>;
}
interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface InquiryFields {
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  zip: string;
  country: string;
  email: string;
  tel: string;
  subject: string;
  message: string;
}

interface InquiryMeta {
  submissionKey: string;
  sourceUrl: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

interface Env {
  CONTACT_RESEND_API_KEY?: string;
  CONTACT_EMAIL_TO?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_FROM_NAME?: string;
  TURNSTILE_SECRET?: string;
  DB?: D1Database;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS_HEADERS },
  });
}

function sanitize(value: unknown, maxLen = 2000): string {
  if (typeof value !== 'string') return '';
  let result = '';
  for (const c of value) {
    const cp = c.codePointAt(0)!;
    if (cp >= 32 && cp !== 127) result += c;
  }
  return result.trim().slice(0, maxLen);
}

// All user-controlled values that end up in the notification email HTML must be
// escaped — otherwise a crafted name/message injects markup into the inbox.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendInquiryEmail(
  env: Env,
  fields: InquiryFields,
  destinationEmail: string,
  ip: string,
  userAgent: string,
  receivedAt: string,
  inquiryId: string
): Promise<{ ok: boolean; id?: string; error?: string }> {
  if (!env.CONTACT_RESEND_API_KEY || !env.CONTACT_FROM_EMAIL) {
    return { ok: false, error: 'Resend not configured' };
  }
  const fromName = env.CONTACT_FROM_NAME || 'afarer Contact';
  const from = `${fromName} <${env.CONTACT_FROM_EMAIL}>`;
  const replyTo = `${fields.firstName} ${fields.lastName} <${fields.email}>`;

  const subject = `[Contact] ${fields.subject || '(no subject)'} —${fields.firstName} ${fields.lastName}`;
  const html = `<div style="font-family:sans-serif;max-width:640px;margin:0 auto">
    <h2>New contact form submission</h2>
    <p>Received at ${escapeHtml(receivedAt)} | IP: ${escapeHtml(ip)} | Inquiry: ${escapeHtml(inquiryId)}</p>
    <table>${Object.entries(fields)
      .filter(([, v]) => v)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px;font-weight:600">${escapeHtml(k)}</td><td style="padding:6px">${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`
      )
      .join('')}</table>
    <p style="font-size:12px;color:#666">User-Agent: ${escapeHtml(userAgent)}</p>
  </div>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.CONTACT_RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        // Stable idempotency key derived from the inquiry id for resend retries.
        'Idempotency-Key': inquiryId,
      },
      body: JSON.stringify({
        from,
        to: destinationEmail,
        reply_to: replyTo,
        subject,
        html,
        text: `${fields.firstName} ${fields.lastName}\n${fields.email}\n${fields.message}`,
      }),
    });
    if (!res.ok) {
      const txt = await res.text();
      console.error('Resend error:', txt.slice(0, 500));
      return { ok: false, error: `Resend ${res.status}: ${txt.slice(0, 300)}` };
    }
    const sent = (await res.json()) as { id?: string };
    return { ok: true, id: sent.id };
  } catch (e) {
    console.error('Email send failed:', e);
    return { ok: false, error: `Send error: ${String(e).slice(0, 300)}` };
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return json({ success: false, error: 'Method not allowed' }, 405);
    }

    const ip = request.headers.get('cf-connecting-ip') || '';
    const userAgent = request.headers.get('user-agent') || '';

    let body: Record<string, string>;
    try {
      const contentType = request.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        body = (await request.json()) as Record<string, string>;
      } else {
        const fd = await request.formData();
        body = {};
        fd.forEach((v, k) => {
          if (typeof v === 'string') body[k] = v;
        });
      }
    } catch {
      return json({ success: false, error: 'Invalid request body' }, 400);
    }

    // Honeypot: bots that fill the hidden "email_confirm" field get a fake success
    // (same shape as a real one) so they stop retrying, but no email is ever sent.
    // Exemption: browser autofill mirrors the user's email address into every field
    // it classifies as email (the honeypot leaks the "email" token via name/id), so
    // an exact match with the email field is treated as human autofill, not a bot.
    const honeypotValue = sanitize(body.email_confirm, 500);
    if (honeypotValue && honeypotValue !== sanitize(body.email, 200)) {
      return json({ success: true, id: randomUUID(), receivedAt: new Date().toISOString() });
    }

    if (isRateLimited(ip)) {
      return json({ success: false, error: 'Too many submissions — please try again later.' }, 429);
    }

    // Turnstile (optional): enforced only when TURNSTILE_SECRET is configured.
    if (env.TURNSTILE_SECRET) {
      const token = typeof body['cf-turnstile-response'] === 'string' ? body['cf-turnstile-response'] : '';
      const ok = token ? await verifyTurnstile(token, ip, env.TURNSTILE_SECRET) : false;
      if (!ok) {
        return json({ success: false, error: 'Verification failed — please reload and try again.' }, 403);
      }
    }

    const fields: InquiryFields = {
      firstName: sanitize(body.firstName, 100),
      lastName: sanitize(body.lastName, 100),
      companyName: sanitize(body.companyName, 200),
      address: sanitize(body.address, 400),
      zip: sanitize(body.zip, 40),
      country: sanitize(body.country, 100),
      email: sanitize(body.email, 200),
      tel: sanitize(body.tel, 60),
      subject: sanitize(body.subject, 200),
      message: sanitize(body.message, 4000),
    };
    const meta: InquiryMeta = {
      submissionKey: sanitize(body.submissionKey, 64),
      sourceUrl: sanitize(body.sourceUrl, 500),
      utmSource: sanitize(body.utmSource, 200),
      utmMedium: sanitize(body.utmMedium, 200),
      utmCampaign: sanitize(body.utmCampaign, 200),
    };

    const isNewsletter = fields.subject.toLowerCase() === 'newsletter signup';
    if (isNewsletter && !fields.firstName) fields.firstName = 'Newsletter';
    if (isNewsletter && !fields.lastName) fields.lastName = 'Subscriber';

    if (!fields.firstName || !fields.lastName)
      return json({ success: false, error: 'First and last name required' }, 400);
    if (!fields.email) return json({ success: false, error: 'Email required' }, 400);
    if (!EMAIL_RE.test(fields.email)) return json({ success: false, error: 'Invalid email' }, 400);
    if (!fields.message || fields.message.length < 5) return json({ success: false, error: 'Message too short' }, 400);
    if (SPAM_KEYWORDS.test(fields.message) || SPAM_KEYWORDS.test(fields.subject || '')) {
      return json({ success: false, error: 'Submission rejected' }, 400);
    }

    // Link spam: no URLs in address/name/company/zip, no BBCode [url] anywhere,
    // and at most 2 raw links inside the message body.
    if (URL_RE.test(fields.address) || URL_RE.test(fields.firstName) || URL_RE.test(fields.lastName)) {
      return json({ success: false, error: 'Submission rejected' }, 400);
    }
    if (URL_RE.test(fields.companyName) || URL_RE.test(fields.zip)) {
      return json({ success: false, error: 'Submission rejected' }, 400);
    }
    if (BBCODE_URL_RE.test(Object.values(fields).join(' '))) {
      return json({ success: false, error: 'Submission rejected' }, 400);
    }
    const messageLinks = fields.message.match(/https?:\/\/|www\./gi) || [];
    if (messageLinks.length >= 3) {
      return json({ success: false, error: 'Submission rejected' }, 400);
    }

    // Disposable mailbox domains observed in spam runs.
    const emailDomain = (fields.email.split('@')[1] || '').toLowerCase();
    if (DISPOSABLE_DOMAINS.has(emailDomain)) {
      return json({ success: false, error: 'Submission rejected' }, 400);
    }

    // Fallback keeps the public contact inbox always reachable even if the var/secret is lost.
    const destinationEmail = env.CONTACT_EMAIL_TO || 'info@afarer.com';
    if (!destinationEmail || !EMAIL_RE.test(destinationEmail)) {
      return json({ success: false, error: 'Destination email not configured' }, 500);
    }

    const inquiryId = randomUUID();
    const receivedAt = new Date().toISOString();

    // D1 archive is the source of truth: persist first, notify second. When the
    // binding is absent (archive not provisioned) fall back to email-only mode.
    if (env.DB) {
      let existing: { id: string } | null = null;
      if (meta.submissionKey) {
        try {
          existing = await env.DB.prepare('SELECT id FROM inquiries WHERE submission_key = ?')
            .bind(meta.submissionKey)
            .first<{ id: string }>();
        } catch {
          // Dedup lookup is best-effort; on failure existing stays null.
        }
        if (existing && existing.id) {
          return json({ success: true, id: existing.id, receivedAt, duplicate: true });
        }
      }
      try {
        const inserted = await env.DB.prepare(
          `INSERT INTO inquiries (
            id, submission_key, first_name, last_name, company_name, email, phone,
            address, zip, country, subject, message, source_url,
            utm_source, utm_medium, utm_campaign, ip, user_agent,
            inquiry_status, email_status, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', 'pending', ?, ?)`
        )
          .bind(
            inquiryId,
            meta.submissionKey || null,
            fields.firstName,
            fields.lastName,
            fields.companyName || null,
            fields.email,
            fields.tel || null,
            fields.address || null,
            fields.zip || null,
            fields.country || null,
            fields.subject || null,
            fields.message,
            meta.sourceUrl || null,
            meta.utmSource || null,
            meta.utmMedium || null,
            meta.utmCampaign || null,
            ip,
            userAgent,
            receivedAt,
            receivedAt
          )
          .run();
        if (!inserted.success) {
          return json({ success: false, error: 'Failed to save your submission — please try again.' }, 500);
        }
      } catch (insertErr) {
        // Concurrent duplicate lost the UNIQUE(submission_key) race — treat as idempotent retry.
        if (meta.submissionKey) {
          try {
            const raced = await env.DB.prepare('SELECT id FROM inquiries WHERE submission_key = ?')
              .bind(meta.submissionKey)
              .first<{ id: string }>();
            if (raced && raced.id) {
              return json({ success: true, id: raced.id, receivedAt, duplicate: true });
            }
          } catch {
            /* fall through to generic failure below */
          }
        }
        console.error('D1 insert failed:', insertErr);
        return json({ success: false, error: 'Failed to save your submission — please try again.' }, 500);
      }
    }

    const mail = await sendInquiryEmail(env, fields, destinationEmail, ip, userAgent, receivedAt, inquiryId);

    if (env.DB) {
      try {
        await env.DB.prepare(
          `UPDATE inquiries
           SET email_status = ?, resend_email_id = ?, last_error = ?, retry_count = retry_count + 1, updated_at = ?
           WHERE id = ?`
        )
          .bind(mail.ok ? 'sent' : 'failed', mail.id || null, mail.error || null, new Date().toISOString(), inquiryId)
          .run();
      } catch (updateErr) {
        // The email already went out; failing to record its status must not fail the request.
        console.error('D1 email-status update failed:', updateErr);
      }
    }

    return json({ success: true, id: inquiryId, receivedAt });
  },
};
