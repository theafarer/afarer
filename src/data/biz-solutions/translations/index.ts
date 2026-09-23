import fr from './fr';
import es from './es';
import type { SolutionOverride } from './fr';

export type { SolutionOverride };

export const solutionTranslations: Record<string, Record<string, SolutionOverride>> = {
  fr,
  es,
};
