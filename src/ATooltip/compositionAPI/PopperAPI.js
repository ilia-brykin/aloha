import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  arrow,
  autoPlacement,
  autoUpdate,
  computePosition,
  flip,
  limitShift,
  offset,
  shift,
} from "@floating-ui/vue";

import EventBus from "../../utils/EventBus";
import {
  isFunction,
  isNil,
} from "lodash-es";

export default function PopperAPI(props) {
  const arrowPadding = toRef(props, "arrowPadding");
  const offsetDistance = toRef(props, "offsetDistance");
  const offsetSkidding = toRef(props, "offsetSkidding");
  const placement = toRef(props, "placement");
  const timeClose = toRef(props, "timeClose");

  const cleanupPopper = ref(undefined);
  const componentRef = ref(undefined);
  const isTitleVisible = ref(false);
  const timerTitleClose = ref(undefined);
  const titleArrowRef = ref(undefined);
  const titleRef = ref(undefined);

  // the element itself (componentRef), not a lookup by id that is cached and gets old after a new render
  const getElement = () => {
    return componentRef.value?.$el || componentRef.value;
  };

  // arrow-padding: a number or a function ({ popper, reference, placement }) => number (the names of Popper.js)
  const getArrowOptions = () => {
    if (isFunction(arrowPadding.value)) {
      return state => ({
        element: titleArrowRef.value,
        padding: arrowPadding.value({
          popper: state.rects.floating,
          reference: state.rects.reference,
          placement: state.placement,
        }),
      });
    }
    return {
      element: titleArrowRef.value,
      padding: isNil(arrowPadding.value) ? 5 : arrowPadding.value,
    };
  };

  const isAutoPlacement = computed(() => {
    return placement.value && placement.value.includes("auto");
  });

  const floatingUiMiddleware = computed(() => {
    return [
      offset({
        mainAxis: offsetDistance.value || 0,
        crossAxis: offsetSkidding.value || 0,
        alignmentAxis: null,
      }),
      isAutoPlacement.value ? autoPlacement() : flip(),
      shift({ limiter: limitShift() }),
      titleArrowRef.value && arrow(getArrowOptions()),
    ];
  });

  // WCAG 1.4.13: Escape closes only the tooltip, not also e.g. the modal around it (capture phase, stopPropagation)
  const pressEscapeButton = $event => {
    if ($event.key === "Escape" && isTitleVisible.value) {
      $event.stopPropagation();
      closeTitle();
    }
  };

  const setListenerForPressEscapeButton = () => {
    document.addEventListener("keydown", pressEscapeButton, true);
  };

  const removeListenerForPressEscapeButton = () => {
    document.removeEventListener("keydown", pressEscapeButton, true);
  };

  const setEventBusCloseTitle = () => {
    EventBus.$on("closeHtmlTitle", closeTitle);
  };

  const destroyEventBusCloseTitle = () => {
    EventBus.$off("closeHtmlTitle", closeTitle);
  };

  const destroyPopper = () => {
    if (cleanupPopper.value) {
      cleanupPopper.value();
      cleanupPopper.value = undefined;
    }
  };

  const closeTitleWithTimer = () => {
    timerTitleClose.value = setTimeout(() => {
      closeTitle();
    }, timeClose.value);
  };

  const showTitle = () => {
    if (isTitleVisible.value) {
      clearTimeout(timerTitleClose.value);
      return;
    }
    isTitleVisible.value = true;
  };

  const startPopper = () => {
    const ELEMENT = getElement();
    if (cleanupPopper.value ||
      !ELEMENT ||
      !titleRef.value) {
      return;
    }
    cleanupPopper.value = autoUpdate(ELEMENT, titleRef.value, () => {
      if (!titleRef.value) {
        return;
      }

      computePosition(
        ELEMENT,
        titleRef.value,
        {
          placement: placement.value,
          middleware: floatingUiMiddleware.value,
        },
      ).then(({ x, y, middlewareData, placement }) => {
        // the tooltip can be closed while the position is computed
        if (!titleRef.value) {
          return;
        }
        Object.assign(titleRef.value.style, {
          left: `${ x }px`,
          top: `${ y }px`,
        });
        const side = placement.split("-")[0];
        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[side];
        if (middlewareData.arrow && titleArrowRef.value) {
          const { x, y } = middlewareData.arrow;
          Object.assign(titleArrowRef.value.style, {
            left: !isNil(x) ? `${ x }px` : "",
            top: !isNil(y) ? `${ y }px` : "",
            [staticSide]: `${ -titleArrowRef.value.offsetWidth / 2 }px`,
          });
        }
      });
    });
    EventBus.$emit("closeHtmlTitle");
    setEventBusCloseTitle();
    setListenerForPressEscapeButton();
  };

  const mouseEnterTooltip = () => {
    clearTimeout(timerTitleClose.value);
  };

  const mouseLeaveTooltip = () => {
    closeTitleWithTimer();
  };

  function closeTitle() {
    clearTimeout(timerTitleClose.value);
    destroyPopper();
    destroyEventBusCloseTitle();
    removeListenerForPressEscapeButton();
    isTitleVisible.value = false;
  }

  return {
    closeTitle,
    closeTitleWithTimer,
    componentRef,
    isTitleVisible,
    mouseEnterTooltip,
    mouseLeaveTooltip,
    showTitle,
    startPopper,
    titleArrowRef,
    titleRef,
  };
}
