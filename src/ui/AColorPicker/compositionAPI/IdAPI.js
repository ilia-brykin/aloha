import {
  computed,
} from "vue";

export default function IdAPI({
  htmlIdLocal = computed(() => ""),
}) {
  const labelId = computed(() => `${ htmlIdLocal.value }_label`);
  const valueId = computed(() => `${ htmlIdLocal.value }_value`);

  return {
    labelId,
    valueId,
  };
}
