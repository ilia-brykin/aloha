export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  components: {
    AForm,
  },
  setup() {
    const dataForm = [
      {
        type: "text",
        id: "name",
        label: "_A_JSON_EDITOR_EXAMPLE_NAME_",
      },
      {
        type: "jsonEditor",
        id: "options",
        label: "_A_JSON_EDITOR_EXAMPLE_OPTIONS_",
        rules: { "/timeout": { type: "number", min: 1 } },
        modes: ["tree", "code"],
      },
    ];
    const model = ref({
      name: "Import",
      options: { timeout: 30, retries: 3 },
    });

    return {
      dataForm,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
