import {
  onBeforeUnmount,
  onMounted,
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

/**
 * A popup in the container in body (in-body): placed under the field with floating-ui,
 * so it is not cut by a parent with overflow: hidden. Without in-body the CSS places it.
 */
export default function FloatingAPI(props, {
  floatingRef = ref(undefined),
}) {
  const getReference = toRef(props, "getReference");
  const inBody = toRef(props, "inBody");

  let cleanup;

  onMounted(() => {
    const REFERENCE = getReference.value?.();
    if (!inBody.value || !REFERENCE || !floatingRef.value) {
      return;
    }
    cleanup = autoUpdate(REFERENCE, floatingRef.value, () => {
      if (!floatingRef.value) {
        return;
      }
      computePosition(REFERENCE, floatingRef.value, {
        placement: "bottom-start",
        middleware: [
          offset(4),
          flip(),
          shift({ limiter: limitShift() }),
        ],
      }).then(({ x, y }) => {
        // the popup can be closed while the position is computed
        if (!floatingRef.value) {
          return;
        }
        Object.assign(floatingRef.value.style, {
          left: `${ x }px`,
          top: `${ y }px`,
        });
      });
    });
  });

  onBeforeUnmount(() => {
    cleanup?.();
  });
}
