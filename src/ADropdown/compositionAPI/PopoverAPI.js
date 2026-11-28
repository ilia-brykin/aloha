import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  autoUpdate,
  computePosition,
  flip,
  shift,
} from "@floating-ui/vue";

import {
  isReferenceHidden,
} from "../../utils/isReferenceHidden";

export default function PopoverAPI(props, {
  dropdownButtonRef = ref(undefined),
  dropdownRef = ref(undefined),
  onReferenceHidden = () => {},
}) {
  const floatingFlip = toRef(props, "floatingFlip");
  const floatingShift = toRef(props, "floatingShift");
  const isCloseByButtonInvisibleInViewport = toRef(props, "isCloseByButtonInvisibleInViewport");
  const placement = toRef(props, "placement");

  const cleanupPopper = ref(undefined);

  const middleware = computed(() => {
    const MIDDLEWARE = [];
    if (floatingFlip.value?.use) {
      MIDDLEWARE.push(
        flip(floatingFlip.value),
      );
    }
    if (floatingShift.value?.use) {
      MIDDLEWARE.push(
        shift(floatingShift.value),
      );
    }

    return MIDDLEWARE;
  });

  const startPopper = () => {
    if (!cleanupPopper.value &&
      dropdownButtonRef.value.$el &&
      dropdownRef.value) {
      cleanupPopper.value = autoUpdate(
        dropdownButtonRef.value.$el,
        dropdownRef.value,
        () => {
          if (!dropdownButtonRef.value.$el ||
            !dropdownRef.value) {
            return;
          }

          computePosition(
            dropdownButtonRef.value.$el,
            dropdownRef.value,
            {
              placement: placement.value,
              middleware: middleware.value,
            },
          ).then(({ x, y }) => {
            if (isCloseByButtonInvisibleInViewport.value && isReferenceHidden(dropdownButtonRef.value.$el, dropdownRef.value)) {
              onReferenceHidden();
              return;
            }

            Object.assign(dropdownRef.value.style, {
              left: `${ x }px`,
              top: `${ y }px`,
            });
          });
        },
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
