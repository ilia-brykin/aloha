import {
  computed,
  toRef,
} from "vue";

export default function StepsAPI(props, {
  stepActiveComputed = computed(() => 0),
}) {
  const steps = toRef(props, "steps");

  const stepsCount = computed(() => {
    return steps.value.length;
  });

  const stepActiveNumber = computed(() => {
    return stepActiveComputed.value + 1;
  });

  return {
    stepActiveNumber,
    stepsCount,
  };
}
