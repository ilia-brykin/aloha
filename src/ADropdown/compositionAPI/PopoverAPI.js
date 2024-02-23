import {
  computed,
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
  const floatingFlip = toRef(props, "floatingFlip");
  const placement = toRef(props, "placement");

  const cleanupPopper = ref(undefined);

  const middleware = computed(() => {
    const MIDDLEWARE = [];
    if (floatingFlip.value?.use) {
      MIDDLEWARE.push(
        flip(floatingFlip.value),
      );
    }
    MIDDLEWARE.push(shift({ limiter: limitShift() }));

    return MIDDLEWARE;
  });

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
              middleware: middleware.value,
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
