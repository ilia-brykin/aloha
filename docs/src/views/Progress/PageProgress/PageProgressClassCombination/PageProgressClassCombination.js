import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AProgress from "../../../../../../src/AProgress/AProgress";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageProgressClassCombination",
  components: {
    AlohaExample,
    AProgress,
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
