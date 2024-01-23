import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../../compositionAPI/AFiltersAPI";

export default function LabelAPI(props) {
  const column = toRef(props, "column");
  const searchColumnModel = toRef(props, "searchColumnModel");

  const {
    filterSearchHighlight,
  } = AFiltersAPI();

  const labelLocal = computed(() => {
    return filterSearchHighlight(column.value.label, { searchModel: searchColumnModel.value });
  });

  return {
    labelLocal,
  };
}
