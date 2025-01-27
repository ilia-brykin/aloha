import {
  ARate,
} from "aloha-vue";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";
import { ref } from "vue";

export default {
  name: "PageRateModelValue",
  components: {
    ARate,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const modelValue = ref(3);

    const handleModelValueChange = value => {
      modelValue.value = value;
    };

    return {
      codeHtml,
      codeJs,
      handleModelValueChange,
      modelValue,
    };
  },
};
