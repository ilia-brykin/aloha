export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AJson from "aloha-vue/src/ui/AJson/AJson";
    
export default {
  name: "PageJsonLabelScreenReader",
  components: {
    AInput,
  },
  setup() {
    const model = ref({});
    
    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
