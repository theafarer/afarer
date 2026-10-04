import { randomUUID } from 'node:crypto';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SPAM_KEYWORDS = /\b(viagra|cialis|crypto airdrop|investment opportunity|casino|betting)\b/i;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

interface Env {
  CONTACT_RESEND_API_KEY?: string;
  CONTACT_EMAIL_TO?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_FROM_NAME?: string;
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

    const fields = {
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

    // Fallback keeps the public contact inbox always reachable even if the var/secret is lost.
    const destinationEmail = env.CONTACT_EMAIL_TO || 'info@afarer.com';
    if (!destinationEmail || !EMAIL_RE.test(destinationEmail)) {
      return json({ success: false, error: 'Destination email not configured' }, 500);
    }

    const receivedAt = new Date().toISOString();

    if (env.CONTACT_RESEND_API_KEY && env.CONTACT_FROM_EMAIL) {
      const fromName = env.CONTACT_FROM_NAME || 'afarer Contact';
      const from = `${fromName} <${env.CONTACT_FROM_EMAIL}>`;
      const replyTo = `${fields.firstName} ${fields.lastName} <${fields.email}>`;

      const subject = `[Contact] ${fields.subject || '(no subject)'} —${fields.firstName} ${fields.lastName}`;
      const html = `<div style="font-family:sans-serif;max-width:640px;margin:0 auto">
        <h2>New contact form submission</h2>
        <p>Received at ${receivedAt} | IP: ${ip}</p>
        <table>${Object.entries(fields)
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px;font-weight:600">${k}</td><td style="padding:6px">${v.replace(/\n/g, '<br>')}</td></tr>`
          )
          .join('')}</table>
        <p style="font-size:12px;color:#666">User-Agent: ${userAgent}</p>
      </div>`;

      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${env.CONTACT_RESEND_API_KEY}`,
            'Content-Type': 'application/json',
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
        }
      } catch (e) {
        console.error('Email send failed:', e);
      }
    }

    return json({ success: true, id: randomUUID(), receivedAt });
  },
};
