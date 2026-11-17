// Retry delivery of archived inquiries whose notification email failed.
//
// Usage:
//   CONTACT_RESEND_API_KEY=... CONTACT_FROM_EMAIL=... npm run inquiries:resend
//
// Reads failed/pending inquiries (retry_count < 5) from the D1 archive via
// wrangler, re-sends the notification through Resend with the inquiry id as
// idempotency key, then updates email_status in D1. Requires Cloudflare
// credentials (CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID) for wrangler.
import { execSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CONFIG = 'workers/contact-worker/wrangler.toml';
const DB_NAME = 'afarer-inquiries';
const MAX_RETRY = 5;

const resendKey = process.env.CONTACT_RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL;
const toEmail = process.env.CONTACT_EMAIL_TO || 'info@afarer.com';
const fromName = process.env.CONTACT_FROM_NAME || 'afarer Contact';

if (!resendKey || !fromEmail) {
  console.error('Missing CONTACT_RESEND_API_KEY or CONTACT_FROM_EMAIL environment variables — cannot resend.');
  process.exit(1);
}

// Pass SQL via a temp file (--file) instead of --command: user-submitted content
// contains quotes/newlines that break shell escaping, especially on Windows cmd.
const tmpDir = mkdtempSync(join(tmpdir(), 'afarer-d1-'));

function d1(sql) {
  const file = join(tmpDir, 'query.sql');
  writeFileSync(file, sql, 'utf8');
  const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --file "${file}" -c ${CONFIG}`, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const parsed = JSON.parse(out);
  // wrangler --json returns [{ results: [...], success: true }, ...]
  return Array.isArray(parsed) ? parsed[0] : parsed;
}

function esc(value) {
  if (value === null || value === undefined) return 'NULL';
  return `'${String(value).replace(/'/g, "''")}'`;
}

// User-controlled values interpolated into the email HTML must be escaped.
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const query = d1(
  `SELECT id, first_name, last_name, company_name, email, phone, country, subject, message
   FROM inquiries
   WHERE email_status IN ('failed', 'pending') AND retry_count < ${MAX_RETRY}
   ORDER BY created_at ASC LIMIT 50`
);

const rows = (query && query.results) || [];
if (rows.length === 0) {
  console.log('No failed/pending inquiries to resend.');
  process.exit(0);
}
console.log(`Resending ${rows.length} inquiry notification(s)...`);

let sent = 0;
let stillFailed = 0;
for (const row of rows) {
  const subject = `[Contact] ${row.subject || '(no subject)'} —${row.first_name} ${row.last_name}`;
  const replyTo = `${row.first_name} ${row.last_name} <${row.email}>`;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': row.id,
      },
      body: JSON.stringify({
        from: `${fromName} <${fromEmail}>`,
        to: toEmail,
        reply_to: replyTo,
        subject,
        html: `<div style="font-family:sans-serif;max-width:640px;margin:0 auto">
          <h2>Resent inquiry (retry)</h2>
          <p>Inquiry ID: ${escapeHtml(row.id)}</p>
          <table>
            <tr><td style="padding:6px;font-weight:600">name</td><td style="padding:6px">${escapeHtml(row.first_name)} ${escapeHtml(row.last_name)}</td></tr>
            <tr><td style="padding:6px;font-weight:600">company</td><td style="padding:6px">${escapeHtml(row.company_name || '-')}</td></tr>
            <tr><td style="padding:6px;font-weight:600">email</td><td style="padding:6px">${escapeHtml(row.email)}</td></tr>
            <tr><td style="padding:6px;font-weight:600">phone</td><td style="padding:6px">${escapeHtml(row.phone || '-')}</td></tr>
            <tr><td style="padding:6px;font-weight:600">country</td><td style="padding:6px">${escapeHtml(row.country || '-')}</td></tr>
            <tr><td style="padding:6px;font-weight:600">subject</td><td style="padding:6px">${escapeHtml(row.subject || '-')}</td></tr>
            <tr><td style="padding:6px;font-weight:600">message</td><td style="padding:6px">${escapeHtml(row.message || '').replace(/\n/g, '<br>')}</td></tr>
          </table>
        </div>`,
        text: `${row.first_name} ${row.last_name}\n${row.email}\n${row.message}`,
      }),
    });
    if (res.ok) {
      const sentBody = await res.json();
      d1(
        `UPDATE inquiries SET email_status = 'sent', resend_email_id = ${esc(sentBody.id || null)}, updated_at = datetime('now') WHERE id = ${esc(row.id)}`
      );
      sent++;
      console.log(`  OK  ${row.id}`);
    } else {
      const txt = await res.text();
      d1(
        `UPDATE inquiries SET email_status = 'failed', last_error = ${esc(`Resend ${res.status}: ${txt.slice(0, 300)}`)}, retry_count = retry_count + 1, updated_at = datetime('now') WHERE id = ${esc(row.id)}`
      );
      stillFailed++;
      console.error(`  ERR ${row.id}: Resend ${res.status}`);
    }
  } catch (e) {
    d1(
      `UPDATE inquiries SET email_status = 'failed', last_error = ${esc(String(e).slice(0, 300))}, retry_count = retry_count + 1, updated_at = datetime('now') WHERE id = ${esc(row.id)}`
    );
    stillFailed++;
    console.error(`  ERR ${row.id}: ${e}`);
  }
}

console.log(`Done: ${sent} sent, ${stillFailed} still failing.`);
rmSync(tmpDir, { recursive: true, force: true });
process.exit(stillFailed > 0 ? 1 : 0);
