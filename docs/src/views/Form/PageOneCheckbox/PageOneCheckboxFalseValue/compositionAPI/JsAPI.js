export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxFalseValue",
  components: {
    AInput,
  },
  setup() {
    const model1 = ref(true);
    const model2 = ref(true);
    
    return {
      model1,
      model2,
    };
  },
};`;

  return {
    codeJs,
  };
}
