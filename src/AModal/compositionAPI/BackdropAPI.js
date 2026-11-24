import {
  ref,
  toRef,
} from "vue";

/**
 * close-on-backdrop: a click outside of the dialog closes the modal.
 * The mouse must go down and up outside, so selecting text in the dialog and releasing outside does not close it.
 */
export default function BackdropAPI(props, {
  disabledLocal = ref(false),
  modalRef = ref(undefined),
}) {
  const close = toRef(props, "close");
  const closeOnBackdrop = toRef(props, "closeOnBackdrop");

  let isMousedownOutside = false;

  const onMousedownModal = $event => {
    isMousedownOutside = $event.target === modalRef.value;
  };

  const onClickModal = $event => {
    const IS_OUTSIDE = isMousedownOutside && $event.target === modalRef.value;
    isMousedownOutside = false;
    if (!closeOnBackdrop.value || !IS_OUTSIDE || disabledLocal.value) {
      return;
    }
    close.value();
  };

  return {
    onClickModal,
    onMousedownModal,
  };
}
