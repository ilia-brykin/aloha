import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ACalendar,
} from "aloha-vue";

import ExportAPI from "./compositionAPI/ExportAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

import {
  getDemoDay,
  getDemoEvents,
} from "../utils/demoEvents";

export default {
  name: "PageCalendarExport",
  components: {
    AButton,
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

    const {
      calendarRef,
      download,
      events,
      ics,
      showPreview,
    } = ExportAPI({
      events: [
        ...getDemoEvents().slice(0, 3),
        { id: "standup", label: "Standup", start: `${ getDemoDay(2) }T09:00:00`, end: `${ getDemoDay(2) }T09:15:00`, color: "info", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5], exceptions: [getDemoDay(12)] } },
      ],
    });

    return {
      calendarRef,
      codeHtml,
      codeJs,
      download,
      events,
      ics,
      showPreview,
    };
  },
};
