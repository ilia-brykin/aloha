import {
  AConfirmAPI,
  AModal,
  EventBus,
} from "aloha-vue";

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
