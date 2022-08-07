import App from "./App/App.vue";
import { createApp } from "vue";
import store from "./store/index";
import router from "./router/index";
import i18nPlugin from "../../src/plugins/i18nPlugin";
// import alohaPlugin from "../src/plugins/alohaPlugin";
import AIconPlugin from "../../src/plugins/AIconPlugin";

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
APP.use(AIconPlugin, {
  Plus2: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    height="18"
    width="18"
  >
    <path
      d="M 17.986481,14.773554 14.757239,17.986512 9.0000154,12.245611 3.2427918,17.986512 0.01353176,14.773554 9.0163185,5.770767 Z"
    />
  </svg>`,
});
// APP.use(alohaPlugin, {
//   framework: "bootstrap",
// });
APP.config.unwrapInjectedRef = true;
APP.use(store).use(router).mount("#app");
