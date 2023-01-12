import {
  computed,
  ref,
  toRef,
} from "vue";

import AUiTypesModelArray from "../../ui/const/AUiTypesModelArray";
import AUiTypesContainer from "../../ui/const/AUiTypesContainer";
import {
  cloneDeep,
  forEach,
  isFunction,
} from "lodash-es";

export default function TableFiltersAPI(props, { emit }, {
  closePreviewAll = () => {},
  offset = ref(0),
}) {
  const modelFilters = toRef(props, "modelFilters");
  const offsetStart = toRef(props, "offsetStart");
  const updateModelFiltersLocal = toRef(props, "updateModelFiltersLocal");

  const modelFiltersLocal = ref(cloneDeep(modelFilters.value));
  const filtersVisibleIds = ref([]);
  const dataKeyByKeyIdPerFilter = ref({});

  const toggleFiltersVisible = ({ isAdd = true, filterId }) => {
    if (isAdd) {
      filtersVisibleIds.value.push(filterId);
    } else {
      const INDEX = filtersVisibleIds.value.indexOf(filterId);
      if (INDEX !== -1) {
        filtersVisibleIds.value.splice(INDEX, 1);
      }
    }
  };

  const filters = toRef(props, "filters");
  const filtersDataKeyById = ref({});

  const hasFilters = computed(() => {
    return filters.value.length > 0;
  });
  const filtersKeyById = computed(() => {
    const FILTERS = {};
    forEach(cloneDeep(filters.value), filter => {
      FILTERS[filter.id] = filter;
      if (AUiTypesContainer[filter.type] &&
        filter.children &&
        filter.children.length) {
        forEach(filter.children, filterChild => {
          FILTERS[filterChild.id] = filterChild;
        });
      }
    });
    return FILTERS;
  });

  const filtersGroup = computed(() => {
    const FILTER_GROUP = {
      main: undefined,
      alwaysVisible: [],
      filters: [],
    };
    forEach(cloneDeep(filters.value), filter => {
      if (filter.main) {
        if (!FILTER_GROUP.main) {
          FILTER_GROUP.main = filter;
        } else {
          FILTER_GROUP.alwaysVisible.push(filter);
        }
      } else if (filter.alwaysVisible) {
        FILTER_GROUP.alwaysVisible.push(filter);
      } else {
        FILTER_GROUP.filters.push(filter);
      }
    });

    return FILTER_GROUP;
  });

  const filtersVisible = computed(() => {
    const FILTERS = [];
    forEach(filtersVisibleIds.value, filterId => {
      if (filtersKeyById.value[filterId]) {
        FILTERS.push(filtersKeyById.value[filterId]);
      }
    });
    return FILTERS;
  });

  const filtersVisibleAll = computed(() => {
    const FILTERS = [];
    if (filtersGroup.value.main) {
      FILTERS.push(filtersGroup.value.main);
    }
    if (filtersGroup.value.alwaysVisible.length) {
      FILTERS.push(...filtersGroup.value.alwaysVisible);
    }
    if (filtersVisible.value.length) {
      FILTERS.push(...filtersVisible.value);
    }
    const FILERS_NEW = [];
    forEach(FILTERS, filter => {
      FILERS_NEW.push(filter);
      if (AUiTypesContainer[filter.type] &&
        filter.children &&
        filter.children.length) {
        forEach(filter.children, filterChild => {
          FILERS_NEW.push(filterChild);
        });
      }
    });
    return FILERS_NEW;
  });

  const onUpdateModelFilters = ({ model }) => {
    if (isFunction(updateModelFiltersLocal.value)) {
      modelFiltersLocal.value = updateModelFiltersLocal.value({ model });
    } else {
      modelFiltersLocal.value = model;
    }
  };

  const startSearch = () => {
    offset.value = offsetStart.value;
    emit("updateModelFilters", { modelFilters: modelFiltersLocal.value });
    closePreviewAll();

    setTimeout(() => {
      onUpdateModelFilters({ model: modelFilters.value });
    });
  };

  const closeFilterValue = ({ filter, currentModel }) => {
    const MODEL_FILTERS = cloneDeep(modelFilters.value);
    if (AUiTypesModelArray[filter.type]) {
      if (MODEL_FILTERS[filter.id] &&
        MODEL_FILTERS[filter.id].length) {
        const INDEX_IN_MODEL = MODEL_FILTERS[filter.id].indexOf(currentModel);
        if (INDEX_IN_MODEL !== -1) {
          MODEL_FILTERS[filter.id].splice(INDEX_IN_MODEL, 1);
        }
      }
      if (modelFiltersLocal.value[filter.id] &&
        modelFiltersLocal.value[filter.id].length) {
        const INDEX_IN_MODEL = modelFiltersLocal.value[filter.id].indexOf(currentModel);
        if (INDEX_IN_MODEL !== -1) {
          modelFiltersLocal.value[filter.id].splice(INDEX_IN_MODEL, 1);
        }
      }
    } else {
      modelFiltersLocal.value[filter.id] = undefined;
      MODEL_FILTERS[filter.id] = undefined;
    }
    emit("updateModelFilters", { modelFilters: MODEL_FILTERS });

    setTimeout(() => {
      onUpdateModelFilters({ model: modelFilters.value });
    });
  };

  const updateDataKeyByIdFromFilter = ({ dataKeyByKeyId, filterId, }) => {
    dataKeyByKeyIdPerFilter.value[filterId] = cloneDeep(dataKeyByKeyId);
  };

  return {
    closeFilterValue,
    dataKeyByKeyIdPerFilter,
    filtersDataKeyById,
    filtersGroup,
    filtersKeyById,
    filtersVisible,
    filtersVisibleAll,
    hasFilters,
    modelFiltersLocal,
    startSearch,
    onUpdateModelFilters,
    toggleFiltersVisible,
    updateDataKeyByIdFromFilter,
  };
}
