import {
  computed,
} from "vue";

import {
  getLabelClickEventName,
} from "../utils/utils";

import EventBus from "../../utils/EventBus";

export default function UiLabelClickEventBusAPI({
  htmlIdLocal = computed(() => ""),
  clickLabel = () => {},
}) {
  const eventBusName = computed(() => {
    return getLabelClickEventName(htmlIdLocal.value);
  });

  const clickALabel = () => {
    clickLabel();
  };

  const initEventBusClickLabel = () => {
    EventBus.$on(eventBusName.value, clickALabel);
  };

  const destroyEventBusClickLabel = () => {
    EventBus.$off(eventBusName.value, clickALabel);
  };

  return {
    destroyEventBusClickLabel,
    initEventBusClickLabel,
  };
}
