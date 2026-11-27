import {
  computed,
  toRef,
} from "vue";

export default function EventsAPI(props, { emit }, {
  isStepDisabled = computed(() => false),
}) {
  const step = toRef(props, "step");
  const stepIndex = toRef(props, "stepIndex");

  // a native button: Enter and Space work without own keys
  const onClick = $event => {
    if (isStepDisabled.value) {
      return;
    }
    emit("onStepClick", {
      $event,
      step: step.value,
      stepIndex: stepIndex.value,
    });
  };

  return {
    onClick,
  };
}
