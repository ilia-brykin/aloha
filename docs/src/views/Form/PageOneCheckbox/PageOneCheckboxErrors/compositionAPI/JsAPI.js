export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AOneCheckbox,
} from "aloha-vue";
    
export default {
  name: "PageOneCheckboxErrors",
  components: {
    AInput,
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
