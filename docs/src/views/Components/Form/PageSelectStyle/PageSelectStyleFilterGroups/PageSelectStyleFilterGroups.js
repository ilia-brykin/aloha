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
  name: "PageSelectStyleFilterGroups",
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

    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      codeHtml,
      codeJs,
      model1,
      model2,
    };
  },
};
