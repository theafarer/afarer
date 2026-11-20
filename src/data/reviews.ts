import { productReviewsPartA, type ProductReview } from './reviews-part1';
import { productReviewsPartB } from './reviews-part2';

export type { ProductReview };

// Curated customer reviews per product id. Review texts stay in English across
// all locales (user-generated content convention); UI labels are localized.
const productReviews: Record<string, ProductReview[]> = {
  ...productReviewsPartA,
  ...productReviewsPartB,
};

export function getReviews(productId: string): ProductReview[] {
  return productReviews[productId] ?? [];
}

export function getRatingStats(productId: string): { avg: number; count: number } | null {
  const list = productReviews[productId];
  if (!list || list.length === 0) return null;
  const sum = list.reduce((acc, r) => acc + r.rating, 0);
  const avg = Math.round((sum / list.length) * 10) / 10;
  return { avg, count: list.length };
}
