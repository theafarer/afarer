-- Contact/inquiry archive for afarer-contact worker (Cloudflare D1).
-- Idempotent: safe to run on every deploy.

CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  submission_key TEXT UNIQUE,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  first_name TEXT,
  last_name TEXT,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  zip TEXT,
  country TEXT,
  subject TEXT,
  message TEXT,
  source_url TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip TEXT,
  user_agent TEXT,
  inquiry_status TEXT NOT NULL DEFAULT 'new',
  email_status TEXT NOT NULL DEFAULT 'pending',
  resend_email_id TEXT,
  retry_count INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_inquiries_created_at
ON inquiries(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_inquiries_email_status
ON inquiries(email_status, retry_count);
