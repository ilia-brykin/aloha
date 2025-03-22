import {
  computed,
  toRef,
} from "vue";

export default function LabelAPI(props) {
  const id = toRef(props, "id");

  const labelId = computed(() => {
    return `${ id.value }_label`;
  });

  return {
    labelId,
  };
}
