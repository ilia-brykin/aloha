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
  idLabelLocal = computed(() => ""),
  preventLocal = computed(() => false),
  stopLocal = computed(() => false),
}) {
  const clickLabel = toRef(props, "clickLabel");
  const id = toRef(props, "id");

  const onClick = $event => {
    if (isFunction(clickLabel.value)) {
      clickLabel.value({
        id: id.value,
        idLabel: idLabelLocal.value,
        $event,
      });
    }

    if (preventLocal.value) {
      $event.preventDefault();
    }

    if (stopLocal.value) {
      $event.stopPropagation();
    }
    setTimeout(() => {
      EventBus.$emit(getLabelClickEventName(id.value), {
        id: id.value,
        idLabel: idLabelLocal.value,
        $event,
      });
    });
  };

  return {
    onClick,
  };
}
