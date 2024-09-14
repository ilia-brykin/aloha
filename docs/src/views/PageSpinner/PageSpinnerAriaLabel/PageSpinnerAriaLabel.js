import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import ASpinner from "../../../../../src/ASpinner/ASpinner";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSpinnerAriaLabel",
  components: {
    AlohaExample,
    ASpinner,
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
