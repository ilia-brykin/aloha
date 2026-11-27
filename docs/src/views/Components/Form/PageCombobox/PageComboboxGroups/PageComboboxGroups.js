import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACombobox,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageComboboxGroups",
  components: {
    ACombobox,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

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
      codeHtml,
      codeJs,
      model,
      stations,
    };
  },
};
