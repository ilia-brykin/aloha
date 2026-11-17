export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  name: "PageColorPickerForm",
  components: {
    AForm,
  },
  setup() {
    const model = ref({
      brand: "#0775b0",
      native: "#c81e29",
    });
    const data = [
      {
        id: "brand",
        type: "colorPicker",
        label: "colorPicker",
        showAlpha: true,
        predefine: ["#0775b0", "#1b7942", "#c81e29"],
      },
      {
        id: "native",
        type: "color",
        label: "color",
      },
    ];

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
