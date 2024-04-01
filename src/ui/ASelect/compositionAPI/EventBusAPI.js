import {
  computed,
} from "vue";

import EventBus from "../../../utils/EventBus";
import {
  getLabelClickEventName,
} from "../../utils/utils";

export default function EventBusAPI(props, {
  htmlIdLocal = computed(() => ""),
  togglePopover = () => {},
}) {
  const eventBusName = computed(() => {
    return getLabelClickEventName(htmlIdLocal.value);
  });

  const clickALabel = () => {
    togglePopover();
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
