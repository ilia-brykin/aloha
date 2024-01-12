import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../compositionAPI/AFiltersAPI.js";

export default function CountAllRowsAPI(props) {
  const countAllRows = toRef(props, "countAllRows");

  const {
    filterFloat,
  } = AFiltersAPI();

  const countAllRowsFormatted = computed(() => {
    return `(${ filterFloat(countAllRows.value, { digits: 0 }) })`;
  });

  return {
    countAllRowsFormatted,
  };
}
