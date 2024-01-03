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
        isModalHidden: isModalHidden.value,
        isConfirm: true,
        ...confirmOptions.value,
        close: closeConfirm,
      };
    });

    return {
      modalProps,
    };
  },
  render() {
    return h(AModal, this.modalProps, this.$slots);
  },
};
