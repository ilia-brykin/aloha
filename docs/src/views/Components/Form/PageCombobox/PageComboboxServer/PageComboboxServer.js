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
  name: "PageComboboxServer",
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
    // GET url?search=<text> after a pause of 300 ms; an older answer does not replace a newer one
    const url = `${ import.meta.env.BASE_URL }assets/mock/select-base.json`;

    return {
      codeHtml,
      codeJs,
      model,
      url,
    };
  },
};
