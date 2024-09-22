export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import AGroup from "aloha-vue/src/ui/AGroup/AGroup";
    
export default {
  name: "PageGroupBasic",
  components: {
    AGroup,
  },
  setup() {
    const childrenGroup = [
      {
        id: "text1",
        type: "text",
        label: "Input",
        labelClass: "a_column a_column_3 a_column_12_touch a_text_right",
        classColumn: "a_column a_column_5 a_column_12_touch",
      },
    ];
    const model = ref({
      text1: "Aloha",
    });
    
    return {
      childrenGroup,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
