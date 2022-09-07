import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  cloneDeep, keyBy,
} from "lodash-es";

export default function TableFiltersAPI(props, { emit }) {
  const modelFilters = toRef(props, "modelFilters");
  const modelFiltersLocal = ref(cloneDeep(modelFilters.value));

  const filters = toRef(props, "filters");
  const filtersKeyById = computed(() => {
    return keyBy(filters.value, "id");
  });

  const onUpdateModelFilters = ({ model }) => {
    modelFiltersLocal.value = model;
  };

  const startSearch = () => {
    emit("update:modelFilters", modelFiltersLocal.value);
  };

  return {
    filtersKeyById,
    modelFiltersLocal,
    startSearch,
    onUpdateModelFilters,
  };
}
