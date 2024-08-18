export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ATextarea from "aloha-vue/src/ui/ATextarea/ATextarea";
    
export default {
  name: "PageTextareaErrors",
  components: {
    ATextarea,
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
