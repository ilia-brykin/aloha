import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const id = toRef(props, "id");
  const isIdVisible = toRef(props, "isIdVisible");

  const idLabel = computed(() => {
    return `${ id.value }_label`;
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
