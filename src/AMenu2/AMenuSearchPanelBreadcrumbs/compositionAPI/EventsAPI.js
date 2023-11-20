import {
  inject,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";

export default function EventsAPI() {
  const togglePanel = inject("togglePanel");

  const goTo = ({ parentIds }) => {
    togglePanel({ parentIds });
  };

  const goToKeydown = ({ $event, parentIds }) => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      goTo({ parentIds });
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    goTo,
    goToKeydown,
  };
}
