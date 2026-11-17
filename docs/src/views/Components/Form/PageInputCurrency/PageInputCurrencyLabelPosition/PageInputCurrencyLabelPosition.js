import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInputCurrency,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputCurrencyLabelPosition",
  components: {
    AlohaExample,
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    const labelPositions = ["float", "inset", "top"];

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      labelPositions,
      model,
    };
  },
};
