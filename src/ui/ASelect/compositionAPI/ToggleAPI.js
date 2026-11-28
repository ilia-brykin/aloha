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
  limitShift,
  shift,
} from "@floating-ui/vue";

import AEventOutsideAPI from "../../../compositionAPI/AEventOutsideAPI";

import {
  isReferenceHidden,
} from "../../../utils/isReferenceHidden";


const ELEMENTS_FOR_ARROWS = ".a_select__element_clickable:not([disabled]):not([data-hide])";

export default function ToggleAPI(props, {
  emit,
}, {
  closePopup = () => {},
  htmlIdLocal = computed(() => ""),
  openPopup = () => {},
}) {
  const disabled = toRef(props, "disabled");
  const isCloseByButtonInvisibleInViewport = toRef(props, "isCloseByButtonInvisibleInViewport");
  const menuWidthType = toRef(props, "menuWidthType");

  const buttonRef = ref(undefined);
  // the visible box of the field: with closeable values it is a wrapper around the values and the combobox
  const toggleRef = ref(undefined);
  const getReferenceElement = () => toggleRef.value || buttonRef.value;
  const cleanupPopper = ref(undefined);
  const isOpen = ref(false);
  const menuParentRef = ref(undefined);
  const menuRef = ref(undefined);
  const placement = toRef(props, "placement");
  const statusEventPressArrows = ref(undefined);

  const elementsForClickOutside = computed(() => {
    return [
      toggleRef.value,
      buttonRef.value,
      menuParentRef.value,
    ];
  });

  const menuWidth = computed(() => {
    if (menuWidthType.value === "as_button") {
      return getReferenceElement().clientWidth;
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

  const getElementsForArrows = () => {
    return Array.from(menuRef.value?.querySelectorAll(ELEMENTS_FOR_ARROWS) || []);
  };

  /**
   * ArrowDown / ArrowUp go round, Home / End to the first / last element,
   * a letter to the next option that starts with it (not while typing in a search field).
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
      const OPTIONS = ELEMENTS.filter(element => element.getAttribute("role") === "option");
      const START = OPTIONS.indexOf(document.activeElement);
      for (let i = 1; i <= OPTIONS.length; i++) {
        const OPTION = OPTIONS[(Math.max(START, -1) + i + OPTIONS.length) % OPTIONS.length];
        if (OPTION.textContent.trim().toLowerCase().startsWith(CHAR)) {
          target = OPTION;
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

  const setFocusToButton = () => {
    buttonRef.value?.focus();
  };

  // the keys are handled only when the focus is in the select (not e.g. in another field of the page)
  const isFocusInSelect = () => {
    const ACTIVE = document.activeElement;
    return !!ACTIVE && (
      !!getReferenceElement()?.contains(ACTIVE) ||
      !!menuParentRef.value?.contains(ACTIVE)
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
    if ($event.key === "Escape") {
      closePopover();
      setFocusToButton();
      $event.preventDefault();
      $event.stopPropagation();
      return;
    }
    if (!isFocusInSelect()) {
      return;
    }
    const IS_FIELD = ["INPUT", "TEXTAREA"].indexOf(document.activeElement?.tagName) !== -1;
    if (["ArrowDown", "ArrowUp"].indexOf($event.key) !== -1 ||
      (!IS_FIELD && (["Home", "End"].indexOf($event.key) !== -1 || isTypeaheadKey($event)))) {
      if (moveFocus({ key: $event.key })) {
        $event.preventDefault();
      }
    } else if ($event.key === "Tab") {
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
        getReferenceElement(),
        menuRef.value,
        () => {
          if (!getReferenceElement() ||
            !menuRef.value) {
            return;
          }

          computePosition(
            getReferenceElement(),
            menuRef.value,
            {
              placement: placement.value,
              middleware: [
                flip(),
                shift({ limiter: limitShift() }),
              ],
            },
          ).then(({ x, y }) => {
            if (!menuRef.value) {
              return;
            }
            if (isCloseByButtonInvisibleInViewport.value && isReferenceHidden(getReferenceElement(), menuRef.value)) {
              const IS_FOCUS_INSIDE = menuRef.value.contains(document.activeElement);
              closePopover();
              // the focus back to the select, without a scroll of the page to it
              if (IS_FOCUS_INSIDE) {
                buttonRef.value?.focus({ preventScroll: true });
              }
              return;
            }
            if (!getReferenceElement()?.clientWidth) { // if button hide
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
    if ($event.key === "Enter" || $event.key === " ") {
      togglePopover();
      $event.preventDefault();
    } else if (!isOpen.value &&
      ($event.key === "ArrowUp" || $event.key === "ArrowDown")) {
      openPopover();
      $event.preventDefault();
      // the open list gets the keys, not this event again
      $event.stopPropagation();
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
    toggleRef,
  };
}
