import {
  computed,
  toRef,
} from "vue";

export default function IdAPI(props) {
  const tableId = toRef(props, "tableId");

  const idPrefix = computed(() => {
    return `${ tableId.value }_`;
  });

  return {
    idPrefix,
  };
}
