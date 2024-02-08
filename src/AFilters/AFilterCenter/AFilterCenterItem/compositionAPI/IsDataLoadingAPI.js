import {
  computed,
  toRef,
} from "vue";

import {
  isArray,
  isEmpty,
} from "lodash-es";

export default function IsDataLoadingAPI(props, { emit }, {
  hasCurrentFilter = computed(() => false),
}) {
  const dataKeyByKeyIdPerFilter = toRef(props, "dataKeyByKeyIdPerFilter");
  const filter = toRef(props, "filter");
  const model = toRef(props, "model");

  const isFilterLoading = computed(() => {
    if (!hasCurrentFilter.value) {
      return false;
    }
    if (isArray(model.value) && model.value.length) {
      return isEmpty(dataKeyByKeyIdPerFilter.value[filter.value.id]);
    }
    return false;
  });

  const updateLoadingChildFilters = (newValue, altValue) => {
    if (newValue !== altValue) {
      emit("updateLoadingChildFilters", {
        id: filter.value.id,
        isLoading: isFilterLoading.value,
      });
    }
  };

  return {
    isFilterLoading,
    updateLoadingChildFilters,
  };
}
