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
  name: "PageDateInputLimits",
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

    const model = ref(null);
    const TODAY = new Date();
    const toIso = date => `${ date.getFullYear() }-${ `${ date.getMonth() + 1 }`.padStart(2, "0") }-${ `${ date.getDate() }`.padStart(2, "0") }`;
    const min = toIso(TODAY);
    const max = toIso(new Date(TODAY.getFullYear(), TODAY.getMonth() + 2, TODAY.getDate()));
    // the model is "YYYY-MM-DD"; new Date(year, month - 1, day) gives the day of the week without time zone shifts
    const isWeekend = iso => {
      const [YEAR, MONTH, DAY] = iso.split("-").map(Number);
      const WEEKDAY = new Date(YEAR, MONTH - 1, DAY).getDay();
      return WEEKDAY === 0 || WEEKDAY === 6;
    };

    return {
      codeHtml,
      codeJs,
      isWeekend,
      max,
      min,
      model,
    };
  },
};
