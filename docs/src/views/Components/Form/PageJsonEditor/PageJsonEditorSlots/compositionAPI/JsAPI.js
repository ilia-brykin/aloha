export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AJsonEditor,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
    ATranslation,
  },
  setup() {
    const model = ref({
      darkMode: true,
      betaFeatures: false,
      notifications: true,
      analytics: false,
    });

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
