import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";
import RecurringAPI from "./compositionAPI/RecurringAPI";

import {
  getDemoDay,
} from "../utils/demoEvents";

export default {
  name: "PageCalendarRecurring",
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

    const {
      events,
      lastClick,
      onEventClick,
    } = RecurringAPI({
      events: [
        // Monday to Friday, not on the 12th
        { id: 1, label: "Standup", start: `${ getDemoDay(1) }T09:00:00`, end: `${ getDemoDay(1) }T09:15:00`, color: "info", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5], exceptions: [getDemoDay(12)] } },
        // Every second week
        { id: 2, label: "Team meeting", start: `${ getDemoDay(5) }T14:00:00`, end: `${ getDemoDay(5) }T15:00:00`, color: "primary", recurrence: { frequency: "weekly", interval: 2 } },
        // Every month, six times
        { id: 3, label: "Report", start: getDemoDay(15), color: "warning", isAllDay: true, recurrence: { frequency: "monthly", count: 6 } },
        // Every year
        { id: 4, label: "Birthday", start: getDemoDay(20), color: "#8e44ad", isAllDay: true, recurrence: { frequency: "yearly" } },
      ],
    });

    return {
      codeHtml,
      codeJs,
      events,
      lastClick,
      onEventClick,
    };
  },
};
