import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../../const/AKeysCode";

export default function EventsAPI(props, { emit }, {
  isChecked = computed(() => false),
  valueLocal = computed(() => undefined),
}) {
  const disabled = toRef(props, "disabled");

  const onClick = $event => {
    if (disabled.value || isChecked.value) {
      $event.preventDefault();
      $event.stopPropagation();
      return;
    }
    emit("changeModelValue", {
      model: valueLocal.value,
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
