import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASpinner,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSpinnerSizes",
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
