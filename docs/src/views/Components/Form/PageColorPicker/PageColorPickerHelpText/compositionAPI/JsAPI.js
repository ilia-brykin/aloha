export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerHelpText",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref("#1b7942");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
