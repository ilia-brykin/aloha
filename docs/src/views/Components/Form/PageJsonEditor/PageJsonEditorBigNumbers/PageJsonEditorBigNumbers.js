import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorBigNumbers",
  components: {
    AJsonEditor,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const TEXT = "{\n  \"id\": 12345678901234567890,\n  \"price\": 9.99\n}";
    const modelWarn = ref(TEXT);
    const modelBigint = ref(TEXT);

    return {
      codeHtml,
      codeJs,
      modelBigint,
      modelWarn,
    };
  },
};
