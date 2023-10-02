import {
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
  dropdownButtonRef = ref(undefined),
  dropdownRef = ref(undefined),
}) {
  const placement = toRef(props, "placement");

  const cleanupPopper = ref(undefined);

  const startPopper = () => {
    if (!cleanupPopper.value) {
      cleanupPopper.value = autoUpdate(
        dropdownButtonRef.value.$el,
        dropdownRef.value,
        () => {
          computePosition(
            dropdownButtonRef.value.$el,
            dropdownRef.value,
            {
              placement: placement.value,
              middleware: [
                flip(),
                shift({ limiter: limitShift() }),
              ]
            },
          ).then(({ x, y }) => {
            Object.assign(dropdownRef.value.style, {
              left: `${ x }px`,
              top: `${ y }px`,
            });
          });
        }
      );
    }
  };

  const destroyPopover = () => {
    if (cleanupPopper.value) {
      cleanupPopper.value();
      cleanupPopper.value = undefined;
    }
  };

  return {
    destroyPopover,
    startPopper,
  };
}
