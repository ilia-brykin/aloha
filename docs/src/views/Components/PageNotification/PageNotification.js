import {
  AButton,
  ANotificationAPI,
  getTranslatedText,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageNotification",
  components: {
    AButton,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      addNotification,
    } = ANotificationAPI();

    const addNotificationLocal = type => {
      const extra = typeof type === "string"
        ? {
          type,
        }
        : undefined;

      addNotification({
        text: typeof type === "string"
          ? getTranslatedText({
            placeholder: "_A_NOTIFICATION_TYPE_{{type}}_",
            extra,
          })
          : type,
        type,
        timeout: 0,
      });
    };

    return {
      addNotificationLocal,
      pageTitle,
    };
  },
  data() {
    return {
      types: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
      ],
    };
  },
};
