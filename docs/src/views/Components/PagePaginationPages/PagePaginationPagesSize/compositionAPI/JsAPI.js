export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    APaginationPages,
  },
  setup() {
    const page = ref(1);
    const sizes = ["small", "medium", "large"];

    return {
      page,
      sizes,
    };
  },
};`;

  return {
    codeJs,
  };
}
