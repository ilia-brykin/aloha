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
  getDemoEvents,
} from "../utils/demoEvents";

export default {
  name: "PageCalendarDay",
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

    const events = ref(getDemoEvents());
    // The day with three overlapping demo events
    const model = ref(getDemoDay(11));
    const view = ref("day");

    return {
      codeHtml,
      codeJs,
      events,
      model,
      view,
    };
  },
};
