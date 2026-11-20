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
  name: "PageCalendarWorkWeek",
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
    const model = ref(getDemoDay(11));

    return {
      codeHtml,
      codeJs,
      events,
      model,
    };
  },
};
