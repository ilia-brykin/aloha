export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyLabelFloat",
  components: {
    AInputCurrency,
  },
  setup() {
    const model = ref(10.02);
    
    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
