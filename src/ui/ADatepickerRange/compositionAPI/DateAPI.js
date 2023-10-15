import {
  computed,
  toRef,
} from "vue";

export default function DateAPI(props) {
  const model = toRef(props, "model");
  const options = toRef(props, "options");

  const placeholderMin = computed(() => options.value.placeholderMin || "");
  const placeholderMax = computed(() => options.value.placeholderMax || "");
  const minuteStep = computed(() => options.value.minuteStep || 5);
  const type = computed(() => options.value.type || "date");
  const format = computed(() => options.value.format || "DD.MM.YYYY");

  const modelMin = computed(() => model.value.date_after);
  const modelMax = computed(() => model.value.date_before);

  return {
    placeholderMin,
    placeholderMax,
    minuteStep,
    type,
    format,
    modelMin,
    modelMax,
  };
}
