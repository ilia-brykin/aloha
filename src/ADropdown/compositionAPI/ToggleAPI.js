import {
  ref,
  toRef,
} from "vue";

import ADropdownGlobalAPI from "../../compositionAPI/ADropdownGlobalAPI";

import AKeysCode from "../../const/AKeysCode";
import {
  setFocusToNextFocusableElement,
  setFocusToPreviousFocusableElement,
} from "../../utils/utilsDOM";
import {
  forEach,
} from "lodash-es";

export default function ToggleAPI(props, { emit }, {
  dropdownButtonRef = ref(undefined),
  dropdownRef = ref(undefined),
  destroyPopover = () => {},
  setFocusToFirstElement = () => {},
  startPopper = () => {},
}) {
  const disabled = toRef(props, "disabled");
  const dropdownRenderDefault = toRef(props, "dropdownRenderDefault");
  const elementsForArrows = toRef(props, "elementsForArrows");
  const isCloseByClickInside = toRef(props, "isCloseByClickInside");
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
  const wasOpened = ref(dropdownRenderDefault.value || false);

  const {
    closeDropdownGlobal,
    openDropdownGlobal,
  } = ADropdownGlobalAPI();

  const pressArrows = ({ down }) => {
    const ELEMENTS = dropdownRef.value.querySelectorAll(elementsForArrows.value);
    if (ELEMENTS.length === 0) {
      return;
    }
    if (dropdownButtonRef.value?.$el === document.activeElement) {
      if (down) {
        ELEMENTS[0].focus();
      } else {
        ELEMENTS[ELEMENTS.length - 1].focus();
      }
      return;
    }
    forEach(ELEMENTS, (element, index) => {
      if (element === document.activeElement) {
        if (down) {
          if (index < ELEMENTS.length - 1) {
            ELEMENTS[index + 1].focus();
          }
        } else {
          if (index > 0) {
            ELEMENTS[index - 1].focus();
          }
        }
        return false;
      }
    });
  };

  const setFocusToButton = () => {
    dropdownButtonRef.value?.$el?.focus();
  };

  const pressButton = $event => {
    const EVENT = $event || window.$event;
    if (EVENT.keyCode === AKeysCode.arrowDown ||
      EVENT.keyCode === AKeysCode.arrowUp) { // arrow down or up
      if (!lockArrowsNavigation.value) {
        return;
      }
      const DOWN = EVENT.keyCode === AKeysCode.arrowDown;
      pressArrows({ down: DOWN });
      $event.preventDefault();
      $event.stopPropagation();
    } else if (EVENT.keyCode === AKeysCode.escape) {
      if (useEscape.value) {
        onClose({ trigger: "click" });
        $event.preventDefault();
        $event.stopPropagation();
      }
    } else if (EVENT.keyCode === AKeysCode.tab) {
      if (!lockTabNavigation.value) {
        return;
      }
      if (EVENT.shiftKey) {
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
    document.addEventListener("click", onClickEvent);
  };

  const destroyEventCloseClick = () => {
    document.removeEventListener("click", onClickEvent);
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
    if (isListWidthSameWithButton.value &&
      dropdownButtonRef.value) {
      buttonWidth.value = dropdownButtonRef.value.clientWidth;
    }
  };

  const onOpen = ({ trigger = "click", selectorToFocus } = {}) => {
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
          setFocusToFirstElement();
        });
      }
      openDropdownGlobal();
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
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      onToggle({ $event });
      $event.stopPropagation();
      $event.preventDefault();
    }
    if ($event.keyCode === AKeysCode.arrowUp ||
      $event.keyCode === AKeysCode.arrowDown) {
      if (!statusExpanded.value) {
        onOpen();
      }
    }
  };

  function onCloseLocal({ trigger }) {
    destroyEventCloseClick();
    destroyEventPressArrows();
    destroyPopover();
    statusExpanded.value = false;

    closeDropdownGlobal();
    if (trigger && trigger !== "hover" && // the event did not come from outside
      triggerOpen.value !== "hover") {
      setFocusToButton();
    }
    triggerOpen.value = undefined;
    emit("close");
  }

  function onClose({ trigger } = {}) {
    if (!statusExpanded.value) {
      return;
    }

    if (trigger === "hover") {
      if (triggerOpen.value !== "hover") { // was opened by another event
        return;
      }
      timerCloseHover.value = setTimeout(() => {
        onCloseLocal({ trigger });
      }, 120);
    } else {
      onCloseLocal({ trigger });
    }
  }

  function onClickEvent($event) {
    if (dropdownRef.value.contains($event.target)) {
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
