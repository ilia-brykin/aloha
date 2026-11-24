import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ATooltip,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTooltipPlacement",
  components: {
    AlohaExample,
    AButton,
    ATooltip,
  },
  setup() {
    const placements = ["top", "right", "bottom", "left", "top-start", "bottom-end"];

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      placements,
    };
  },
};
