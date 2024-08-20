export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AInputCurrency from "aloha-vue/src/ui/AInputCurrency/AInputCurrency";
    
export default {
  name: "PageInputCurrencyHelpText",
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
