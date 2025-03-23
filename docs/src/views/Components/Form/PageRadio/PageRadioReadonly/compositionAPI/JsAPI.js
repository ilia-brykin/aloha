export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageRadioReadonly",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model1 = ref("aloha_1");
    const model2 = ref(["aloha_4", "aloha_5"]);
    const model3 = ref(undefined);
    
    return {
      data,
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
