export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AForm,
} from "aloha-vue";

export default {
  components: {
    AForm,
  },
  setup() {
    const dataForm = [
      {
        type: "combobox",
        id: "city",
        label: "_A_COMBOBOX_EXAMPLE_CITY_",
        required: true,
        data: [
          { id: "berlin", label: "Berlin" },
          { id: "bern", label: "Bern" },
          { id: "bremen", label: "Bremen" },
          { id: "hamburg", label: "Hamburg" },
          { id: "hannover", label: "Hannover" },
          { id: "munich", label: "München" },
          { id: "vienna", label: "Wien" },
          { id: "zurich", label: "Zürich" },
        ],
      },
    ];
    const model = ref({
      city: "Hamburg",
    });

    return {
      dataForm,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
