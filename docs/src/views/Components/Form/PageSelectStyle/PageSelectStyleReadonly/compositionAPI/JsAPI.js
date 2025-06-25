export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ASelectStyle,
} from "aloha-vue";
    
export default {
  name: "PageSelectStyleReadonly",
  components: {
    ASelectStyle,
  },
  setup() {
    const model1 = ref("a_color_primary");
    const model2 = ref(["a_d_flex", "a_bg_secondary"]);
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
