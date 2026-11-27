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
  name: "PageJsonEditorBig",
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

    // 3000 rows: only the visible rows are rendered (virtual-threshold), aria-rowcount and aria-rowindex
    const model = ref({
      entries: Array.from({ length: 3000 }, (_, index) => ({
        id: index + 1,
        level: ["info", "warning", "error"][index % 3],
        message: `Event ${ index + 1 }`,
      })),
    });

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
