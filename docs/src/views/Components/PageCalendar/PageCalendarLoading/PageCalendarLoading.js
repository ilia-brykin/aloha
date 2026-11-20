import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ACalendar,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";
import LoadingAPI from "./compositionAPI/LoadingAPI";

export default {
  name: "PageCalendarLoading",
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

    const {
      events,
      isLoading,
      loadEvents,
    } = LoadingAPI();

    return {
      codeHtml,
      codeJs,
      events,
      isLoading,
      loadEvents,
    };
  },
};
