import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACombobox,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageComboboxOptions",
  components: {
    ACombobox,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref("");
    const languages = ["Deutsch", "English", "Español", "Français", "Hrvatski", "Italiano", "Nederlands", "Polski", "Русский", "Українська", "العربية"];

    return {
      codeHtml,
      codeJs,
      languages,
      model,
    };
  },
};
