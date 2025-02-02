import {
  ref,
} from "vue";

import {
  AInputNumberRange,
} from "aloha-vue";
import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputNumberRangePlaceholder",
  components: {
    AlohaExample,
    AInputNumberRange,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const model = ref(undefined);

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
