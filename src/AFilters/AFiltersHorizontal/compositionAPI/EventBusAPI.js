import {
  toRef,
} from "vue";

import EventBus from "../../../utils/EventBus";

export default function EventBusAPI(props, {
  onOpen = () => {},
}) {
  const id = toRef(props, "id");

  const eventName = `eventATableFilterTopOnOpen_${ id.value }`;

  const initEventBus = () => {
    EventBus.$on(eventName, onOpen);
  };

  const destroyEventBus = () => {
    EventBus.$off(eventName, onOpen);
  };

  return {
    destroyEventBus,
    initEventBus,
  };
}
