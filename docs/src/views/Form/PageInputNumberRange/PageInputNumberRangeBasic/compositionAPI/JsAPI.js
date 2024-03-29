export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AInputNumberRange from "aloha-vue/src/ui/AInputNumberRange/AInputNumberRange";
    
export default {
  name: "PageInputNumberRangeBasic",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
