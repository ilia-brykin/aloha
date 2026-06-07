import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AConfirmAPI,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageConfirmFocus",
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

    const onDelete = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_FOCUS_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_FOCUS_MODAL_BODY_",
        saveButtonText: "_A_CONFIRM_EXAMPLE_FOCUS_SAVE_TEXT_",
        save: onDelete,
        selectorCloseIds: [
          "btn_confirm_focus",
          "btn_confirm_focus_secondary",
        ],
      });
    };

    return {
      codeHtml,
      codeJs,
      openConfirmLocal,
    };
  },
};
