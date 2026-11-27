import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageComboboxForm",
  components: {
    AForm,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

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
      codeHtml,
      codeJs,
      dataForm,
      model,
    };
  },
};
