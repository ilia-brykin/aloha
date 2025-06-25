import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASelectStyle,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSelectStyleReadonly",
  components: {
    AlohaExample,
    ASelectStyle,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const model1 = ref("a_color_primary");
    const model2 = ref(["a_d_flex", "a_bg_secondary"]);
    const model3 = ref(undefined);

    return {
      codeHtml,
      codeJs,
      model1,
      model2,
      model3,
    };
  },
};
