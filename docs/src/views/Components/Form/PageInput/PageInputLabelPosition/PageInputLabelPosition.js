import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInput,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputLabelPosition",
  components: {
    AlohaExample,
    AInput,
  },
  setup() {
    const model = ref("Aloha");
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
