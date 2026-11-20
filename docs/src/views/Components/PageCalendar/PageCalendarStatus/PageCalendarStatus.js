import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACalendar,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

import {
  getDemoDay,
} from "../utils/demoEvents";

export default {
  name: "PageCalendarStatus",
  components: {
    ACalendar,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const day = (dayOfMonth, time) => time ? `${ getDemoDay(dayOfMonth) }T${ time }:00` : getDemoDay(dayOfMonth);
    const events = ref([
      { id: 1, label: "Confirmed", start: day(9, "09:00"), end: day(9, "10:00") },
      { id: 2, label: "Maybe", start: day(10, "11:00"), end: day(10, "12:00"), status: "tentative" },
      { id: 3, label: "Cancelled", start: day(11, "14:00"), end: day(11, "15:00"), status: "cancelled", color: "danger" },
      { id: 4, label: "Trip (tentative)", start: day(12), end: day(13), isAllDay: true, color: "success", status: "tentative" },
    ]);
    const model = ref(getDemoDay(11));

    return {
      codeHtml,
      codeJs,
      events,
      model,
    };
  },
};
