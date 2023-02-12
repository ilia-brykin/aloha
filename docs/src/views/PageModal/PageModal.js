import AButton from "../../../../src/AButton/AButton";
import AModal from "../../../../src/AModal/AModal";

import AConfirmAPI from "../../../../src/compositionAPI/AConfirmAPI";

export default {
  name: "PageModal",
  components: {
    AButton,
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
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },
  },
};
