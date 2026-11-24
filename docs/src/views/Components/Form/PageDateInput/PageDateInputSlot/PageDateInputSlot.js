import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADateInput,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDateInputSlot",
  components: {
    ADateInput,
    ATranslation,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const YEAR = new Date().getFullYear();
    const holidays = [`${ YEAR }-12-24`, `${ YEAR }-12-25`, `${ YEAR }-12-26`, `${ YEAR }-12-31`];
    const model = ref(`${ YEAR }-12-01`);

    return {
      codeHtml,
      codeJs,
      holidays,
      model,
    };
  },
};
