import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNotificationDeduplicate",
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

    const addError = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_CONNECTION_",
        type: "danger",
      });
    };

    const addErrorWithoutDeduplicate = () => {
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_CONNECTION_",
        type: "danger",
        deduplicate: false,
      });
    };

    return {
      codeHtml,
      codeJs,
      addError,
      addErrorWithoutDeduplicate,
    };
  },
};
