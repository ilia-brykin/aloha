import {
  computed, h,
  toRef,
} from "vue";

import ASelect from "../../../ui/ASelect/ASelect";

import {
  filter,
  forEach,
} from "lodash-es";

export default function FiltersHiddenAPI(props, { emit }) {
  const filtersGroup = toRef(props, "filtersGroup");
  const filtersVisible = toRef(props, "filtersVisible");

  const toggleFiltersVisible = ({ isAdd, filterId }) => {
    emit("toggleFiltersVisible", { isAdd, filterId });
  };

  const addFiltersVisible = ({ model }) => {
    toggleFiltersVisible({ isAdd: true, filterId: model });
  };

  const deleteFiltersVisible = ({ filter }) => {
    toggleFiltersVisible({ isAdd: false, filterId: filter.id });
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

  const addFilterSelectComponent = computed(() => {
    return hasFiltersHiddenDefault.value && h(ASelect, {
      class: "a_table__filters_top__footer__select",
      type: "select",
      data: filtersHidden.value,
      keyLabel: "label",
      keyId: "id",
      label: "_A_TABLE_FILTER_ADD_",
      translateData: true,
      disabled: !filtersHidden.value.length,
      search: true,
      change: addFiltersVisible,
    });
  });

  return {
    addFilterSelectComponent,
    addFiltersVisible,
    deleteFiltersVisible,
    filtersHidden,
    hasFiltersHiddenDefault,
  };
}
