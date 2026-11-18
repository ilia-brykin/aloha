export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageRateForm",
  components: {
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

    return {
      data,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
