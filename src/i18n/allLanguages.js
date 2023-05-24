import ar from "./ar.json";
import de from "./de.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import hr from "./hr.json";
import it from "./it.json";
import ru from "./ru.json";

import AShowMoreI18n from "../AShowMore/i18n/AShowMoreI18n";

export default {
  ar: {
    ...ar,
    ...AShowMoreI18n.ar,
  },
  de: {
    ...de,
    ...AShowMoreI18n.de,
  },
  en: {
    ...en,
    ...AShowMoreI18n.en,
  },
  es: {
    ...es,
    ...AShowMoreI18n.es,
  },
  fr: {
    ...fr,
    ...AShowMoreI18n.fr,
  },
  hr: {
    ...hr,
    ...AShowMoreI18n.hr,
  },
  it: {
    ...it,
    ...AShowMoreI18n.it,
  },
  ru: {
    ...ru,
    ...AShowMoreI18n.ru,
  },
};
