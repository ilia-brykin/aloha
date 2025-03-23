export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AInputCurrency,
} from "aloha-vue";
    
export default {
  name: "PageInputCurrencyReadonly",
  components: {
    AInputCurrency,
  },
  setup() {
    const model1 = ref(10.02);
    const model2 = ref(10000);
    const model3 = ref(undefined);
    
    return {
      model1,
      model2,
      model3,
    };
  },
};`;

  return {
    codeJs,
  };
}
