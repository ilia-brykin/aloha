import {
  ref,
} from "vue";

import AAlert from "../../../../../src/AAlert/AAlert";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAlertExposes",
  components: {
    AAlert,
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

    setTimeout(() => {
      console.log("alertRef.value", alertRef.value);
      console.log("alertRef.value.close", alertRef.value.close);
      console.log("alertRef.value.isHidden", alertRef.value.isHidden);
    }, 300);

    return {
      alertRef,
      codeHtml,
      codeJs,
    };
  },
};
