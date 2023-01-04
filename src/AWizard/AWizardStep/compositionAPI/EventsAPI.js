import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";

export default function EventsAPI(props, { emit }, {
  isStepDisabled = computed(() => false),
}) {
  const step = toRef(props, "step");
  const stepIndex = toRef(props, "stepIndex");
  const onClick = () => {
    if (isStepDisabled.value) {
      return;
    }
    emit("onStepClick", {
      step: step.value,
      stepIndex: stepIndex.value,
    });
  };

  const onKeydown = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      onClick($event);
      $event.preventDefault();
      $event.stopPropagation();
    }
  };

  return {
    onClick,
    onKeydown,
  };
}
