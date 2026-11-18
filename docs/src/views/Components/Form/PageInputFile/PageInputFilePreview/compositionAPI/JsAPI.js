export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFilePreview",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([]);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
