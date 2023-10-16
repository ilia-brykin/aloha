import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const id = toRef(props, "id");
  const htmlId = toRef(props, "htmlId");
  const idPrefix = toRef(props, "idPrefix");

  const getId = computed(() => htmlId.value || `${ idPrefix.value || "" }${ id.value }`);
  const idMin = computed(() => `${ getId.value }_min`);
  const idMax = computed(() => `${ getId.value }_max`);
  const idForLabelMin = computed(() => `${ getId.value }_min_label`);
  const idForLabelMax = computed(() => `${ getId.value }_max_label`);

  return {
    getId,
    idMin,
    idMax,
    idForLabelMin,
    idForLabelMax,
  };
}
