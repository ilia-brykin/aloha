export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerLabelPosition",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#0775b0");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
