export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AOneCheckbox from "aloha-vue/src/ui/AOneCheckbox/AOneCheckbox";
    
export default {
  name: "PageOneCheckboxHelpText",
  components: {
    AOneCheckbox,
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
