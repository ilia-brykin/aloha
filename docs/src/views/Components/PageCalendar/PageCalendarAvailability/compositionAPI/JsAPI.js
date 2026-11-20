export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const model = ref(undefined);
    const minDate = "2026-03-03";
    const maxDate = "2026-03-25";
    // disabledDates: an array of dates or a function of the day ("YYYY-MM-DD")
    const HOLIDAYS = ["2026-03-12", "2026-03-19"];
    const isHoliday = day => HOLIDAYS.indexOf(day) !== -1;

    return {
      isHoliday,
      maxDate,
      minDate,
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
