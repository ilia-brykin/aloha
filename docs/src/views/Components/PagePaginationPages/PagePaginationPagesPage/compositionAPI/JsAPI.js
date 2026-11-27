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
    const page = ref(3);
    const lastChange = ref(undefined);
    // change: { page, offset, limit }
    const onChange = value => {
      lastChange.value = value;
    };

    return {
      lastChange,
      onChange,
      page,
    };
  },
};`;

  return {
    codeJs,
  };
}
