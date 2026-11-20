import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ACalendar,
  AModal,
  ATranslation,
} from "aloha-vue";

import DragDropAPI from "./compositionAPI/DragDropAPI";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

import {
  getDemoDay,
  getDemoEvents,
} from "../utils/demoEvents";

export default {
  name: "PageCalendarDragDrop",
  components: {
    AButton,
    ACalendar,
    AlohaExample,
    AModal,
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
      changeOnlyThisOccurrence,
      changeWholeSeries,
      closeSeriesChange,
      events,
      isDraggable,
      lastDrop,
      model,
      onEventChange,
      seriesChange,
      view,
    } = DragDropAPI({
      events: [
        // The birthday is locked
        ...getDemoEvents().map(event => event.id === 7 ? { ...event, isLocked: true } : event),
        { id: "standup", label: "Standup", start: `${ getDemoDay(2) }T08:30:00`, end: `${ getDemoDay(2) }T08:45:00`, color: "secondary", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5] } },
      ],
      date: getDemoDay(11),
    });

    return {
      changeOnlyThisOccurrence,
      changeWholeSeries,
      closeSeriesChange,
      codeHtml,
      codeJs,
      events,
      isDraggable,
      lastDrop,
      model,
      onEventChange,
      seriesChange,
      view,
    };
  },
};
