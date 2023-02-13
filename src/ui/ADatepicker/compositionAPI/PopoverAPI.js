import {
  onUnmounted,
  ref,
  toRef,
} from "vue";

import {
  createPopper,
} from "@popperjs/core";

export default function PopoverAPI(props, {
  calendarRef = ref(undefined),
  focusByCloseRef = ref(undefined),
  inputRef = ref(undefined),
}) {
  const placement = toRef(props, "placement");
  const disabled = toRef(props, "disabled");

  const popper = ref(undefined);
  const popupVisible = ref(undefined);

  const setEventCloseClick = () => {
    document.addEventListener("click", onClickEvent);
  };

  const destroyEventCloseClick = () => {
    document.removeEventListener("click", onClickEvent);
  };

  const openPopoverWithPopperjs = () => {
    if (!popper.value &&
      !disabled.value) {
      popupVisible.value = true;
      setTimeout(() => {
        popper.value = createPopper(
          inputRef.value,
          calendarRef.value,
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

        setTimeout(() => {
          setEventCloseClick();
        }, 300);
      });
    }
  };

  const setCloseFocus = () => {
    focusByCloseRef.value &&
    focusByCloseRef.value.focus &&
    focusByCloseRef.value.focus();
  };

  const destroyPopover = () => {
    if (popper.value) {
      popper.value.destroy();
      popper.value = undefined;
    }
  };

  const closePopover = isSetFocusByClose => {
    popupVisible.value = false;
    destroyPopover();
    destroyEventCloseClick();
    if (isSetFocusByClose) {
      setCloseFocus();
    }
  };

  const initCalendar = () => {
    // this.handleValueChange(this.modelValue);  TODO: prüfen
    openPopoverWithPopperjs();
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
    openPopoverWithPopperjs,
    popupVisible,
    setCloseFocus,
  };
}
