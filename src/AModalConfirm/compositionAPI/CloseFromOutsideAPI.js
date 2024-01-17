import {
  ref,
} from "vue";

import EventBus from "../../utils/EventBus";

export default function CloseFromOutsideAPI({
  isModalHidden = ref(false),
}) {
  const closeModalFromOutside = () => {
    isModalHidden.value = true;
  };

  const initEventBusCloseFromOutside = () => {
    EventBus.$on("closeModalConfirm", closeModalFromOutside);
  };

  const destroyEventBusCloseFromOutside = () => {
    EventBus.$off("closeModalConfirm", closeModalFromOutside);
  };

  return {
    destroyEventBusCloseFromOutside,
    initEventBusCloseFromOutside,
  };
}
