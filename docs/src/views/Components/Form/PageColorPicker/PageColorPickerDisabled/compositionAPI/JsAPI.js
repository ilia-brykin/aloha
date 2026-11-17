export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerDisabled",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#c81e29");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
