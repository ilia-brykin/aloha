import {
  computed,
} from "vue";

import EventBus from "../../utils/EventBus";
import {
  getLabelClickEventName,
} from "../utils/utils";

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
