import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../../const/AKeysCode";
import {
  cloneDeep,
} from "lodash-es";

export default function EventsAPI(props, { emit }, {
  disabledElement = computed(() => undefined),
  isChecked = computed(() => false),
  valueLocal = computed(() => undefined),
}) {
  const modelValue = toRef(props, "modelValue");

  const onClick = $event => {
    if (disabledElement.value) {
      $event.preventDefault();
      $event.stopPropagation();
      return;
    }
    const MODEL = cloneDeep(modelValue.value) || [];
    if (isChecked.value) {
      const INDEX = MODEL.indexOf(valueLocal.value);
      MODEL.splice(INDEX, 1);
    } else {
      MODEL.push(valueLocal.value);
    }

    emit("changeModelValue", {
      model: MODEL,
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
