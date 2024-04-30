import {
  computed,
  toRef,
} from "vue";

import {
  filter,
  forEach,
} from "lodash-es";

export default function FiltersHiddenAPI(props, { emit }) {
  const filtersGroup = toRef(props, "filtersGroup");
  const filtersVisible = toRef(props, "filtersVisible");

  const toggleFiltersVisible = ({ isAdd, filterId, filter }) => {
    emit("toggleFiltersVisible", { isAdd, filterId, filter });
  };

  const addFiltersVisible = ({ model }) => {
    toggleFiltersVisible({ isAdd: true, filterId: model });
  };

  const deleteFiltersVisible = ({ filter }) => {
    toggleFiltersVisible({ isAdd: false, filterId: filter.id, filter });
  };

  const hasFiltersHiddenDefault = computed(() => {
    return !!(filtersGroup.value.filters && filtersGroup.value.filters.length);
  });

  const filtersVisibleIds = computed(() => {
    const IDS = {};
    forEach(filtersVisible.value, filter => {
      IDS[filter.id] = true;
    });
    return IDS;
  });

  const filtersHidden = computed(() => {
    if (!hasFiltersHiddenDefault.value) {
      return [];
    }
    return filter(filtersGroup.value.filters, filter => {
      return !filtersVisibleIds.value[filter.id];
    });
  });

  return {
    addFiltersVisible,
    deleteFiltersVisible,
    filtersHidden,
    hasFiltersHiddenDefault,
  };
}
