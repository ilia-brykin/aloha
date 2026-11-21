import { createApp } from "vue";
import App from "./App.vue";
import "aloha-vue/dist/aloha-vue.css";
import {
  AI18nPlugin,
  AIconPlugin,
  AMobilePlugin,
  i18nDE,
  i18nEN,
} from "aloha-vue";
import Trash from "aloha-svg/dist/js/bootstrap/Trash";
import myDe from "./i18n/de.json";
import myEn from "./i18n/en.json";

const app = createApp(App);

// Translations: dictionaries of the library + own dictionaries, start language
app.use(AI18nPlugin, {
  de: { ...i18nDE, ...myDe },
  en: { ...i18nEN, ...myEn },
}, "de");

// Icons for the props icon, icon-left, icon-right… (name → svg string)
app.use(AIconPlugin, { icons: { Trash } });

// Mobile view below this width (px)
app.use(AMobilePlugin, { breakpoint: 991 });

app.mount("#app");
