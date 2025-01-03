import {
  inject,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";

export default function EventsAPI() {
  const togglePanel = inject("togglePanel");

  const goBack = ({ parentId }) => {
    togglePanel({ parentId });
  };

  const goBackKeydown = ({ $event, parentId }) => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      goBack({ parentId });
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    goBack,
    goBackKeydown,
  };
}
