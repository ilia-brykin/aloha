export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASwitch,
} from "aloha-vue";
    
export default {
  name: "PageSwitchBasic",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(false);
    
    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
