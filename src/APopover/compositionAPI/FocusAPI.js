import {
  ref,
  toRef,
} from "vue";

import {
  focusableSelector,
} from "../../const/AFocusableElements";

export default function FocusAPI(props, {
  getButtonElement = () => undefined,
  popoverRef = ref(undefined),
}) {
  const focusOnOpen = toRef(props, "focusOnOpen");

  const getFocusableElements = () => {
    return popoverRef.value ?
      Array.from(popoverRef.value.querySelectorAll(focusableSelector))
        .filter(element => !element.disabled && element.getAttribute("tabindex") !== "-1") :
      [];
  };

  /**
   * "first": the first element of the content (body, footer), else the close button, else the popover;
   * "popover": the popover itself; "none": the focus stays.
   */
  const setFocusOnOpen = () => {
    if (!popoverRef.value || focusOnOpen.value === "none") {
      return;
    }
    let target;
    if (focusOnOpen.value === "first") {
      const ELEMENTS = getFocusableElements();
      target = ELEMENTS.find(element => !element.closest(".a_popover__header")) || ELEMENTS[0];
    }
    (target || popoverRef.value).focus();
  };

  const setFocusToButton = () => {
    getButtonElement()?.focus?.();
  };

  const isFocusInside = (element = document.activeElement) => {
    const BUTTON = getButtonElement();
    return !!element && (
      !!popoverRef.value?.contains(element) ||
      (!!BUTTON && (BUTTON === element || BUTTON.contains(element)))
    );
  };

  // the next focusable element after the button, without the elements of the popover
  const getElementAfterButton = () => {
    const BUTTON = getButtonElement();
    const ELEMENTS = Array.from(document.querySelectorAll(focusableSelector))
      .filter(element => element === BUTTON || (!popoverRef.value?.contains(element) && !element.disabled));
    const INDEX = ELEMENTS.indexOf(BUTTON);
    return INDEX === -1 ? undefined : ELEMENTS[INDEX + 1];
  };

  /**
   * The popover in the container in body is not after the button in the DOM:
   * Tab after the last element goes to the element after the button, Shift+Tab on the first element to the button.
   */
  const onKeydownTab = ($event, { close = () => {} } = {}) => {
    const ELEMENTS = getFocusableElements();
    const FIRST = ELEMENTS[0];
    const LAST = ELEMENTS[ELEMENTS.length - 1];
    const ACTIVE = document.activeElement;
    if ($event.shiftKey) {
      if (!FIRST || ACTIVE === FIRST || ACTIVE === popoverRef.value) {
        $event.preventDefault();
        setFocusToButton();
      }
      return;
    }
    if (!LAST || ACTIVE === LAST) {
      $event.preventDefault();
      const NEXT = getElementAfterButton();
      close();
      NEXT?.focus();
    }
  };


  return {
    isFocusInside,
    onKeydownTab,
    setFocusOnOpen,
    setFocusToButton,
  };
}
