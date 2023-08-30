import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function ModelAPI(props, {
  isContainer = computed(() => false),
}) {
  const filter = toRef(props, "filter");
  const onUpdateModelFilters = toRef(props, "onUpdateModelFilters");
  const modelFilters = toRef(props, "modelFilters");

  const onUpdateModelFiltersLocal = model => {
    if (isContainer.value) {
      onUpdateModelFilters.value({ model });
    } else {
      const MODEL_FILTERS = cloneDeep(modelFilters.value);
      MODEL_FILTERS[filter.value.id] = cloneDeep(model);
      onUpdateModelFilters.value({ model: MODEL_FILTERS });
    }
  };

  return {
    onUpdateModelFiltersLocal,
  };
}
