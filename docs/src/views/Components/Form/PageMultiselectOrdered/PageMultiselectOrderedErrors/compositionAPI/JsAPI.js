export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import { 
  AMultiselectOrdered,
} from "aloha-vue";
    
export default {
  name: "PageMultiselectOrderedErrors",
  components: {
    AMultiselectOrdered,
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
    const model = ref(["aloha_4", "aloha_2"]);
    
    return {
      data,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
