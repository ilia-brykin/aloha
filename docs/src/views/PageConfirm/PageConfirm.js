import AModal from "../../../../src/AModal/AModal";

import AConfirmAPI from "../../../../src/compositionAPI/AConfirmAPI";

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

    return {
      openConfirmLocal,
    };
  },
};
