import {
  onUnmounted,
  ref,
  toRef,
} from "vue";

import {
  autoUpdate,
  computePosition,
  flip,
  limitShift,
  shift
} from "@floating-ui/vue";

export default function PopoverAPI(props, {
  calendarRef = ref(undefined),
  focusByCloseRef = ref(undefined),
  inputRef = ref(undefined),
}) {
  const placement = toRef(props, "placement");
  const disabled = toRef(props, "disabled");

  const cleanupPopper = ref(undefined);
  const popupVisible = ref(undefined);

  const setEventCloseClick = () => {
    document.addEventListener("click", onClickEvent);
  };

  const destroyEventCloseClick = () => {
    document.removeEventListener("click", onClickEvent);
  };

  const openPopoverWithFloatingUi = () => {
    if (!cleanupPopper.value &&
      !disabled.value &&
      inputRef.value &&
      calendarRef.value) {
      cleanupPopper.value = autoUpdate(
        inputRef.value,
        calendarRef.value,
        () => {
          if (calendarRef.value && inputRef.value) {
            computePosition(
              inputRef.value,
              calendarRef.value,
              {
                placement: placement.value,
                middleware: [
                  flip(),
                  shift({ limiter: limitShift() }),
                ],
              },
            ).then(({ x, y }) => {
              Object.assign(calendarRef.value.style, {
                left: `${ x }px`,
                top: `${ y }px`,
              });
            });
          }
        }
      );

      setTimeout(() => {
        setEventCloseClick();
      }, 300);
    }
  };

  const setCloseFocus = () => {
    focusByCloseRef.value &&
    focusByCloseRef.value.focus &&
    focusByCloseRef.value.focus();
  };

  const destroyPopover = () => {
    if (cleanupPopper.value) {
      cleanupPopper.value();
      cleanupPopper.value = undefined;
    }
  };

  const closePopover = isSetFocusByClose => {
    destroyEventCloseClick();
    destroyPopover();
    popupVisible.value = false;
    if (isSetFocusByClose) {
      setCloseFocus();
    }
  };

  const initCalendar = () => {
    // this.handleValueChange(this.modelValue);  TODO: prüfen
    popupVisible.value = true;
  };

  function onClickEvent($event) {
    if (!calendarRef.value.contains($event.target)) {
      closePopover();
    }
  }

  onUnmounted(() => {
    destroyPopover();
    destroyEventCloseClick();
  });

  return {
    closePopover,
    destroyPopover,
    initCalendar,
    openPopoverWithFloatingUi,
    popupVisible,
    setCloseFocus,
  };
}
