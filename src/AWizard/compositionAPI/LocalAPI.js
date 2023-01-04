import {
  computed,
  ref,
  toRef,
} from "vue";

export default function LocalAPI(props) {
  const stepActive = toRef(props, "stepActive");
  const stepsVisited = toRef(props, "stepsVisited");
  const isControlOutside = toRef(props, "isControlOutside");

  const stepActiveLocal = ref(0);
  const stepsVisitedLocal = ref({
    0: true,
  });

  const stepActiveComputed = computed(() => {
    return isControlOutside.value ? stepActive.value : stepActiveLocal.value;
  });

  const stepsVisitedComputed = computed(() => {
    return isControlOutside.value ? stepsVisited.value : stepsVisitedLocal.value;
  });

  return {
    stepActiveComputed,
    stepActiveLocal,
    stepsVisitedComputed,
    stepsVisitedLocal,
  };
}
