import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNotificationBasic",
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

    const types = ["success", "info", "warning", "danger"];

    const add = type => {
      addNotification({
        text: `_A_NOTIFICATION_EXAMPLE_TEXT_${ type.toUpperCase() }_`,
        type,
      });
    };

    return {
      codeHtml,
      codeJs,
      add,
      types,
    };
  },
};
