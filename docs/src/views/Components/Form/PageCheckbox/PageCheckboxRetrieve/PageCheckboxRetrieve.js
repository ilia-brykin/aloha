import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACheckbox,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageCheckboxRetrieve",
  components: {
    ACheckbox,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const model1 = ref(["aloha_2", "aloha_10", "aloha_11"]);
    const url = `${ import.meta.env.BASE_URL }assets/mock/select-base.json`;
    const urlRetrieve = `${ import.meta.env.BASE_URL }assets/mock/select-retrieve.json`;

    return {
      codeHtml,
      codeJs,
      model1,
      url,
      urlRetrieve,
    };
  },
};
