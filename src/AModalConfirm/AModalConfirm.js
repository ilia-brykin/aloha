import {
  computed,
  h,
} from "vue";

import AModal from "../AModal/AModal";

import ConfirmAPI from "../compositionAPI/ConfirmAPI";

// @vue/component
export default {
  name: "AModalConfirm",
  setup() {
    const {
      closeConfirm,
      confirmOptions,
      isModalHidden,
    } = ConfirmAPI();

    const modalProps = computed(() => {
      return {
        close: closeConfirm,
        isModalHidden: isModalHidden.value,
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
