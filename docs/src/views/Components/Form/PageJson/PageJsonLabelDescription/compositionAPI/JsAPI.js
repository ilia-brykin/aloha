export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AJson,
} from "aloha-vue";
    
export default {
  name: "PageJsonLabelDescription",
  components: {
    AJson,
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
