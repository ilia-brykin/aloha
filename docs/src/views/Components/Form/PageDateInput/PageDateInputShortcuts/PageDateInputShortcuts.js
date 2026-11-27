import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADateInput,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDateInputShortcuts",
  components: {
    ADateInput,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const toIso = date => `${ date.getFullYear() }-${ `${ date.getMonth() + 1 }`.padStart(2, "0") }-${ `${ date.getDate() }`.padStart(2, "0") }`;
    // functions: the dates are calculated when the button is clicked
    const shortcuts = [
      {
        label: "_A_DATE_INPUT_EXAMPLE_LAST_7_DAYS_",
        value: () => {
          const TODAY = new Date();
          return [toIso(new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 6)), toIso(TODAY)];
        },
      },
      {
        label: "_A_DATE_INPUT_EXAMPLE_THIS_MONTH_",
        value: () => {
          const TODAY = new Date();
          return [toIso(new Date(TODAY.getFullYear(), TODAY.getMonth(), 1)), toIso(new Date(TODAY.getFullYear(), TODAY.getMonth() + 1, 0))];
        },
      },
      {
        label: "_A_DATE_INPUT_EXAMPLE_LAST_MONTH_",
        value: () => {
          const TODAY = new Date();
          return [toIso(new Date(TODAY.getFullYear(), TODAY.getMonth() - 1, 1)), toIso(new Date(TODAY.getFullYear(), TODAY.getMonth(), 0))];
        },
      },
    ];
    const model = ref(null);

    return {
      codeHtml,
      codeJs,
      model,
      shortcuts,
    };
  },
};
