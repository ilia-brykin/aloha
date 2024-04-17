import {
  computed,
  toRef,
} from "vue";

import {
  typesWithData,
} from "../../../../ui/const/AUiTypes";
import {
  isEmpty,
} from "lodash-es";

export default function IsDataLoadingAPI(props, { emit }, {
  hasCurrentFilter = computed(() => false),
}) {
  const dataKeyByKeyIdPerFilter = toRef(props, "dataKeyByKeyIdPerFilter");
  const filter = toRef(props, "filter");

  const isFilterLoading = computed(() => {
    if (!hasCurrentFilter.value) {
      return false;
    }
    if (typesWithData.value[filter.value.type]) {
      return isEmpty(dataKeyByKeyIdPerFilter.value[filter.value.modelId || filter.value.id]);
    }
    return false;
  });

  const updateLoadingChildFilters = (newValue, altValue) => {
    if (newValue !== altValue) {
      emit("updateLoadingChildFilters", {
        id: filter.value.modelId || filter.value.id,
        isLoading: isFilterLoading.value,
      });
    }
  };

  return {
    isFilterLoading,
    updateLoadingChildFilters,
  };
}
