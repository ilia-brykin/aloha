import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../../const/AKeysCode";

export default function EventsAPI(props, { emit }, {
  disabledElement = computed(() => undefined),
  isChecked = computed(() => false),
  valueLocal = computed(() => undefined),
}) {
  const dataItem = toRef(props, "dataItem");

  const onClick = $event => {
    if (disabledElement.value || isChecked.value) {
      $event.preventDefault();
      $event.stopPropagation();
      return;
    }
    emit("changeModelValue", {
      model: valueLocal.value,
      item: dataItem.value,
      $event,
    });
    $event.preventDefault();
    $event.stopPropagation();
  };

  const onKeydown = $event => {
    if ($event.key === "Enter" ||
      $event.keyCode === AKeysCode.space) {
      onClick($event);
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    onClick,
    onKeydown,
  };
}
