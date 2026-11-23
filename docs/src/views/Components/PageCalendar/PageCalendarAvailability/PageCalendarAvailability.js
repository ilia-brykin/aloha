import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

import {
  getDemoDay,
} from "../utils/demoEvents";

export default {
  name: "PageCalendarAvailability",
  components: {
    ACalendar,
    AlohaExample,
    ATranslation,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const model = ref(undefined);
    // The days before the 3rd and after the 25th cannot be chosen, the 12th and the 19th are holidays
    const minDate = getDemoDay(3);
    const maxDate = getDemoDay(25);
    const HOLIDAYS = [getDemoDay(12), getDemoDay(19)];
    const isHoliday = day => HOLIDAYS.indexOf(day) !== -1;

    return {
      codeHtml,
      codeJs,
      isHoliday,
      maxDate,
      minDate,
      model,
    };
  },
};
