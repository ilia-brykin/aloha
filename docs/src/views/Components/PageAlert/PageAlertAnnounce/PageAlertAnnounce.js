import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AAlert,
  AButton,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAlertAnnounce",
  components: {
    AAlert,
    AButton,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const isAlertVisible = ref(false);

    const toggleAlerts = () => {
      isAlertVisible.value = !isAlertVisible.value;
    };

    return {
      codeHtml,
      codeJs,
      isAlertVisible,
      toggleAlerts,
    };
  },
};
