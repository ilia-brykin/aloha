import {
  toRef,
} from "vue";

import EventBus from "../../../utils/EventBus";

export default function EventBusAPI(props, {
  openDropdown = () => {},
}) {
  const id = toRef(props, "id");

  let eventName;

  const initEventName = () => {
    eventName = `eventATableFilterTopOnOpen_${ id.value }`;
  };

  const initEventBus = () => {
    EventBus.$on(eventName, openDropdown);
  };

  const destroyEventBus = () => {
    EventBus.$off(eventName, openDropdown);
  };

  return {
    destroyEventBus,
    initEventBus,
    initEventName,
  };
}
