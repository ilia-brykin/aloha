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
    // "reset" goes back to this value (by default to the first value of the model)
    const resetValue = {
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
    };
    const model = ref({ ...resetValue, title: "Changed title" });

    return {
      model,
      resetValue,
    };
  },
};`;

  return {
    codeJs,
  };
}
