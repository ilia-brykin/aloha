export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AInputNumberRange from "aloha-vue/src/ui/AInputNumberRange/AInputNumberRange";
    
export default {
  name: "PageInputNumberRangeTypeIntegerPositive",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model = ref(undefined);

    return {
      data,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
