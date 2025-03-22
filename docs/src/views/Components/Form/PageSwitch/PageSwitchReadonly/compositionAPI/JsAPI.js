export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchReadonly",
  components: {
    ASwitch,
  },
  setup() {
    const model1 = ref(false);
    const model2 = ref(true);
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
