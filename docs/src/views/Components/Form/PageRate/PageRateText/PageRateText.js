import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ARate,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageRateText",
  components: {
    AlohaExample,
    ARate,
  },
  setup() {
    const modelDefault = ref(3);
    const modelCustom = ref(5);
    const texts = [
      "_A_RATE_EXAMPLE_TEXT_1_",
      "_A_RATE_EXAMPLE_TEXT_2_",
      "_A_RATE_EXAMPLE_TEXT_3_",
      "_A_RATE_EXAMPLE_TEXT_4_",
      "_A_RATE_EXAMPLE_TEXT_5_",
    ];

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      modelCustom,
      modelDefault,
      texts,
    };
  },
};
