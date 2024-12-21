export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AList,
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageListTag",
  components: {
    AList,
    ARadio,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];
    const modelTag = ref("ol");

    return {
      items,
      modelTag,
    };
  },
};`;

  return {
    codeJs,
  };
}
