import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageRateForm",
  components: {
    AlohaExample,
    AForm,
  },
  setup() {
    const model = ref({
      service: 4,
      food: 0,
    });
    const data = [
      {
        id: "service",
        type: "rate",
        label: "_A_RATE_EXAMPLE_LABEL_SERVICE_",
        showText: true,
        required: true,
      },
      {
        id: "food",
        type: "rate",
        label: "_A_RATE_EXAMPLE_LABEL_FOOD_",
        allowHalf: true,
        clearable: true,
        showScore: true,
      },
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
      data,
      model,
    };
  },
};
