import {
  ref,
} from "vue";

import {
  AInputNumber,
  AProgress,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageProgressValue",
  components: {
    AInputNumber,
    AlohaExample,
    AProgress,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const model = ref(20);

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
