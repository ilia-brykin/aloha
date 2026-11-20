import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ACalendar,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";
import PopoverAPI from "./compositionAPI/PopoverAPI";

import {
  getDemoEvents,
} from "../utils/demoEvents";

export default {
  name: "PageCalendarPopover",
  components: {
    AButton,
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
      deleteEvent,
      editEvent,
      events,
      lastAction,
    } = PopoverAPI({ events: getDemoEvents() });

    return {
      codeHtml,
      codeJs,
      deleteEvent,
      editEvent,
      events,
      lastAction,
    };
  },
};
