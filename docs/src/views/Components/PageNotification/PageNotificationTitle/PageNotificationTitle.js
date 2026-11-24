import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNotificationTitle",
  components: {
    AlohaExample,
    AButton,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const {
      addNotification,
    } = ANotificationAPI();

    const add = () => {
      addNotification({
        title: "_A_NOTIFICATION_EXAMPLE_TITLE_",
        text: "_A_NOTIFICATION_EXAMPLE_TITLE_TEXT_",
        extra: { name: "Anna" },
        icon: "Envelope",
        type: "info",
        announce: "status",
      });
    };

    return {
      codeHtml,
      codeJs,
      add,
    };
  },
};
