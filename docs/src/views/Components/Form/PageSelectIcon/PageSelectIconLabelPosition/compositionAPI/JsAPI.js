export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ASelectIcon,
} from "aloha-vue";

export default {
  name: "PageSelectIconLabelPosition",
  components: {
    ASelectIcon,
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
