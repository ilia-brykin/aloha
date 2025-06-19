export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementSwitch",
  components: {
    AElement,
  },
  setup() {
    const modelSwitch = ref(false);

    const toggleModelSwitch = () => {
      modelSwitch.value = !modelSwitch.value;
    };

    return {
      modelSwitch,
      toggleModelSwitch,
    };
  },
};`;

  return {
    codeJs,
  };
}
