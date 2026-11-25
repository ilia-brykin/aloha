import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorReadonly",
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

    const model = {
      status: 200,
      data: { id: 7, items: [{ sku: "A1", qty: 2 }, { sku: "B4", qty: 1 }] },
      meta: { took: 12, cached: false },
    };

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
