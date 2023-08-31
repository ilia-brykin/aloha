import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const tableId = toRef(props, "tableId");

  const idFilterTop = computed(() => {
    return `${ tableId.value }_filter_top`;
  });

  return {
    idFilterTop,
  };
}
