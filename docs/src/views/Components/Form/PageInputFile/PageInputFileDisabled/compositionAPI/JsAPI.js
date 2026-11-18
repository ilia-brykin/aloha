export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileDisabled",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref({
      name: "Contract.pdf",
      size: 245760,
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
