export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  ANotification,
  ANotificationAPI,
  ARadio,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ANotification,
    ARadio,
  },
  setup() {
    const {
      addNotification,
    } = ANotificationAPI();

    const placement = ref("top-end");
    const size = ref("small");
    const placements = ["top-start", "top-center", "top-end", "bottom-start", "bottom-center", "bottom-end"]
      .map(value => ({ value, label: value }));
    const sizes = ["default", "small", "large", "xl"]
      .map(value => ({ value, label: value }));

    let count = 0;
    const add = () => {
      count++;
      addNotification({
        text: "_A_NOTIFICATION_EXAMPLE_PLACEMENT_TEXT_",
        extra: { count, placement: placement.value },
        container: "example_placement",
        type: "info",
      });
    };

    return {
      add,
      placement,
      placements,
      size,
      sizes,
    };
  },
};`;

  return {
    codeJs,
  };
}
