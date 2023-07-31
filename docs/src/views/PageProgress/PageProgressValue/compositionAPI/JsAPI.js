export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AInputNumber from "aloha-vue/src/ui/AInputNumber/AInputNumber";
import AProgress from "aloha-vue/src/AProgress/AProgress";
    
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
