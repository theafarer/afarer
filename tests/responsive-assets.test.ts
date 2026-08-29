import { describe, expect, it } from 'vitest';
import { responsiveImageSrc, responsiveImageSrcset } from '~/lib/responsive-assets';

describe('responsive asset URLs', () => {
  const source = 'https://assets.afarer.com/images/afarer/products/board.webp';

  it('creates a width-specific WebP URL', () => {
    expect(responsiveImageSrc(source, 768)).toBe('https://assets.afarer.com/images/afarer/products/board-768w.webp');
  });

  it('creates a srcset for the requested widths', () => {
    expect(responsiveImageSrcset(source, [480, 1200])).toBe(
      'https://assets.afarer.com/images/afarer/products/board-480w.webp 480w, https://assets.afarer.com/images/afarer/products/board-1200w.webp 1200w'
    );
  });

  it('does not transform non-R2 URLs', () => {
    expect(responsiveImageSrc('https://images.example.com/board.webp', 768)).toBe(
      'https://images.example.com/board.webp'
    );
    expect(responsiveImageSrcset('https://images.example.com/board.webp')).toBeUndefined();
  });
});
