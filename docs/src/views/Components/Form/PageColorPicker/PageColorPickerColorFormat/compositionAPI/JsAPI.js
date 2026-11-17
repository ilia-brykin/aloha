export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AColorPicker,
} from "aloha-vue";

export default {
  name: "PageColorPickerColorFormat",
  components: {
    AColorPicker,
  },
  setup() {
    const modelRgb = ref("rgba(7, 117, 176, 0.8)");
    const modelHsl = ref("hsl(145, 63%, 29%)");
    const modelHsv = ref("hsv(276, 68%, 70%)");

    return {
      modelHsl,
      modelHsv,
      modelRgb,
    };
  },
};`;

  return {
    codeJs,
  };
}
