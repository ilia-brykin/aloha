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
      deleteDocument,
    };
  },
};`;

  return {
    codeJs,
  };
}
