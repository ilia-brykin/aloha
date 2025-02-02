import {
  AAlert,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAlertText",
  components: {
    AAlert,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const text = "Lorem ipsum dolor sit amet";

    return {
      codeHtml,
      codeJs,
      text,
    };
  },
};
