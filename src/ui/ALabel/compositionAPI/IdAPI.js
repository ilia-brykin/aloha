import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const id = toRef(props, "id");
  const idSuffix = toRef(props, "idSuffix");
  const isIdVisible = toRef(props, "isIdVisible");

  const idLabel = computed(() => {
    return `${ id.value }${ idSuffix.value }`;
  });

  const idLabelAttribut = computed(() => {
    if (isIdVisible.value) {
      return {
        id: idLabel.value,
      };
    }

    return {};
  });

  return {
    idLabel,
    idLabelAttribut,
  };
}
