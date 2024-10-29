import {
  ref,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

import AKeysCode from "../../const/AKeysCode";
import {
  focusableSelector,
} from "../../const/AFocusableElements";

export default function KeydownAPI(props, {
  closeMenu = () => {},
}) {
  const useEscapeForMobile = toRef(props, "useEscapeForMobile");

  const menuRef = ref(undefined);

  const {
    isMobileWidth,
  } = AMobileAPI();

  const trapFocus = EVENT => {
    if (!menuRef.value) {
      return;
    }

    const FOCUSABLE_ELEMENTS = menuRef.value.querySelectorAll(focusableSelector);
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

  const pressEscape = $event => {
    if (!useEscapeForMobile.value) {
      return;
    }

    closeMenu();
    $event.preventDefault();
    $event.stopPropagation();
  };

  const keydown = $event => {
    const EVENT = $event || window.$event;
    if (EVENT.key === "Escape" || EVENT.keyCode === AKeysCode.escape) {
      pressEscape($event);
    } else if (EVENT.key === "Tab" || EVENT.keyCode === AKeysCode.tab) {
      trapFocus(EVENT);
    }
  };

  const setListenerForKeydown = () => {
    if (isMobileWidth.value) {
      document.addEventListener("keydown", keydown);
    }
  };


  const removeListenerForKeydown = () => {
    document.removeEventListener("keydown", keydown);
  };

  return {
    menuRef,
    removeListenerForKeydown,
    setListenerForKeydown,
  };
}
