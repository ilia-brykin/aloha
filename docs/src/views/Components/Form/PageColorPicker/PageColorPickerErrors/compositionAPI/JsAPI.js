export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerErrors",
  components: {
    AColorPicker,
  },
  setup() {
    const model = ref(undefined);
    const errorIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>…</svg>";

    return {
      errorIcon,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
