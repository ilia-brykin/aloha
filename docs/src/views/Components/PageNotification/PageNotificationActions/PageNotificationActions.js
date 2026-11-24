import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNotificationActions",
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

    const deleteDocument = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_DELETED_",
        timeout: 8000,
        actions: [
          {
            text: "_A_NOTIFICATION_EXAMPLE_UNDO_",
            onClick: () => {
              addNotification({
                text: "_A_NOTIFICATION_EXAMPLE_RESTORED_",
                type: "info",
              });
            },
          },
        ],
      });
    };

    return {
      codeHtml,
      codeJs,
      deleteDocument,
    };
  },
};
