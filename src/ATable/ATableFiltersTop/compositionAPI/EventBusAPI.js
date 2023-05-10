import {
  inject,
} from "vue";

import EventBus from "../../../utils/EventBus";

export default function EventBusAPI({
  onOpen = () => {},
}) {
  const tableId = inject("tableId");

  const eventName = `eventATableFilterTopOnOpen_${ tableId.value }`;

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
