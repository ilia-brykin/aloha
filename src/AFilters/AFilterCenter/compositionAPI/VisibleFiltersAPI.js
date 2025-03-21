import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function VisibleFiltersAPI(props) {
  const filtersGroup = toRef(props, "filtersGroup");

  const visibleChildFilters = ref({});

  const updateVisibleChildFilters = ({ id, isVisible }) => {
    visibleChildFilters.value[id] = isVisible;
  };

  const isLeastOneChildFilterVisible = computed(() => {
    let isVisible = false;
    forEach(visibleChildFilters.value, _isVisible => {
      if (_isVisible) {
        isVisible = true;
        return false;
      }
    });
    return isVisible;
  });

  const hasFilters = computed(() => {
    return !!(filtersGroup.value.alwaysVisible.length || filtersGroup.value.filters.length);
  });

  const styleHide = computed(() => {
    return isLeastOneChildFilterVisible.value ?
      undefined :
      "display: none;";
  });

  return {
    hasFilters,
    styleHide,
    updateVisibleChildFilters,
  };
}
