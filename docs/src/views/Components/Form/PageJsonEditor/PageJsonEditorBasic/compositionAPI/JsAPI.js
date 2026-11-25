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
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
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
