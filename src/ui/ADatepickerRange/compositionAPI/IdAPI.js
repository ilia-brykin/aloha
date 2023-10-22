import {
  computed,
} from "vue";

export default function IdAPI({
  htmlIdLocal = computed(() => ""),
}) {
  const idFrom = computed(() => {
    return `${ htmlIdLocal.value }_from`;
  });

  const idUntil = computed(() => {
    return `${ htmlIdLocal.value }_until`;
  });

  return {
    idFrom,
    idUntil,
  };
}
