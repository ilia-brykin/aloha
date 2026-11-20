import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ACalendar,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

import {
  getDemoEvents,
} from "../utils/demoEvents";

export default {
  name: "PageCalendarSlots",
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

    const events = ref(getDemoEvents());

    return {
      codeHtml,
      codeJs,
      events,
    };
  },
};
