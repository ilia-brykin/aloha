import {
  computed,
  ref,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function VisibleFiltersAPI() {
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

  const styleHide = computed(() => {
    return isLeastOneChildFilterVisible.value ?
      undefined :
      "display: none;";
  });

  return {
    styleHide,
    updateVisibleChildFilters,
  };
}
