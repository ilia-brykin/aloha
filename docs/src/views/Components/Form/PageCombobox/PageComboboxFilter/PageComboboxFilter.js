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
  name: "PageComboboxFilter",
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
    // "zur" finds "Zürich" (ignore-diacritics), the first suggestion completes the text
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
      codeHtml,
      codeJs,
      cities,
      model,
    };
  },
};
