import AModal from "../../../../src/AModal/AModal";

import ConfirmAPI from "../../../../src/compositionAPI/ConfirmAPI";

export default {
  name: "PageConfirm",
  components: {
    AModal,
  },
  setup() {
    const {
      closeConfirm,
      openConfirm,
    } = ConfirmAPI();

    const save = () => {
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "Aloha",
        bodyHtml: "<div>Aloha <strong>Hola</strong></div>",
        save: save,
      });
    };

    return {
      openConfirmLocal,
    };
  },
};
