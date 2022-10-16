import App from "./App/App.vue";
import { createApp } from "vue";
import store from "./store/index";
import router from "./router/index";
import AI18nPlugin from "../../src/plugins/AI18nPlugin";
// import alohaPlugin from "../src/plugins/alohaPlugin";
import AIconPlugin from "../../src/plugins/AIconPlugin";
import mainIcons from "./mainIcons";

import de from "./i18n/de.json";
import en from "./i18n/en.json";
import hr from "./i18n/hr.json";
import ru from "./i18n/ru.json";

import deGlobal from "../../src/i18n/de.json";
import enGlobal from "../../src/i18n/en.json";
import hrGlobal from "../../src/i18n/hr.json";
import ruGlobal from "../../src/i18n/ru.json";

const APP = createApp(App);
const TRANSLATIONS = {
  de: { ...deGlobal, ...de },
  en: { ...enGlobal, ...en },
  hr: { ...hrGlobal, ...hr },
  ru: { ...ruGlobal, ...ru },
};
APP.use(AI18nPlugin, TRANSLATIONS, "de");
APP.use(AIconPlugin, mainIcons);
// APP.use(alohaPlugin, {
//   framework: "bootstrap",
// });
APP.config.unwrapInjectedRef = true;
APP.use(store).use(router).mount("#app");
