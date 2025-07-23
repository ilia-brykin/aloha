export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderHelpText",
  components: {
    ASlider,
  },
  setup() {
    const model = ref(20);
    
    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
