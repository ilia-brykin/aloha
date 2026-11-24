import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ANotification,
  ANotificationAPI,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNotificationProgress",
  components: {
    AlohaExample,
    AButton,
    ANotification,
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
        text: "_A_NOTIFICATION_EXAMPLE_PROGRESS_TEXT_",
        container: "example_progress",
        timeout: 8000,
        deduplicate: false,
      });
    };

    return {
      codeHtml,
      codeJs,
      add,
    };
  },
};
