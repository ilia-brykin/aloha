export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  APaginationPages,
} from "aloha-vue";

export default {
  components: {
    AButton,
    APaginationPages,
  },
  setup() {
    const totalCount = ref(8);
    const page = ref(1);

    return {
      page,
      totalCount,
    };
  },
};`;

  return {
    codeJs,
  };
}
