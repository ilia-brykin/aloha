import {
  ref,
} from "vue";
import {
  AAlert,
  AButton,
} from "aloha-vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAlertClosable",
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

    const isAlertVisible = ref(true);

    const showAlert = () => {
      isAlertVisible.value = true;
    };

    const hideAlert = () => {
      isAlertVisible.value = false;
    };

    return {
      codeHtml,
      codeJs,
      hideAlert,
      isAlertVisible,
      showAlert,
    };
  },
};
