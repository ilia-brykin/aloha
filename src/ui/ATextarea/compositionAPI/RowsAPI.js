import {
  computed,
  toRef,
} from "vue";

export default function RowsAPI(props) {
  const isScalable = toRef(props, "isScalable");
  const rows = toRef(props, "rows");

  const rowsLocal = computed(() => {
    if (rows.value) {
      return rows.value;
    }

    if (isScalable.value) {
      return 1;
    }

    return undefined;
  });

  return {
    rowsLocal,
  };
}
