import {
  computed,
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import {
  autoUpdate,
  computePosition,
  flip,
  hide,
  limitShift,
  shift,
} from "@floating-ui/vue";
import {
  isElementVisibleOrCoveredByPopover,
} from "../../utils/utils";

import AEventOutsideAPI from "../../../compositionAPI/AEventOutsideAPI";

import AKeysCode from "../../../const/AKeysCode";
import {
  forEach,
} from "lodash-es";

const ELEMENTS_FOR_ARROWS = ".a_select__element_clickable:not([disabled]):not([data-hide])";

export default function ToggleAPI(props, {
  emit,
}, {
  closePopup = () => {},
  htmlIdLocal = computed(() => ""),
  openPopup = () => {},
}) {
  const disabled = toRef(props, "disabled");
  const menuWidthType = toRef(props, "menuWidthType");

  const buttonRef = ref(undefined);
  const cleanupPopper = ref(undefined);
  const isOpen = ref(false);
  const menuParentRef = ref(undefined);
  const menuRef = ref(undefined);
  const placement = toRef(props, "placement");
  const statusEventPressArrows = ref(undefined);

  const elementsForClickOutside = computed(() => {
    return [
      buttonRef.value,
      menuParentRef.value,
    ];
  });

  const menuWidth = computed(() => {
    if (menuWidthType.value === "as_button") {
      return buttonRef.value.clientWidth;
    }
    return undefined;
  });

  const {
    setEventClickOutside,
    destroyEventClickOutside,
  } = AEventOutsideAPI({
    $elements: elementsForClickOutside,
    clickOutsideCallback: closePopover,
  });

  const pressArrows = ({ isArrowDown }) => {
    const ELEMENTS = menuRef.value.querySelectorAll(ELEMENTS_FOR_ARROWS);
    if (ELEMENTS.length === 0) {
      return;
    }
    let isFocusInstalled = false;
    forEach(ELEMENTS, (element, index) => {
      if (element === document.activeElement) {
        isFocusInstalled = true;
        if (isArrowDown) {
          if (index < ELEMENTS.length - 1) {
            ELEMENTS[index + 1].focus();
          }
        } else if (index > 0) {
          ELEMENTS[index - 1].focus();
        }
        return false;
      }
    });
    if (!isFocusInstalled) {
      ELEMENTS[0].focus();
    }
  };

  const setFocusToButton = () => {
    buttonRef.value.focus();
  };

  const pressButton = $event => {
    const KEY_CODE = $event.keyCode;
    const IS_ARROW_DOWN = KEY_CODE === AKeysCode.arrowDown;
    if (IS_ARROW_DOWN ||
      KEY_CODE === AKeysCode.arrowUp) {
      pressArrows({ isArrowDown: IS_ARROW_DOWN });
      $event.preventDefault();
    } else if (KEY_CODE === AKeysCode.escape) {
      closePopover();
      setFocusToButton();
      $event.preventDefault();
      $event.stopPropagation();
    } else if (KEY_CODE === AKeysCode.tab) {
      closePopover();
      setFocusToButton();
    }
  };

  const destroyPopover = () => {
    if (cleanupPopper.value) {
      cleanupPopper.value();
      cleanupPopper.value = undefined;
    }
  };

  const onOpen = () => {
    openPopup({
      id: htmlIdLocal.value,
    });
    emit("open");
  };

  const setFocusForFirstElementInList = () => {
    const ELEMENT = menuRef.value.querySelector(ELEMENTS_FOR_ARROWS);
    if (ELEMENT) {
      ELEMENT.focus();
    }
  };

  const initEventPressArrows = () => {
    if (statusEventPressArrows.value) { // Event ist schon installiert
      return;
    }
    statusEventPressArrows.value = true;
    document.addEventListener("keydown", pressButton);
  };

  const onShow = () => {
    onOpen();
    setTimeout(() => {
      setFocusForFirstElementInList();
      initEventPressArrows();
    });
  };

  const openPopoverWithFloatingUi = () => {
    if (!cleanupPopper.value &&
      buttonRef.value &&
      menuRef.value) {
      cleanupPopper.value = autoUpdate(
        buttonRef.value,
        menuRef.value,
        () => {
          if (!buttonRef.value ||
            !menuRef.value) {
            return;
          }

          computePosition(
            buttonRef.value,
            menuRef.value,
            {
              placement: placement.value,
              middleware: [
                flip(),
                shift({ limiter: limitShift() }),
                hide({ strategy: "referenceHidden" }),
              ],
            },
          ).then(({ x, y, middlewareData }) => {
            const hiddenByMiddleware = middlewareData?.hide?.referenceHidden;
            const overlapped = !isElementVisibleOrCoveredByPopover({ element: buttonRef.value, popoverElement: menuRef.value });
            if (hiddenByMiddleware || overlapped) {
              closePopover();

              return;
            }
            if (!buttonRef.value.clientWidth) { // if button hide
              closePopover();

              return;
            }
            const SOURCE = {
              left: `${ x }px`,
              top: `${ y }px`,
            };
            if (menuWidth.value) {
              SOURCE.maxWidth = `${ menuWidth.value }px`;
              SOURCE.minWidth = `${ menuWidth.value }px`;
            }
            Object.assign(menuRef.value.style, SOURCE);
          });
        },
      );
      onShow();
    }
  };

  const openPopover = () => {
    if (disabled.value) {
      return;
    }
    isOpen.value = true;
    openPopoverWithFloatingUi();
    // Timeout is needed to prevent closing the select when clicking on an element that contains HTML
    setTimeout(() => {
      setEventClickOutside();
    }, 100);
  };

  const togglePopover = () => {
    if (isOpen.value) {
      closePopover();
      setFocusToButton();
    } else {
      openPopover();
    }
  };

  const handleKeydown = $event => {
    const KEY_CODE = $event.keyCode;
    if (KEY_CODE === AKeysCode.enter ||
      KEY_CODE === AKeysCode.space) {
      togglePopover();
      $event.preventDefault();
    } else if (!isOpen.value &&
      (KEY_CODE === AKeysCode.arrowUp ||
        KEY_CODE === AKeysCode.arrowDown)) {
      openPopover();
      $event.preventDefault();
    }
  };

  const destroyEventPressArrows = () => {
    if (!statusEventPressArrows.value) { // Event ist schon zestört
      return;
    }
    statusEventPressArrows.value = false;
    document.removeEventListener("keydown", pressButton);
  };

  function closePopover() {
    isOpen.value = false;
    destroyPopover();
    destroyEventClickOutside();
    destroyEventPressArrows();
    closePopup({
      id: htmlIdLocal.value,
    });
  }

  onBeforeUnmount(() => destroyEventPressArrows());

  return {
    buttonRef,
    handleKeydown,
    isOpen,
    menuParentRef,
    menuRef,
    togglePopover,
  };
}
