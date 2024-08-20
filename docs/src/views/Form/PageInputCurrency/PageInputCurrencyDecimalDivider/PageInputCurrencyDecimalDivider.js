import {
  ref,
} from "vue";

import AInputCurrency from "../../../../../../src/ui/AInputCurrency/AInputCurrency";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputCurrencyDecimalDivider",
  components: {
    AInputCurrency,
    AlohaExample,
  },
  setup() {
    const model = ref(10.02);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
