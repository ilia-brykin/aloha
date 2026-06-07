import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AConfirmAPI,
  EventBus,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageConfirmAsync",
  components: {
    AButton,
    AlohaExample,
  },
  setup() {
    const {
      changeConfirmOptions,
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const onSave = () => {
      changeConfirmOptions({
        loading: true,
      });

      setTimeout(() => {
        changeConfirmOptions({
          loading: false,
        });
        closeConfirm();
      }, 1200);
    };

    const openConfirmLoading = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_ASYNC_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_ASYNC_MODAL_BODY_",
        saveButtonText: "_A_CONFIRM_EXAMPLE_ASYNC_SAVE_TEXT_",
        save: onSave,
        stop: true,
      });
    };

    const openConfirmTimeout = () => {
      openConfirm({
        headerText: "_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_HEADER_",
        bodyHtml: "_A_CONFIRM_EXAMPLE_TIMEOUT_MODAL_BODY_",
        selectorClose: "#btn_confirm_timeout",
      });

      setTimeout(() => {
        EventBus.$emit("closeModalConfirm");
      }, 2500);
    };

    return {
      codeHtml,
      codeJs,
      openConfirmLoading,
      openConfirmTimeout,
    };
  },
};
