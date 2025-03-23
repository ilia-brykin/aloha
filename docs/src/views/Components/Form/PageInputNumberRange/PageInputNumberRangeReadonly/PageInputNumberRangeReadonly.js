import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInputNumberRange,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputNumberRangeReadonly",
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

    const model1 = ref({ min: 3, max: 43 });
    const model2 = ref({ min: 3 });
    const model3 = ref({ max: 3 });
    const model4 = ref(undefined);

    return {
      codeHtml,
      codeJs,
      model1,
      model2,
      model3,
      model4,
    };
  },
};
