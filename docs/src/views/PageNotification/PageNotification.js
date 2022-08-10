import ANotificationAPI from "../../../../src/compositionAPI/ANotificationAPI";

export default {
  name: "PageNotification",
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const addNotificationLocal = type => {
      addNotification({
        text: type,
        type,
      });
    };

    return {
      addNotificationLocal,
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
