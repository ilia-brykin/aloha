export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AInputNumberRange,
} from "aloha-vue";
    
export default {
  name: "PageInputNumberRangeReadonly",
  components: {
    AInputNumberRange,
  },
  setup() {
    const model1 = ref({ min: 3, max: 43 });
    const model2 = ref({ min: 3 });
    const model3 = ref({ max: 3 });
    const model4 = ref(undefined);

    return {
      data,
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
