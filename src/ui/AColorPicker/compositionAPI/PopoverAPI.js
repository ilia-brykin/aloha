import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import {
  autoUpdate,
  computePosition,
  flip,
  limitShift,
  offset,
  shift,
} from "@floating-ui/vue";

import AEventOutsideAPI from "../../../compositionAPI/AEventOutsideAPI";
import {
  closePopup,
  openPopup,
} from "../../../compositionAPI/APopupAPI";

const FOCUSABLE = "button:not([disabled]), input:not([disabled]), [tabindex='0']";

export default function PopoverAPI(props, { emit }, {
  htmlIdLocal = computed(() => ""),
  setColorFromModel = () => {},
}) {
  const disabled = toRef(props, "disabled");
  const placement = toRef(props, "placement");

  const cleanupPopper = ref(undefined);
  const isOpen = ref(false);

  /*
   * The popup is hidden until floating-ui has positioned it. Otherwise it stays
   * at the top of the page for a moment and focusing it scrolls the page up.
   */
  const isPositioned = ref(false);
  const popupRef = ref(undefined);
  const toggleRef = ref(undefined);

  const popupId = computed(() => `${ htmlIdLocal.value }_popup`);

  const elementsForClickOutside = computed(() => [toggleRef.value, popupRef.value]);

  const startPosition = ({ onPositioned = () => {} } = {}) => {
    if (cleanupPopper.value || !toggleRef.value || !popupRef.value) {
      return;
    }
    cleanupPopper.value = autoUpdate(toggleRef.value, popupRef.value, () => {
      if (!toggleRef.value || !popupRef.value) {
        return;
      }
      computePosition(toggleRef.value, popupRef.value, {
        placement: placement.value,
        middleware: [
          offset(4),
          flip(),
          shift({ limiter: limitShift(), padding: 8 }),
        ],
      }).then(({ x, y }) => {
        if (!popupRef.value) {
          return;
        }
        Object.assign(popupRef.value.style, {
          left: `${ x }px`,
          top: `${ y }px`,
        });
        if (!isPositioned.value) {
          isPositioned.value = true;
          nextTick(onPositioned);
        }
      });
    });
  };

  const stopPosition = () => {
    if (cleanupPopper.value) {
      cleanupPopper.value();
      cleanupPopper.value = undefined;
    }
  };

  const focusToggle = () => {
    toggleRef.value?.focus();
  };

  const getFocusableElements = () => {
    return popupRef.value ? [...popupRef.value.querySelectorAll(FOCUSABLE)] : [];
  };

  const {
    destroyEventClickOutside,
    setEventClickOutside,
  } = AEventOutsideAPI({
    $elements: elementsForClickOutside,
    clickOutsideCallback: () => closePopover(),
  });

  function closePopover({ isFocusToggle = false } = {}) {
    if (!isOpen.value) {
      return;
    }
    isOpen.value = false;
    isPositioned.value = false;
    stopPosition();
    destroyEventClickOutside();
    closePopup({ id: popupId.value });
    emit("close");
    if (isFocusToggle) {
      focusToggle();
    }
  }

  const openPopover = () => {
    if (disabled.value || isOpen.value) {
      return;
    }
    setColorFromModel();
    isOpen.value = true;
    openPopup({ id: popupId.value });
    emit("open");
    nextTick(() => {
      startPosition({
        onPositioned: () => {
          // only as much scrolling as needed to show the whole popup
          popupRef.value?.scrollIntoView?.({ block: "nearest" });
          getFocusableElements()[0]?.focus({ preventScroll: true });
        },
      });
      setTimeout(setEventClickOutside, 100);
    });
  };

  const togglePopover = () => {
    if (isOpen.value) {
      closePopover({ isFocusToggle: true });
    } else {
      openPopover();
    }
  };

  const onToggleKeydown = $event => {
    if (!isOpen.value && ($event.key === "ArrowDown" || $event.key === "ArrowUp")) {
      $event.preventDefault();
      openPopover();
    }
  };

  // The popup is a dialog: Escape closes it, Tab stays inside.
  const onPopupKeydown = $event => {
    if ($event.key === "Escape") {
      $event.preventDefault();
      $event.stopPropagation();
      closePopover({ isFocusToggle: true });
      return;
    }
    if ($event.key !== "Tab") {
      return;
    }
    const ELEMENTS = getFocusableElements();
    if (!ELEMENTS.length) {
      return;
    }
    const FIRST = ELEMENTS[0];
    const LAST = ELEMENTS[ELEMENTS.length - 1];
    if ($event.shiftKey && document.activeElement === FIRST) {
      $event.preventDefault();
      LAST.focus();
    } else if (!$event.shiftKey && document.activeElement === LAST) {
      $event.preventDefault();
      FIRST.focus();
    }
  };

  onBeforeUnmount(() => {
    stopPosition();
    if (isOpen.value) {
      closePopup({ id: popupId.value });
    }
  });

  return {
    closePopover,
    isOpen,
    isPositioned,
    onPopupKeydown,
    onToggleKeydown,
    popupId,
    popupRef,
    toggleRef,
    togglePopover,
  };
}
