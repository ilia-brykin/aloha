import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASelectIcon,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSelectIconLabelPosition",
  components: {
    AlohaExample,
    ASelectIcon,
  },
  setup() {
    const model = ref(undefined);
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
