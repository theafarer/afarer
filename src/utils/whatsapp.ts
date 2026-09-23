/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * WhatsApp contact helpers — single source for the wa.me deep link and
 * localized label, shared by the floating button (WhatsAppFloat.astro)
 * and the mobile CTA bar (Layout.astro). Ported from the supsfactory
 * project's contact-floats feature.
 */
import cfg from '~/config.yaml';
import { getUiForLang } from '~/i18n/generated/ui-all';

const branding = (cfg as any)?.branding || {};

export const WHATSAPP_NUMBER_DISPLAY: string = (branding?.whatsapp_number || '').toString();

/** wa.me deep link with prefilled message; empty string when no number is configured. */
export function getWhatsAppLink(): string {
  const phoneRaw = WHATSAPP_NUMBER_DISPLAY.replace(/[^\d]/g, '');
  if (!phoneRaw) return '';
  const defaultMessage = (branding?.whatsapp_default_message || '').toString();
  return `https://wa.me/${phoneRaw}${defaultMessage ? `?text=${encodeURIComponent(defaultMessage)}` : ''}`;
}

/** Localized aria/title label for WhatsApp contact points. */
export function getWhatsAppLabel(locale: string): string {
  return getUiForLang(locale)?.['contact.whatsappChat'] || 'Chat on WhatsApp';
}

/** Contact email from branding; empty string when not configured. */
export function getContactEmail(): string {
  return (branding?.contact_email_to || '').toString().trim();
}
