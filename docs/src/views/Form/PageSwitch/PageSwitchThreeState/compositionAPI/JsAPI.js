export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ASwitch from "aloha-vue/src/ui/ASwitch/ASwitch";
    
export default {
  name: "PageSwitchThreeState",
  components: {
    ASwitch,
  },
  setup() {
    const model = ref(null);
    
    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
