import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASelect,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSelectMultiselectCloseable",
  components: {
    AlohaExample,
    ASelect,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const data = [
      { value: "berlin", label: "Berlin" },
      { value: "hamburg", label: "Hamburg" },
      { value: "munich", label: "München" },
      { value: "cologne", label: "Köln" },
      { value: "frankfurt", label: "Frankfurt" },
    ];
    const model = ref(["berlin", "cologne"]);

    return {
      codeHtml,
      codeJs,
      data,
      model,
    };
  },
};
