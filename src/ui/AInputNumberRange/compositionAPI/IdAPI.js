import {
  computed,
} from "vue";

export default function IdAPI({
  htmlIdLocal = computed(() => ""),
}) {
  const idMin = computed(() => {
    return `${ htmlIdLocal.value }_min`;
  });

  const idMax = computed(() => {
    return `${ htmlIdLocal.value }_max`;
  });

  return {
    idMax,
    idMin,
  };
}
