export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ARadio from "aloha-vue/src/ui/ARadio/ARadio";
    
export default {
  name: "PageRadioIsDataSimpleArray",
  components: {
    ARadio,
  },
  setup() {
    const data = [
      "Aloha 1",
      "Aloha 2",
      "Aloha 3",
      "Aloha 4",
      "Aloha 5",
      "Aloha 6",
    ];
    const model = ref(undefined);

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
