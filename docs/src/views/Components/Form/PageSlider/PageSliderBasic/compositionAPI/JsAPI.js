export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASlider,
} from "aloha-vue";
    
export default {
  name: "SliderExample",
  components: {
    ASlider,
  },
  setup() {
    // Basic slider with default settings (min: 0, max: 100, step: 1)
    const value1 = ref(50);
    
    // Slider with custom min, max, and step values
    const value2 = ref(0);
    
    // Range slider that selects a range of values
    const value3 = ref([20, 80]);
    
    return {
      value1,
      value2,
      value3,
    };
  },
};`;

  return {
    codeJs,
  };
}
