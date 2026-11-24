export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ADateInput,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
    ATranslation,
  },
  setup() {
    const model = ref(null);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
