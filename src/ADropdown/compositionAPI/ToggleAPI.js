import {
  ref,
  toRef,
} from "vue";

import ADropdownGlobalAPI from "../../compositionAPI/ADropdownGlobalAPI";

import {
  setFocusToNextFocusableElement,
  setFocusToPreviousFocusableElement,
} from "../../utils/utilsDOM";

export default function ToggleAPI(props, { emit }, {
  closePopup = () => {},
  dropdownButtonRef = ref(undefined),
  dropdownRef = ref(undefined),
  destroyPopover = () => {},
  getElementsForArrows = () => [],
  openPopup = () => {},
  setFocusToFirstElement = () => {},
  setFocusToLastElement = () => {},
  startPopper = () => {},
}) {
  const disabled = toRef(props, "disabled");
  const dropdownRenderDefault = toRef(props, "dropdownRenderDefault");
  const id = toRef(props, "id");
  const isCloseByClickInside = toRef(props, "isCloseByClickInside");
  const isCloseByClickOutside = toRef(props, "isCloseByClickOutside");
  const isListWidthSameWithButton = toRef(props, "isListWidthSameWithButton");
  const lockArrowsNavigation = toRef(props, "lockArrowsNavigation");
  const lockTabNavigation = toRef(props, "lockTabNavigation");
  const persist = toRef(props, "persist");
  const useEscape = toRef(props, "useEscape");

  const buttonWidth = ref(undefined);
  const statusEventPressArrows = ref(false);
  const statusExpanded = ref(false);
  const timerCloseHover = ref(undefined);
  const triggerOpen = ref(undefined);
  const wasOpened = ref(false);

  const {
    closeDropdownGlobal,
    openDropdownGlobal,
  } = ADropdownGlobalAPI();

  const initWasOpened = () => {
    wasOpened.value = dropdownRenderDefault.value || false;
  };

  /**
   * WAI-ARIA menu: ArrowDown / ArrowUp go round, Home / End to the first / last item,
   * a letter to the next item that starts with it.
   */
  const moveFocus = ({ key }) => {
    const ELEMENTS = getElementsForArrows();
    if (ELEMENTS.length === 0) {
      return false;
    }
    const INDEX = ELEMENTS.indexOf(document.activeElement);
    const COUNT = ELEMENTS.length;
    let target;
    if (key === "ArrowDown") {
      target = INDEX === -1 ? ELEMENTS[0] : ELEMENTS[(INDEX + 1) % COUNT];
    } else if (key === "ArrowUp") {
      target = INDEX === -1 ? ELEMENTS[COUNT - 1] : ELEMENTS[(INDEX - 1 + COUNT) % COUNT];
    } else if (key === "Home") {
      target = ELEMENTS[0];
    } else if (key === "End") {
      target = ELEMENTS[COUNT - 1];
    } else {
      const CHAR = key.toLowerCase();
      for (let i = 1; i <= COUNT; i++) {
        const ELEMENT = ELEMENTS[(Math.max(INDEX, -1) + i + COUNT) % COUNT];
        if (ELEMENT.textContent.trim().toLowerCase().startsWith(CHAR)) {
          target = ELEMENT;
          break;
        }
      }
    }
    if (!target) {
      return false;
    }
    target.focus();
    return true;
  };

  const getDropdownButtonElement = () => {
    return dropdownButtonRef.value?.$el || dropdownButtonRef.value;
  };

  const setFocusToButton = () => {
    getDropdownButtonElement()?.focus?.();
  };

  // the keyboard is handled only when the focus is on the button or in the menu, not e.g. in another field of the page
  const isFocusInDropdown = () => {
    const ACTIVE = document.activeElement;
    const BUTTON = getDropdownButtonElement();
    return !!ACTIVE && (
      (BUTTON && (BUTTON === ACTIVE || BUTTON.contains?.(ACTIVE))) ||
      !!dropdownRef.value?.contains(ACTIVE)
    );
  };

  const isTypeaheadKey = $event => {
    return $event.key.length === 1 &&
      $event.key !== " " &&
      !$event.ctrlKey &&
      !$event.metaKey &&
      !$event.altKey;
  };

  const pressButton = $event => {
    // Escape closes also a dropdown opened by hover (WCAG 1.4.13)
    if ($event.key === "Escape") {
      if (useEscape.value) {
        onClose({ trigger: "click" });
        $event.preventDefault();
        $event.stopPropagation();
      }
      return;
    }
    if (!isFocusInDropdown()) {
      return;
    }
    if (["ArrowDown", "ArrowUp", "Home", "End"].indexOf($event.key) !== -1 || isTypeaheadKey($event)) {
      if (!lockArrowsNavigation.value) {
        return;
      }
      // letters in a field of the menu are typed, not used for the search
      const IS_FIELD = ["INPUT", "TEXTAREA", "SELECT"].indexOf(document.activeElement?.tagName) !== -1;
      if (isTypeaheadKey($event) && IS_FIELD) {
        return;
      }
      if (moveFocus({ key: $event.key })) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    } else if ($event.key === "Tab") {
      if (!lockTabNavigation.value) {
        return;
      }
      if ($event.shiftKey) {
        onClose();
        setTimeout(() => {
          setFocusToPreviousFocusableElement({
            element: dropdownButtonRef.value?.$el,
          });
        });
      } else {
        onClose();
        setTimeout(() => {
          setFocusToNextFocusableElement({
            element: dropdownButtonRef.value?.$el,
          });
        });
      }
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  const setEventCloseClick = () => {
    if (isCloseByClickOutside.value) {
      document.addEventListener("click", onClickEvent);
    }
  };

  const destroyEventCloseClick = () => {
    if (isCloseByClickOutside.value) {
      document.removeEventListener("click", onClickEvent);
    }
  };

  const initEventPressArrows = () => {
    if (statusEventPressArrows.value) { // Event ist schon installiert
      return;
    }
    statusEventPressArrows.value = true;
    document.body.addEventListener("keydown", pressButton);
  };

  const destroyEventPressArrows = () => {
    if (!statusEventPressArrows.value) { // Event ist schon zestört
      return;
    }
    statusEventPressArrows.value = false;
    document.body.removeEventListener("keydown", pressButton);
  };

  const setButtonWidth = () => {
    const BUTTON = getDropdownButtonElement();
    if (isListWidthSameWithButton.value &&
      BUTTON) {
      buttonWidth.value = BUTTON.clientWidth;
    }
  };

  // focus: "first" or "last" item (ArrowUp on the button opens the menu at the last item)
  const onOpen = ({ trigger = "click", selectorToFocus, focus = "first" } = {}) => {
    if (trigger === "hover" && triggerOpen.value === "hover") {
      clearTimeout(timerCloseHover.value);
    }
    if (disabled.value || statusExpanded.value) {
      return;
    }
    triggerOpen.value = trigger;
    setButtonWidth();
    initEventPressArrows();
    statusExpanded.value = true;
    if (persist.value &&
      wasOpened.value) {
      startPopper();
    }
    wasOpened.value = true;
    setTimeout(() => {
      setEventCloseClick();
      if (selectorToFocus) {
        setTimeout(() => {
          document.getElementById(selectorToFocus).focus();
        });
      } else if (trigger === "click") {
        setTimeout(() => {
          if (focus === "last") {
            setFocusToLastElement();
          } else {
            setFocusToFirstElement();
          }
        });
      }
      openDropdownGlobal();
      openPopup({
        id: id.value,
      });
      emit("open");
    });
  };

  const onToggle = ({ $event }) => {
    if (triggerOpen.value === "hover") {
      if (statusExpanded.value) {
        triggerOpen.value = "click";
        $event.stopPropagation();
      }
    } else if (statusExpanded.value) {
      onClose({ trigger: "click" });
    } else {
      onOpen();
    }
  };

  const onKeydown = $event => {
    if ($event.key === "Enter" || $event.key === " ") {
      onToggle({ $event });
      $event.stopPropagation();
      $event.preventDefault();
      return;
    }
    // a closed menu opens at the first (ArrowDown) or last (ArrowUp) item
    if (($event.key === "ArrowUp" || $event.key === "ArrowDown") && !statusExpanded.value) {
      onOpen({ focus: $event.key === "ArrowUp" ? "last" : "first" });
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  function onCloseLocal({ isFocusButton = true, trigger }) {
    destroyEventCloseClick();
    destroyEventPressArrows();
    destroyPopover();
    statusExpanded.value = false;

    closeDropdownGlobal();
    if (trigger && trigger !== "hover" && // the event did not come from outside
      triggerOpen.value !== "hover" &&
      isFocusButton) {
      setFocusToButton();
    }
    triggerOpen.value = undefined;
    closePopup({
      id: id.value,
    });
    emit("close");
  }

  function onClose({ isFocusButton = true, trigger } = {}) {
    if (!statusExpanded.value) {
      return;
    }

    if (trigger === "hover") {
      if (triggerOpen.value !== "hover") { // was opened by another event
        return;
      }
      timerCloseHover.value = setTimeout(() => {
        onCloseLocal({
          isFocusButton,
          trigger,
        });
      }, 120);
    } else {
      onCloseLocal({
        isFocusButton,
        trigger,
      });
    }
  }

  function onClickEvent($event) {
    if (dropdownRef.value?.contains($event.target)) {
      if (isCloseByClickInside.value) {
        onClose();
        setFocusToButton();
      }
    } else {
      onClose();
    }
  }

  return {
    buttonWidth,
    destroyEventCloseClick,
    destroyEventPressArrows,
    initWasOpened,
    onClose,
    onKeydown,
    onOpen,
    onToggle,
    statusExpanded,
    timerCloseHover,
    triggerOpen,
    wasOpened,
  };
}
