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
      console.log("save");
      closeConfirm();
    };

    const openConfirmLocal = () => {
      openConfirm({
        headerText: "Aloha",
        bodyHtml: "<div>Aloha <strong>Hola</strong></div>",
        save: save,
        close: () => {
          console.log("close");
        },
        selectorClose: "#btn_confirm",
      });
    };

    return {
      openConfirmLocal,
    };
  },
};
