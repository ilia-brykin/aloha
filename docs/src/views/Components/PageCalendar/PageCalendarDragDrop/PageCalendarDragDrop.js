import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACalendar,
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
      isDraggable,
      lastDrop,
      model,
      onEventDrop,
      view,
    } = DragDropAPI({
      // The birthday is locked
      events: getDemoEvents().map(event => event.id === 7 ? { ...event, isLocked: true } : event),
      date: getDemoDay(11),
    });

    return {
      codeHtml,
      codeJs,
      events,
      isDraggable,
      lastDrop,
      model,
      onEventDrop,
      view,
    };
  },
};
