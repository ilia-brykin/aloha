export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const model = ref({
      subject: "Your order",
      body: "Hello,\\n\\nthank you for your order.\\nWe send it tomorrow.\\n\\nBest regards\\nThe team",
      footer: "Aloha GmbH · Bonn",
    });

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
