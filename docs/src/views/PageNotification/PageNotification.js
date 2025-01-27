import {
  AButton,
  ANotificationAPI,
} from "aloha-vue";

export default {
  name: "PageNotification",
  components: {
    AButton,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const addNotificationLocal = type => {
      addNotification({
        text: type,
        type,
        timeout: 0,
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
