import {
  computed,
  ref,
  toRef,
} from "vue";

import EventBus from "../../utils/EventBus";
import {
  createPopper,
} from "@popperjs/core";

export default function PopperAPI(props) {
  const id = toRef(props, "id");
  const offsetDistance = toRef(props, "offsetDistance");
  const offsetSkidding = toRef(props, "offsetSkidding");
  const placement = toRef(props, "placement");
  const timeClose = toRef(props, "timeClose");

  const popper = ref(undefined);
  const timerTitleClose = ref(undefined);
  const isTitleVisible = ref(false);
  const titleRef = ref(undefined);
  const componentRef = ref(undefined);

  const popperOptions = computed(() => {
    return {
      placement: placement.value,
      removeOnDestroy: true,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [offsetSkidding.value || 0, offsetDistance.value || 0],
          },
        },
      ],
    };
  });

  const setEventBusCloseTitle = () => {
    EventBus.$on("closeHtmlTitle", closeTitle);
  };

  const destroyEventBusCloseTitle = () => {
    EventBus.$off("closeHtmlTitle", closeTitle);
  };

  const destroyPopper = () => {
    if (popper.value) {
      popper.value.destroy();
      popper.value = undefined;
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
    if (!popper.value) {
      const ELEMENT = document.getElementById(id.value);
      if (!titleRef.value) {
        return;
      }
      popper.value = createPopper(
        ELEMENT,
        titleRef.value,
        popperOptions.value,
      );
    }
    EventBus.$emit("closeHtmlTitle");
    setEventBusCloseTitle();
  };

  const mouseEnterTooltip = () => {
    clearTimeout(timerTitleClose.value);
  };

  const mouseLeaveTooltip = () => {
    closeTitleWithTimer();
  };

  const updateTitle = () => {
    if (popper.value) {
      popper.value.forceUpdate();
      // this.setContentSymbolsLengthInTooltipContent();
    }
  };

  const updateTitleOptions = () => {
    if (popper.value) {
      popper.value.setOptions(popperOptions.value);
      // this.setContentSymbolsLengthInTooltipContent();
    }
  };

  function closeTitle() {
    clearTimeout(timerTitleClose.value);
    destroyPopper();
    destroyEventBusCloseTitle();
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
    titleRef,
    updateTitle,
    updateTitleOptions,
  };
}
