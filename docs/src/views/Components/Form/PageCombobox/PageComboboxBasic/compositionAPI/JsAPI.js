export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ACombobox,
} from "aloha-vue";

export default {
  components: {
    ACombobox,
  },
  setup() {
    const model = ref("");
    // select: { id, label, item } of the chosen suggestion; the text can also be own
    const selected = ref(undefined);
    const cities = [
      { id: "berlin", label: "Berlin" },
      { id: "bern", label: "Bern" },
      { id: "bremen", label: "Bremen" },
      { id: "hamburg", label: "Hamburg" },
      { id: "hannover", label: "Hannover" },
      { id: "munich", label: "München" },
      { id: "vienna", label: "Wien" },
      { id: "zurich", label: "Zürich" },
    ];

    return {
      cities,
      model,
      selected,
    };
  },
};`;

  return {
    codeJs,
  };
}
