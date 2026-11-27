import {
  computed,
  toRef,
} from "vue";

import {
  getModalPosition,
} from "./ModalStackAPI";

export default function ZIndexAPI(props, {
  modalKey,
}) {
  const backdropZIndex = toRef(props, "backdropZIndex");
  const zIndex = toRef(props, "zIndex");

  // the position in the stack of the open modals (not the count of .a_backdrop, AMenu uses the class too)
  const position = computed(() => {
    return getModalPosition(modalKey);
  });

  const stylesZIndexModal = computed(() => {
    const STYLES = {};

    if (zIndex.value) {
      STYLES["--a_modal_z_index"] = zIndex.value;
    } else if (position.value > 0) {
      STYLES["--a_modal_z_index"] = 1055 + position.value;
    }

    return STYLES;
  });

  const stylesBackdrop = computed(() => {
    const STYLES = {};

    if (backdropZIndex.value) {
      STYLES["--a_backdrop_z_index"] = backdropZIndex.value;
    } else if (position.value > 0) {
      STYLES["--a_backdrop_z_index"] = 1054 + position.value;
    }

    return STYLES;
  });

  return {
    stylesBackdrop,
    stylesZIndexModal,
  };
}
