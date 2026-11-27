import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNotificationRemove",
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
      clearNotifications,
      removeNotification,
    } = ANotificationAPI();

    const save = () => {
      const id = addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_SAVING_",
        type: "info",
        timeout: 0,
      });
      // e.g. after the answer of the server
      setTimeout(() => {
        removeNotification(id);
        addNotification({
          text: "_A_NOTIFICATION_EXAMPLE_SAVED_",
        });
      }, 2000);
    };

    return {
      codeHtml,
      codeJs,
      clearNotifications,
      save,
    };
  },
};
