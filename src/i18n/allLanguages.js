import ar from "./ar.json";
import de from "./de.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import hr from "./hr.json";
import it from "./it.json";
import ru from "./ru.json";

import AShowMoreI18n from "../AShowMore/i18n/AShowMoreI18n";
import ADisclosureI18n from "../ADisclosure/i18n/ADisclosureI18n";

export default {
  ar: {
    ...ar,
    ...AShowMoreI18n.ar,
    ...ADisclosureI18n.ar,
  },
  de: {
    ...de,
    ...AShowMoreI18n.de,
    ...ADisclosureI18n.de,
  },
  en: {
    ...en,
    ...AShowMoreI18n.en,
    ...ADisclosureI18n.en,
  },
  es: {
    ...es,
    ...AShowMoreI18n.es,
    ...ADisclosureI18n.es,
  },
  fr: {
    ...fr,
    ...AShowMoreI18n.fr,
    ...ADisclosureI18n.fr,
  },
  hr: {
    ...hr,
    ...AShowMoreI18n.hr,
    ...ADisclosureI18n.hr,
  },
  it: {
    ...it,
    ...AShowMoreI18n.it,
    ...ADisclosureI18n.it,
  },
  ru: {
    ...ru,
    ...AShowMoreI18n.ru,
    ...ADisclosureI18n.ru,
  },
};
