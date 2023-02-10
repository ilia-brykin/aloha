import {
  ref,
  toRef,
} from "vue";

import {
  createPopper,
} from "@popperjs/core";

export default function PopoverAPI(props, {
  dropdownButtonRef = ref(undefined),
  dropdownRef = ref(undefined),
}) {
  const placement = toRef(props, "placement");

  const popper = ref(undefined);
  const openPopoverWithPopperjs = () => {
    if (!popper.value) {
      popper.value = createPopper(
        dropdownButtonRef.value,
        dropdownRef.value,
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
    }
  };

  const destroyPopover = () => {
    if (popper.value) {
      popper.value.destroy();
      popper.value = undefined;
    }
  };

  return {
    destroyPopover,
    openPopoverWithPopperjs,
  };
}
