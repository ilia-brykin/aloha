import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  toRef,
  watch,
} from "vue";

import {
  addModal,
  removeModal,
} from "../../AModal/compositionAPI/ModalStackAPI";
import {
  closePopup,
  openPopup,
} from "../../compositionAPI/APopupAPI";

import {
  isNil,
} from "lodash-es";

// these closes give the focus back to the button; a click outside or Tab leave it where the user is
const TRIGGERS_FOCUS_BUTTON = ["close", "escape"];
// the open popovers, the last one is on top: Escape closes only it (nested popovers)
const OPEN_STACK = [];

const removeFromStack = idLocal => {
  const INDEX = OPEN_STACK.lastIndexOf(idLocal);
  if (INDEX !== -1) {
    OPEN_STACK.splice(INDEX, 1);
  }
};

export default function ToggleAPI(props, { emit }, {
  getButtonElement = () => undefined,
  isFocusInside = () => false,
  isSheet = computed(() => false),
  popoverRef = ref(undefined),
  setFocusOnOpen = () => {},
  setFocusToButton = () => {},
  startFloating = () => {},
  stopFloating = () => {},
}) {
  const closeDelay = toRef(props, "closeDelay");
  const closeOnClickOutside = toRef(props, "closeOnClickOutside");
  const closeOnFocusOut = toRef(props, "closeOnFocusOut");
  const disabled = toRef(props, "disabled");
  const id = toRef(props, "id");
  const modelValue = toRef(props, "modelValue");
  const openDelay = toRef(props, "openDelay");
  const trigger = toRef(props, "trigger");
  const useEscape = toRef(props, "useEscape");

  const isOpenLocal = ref(false);
  // v-model:modelValue or own state
  const isOpen = computed(() => {
    return isNil(modelValue.value) ? isOpenLocal.value : modelValue.value;
  });
  // the trigger of the last change: click, hover, close, escape, outside, focusout, api or model (from outside)
  let triggerLast = "model";
  let triggerOpen;
  let timer;

  const setOpen = (value, triggerLocal) => {
    clearTimeout(timer);
    if (value === isOpen.value || (value && disabled.value)) {
      return;
    }
    triggerLast = triggerLocal;
    isOpenLocal.value = value;
    emit("update:modelValue", value);
  };

  const open = ({ trigger: triggerLocal = "api" } = {}) => setOpen(true, triggerLocal);
  const close = ({ trigger: triggerLocal = "api" } = {}) => setOpen(false, triggerLocal);
  const toggle = ({ trigger: triggerLocal = "api" } = {}) => setOpen(!isOpen.value, triggerLocal);

  const onButtonClick = () => {
    // a popover opened by hover stays open after the click
    if (isOpen.value && triggerOpen === "hover") {
      triggerOpen = "click";
      clearTimeout(timer);
      setFocusOnOpen();
      return;
    }
    toggle({ trigger: "click" });
  };

  // hover (WCAG 1.4.13): a delay, the popover can be hovered, Escape closes it
  const onMouseenter = () => {
    if (trigger.value !== "hover") {
      return;
    }
    clearTimeout(timer);
    if (!isOpen.value) {
      timer = setTimeout(() => open({ trigger: "hover" }), openDelay.value);
    }
  };

  const onMouseleave = () => {
    if (trigger.value !== "hover" || (isOpen.value && triggerOpen !== "hover")) {
      clearTimeout(timer);
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => close({ trigger: "hover" }), closeDelay.value);
  };

  const onDocumentKeydown = $event => {
    if ($event.key !== "Escape" || !useEscape.value || OPEN_STACK[OPEN_STACK.length - 1] !== id.value) {
      return;
    }
    if (triggerOpen !== "hover" && !isFocusInside()) {
      return;
    }
    $event.preventDefault();
    $event.stopPropagation();
    close({ trigger: "escape" });
  };

  const onDocumentPointerdown = $event => {
    if (closeOnClickOutside.value && !isFocusInside($event.target)) {
      close({ trigger: "outside" });
    }
  };

  // the focus left the button and the popover (e.g. Tab or a click in another field)
  const onFocusout = $event => {
    if (!closeOnFocusOut.value || triggerOpen === "hover") {
      return;
    }
    const TARGET = $event.relatedTarget;
    if (TARGET && !isFocusInside(TARGET)) {
      close({ trigger: "focusout" });
    }
  };

  // the bottom sheet is modal (it covers the page): the rest of the page is inert, like behind AModal
  const getModalKey = () => `popover_${ id.value }`;
  const updateSheetModal = () => {
    if (isOpen.value && isSheet.value && popoverRef.value) {
      addModal({
        key: getModalKey(),
        getWrapper: () => popoverRef.value,
        useInert: true,
      });
    } else {
      removeModal(getModalKey());
    }
  };

  // the window became small or large while the popover is open
  watch(isSheet, () => {
    if (isOpen.value) {
      updateSheetModal();
    }
  }, { flush: "post" });

  const addListeners = () => {
    document.addEventListener("keydown", onDocumentKeydown);
    document.addEventListener("pointerdown", onDocumentPointerdown);
  };

  const removeListeners = () => {
    document.removeEventListener("keydown", onDocumentKeydown);
    document.removeEventListener("pointerdown", onDocumentPointerdown);
  };

  watch(isOpen, async value => {
    const TRIGGER = triggerLast;
    triggerLast = "model";
    if (value) {
      triggerOpen = TRIGGER;
      // AModal: Escape closes the popover, not the modal
      openPopup({ id: id.value });
      OPEN_STACK.push(id.value);
      addListeners();
      await nextTick();
      startFloating();
      updateSheetModal();
      if (TRIGGER !== "hover") {
        setFocusOnOpen();
      }
      emit("open", { trigger: TRIGGER });
      return;
    }
    triggerOpen = undefined;
    closePopup({ id: id.value });
    removeFromStack(id.value);
    removeListeners();
    stopFloating();
    // first without inert, else the button can not get the focus
    updateSheetModal();
    if (TRIGGERS_FOCUS_BUTTON.indexOf(TRIGGER) !== -1) {
      setFocusToButton();
    }
    emit("close", { trigger: TRIGGER });
  }, { flush: "post" });

  // open from the start (v-model true)
  const initOpen = () => {
    if (isOpen.value) {
      triggerOpen = "model";
      openPopup({ id: id.value });
      OPEN_STACK.push(id.value);
      addListeners();
      nextTick(() => {
        startFloating();
        updateSheetModal();
      });
    }
  };

  onBeforeUnmount(() => {
    clearTimeout(timer);
    removeListeners();
    stopFloating();
    closePopup({ id: id.value });
    if (isOpen.value) {
      removeFromStack(id.value);
    }
    removeModal(getModalKey());
  });

  return {
    close,
    getButtonElement,
    initOpen,
    isOpen,
    onButtonClick,
    onFocusout,
    onMouseenter,
    onMouseleave,
    open,
    popoverRef,
    toggle,
  };
}
