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
  offset,
  shift,
} from "@floating-ui/vue";

import {
  isReferenceHidden,
} from "../../../utils/isReferenceHidden";

/**
 * The popover lies at the clicked event and moves with it (scrolling, resizing).
 */
export default function PositionAPI(props, {
  onReferenceHidden = () => {},
} = {}) {
  const anchor = toRef(props, "anchor");

  const popoverRef = ref(undefined);
  const position = ref({ left: "0px", top: "0px" });
  let cleanup;

  const updatePosition = async() => {
    if (!anchor.value?.isConnected || !popoverRef.value) {
      return;
    }
    const { x, y } = await computePosition(anchor.value, popoverRef.value, {
      placement: "bottom-start",
      strategy: "absolute",
      // the event is scrolled out of the view (e.g. in the scroll of the week): close the popover
      middleware: [offset(6), flip(), shift({ padding: 8 })],
    });
    if (isReferenceHidden(anchor.value, popoverRef.value)) {
      onReferenceHidden();
      return;
    }
    position.value = { left: `${ x }px`, top: `${ y }px` };
  };

  onMounted(() => {
    if (!anchor.value || !popoverRef.value) {
      return;
    }
    // Without ResizeObserver (old browsers, tests) the position is computed once
    if (typeof ResizeObserver === "undefined") {
      updatePosition();
      return;
    }
    cleanup = autoUpdate(anchor.value, popoverRef.value, updatePosition);
  });

  onBeforeUnmount(() => {
    cleanup?.();
  });

  return {
    popoverRef,
    position,
  };
}
