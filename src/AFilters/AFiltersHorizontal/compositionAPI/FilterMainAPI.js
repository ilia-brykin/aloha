import {
  computed,
  h,
  toRef,
} from "vue";

import AFiltersHorizontalFilterUi from "../AFiltersHorizontalFilterUi/AFiltersHorizontalFilterUi";

export default function FilterMainAPI(props) {
  const filtersGroup = toRef(props, "filtersGroup");
  const id = toRef(props, "id");
  const onUpdateModelFilters = toRef(props, "onUpdateModelFilters");
  const unappliedModel = toRef(props, "unappliedModel");
  const updateDataKeyByIdFromFilter = toRef(props, "updateDataKeyByIdFromFilter");


  const filterMainComponent = computed(() => {
    return filtersGroup.value.main && h(AFiltersHorizontalFilterUi, {
      id: id.value,
      class: "a_table__filters_top__filter_main",
      filter: filtersGroup.value.main,
      isLabelVisible: true,
      unappliedModel: unappliedModel.value,
      onUpdateModelFilters: onUpdateModelFilters.value,
      updateDataKeyByIdFromFilter: updateDataKeyByIdFromFilter.value,
    });
  });

  return {
    filterMainComponent,
  };
}
