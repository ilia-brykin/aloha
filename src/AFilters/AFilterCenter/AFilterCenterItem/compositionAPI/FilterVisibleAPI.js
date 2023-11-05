import {
  computed,
  toRef,
} from "vue";

export default function FilterVisibleAPI(props, { emit }, {
  modelValuesForCurrentFilter = computed(() => []),
}) {
  const filter = toRef(props, "filter");

  const isLeastOneFilterVisible = computed(() => {
    return modelValuesForCurrentFilter.value.length > 0;
  });

  const updateVisibleChildFilters = ({ destroy } = {}) => {
    emit("updateVisibleChildFilters", {
      id: filter.value.id,
      isVisible: destroy ? false : isLeastOneFilterVisible.value,
    });
  };

  return {
    isLeastOneFilterVisible,
    updateVisibleChildFilters,
  };
}
