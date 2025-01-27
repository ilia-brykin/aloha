import {
  ref,
} from "vue";

import {
  AAlert,
} from "aloha-vue";
import AButton from "../../../../../src/AButton/AButton";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAlertExposes",
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

    const alertRef = ref(undefined);

    const closeAlert = () => {
      alertRef.value.close();
    };

    const showAlert = () => {
      alertRef.value.isHidden = false;
    };

    return {
      alertRef,
      closeAlert,
      codeHtml,
      codeJs,
      showAlert,
    };
  },
};
