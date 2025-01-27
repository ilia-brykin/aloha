import {
  ref,
} from "vue";

import {
  AInput,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputLabelScreenReader",
  components: {
    AInput,
    AlohaExample,
  },
  setup() {
    const model = ref("Aloha");

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
