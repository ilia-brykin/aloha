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
  name: "PageJsonEditorRepair",
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

    // almost JSON: a comment, quotes, a missing comma, a trailing comma, Python constants
    const model = ref([
      "{",
      "  // the server",
      "  host: 'localhost',",
      "  port: 8080,",
      "  tls: False,",
      "  proxy: None,",
      "  features: [\"search\" \"export\",],",
      "}",
    ].join("\n"));

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
