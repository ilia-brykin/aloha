import {
  computed,
  toRef,
} from "vue";

export default function ActiveAPI(props) {
  const stepIndex = toRef(props, "stepIndex");
  const stepActiveComputed = toRef(props, "stepActiveComputed");

  const isStepActive = computed(() => {
    return stepActiveComputed.value === stepIndex.value;
  });

  return {
    isStepActive,
  };
}
