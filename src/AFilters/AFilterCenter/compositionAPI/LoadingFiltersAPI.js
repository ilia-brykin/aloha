import {
  computed,
  ref,
} from "vue";

import {
  forEach,
} from "lodash-es";

export default function LoadingFiltersAPI() {
  const loadingChildFilters = ref({});

  const updateLoadingChildFilters = ({ id, isLoading }) => {
    loadingChildFilters.value[id] = isLoading;
  };

  const isLeastOneChildFilterLoading = computed(() => {
    let isLoading = false;
    forEach(loadingChildFilters.value, _isLoading => {
      if (_isLoading) {
        isLoading = true;
        return false;
      }
    });
    return isLoading;
  });

  return {
    isLeastOneChildFilterLoading,
    updateLoadingChildFilters,
  };
}
