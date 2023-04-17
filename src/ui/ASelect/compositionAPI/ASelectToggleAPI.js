import {
  computed,
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import AEventOutsideAPI from "../../../compositionAPI/AEventOutsideAPI";

import AKeysCode from "../../../const/AKeysCode";
import {
  createPopper,
} from "@popperjs/core";
import {
  forEach,
} from "lodash-es";

const ELEMENTS_FOR_ARROWS = ".a_select__element_clickable:not([disabled])";

export default function ASelectToggleAPI(props, {
  emit,
}) {
  const disabled = toRef(props, "disabled");

  const buttonRef = ref(undefined);
  const menuParentRef = ref(undefined);
  const menuRef = ref(undefined);
  const isOpen = ref(false);
  const popper = ref(undefined);
  const statusEventPressArrows = ref(undefined);

  const elementsForClickOutside = computed(() => {
    return [
      buttonRef.value,
      menuParentRef.value,
    ];
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
        } else {
          if (index > 0) {
            ELEMENTS[index - 1].focus();
          }
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
    if (popper.value) {
      popper.value.destroy();
      popper.value = undefined;
    }
  };

  const onOpen = () => {
    emit("open");
  };

  const menuWidthType = toRef(props, "menuWidthType");
  const setMenuWidth = () => {
    if (menuWidthType.value === "as_button") {
      const BUTTON_WIDTH = buttonRef.value.clientWidth;
      const BUTTON_WIDTH_STRING = `${ BUTTON_WIDTH }px`;
      menuRef.value.style.minWidth = BUTTON_WIDTH_STRING;
      menuRef.value.style.maxWidth = BUTTON_WIDTH_STRING;
    }
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
    setMenuWidth();
    setTimeout(() => {
      setFocusForFirstElementInList();
      initEventPressArrows();
    });
  };


  const placement = toRef(props, "placement");
  const openPopoverWithPopperjs = () => {
    if (!popper.value) {
      setTimeout(() => {
        popper.value = createPopper(
          buttonRef.value,
          menuRef.value,
          {
            placement: placement.value,
            removeOnDestroy: true,
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 0],
                },
              },
            ],
          },
        );
        onShow();
      });
    }
  };

  const openPopover = () => {
    if (disabled.value) {
      return;
    }
    isOpen.value = true;
    setEventClickOutside();
    openPopoverWithPopperjs();
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
