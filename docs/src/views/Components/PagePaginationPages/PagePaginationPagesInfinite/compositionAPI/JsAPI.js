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
    const totalCount = ref(60);
    const limit = ref(10);
    // the button and the scroll add the next rows: limit 10 -> 20 -> 30
    const updateLimit = value => {
      limit.value = value;
    };

    return {
      limit,
      totalCount,
      updateLimit,
    };
  },
};`;

  return {
    codeJs,
  };
}
