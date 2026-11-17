export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ACheckbox,
} from "aloha-vue";

export default {
  name: "PageCheckboxSelectAll",
  components: {
    ACheckbox,
  },
  setup() {
    const data = [
      {
        label: "Aloha 0",
        id: "aloha_0",
      },
      {
        label: "Aloha 1",
        id: "aloha_1",
      },
      {
        label: "Aloha 2 (disabled)",
        id: "aloha_2",
        isDisabled: true,
      },
      {
        label: "Aloha 3",
        id: "aloha_3",
      },
      {
        label: "Aloha 4",
        id: "aloha_4",
      },
      {
        label: "Aloha 5",
        id: "aloha_5",
      },
    ];
    const model = ref(["aloha_2"]);
    const modelSearch = ref(["aloha_2"]);

    return {
      data,
      model,
      modelSearch,
    };
  },
};`;

  return {
    codeJs,
  };
}
