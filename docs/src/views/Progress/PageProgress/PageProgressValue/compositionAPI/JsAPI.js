export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputNumber,
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressValue",
  components: {
    AInputNumber,
    AProgress,
  },
  setup() {
    const model = ref(20);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
