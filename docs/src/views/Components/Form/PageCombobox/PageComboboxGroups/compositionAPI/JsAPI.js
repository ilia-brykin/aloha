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
    // options of a group stay together; a disabled option is shown, the arrows skip it
    const stations = [
      { id: 1, label: "Alexanderplatz", line: "U2" },
      { id: 2, label: "Hauptbahnhof", line: "S5" },
      { id: 3, label: "Potsdamer Platz", line: "U2" },
      { id: 4, label: "Ostkreuz", line: "S5", isClosed: true },
      { id: 5, label: "Zoologischer Garten", line: "U2" },
    ];

    return {
      model,
      stations,
    };
  },
};`;

  return {
    codeJs,
  };
}
