import {
  ref,
  toRef,
} from "vue";

import {
  arrow,
  autoPlacement,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from "@floating-ui/vue";

const ARROW_SIDES = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
};

/**
 * The popover at the button with floating-ui: flip (or autoPlacement for "auto…"), shift and the arrow.
 */
export default function FloatingAPI(props, {
  arrowRef = ref(undefined),
  getButtonElement = () => undefined,
  popoverRef = ref(undefined),
}) {
  const hasArrow = toRef(props, "hasArrow");
  const offsetDistance = toRef(props, "offset");
  const placement = toRef(props, "placement");

  const placementCurrent = ref(undefined);
  let cleanup;

  const getMiddleware = () => {
    const IS_AUTO = placement.value.startsWith("auto");
    const ALIGNMENT = placement.value.split("-")[1];
    return [
      offset(offsetDistance.value),
      IS_AUTO ? autoPlacement(ALIGNMENT ? { alignment: ALIGNMENT } : {}) : flip(),
      shift({ padding: 8 }),
      hasArrow.value && arrowRef.value ?
        arrow({ element: arrowRef.value, padding: 8 }) :
        undefined,
    ].filter(Boolean);
  };

  const updatePosition = () => {
    const BUTTON = getButtonElement();
    if (!BUTTON || !popoverRef.value) {
      return;
    }
    computePosition(BUTTON, popoverRef.value, {
      // "auto" is no placement of floating-ui: autoPlacement chooses the side
      placement: placement.value.startsWith("auto") ? "bottom" : placement.value,
      middleware: getMiddleware(),
    }).then(({ x, y, placement: placementComputed, middlewareData }) => {
      // the popover can be closed while the position is computed
      if (!popoverRef.value) {
        return;
      }
      placementCurrent.value = placementComputed;
      Object.assign(popoverRef.value.style, {
        left: `${ x }px`,
        top: `${ y }px`,
      });
      if (arrowRef.value && middlewareData.arrow) {
        const SIDE = ARROW_SIDES[placementComputed.split("-")[0]];
        const { x: arrowX, y: arrowY } = middlewareData.arrow;
        Object.assign(arrowRef.value.style, {
          left: arrowX === undefined ? "" : `${ arrowX }px`,
          top: arrowY === undefined ? "" : `${ arrowY }px`,
          right: "",
          bottom: "",
          [SIDE]: "calc(var(--a_popover_arrow_size) / -2)",
        });
      }
    });
  };

  const stopFloating = () => {
    cleanup?.();
    cleanup = undefined;
  };

  const startFloating = () => {
    stopFloating();
    const BUTTON = getButtonElement();
    if (!BUTTON || !popoverRef.value) {
      return;
    }
    cleanup = autoUpdate(BUTTON, popoverRef.value, updatePosition);
  };

  return {
    placementCurrent,
    startFloating,
    stopFloating,
  };
}
