export default function JsAPI() {
  const codeJs = `import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
  },
  setup() {
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
      add,
    };
  },
};`;

  return {
    codeJs,
  };
}
