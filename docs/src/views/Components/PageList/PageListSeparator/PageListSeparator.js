import {
  AList,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageListSeparator",
  components: {
    AList,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const items = [
      "label 1",
      "label 2",
      "label 3",
      "label 4",
    ];

    return {
      codeHtml,
      codeJs,
      items,
    };
  },
};
