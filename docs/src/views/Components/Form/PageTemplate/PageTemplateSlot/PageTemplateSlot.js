import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATemplate,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTemplateSlot",
  components: {
    AlohaExample,
    ATemplate,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
    };
  },
};
