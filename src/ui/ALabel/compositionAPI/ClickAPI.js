import {
  computed,
  toRef,
} from "vue";

import EventBus from "../../../utils/EventBus";
import {
  getLabelClickEventName,
} from "../../utils/utils";
import {
  isFunction,
} from "lodash-es";

export default function ClickAPI(props, {
  idLabel = computed(() => ""),
}) {
  const clickLabel = toRef(props, "clickLabel");
  const id = toRef(props, "id");
  const prevent = toRef(props, "prevent");
  const stop = toRef(props, "stop");

  const onClick = $event => {
    if (isFunction(clickLabel.value)) {
      clickLabel.value({
        id: id.value,
        idLabel: idLabel.value,
      });
    }

    EventBus.$emit(getLabelClickEventName(id.value), {
      id: id.value,
      idLabel: idLabel.value,
    });

    if (stop.value) {
      $event.stopPropagation();
    }

    if (prevent.value) {
      $event.preventDefault();
    }
  };

  return {
    onClick,
  };
}
