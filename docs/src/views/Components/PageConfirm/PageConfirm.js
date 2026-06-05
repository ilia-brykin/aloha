import {
  computed,
} from "vue";

import {
  AConfirmAPI,
  AModal,
  EventBus,
  getTranslatedText,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageConfirm",
  components: {
    AModal,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const openConfirmText = computed(() => {
      return getTranslatedText({
        placeholder: "_A_CONFIRM_OPEN_",
      });
    });

    const openConfirmTimeoutText = computed(() => {
      return getTranslatedText({
        placeholder: "_A_CONFIRM_OPEN_TIMEOUT_",
      });
    });

    const save = () => {
      console.log("save");
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: getTranslatedText({
          placeholder: "_A_CONFIRM_MODAL_HEADER_",
        }),
        bodyHtml: getTranslatedText({
          placeholder: "_A_CONFIRM_MODAL_BODY_HTML_",
        }),
        save: save,
        close: () => {
          console.log("close");
        },
        selectorClose: "#btn_confirm",
      });
    };

    const openConfirmWithTimeout = () => {
      openConfirm({
        headerText: getTranslatedText({
          placeholder: "_A_CONFIRM_MODAL_HEADER_",
        }),
        bodyHtml: getTranslatedText({
          placeholder: "_A_CONFIRM_MODAL_BODY_HTML_",
        }),
        save: save,
        selectorClose: "#btn_confirm_timeout",
      });

      setTimeout(() => {
        EventBus.$emit("closeModalConfirm");
      }, 5000);
    };

    return {
      openConfirmText,
      openConfirmLocal,
      openConfirmTimeoutText,
      openConfirmWithTimeout,
      pageTitle,
    };
  },
};
