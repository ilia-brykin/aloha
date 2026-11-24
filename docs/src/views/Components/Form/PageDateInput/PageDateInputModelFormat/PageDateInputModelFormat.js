import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADateInput,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDateInputModelFormat",
  components: {
    ADateInput,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const modelUtc = ref("2025-03-05T13:30:00Z");
    const modelTokens = ref("05.03.2025");
    const modelTimestamp = ref(Date.now());

    return {
      codeHtml,
      codeJs,
      modelTimestamp,
      modelTokens,
      modelUtc,
    };
  },
};
