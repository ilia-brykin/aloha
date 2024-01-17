import {
  toRef,
} from "vue";

import EventBus from "../../utils/EventBus";

export default function CloseFromOutsideAPI(props) {
  const close = toRef(props, "close");
  const isConfirm = toRef(props, "isConfirm");

  const closeModalFromOutside = () => {
    if (!isConfirm.value) {
      close.value();
    }
  };

  const initEventBusCloseFromOutside = () => {
    EventBus.$on("closeModal", closeModalFromOutside);
  };

  const destroyEventBusCloseFromOutside = () => {
    EventBus.$off("closeModal", closeModalFromOutside);
  };

  return {
    destroyEventBusCloseFromOutside,
    initEventBusCloseFromOutside,
  };
}
