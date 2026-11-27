import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInputTags,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputTagsLimits",
  components: {
    AInputTags,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref(["Deutsch", "English", "Español", "Français"]);
    const languages = ["Deutsch", "English", "Español", "Français", "Italiano", "Nederlands", "Polski", "Русский", "Українська", "Hrvatski", "العربية"];

    return {
      codeHtml,
      codeJs,
      languages,
      model,
    };
  },
};
