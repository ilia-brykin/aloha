export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "PageSliderRange",
  components: {
    ASlider,
  },
  setup() {
    const model1 = ref([]);
    const model2 = ref([0]);
    const model3 = ref([0, 20]);
    const model4 = ref([4, 50]);
    
    return {
      model1,
      model2,
      model3,
      model4,
    };
  },
};`;

  return {
    codeJs,
  };
}
