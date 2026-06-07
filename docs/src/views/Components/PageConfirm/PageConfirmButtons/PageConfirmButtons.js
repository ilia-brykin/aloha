import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AConfirmAPI,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageConfirmButtons",
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

    const onArchive = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_BUTTONS_MODAL_BODY_",
        save: onArchive,
        size: "large",
        saveButtonText: "_A_CONFIRM_EXAMPLE_BUTTONS_SAVE_TEXT_",
        closeButtonText: "_A_CONFIRM_EXAMPLE_BUTTONS_CLOSE_TEXT_",
      });
    };

    return {
      codeHtml,
      codeJs,
      openConfirmLocal,
    };
  },
};
