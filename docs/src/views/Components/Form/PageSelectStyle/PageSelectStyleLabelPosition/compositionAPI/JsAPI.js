export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ASelectStyle,
} from "aloha-vue";

export default {
  name: "PageSelectStyleLabelPosition",
  components: {
    ASelectStyle,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
