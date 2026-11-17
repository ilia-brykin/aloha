export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerShowAlpha",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#0775b080");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
