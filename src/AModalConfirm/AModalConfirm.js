import {
  computed,
  h,
} from "vue";

import AModal from "../AModal/AModal";

import AConfirmAPI from "../compositionAPI/AConfirmAPI";

// @vue/component
export default {
  name: "AModalConfirm",
  setup() {
    const {
      closeConfirm,
      confirmOptions,
      isModalHidden,
    } = AConfirmAPI();

    const modalProps = computed(() => {
      return {
        close: closeConfirm,
        isModalHidden: isModalHidden.value,
        isConfirm: true,
        ...confirmOptions.value
      };
    });

    return {
      modalProps,
    };
  },
  render() {
    return h(AModal, this.modalProps);
  },
};
