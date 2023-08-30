import {
  computed,
  h,
  toRef,
} from "vue";

import ATableFiltersTopFilterUi from "../ATableFiltersTopFilterUi/ATableFiltersTopFilterUi";

export default function FilterMainAPI(props) {
  const filtersGroup = toRef(props, "filtersGroup");
  const modelFilters = toRef(props, "modelFilters");
  const onUpdateModelFilters = toRef(props, "onUpdateModelFilters");
  const tableId = toRef(props, "tableId");

  const filterMainComponent = computed(() => {
    return filtersGroup.value.main && h(ATableFiltersTopFilterUi, {
      filter: filtersGroup.value.main,
      isLabelVisible: true,
      modelFilters: modelFilters.value,
      onUpdateModelFilters: onUpdateModelFilters.value,
      tableId: tableId.value,
    });
  });

  return {
    filterMainComponent,
  };
}
