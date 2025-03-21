import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATooltip,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTooltipOffsetDistance",
  components: {
    AlohaExample,
    ATooltip,
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
