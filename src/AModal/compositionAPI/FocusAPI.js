import {
  ref, toRef,
} from "vue";

import {
  focusableSelector,
} from "../../const/AFocusableElements";

export default function FocusAPI(props) {
  const focusStartId = toRef(props, "focusStartId");
  const useFocusOnStart = toRef(props, "focusStartId");

  const modalRef = ref(undefined);
  const modalWrapperRef = ref(undefined);

  const setFocusToElementWithFocusStartId = () => {
    const element = document.getElementById(focusStartId.value);

    if (element) {
      element.focus();
    }
  };

  const setFocusToFirstElement = () => {
    const FOCUSABLE_ELEMENTS = modalWrapperRef.value?.querySelectorAll(focusableSelector) || [];
    if (FOCUSABLE_ELEMENTS.length === 0) {
      return;
    }

    FOCUSABLE_ELEMENTS[0].focus();
  };

  const setFocusByShowModal = () => {
    setTimeout(() => {
      if (useFocusOnStart.value) {
        return;
      }

      if (focusStartId.value) {
        setFocusToElementWithFocusStartId();
      } else {
        setFocusToFirstElement();
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
        LAST_FOCUSABLE_ELEMENT.focus();
        EVENT.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === LAST_FOCUSABLE_ELEMENT) {
        FIRST_FOCUSABLE_ELEMENT.focus();
        EVENT.preventDefault();
      }
    }
  };

  return {
    modalRef,
    modalWrapperRef,
    setFocusByShowModal,
    trapFocus,
  };
}
