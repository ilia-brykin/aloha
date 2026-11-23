export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputTags,
} from "aloha-vue";

export default {
  components: {
    AInputTags,
  },
  setup() {
    const model = ref(["anna@example.com"]);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
