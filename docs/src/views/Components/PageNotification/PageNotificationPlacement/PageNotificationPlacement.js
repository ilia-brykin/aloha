import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ANotification,
  ANotificationAPI,
  ARadio,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageNotificationPlacement",
  components: {
    AlohaExample,
    AButton,
    ANotification,
    ARadio,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

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
      codeHtml,
      codeJs,
      add,
      placement,
      placements,
      size,
      sizes,
    };
  },
};
