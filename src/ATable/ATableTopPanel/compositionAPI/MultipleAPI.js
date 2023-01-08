import {
  computed,
  toRef,
} from "vue";

export default function MultipleAPI(props) {
  const selectedRows = toRef(props, "selectedRows");
  const countAllRows = toRef(props, "countAllRows");

  const textMultipleSelectedTranslateExtra = computed(() => {
    return {
      countSelectedRows: selectedRows.value.length,
      countAllRows: countAllRows.value,
    };
  });

  return {
    textMultipleSelectedTranslateExtra,
  };
}
