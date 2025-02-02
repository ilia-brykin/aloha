export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AInputNumberRange,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberRangePlaceholder",
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
