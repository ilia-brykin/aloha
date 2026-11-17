export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ASelect,
} from "aloha-vue";

export default {
  name: "PageSelectLabelPosition",
  components: {
    ASelect,
  },
  setup() {
    const model = ref("1");
    const data = [
      {
        id: "1",
        label: "Aloha",
      },
      {
        id: "2",
        label: "Hola",
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
