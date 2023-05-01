import {
  ref,
} from "vue";

import AAlert from "../../../../../src/AAlert/AAlert";
import AButton from "../../../../../src/AButton/AButton";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAlertClosableFromOutside",
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
