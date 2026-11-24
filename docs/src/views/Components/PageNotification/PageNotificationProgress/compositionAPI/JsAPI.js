export default function JsAPI() {
  const codeJs = `import {
  AButton,
  ANotification,
  ANotificationAPI,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ANotification,
  },
  setup() {
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
      add,
    };
  },
};`;

  return {
    codeJs,
  };
}
