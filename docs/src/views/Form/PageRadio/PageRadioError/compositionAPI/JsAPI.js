export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import ARadio from "aloha-vue/src/ui/ARadio/ARadio";
    
export default {
  name: "PageRadioError",
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
