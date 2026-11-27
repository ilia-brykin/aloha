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
      clearNotifications,
      save,
    };
  },
};`;

  return {
    codeJs,
  };
}
