import {
  computed,
  toRef,
} from "vue";

import {
  isEmpty,
} from "lodash-es";

export default function IsDataLoadingAPI(props, { emit }) {
  const filter = toRef(props, "filter");
  const model = toRef(props, "model");
  const dataKeyByKeyIdPerFilter = toRef(props, "dataKeyByKeyIdPerFilter");

  const isFilterLoading = computed(() => {
    return !isEmpty(model.value) && isEmpty(dataKeyByKeyIdPerFilter.value[filter.value.id]);
  });

  const updateLoadingChildFilters = () => {
    emit("updateLoadingChildFilters", {
      id: filter.value.id,
      isLoading: isFilterLoading.value,
    });
  };

  return {
    isFilterLoading,
    updateLoadingChildFilters,
  };
}
