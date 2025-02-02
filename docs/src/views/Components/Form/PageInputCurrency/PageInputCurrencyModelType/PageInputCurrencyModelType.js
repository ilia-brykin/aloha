import {
  ref,
} from "vue";

import {
  AInputCurrency,
} from "aloha-vue";


import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputCurrencyModelType",
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
