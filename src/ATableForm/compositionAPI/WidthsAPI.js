import {
  computed,
  toRef,
} from "vue";

export default function WidthsAPI(props) {
  const widths = toRef(props, "widths");

  const widthsLocal = computed(() => {
    return {
      actionsColumnSingle: 64,
      actionsColumnDouble: 112,
      dndColumn: 56,
      ...widths.value,
    };
  });

  return {
    widthsLocal,
  };
}
