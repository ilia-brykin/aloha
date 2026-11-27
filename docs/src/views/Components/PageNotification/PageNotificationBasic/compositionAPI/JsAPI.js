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

    const types = ["success", "info", "warning", "danger"];

    const add = type => {
      addNotification({
        text: \`_A_NOTIFICATION_EXAMPLE_TEXT_\${ type.toUpperCase() }_\`,
        type,
      });
    };

    return {
      add,
      types,
    };
  },
};`;

  return {
    codeJs,
  };
}
