export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const model = ref("1990-05-17");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
