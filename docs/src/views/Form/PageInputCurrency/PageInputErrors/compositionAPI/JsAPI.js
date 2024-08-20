export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AInput from "aloha-vue/src/ui/AInput/AInput";
    
export default {
  name: "PageInputErrors",
  components: {
    AInput,
  },
  setup() {
    const model = ref("Aloha");
    
    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
