import App from "./App/App.vue";
import { createApp } from "vue";
import store from "./store/index";
import router from "./router/index";
import AI18nPlugin from "../../src/plugins/AI18nPlugin";
import AMobilePlugin from "../../src/plugins/AMobilePlugin";
import AGroupButtonDropdownPlugin from "../../src/plugins/AGroupButtonDropdownPlugin";
import AIconPlugin from "../../src/plugins/AIconPlugin";
import AModalPlugin from "../../src/plugins/AModalPlugin";
import mainIcons from "./mainIcons";
import ASafeHtml from "../../src/directives/ASafeHtml";

import de from "./i18n/de.json";
import en from "./i18n/en.json";
import hr from "./i18n/hr.json";
import ru from "./i18n/ru.json";
import ar from "./i18n/ar.json";
import fr from "./i18n/fr.json";
import es from "./i18n/es.json";
import it from "./i18n/it.json";

import deGlobal from "../src/i18n/de.json";
import enGlobal from "../src/i18n/en.json";
import hrGlobal from "../src/i18n/hr.json";
import ruGlobal from "../src/i18n/ru.json";
import arGlobal from "../src/i18n/ar.json";
import frGlobal from "../src/i18n/fr.json";
import esGlobal from "../src/i18n/es.json";
import itGlobal from "../src/i18n/it.json";

const APP = createApp(App);
const TRANSLATIONS = {
  de: { ...deGlobal, ...de },
  en: { ...enGlobal, ...en },
  hr: { ...hrGlobal, ...hr },
  ru: { ...ruGlobal, ...ru },
  fr: { ...frGlobal, ...fr },
  ar: { ...arGlobal, ...ar },
  es: { ...esGlobal, ...es },
  it: { ...itGlobal, ...it },
};
APP.use(AI18nPlugin, TRANSLATIONS, "de");
APP.use(AIconPlugin, mainIcons);
APP.use(AMobilePlugin, {
  breakpoint: 991,
});
APP.use(AModalPlugin, {
  propsDefault: {
    closeButtonClass: "a_btn a_btn_link",
  },
});
APP.use(AGroupButtonDropdownPlugin, {
  propsDefault: {
    dropdownAttributes: {
      buttonText: "Weitere Aktionen",
    },
  },
});
APP.config.unwrapInjectedRef = true;
APP.directive("SafeHtml", ASafeHtml);
APP.use(store).use(router).mount("#app");
