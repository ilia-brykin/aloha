export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ATextarea,
} from "aloha-vue";
    
export default {
  name: "PageTextareaResize",
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
