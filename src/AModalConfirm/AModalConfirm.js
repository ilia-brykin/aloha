import {
  computed,
  h, onBeforeUnmount,
} from "vue";

import AModal from "../AModal/AModal";

import AConfirmAPI from "../compositionAPI/AConfirmAPI";
import CloseFromOutsideAPI from "./compositionAPI/CloseFromOutsideAPI";

// @vue/component
export default {
  name: "AModalConfirm",
  setup() {
    const {
      closeConfirm,
      confirmOptions,
      isModalHidden,
    } = AConfirmAPI();

    const {
      destroyEventBusCloseFromOutside,
      initEventBusCloseFromOutside,
    } = CloseFromOutsideAPI({
      isModalHidden,
    });

    const modalProps = computed(() => {
      return {
        close: closeConfirm,
        isModalHidden: isModalHidden.value,
        isConfirm: true,
        ...confirmOptions.value
      };
    });

    initEventBusCloseFromOutside();

    onBeforeUnmount(() => {
      destroyEventBusCloseFromOutside();
    });

    return {
      modalProps,
    };
  },
  render() {
    return h(AModal, this.modalProps, this.$slots);
  },
};
