import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorSlots",
  components: {
    AJsonEditor,
    ATranslation,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref({
      darkMode: true,
      betaFeatures: false,
      notifications: true,
      analytics: false,
    });

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
