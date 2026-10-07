import fr from './fr';
import ar from './ar';
import cs from './cs';
import da from './da';
import de from './de';
import el from './el';
import es from './es';
import fi from './fi';
import it from './it';
import ja from './ja';
import ko from './ko';
import nl from './nl';
import no from './no';
import pl from './pl';
import pt from './pt';
import ro from './ro';
import ru from './ru';
import sv from './sv';
import th from './th';
import tr from './tr';
import type { SolutionOverride } from './fr';

export type { SolutionOverride };

export const solutionTranslations: Record<string, Record<string, SolutionOverride>> = {
  fr,
  ar,
  cs,
  da,
  de,
  el,
  es,
  fi,
  it,
  ja,
  ko,
  nl,
  no,
  pl,
  pt,
  ro,
  ru,
  sv,
  th,
  tr,
};
