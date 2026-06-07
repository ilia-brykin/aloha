import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AConfirmAPI,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageConfirmBasic",
  components: {
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

    const {
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const onSave = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_BASIC_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_BASIC_MODAL_BODY_",
        save: onSave,
      });
    };

    return {
      codeHtml,
      codeJs,
      openConfirmLocal,
    };
  },
};
