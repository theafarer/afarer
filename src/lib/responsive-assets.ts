const RESPONSIVE_WIDTHS = [480, 768, 1200, 1920];
const R2_BASE = (import.meta.env.PUBLIC_ASSETS_BASE_URL || 'https://assets.afarer.com').replace(/\/+$/, '');

function isR2ImageUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.origin === R2_BASE && /\.(?:jpe?g|png|webp|avif)$/i.test(url.pathname);
  } catch {
    return false;
  }
}

function variantPath(url: URL, width: number): string {
  const pathname = url.pathname.replace(/\.[^.]+$/, `-${width}w.webp`);
  return `${url.origin}${pathname}`;
}

export function responsiveImageSrcset(src: string, widths: number[] = RESPONSIVE_WIDTHS): string | undefined {
  if (!isR2ImageUrl(src)) return undefined;
  const url = new URL(src);
  return widths.map((width) => `${variantPath(url, width)} ${width}w`).join(', ');
}

export function responsiveImageSrc(src: string, width?: number): string {
  if (!width || !isR2ImageUrl(src)) return src;
  return variantPath(new URL(src), width);
}
