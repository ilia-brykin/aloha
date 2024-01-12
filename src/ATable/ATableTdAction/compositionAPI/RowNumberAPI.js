import {
  computed,
  toRef,
} from "vue";

export default function RowNumberAPI(props) {
  const rowIndex = toRef(props, "rowIndex");

  const rowNumber = computed(() => {
    return rowIndex.value + 1;
  });

  return {
    rowNumber,
  };
}
