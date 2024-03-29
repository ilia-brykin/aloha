import {
  computed,
} from "vue";

import AKeysCode from "../../../../const/AKeysCode";

export default function EventsAPI(props, { emit }, {
  disabledElement = computed(() => undefined),
  isChecked = computed(() => false),
  valueLocal = computed(() => undefined),
}) {
  const onClick = $event => {
    if (disabledElement.value) {
      return;
    }
    emit("changeModelValue", {
      currentValue: valueLocal.value,
      $event,
      isSelected: isChecked.value,
    });
    $event.stopPropagation();
    $event.preventDefault();
  };

  const onKeydown = $event => {
    if (disabledElement.value) {
      return;
    }
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      onClick($event);
    }
  };

  return {
    onClick,
    onKeydown,
  };
}
