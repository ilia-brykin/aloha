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
      addError,
      addErrorWithoutDeduplicate,
    };
  },
};`;

  return {
    codeJs,
  };
}
