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
  name: "PageComboboxSlot",
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
    const people = [
      { id: 1, label: "Anna Schmidt", email: "anna@example.com" },
      { id: 2, label: "Andreas Wolf", email: "andreas@example.com" },
      { id: 3, label: "Maria Anders", email: "maria@example.com" },
    ];
    // own texts of the status; a missing key keeps its default
    const texts = {
      noResults: "_A_COMBOBOX_EXAMPLE_NO_PERSON_",
    };

    return {
      codeHtml,
      codeJs,
      model,
      people,
      texts,
    };
  },
};
