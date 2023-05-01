import arGlobal from "../../src/i18n/ar.json";
import deGlobal from "../../src/i18n/de.json";
import enGlobal from "../../src/i18n/en.json";
import esGlobal from "../../src/i18n/es.json";
import frGlobal from "../../src/i18n/fr.json";
import hrGlobal from "../../src/i18n/hr.json";
import itGlobal from "../../src/i18n/it.json";
import ruGlobal from "../../src/i18n/ru.json";

import ar from "./i18n/ar.json";
import de from "./i18n/de.json";
import en from "./i18n/en.json";
import es from "./i18n/es.json";
import fr from "./i18n/fr.json";
import hr from "./i18n/hr.json";
import it from "./i18n/it.json";
import ru from "./i18n/ru.json";

import PageAAlertI18n from "./views/PageAlert/i18n/PageAAlertI18n";
import PageShowMoreI18n from "./views/PageShowMore/i18n/PageShowMoreI18n";

export const mainTranslation = {
  ar: {
    ...arGlobal,
    ...ar,
    ...PageAAlertI18n.ar,
    ...PageShowMoreI18n.ar,
  },
  de: {
    ...deGlobal,
    ...de,
    ...PageAAlertI18n.de,
    ...PageShowMoreI18n.de,
  },
  en: {
    ...enGlobal,
    ...en,
    ...PageAAlertI18n.en,
    ...PageShowMoreI18n.en,
  },
  es: {
    ...esGlobal,
    ...es,
    ...PageAAlertI18n.es,
    ...PageShowMoreI18n.es,
  },
  fr: {
    ...frGlobal,
    ...fr,
    ...PageAAlertI18n.fr,
    ...PageShowMoreI18n.fr,
  },
  hr: {
    ...hrGlobal,
    ...hr,
    ...PageAAlertI18n.hr,
    ...PageShowMoreI18n.hr,
  },
  it: {
    ...itGlobal,
    ...it,
    ...PageAAlertI18n.it,
    ...PageShowMoreI18n.it,
  },
  ru: {
    ...ruGlobal,
    ...ru,
    ...PageAAlertI18n.ru,
    ...PageShowMoreI18n.ru,
  },
};
