import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import ATooltip from "../../../../../src/ATooltip/ATooltip";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTooltipHideArrow",
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
