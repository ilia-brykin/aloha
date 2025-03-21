import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props, {
  hideForLocal = computed(() => false),
  hideIdLocal = computed(() => false),
}) {
  const id = toRef(props, "id");
  const idSuffix = toRef(props, "idSuffix");
  const readonly = toRef(props, "readonly");

  const idLabelLocal = computed(() => {
    if (hideIdLocal.value) {
      return undefined;
    }

    return `${ id.value }${ idSuffix.value }`;
  });

  const forLabelLocal = computed(() => {
    if (hideForLocal.value ||
      readonly.value) {
      return undefined;
    }

    return id.value;
  });

  return {
    forLabelLocal,
    idLabelLocal,
  };
}
