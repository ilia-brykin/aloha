import {
  computed,
  toRef,
} from "vue";

export default function FirstLastAPI(props) {
  const steps = toRef(props, "steps");
  const stepActiveComputed = toRef(props, "stepActiveComputed");

  const isStepActiveFirst = computed(() => {
    return stepActiveComputed.value === 0;
  });

  const isStepActiveLast = computed(() => {
    return stepActiveComputed.value === steps.value.length - 1;
  });

  return {
    isStepActiveFirst,
    isStepActiveLast,
  };
}
