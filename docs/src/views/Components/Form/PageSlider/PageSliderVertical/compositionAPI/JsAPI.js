export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderVertical",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref(0);
    const model2 = ref(0);
    const model3 = ref(0);
    
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
