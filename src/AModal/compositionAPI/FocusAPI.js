import {
  ref,
} from "vue";

import {
  focusableSelector,
} from "../../const/AFocusableElements";

export default function FocusAPI() {
  const modalRef = ref(undefined);
  const modalWrapperRef = ref(undefined);

  const setFocusToModal = () => {
    setTimeout(() => {
      if (modalRef.value) {
        modalRef.value.focus();
      }
    });
  };

  const trapFocus = EVENT => {
    const FOCUSABLE_ELEMENTS = modalWrapperRef.value.querySelectorAll(focusableSelector);
    if (FOCUSABLE_ELEMENTS.length === 0) {
      EVENT.preventDefault();
      return;
    }
    const FIRST_FOCUSABLE_ELEMENT = FOCUSABLE_ELEMENTS[0];
    const LAST_FOCUSABLE_ELEMENT = FOCUSABLE_ELEMENTS[FOCUSABLE_ELEMENTS.length - 1];
    if (EVENT.shiftKey) { // Shift + Tab
      if (document.activeElement === FIRST_FOCUSABLE_ELEMENT) {
        setFocusToModal();
        EVENT.preventDefault();
      } else if (document.activeElement === modalRef.value) { // Focus in .modal
        LAST_FOCUSABLE_ELEMENT.focus();
        EVENT.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === LAST_FOCUSABLE_ELEMENT) {
        setFocusToModal();
        EVENT.preventDefault();
      }
    }
  };

  return {
    modalRef,
    modalWrapperRef,
    setFocusToModal,
    trapFocus,
  };
}
