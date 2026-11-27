import {
  ref,
  toRef,
} from "vue";

import {
  addModal,
  removeModal,
} from "./ModalStackAPI";

export default function ShowModalAPI(props, {
  modalKey,
  modalWrapperRef = ref(undefined),
  removeListenerForKeydown = () => {},
  setFocusByDestroy = () => {},
  setFocusByShowModal = () => {},
  setListenerForKeydown = () => {},
}) {
  const isModalHidden = toRef(props, "isModalHidden");
  const useInert = toRef(props, "useInert");

  let isShown = false;
  // the element that opened the modal: it gets the focus back after closing
  let elementOpener;

  const showModal = () => {
    if (isModalHidden.value || isShown) {
      return;
    }
    isShown = true;
    const ACTIVE = document.activeElement;
    elementOpener = ACTIVE && ACTIVE !== document.body ? ACTIVE : undefined;

    addModal({
      key: modalKey,
      getWrapper: () => modalWrapperRef.value,
      useInert: useInert.value,
    });
    setFocusByShowModal();
    setListenerForKeydown();
  };

  const hideModal = () => {
    if (!isShown) {
      return;
    }
    isShown = false;
    removeModal(modalKey);
    removeListenerForKeydown();
    const OPENER = elementOpener;
    elementOpener = undefined;
    // selector-close / selector-close-ids first, else the element that opened the modal
    setFocusByDestroy({
      fallback: () => {
        if (OPENER?.isConnected) {
          OPENER.focus();
        }
      },
    });
  };

  return {
    hideModal,
    showModal,
  };
}
