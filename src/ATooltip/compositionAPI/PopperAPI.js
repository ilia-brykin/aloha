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

import AKeysCode from "../../const/AKeysCode";
import EventBus from "../../utils/EventBus";
import {
  isNil,
} from "lodash-es";

export default function PopperAPI(props) {
  const id = toRef(props, "id");
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

  const element = computed(() => {
    return document.getElementById(id.value);
  });

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
      titleArrowRef.value && arrow({
        element: titleArrowRef.value,
        padding: 5,
      }),
    ];
  });

  const pressEscapeButton = $event => {
    if ($event.keyCode === AKeysCode.escape) {
      closeTitle();
    }
  };

  const setListenerForPressEscapeButton = () => {
    document.addEventListener("keydown", pressEscapeButton);
  };


  const removeListenerForPressEscapeButton = () => {
    document.removeEventListener("keydown", pressEscapeButton);
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
    if (cleanupPopper.value ||
      !element.value ||
      !titleRef.value) {
      return;
    }
    cleanupPopper.value = autoUpdate(element.value, titleRef.value, () => {
      if (!element.value ||
        !titleRef.value) {
        return;
      }

      computePosition(
        element.value,
        titleRef.value,
        {
          placement: placement.value,
          middleware: floatingUiMiddleware.value,
        },
      ).then(({ x, y, middlewareData, placement }) => {
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
        if (middlewareData.arrow) {
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
