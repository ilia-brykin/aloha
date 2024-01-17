import AModal from "../../../../src/AModal/AModal";

import AConfirmAPI from "../../../../src/compositionAPI/AConfirmAPI";
import EventBus from "../../../../src/utils/EventBus";

export default {
  name: "PageConfirm",
  components: {
    AModal,
  },
  setup() {
    const {
      closeConfirm,
      openConfirm,
    } = AConfirmAPI();

    const save = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "Aloha",
        bodyHtml: "<div>Aloha <strong>Hola</strong></div>",
        save: save,
        selectorClose: "#btn_confirm",
      });
    };

    const openConfirmWithTimeout = () => {
      openConfirm({
        headerText: "Aloha",
        bodyHtml: "<div>Aloha <strong>Hola</strong></div>",
        save: save,
        selectorClose: "#btn_confirm_timeout",
      });

      setTimeout(() => {
        EventBus.$emit("closeModalConfirm");
      }, 5000);
    };

    return {
      openConfirmLocal,
      openConfirmWithTimeout,
    };
  },
};
