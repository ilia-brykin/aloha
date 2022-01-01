import App from "./App.vue";
import { createApp } from "vue";
import store from "./store/index";
import router from "./router/index";
import i18nPlugin from "../src/plugins/i18nPlugin";

import de from "./i18n/de.json";
import en from "./i18n/en.json";
import hr from "./i18n/hr.json";
import ru from "./i18n/ru.json";

import deGlobal from "../src/i18n/de.json";
import enGlobal from "../src/i18n/en.json";
import hrGlobal from "../src/i18n/hr.json";
import ruGlobal from "../src/i18n/ru.json";

const APP = createApp(App);
const TRANSLATIONS = {
  de: { ...deGlobal, ...de },
  en: { ...enGlobal, ...en },
  hr: { ...hrGlobal, ...hr },
  ru: { ...ruGlobal, ...ru },
};
APP.use(i18nPlugin, TRANSLATIONS, "de");
APP.config.unwrapInjectedRef = true;
APP.use(store).use(router).mount("#app");
