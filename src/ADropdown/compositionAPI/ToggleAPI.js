import {
  ref,
  toRef,
} from "vue";

import ADropdownGlobalAPI from "../../compositionAPI/ADropdownGlobalAPI";

import AKeysCode from "../../const/AKeysCode";
import {
  forEach,
} from "lodash-es";

export default function ToggleAPI(props, {
  dropdownButtonRef = ref(undefined),
  dropdownRef = ref(undefined),
  openPopoverWithPopperjs = () => {},
  destroyPopover = () => {},
  setFocusToFirstElement = () => {},
}) {
  const disabled = toRef(props, "disabled");
  const isCloseByClickInside = toRef(props, "isCloseByClickInside");
  const isListWidthSameWithButton = toRef(props, "isListWidthSameWithButton");
  const elementsForArrows = toRef(props, "elementsForArrows");

  const statusExpanded = ref(false);
  const buttonWidth = ref(undefined);
  const statusEventPressArrows = ref(false);

  const {
    closeDropdownGlobal,
    openDropdownGlobal,
  } = ADropdownGlobalAPI();

  const pressArrows = ({ down }) => {
    const ELEMENTS = dropdownRef.value.querySelectorAll(elementsForArrows.value);
    if (ELEMENTS.length === 0) {
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
    dropdownRef.value.focus();
  };

  const pressButton = $event => {
    const EVENT = $event || window.$event;
    if (EVENT.keyCode === AKeysCode.arrowDown ||
      EVENT.keyCode === AKeysCode.arrowUp) { // arrow down or up
      const DOWN = EVENT.keyCode === AKeysCode.arrowDown;
      pressArrows({ down: DOWN });
      $event.preventDefault();
      $event.stopPropagation();
    } else if (EVENT.keyCode === AKeysCode.escape) {
      onClose();
      setFocusToButton();
      $event.preventDefault();
      $event.stopPropagation();
    } else if (EVENT.keyCode === AKeysCode.tab) {
      onClose();
      setFocusToButton();
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

  const onOpen = () => {
    setButtonWidth();
    initEventPressArrows();
    statusExpanded.value = true;
    setTimeout(() => {
      openPopoverWithPopperjs();
      setEventCloseClick();
      setTimeout(() => {
        setFocusToFirstElement();
      });
      openDropdownGlobal();
    });
  };

  const onToggle = () => {
    if (disabled.value) {
      return;
    }
    if (statusExpanded.value) {
      onClose();
    } else {
      onOpen();
    }
  };

  const onKeydown = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space ||
      $event.keyCode === AKeysCode.arrowUp ||
      $event.keyCode === AKeysCode.arrowDown) {
      onToggle();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  function onClose() {
    destroyEventCloseClick();
    destroyEventPressArrows();
    destroyPopover();
    statusExpanded.value = false;
    closeDropdownGlobal();
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
    onKeydown,
    onToggle,
    statusExpanded,
  };
}
