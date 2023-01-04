import {
  computed,
  toRef,
} from "vue";

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

  return {
    onClick,
  };
}
