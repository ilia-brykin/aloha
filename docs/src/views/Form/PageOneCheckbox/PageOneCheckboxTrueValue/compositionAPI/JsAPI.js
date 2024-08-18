export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxTrueValue",
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
