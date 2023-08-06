import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AProgressCircle from "../../../../../../src/AProgressCircle/AProgressCircle";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageProgressCircleIndeterminate",
  components: {
    AlohaExample,
    AProgressCircle,
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
