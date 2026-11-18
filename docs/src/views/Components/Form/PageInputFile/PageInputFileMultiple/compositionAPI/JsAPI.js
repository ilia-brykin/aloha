export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileMultiple",
  components: {
    AInputFile,
  },
  setup() {
    const modelReplace = ref([]);
    const modelAppend = ref([]);

    return {
      modelAppend,
      modelReplace,
    };
  },
};`;

  return {
    codeJs,
  };
}
