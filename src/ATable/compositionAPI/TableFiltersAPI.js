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
  setFocusToTable = () => {},
}) {
  const filter = toRef(props, "filter");
  const modelFilters = toRef(props, "modelFilters");
  const offsetStart = toRef(props, "offsetStart");

  const dataKeyByKeyIdPerFilter = ref({});
  const filtersDataKeyById = ref({});
  const filtersVisibleIds = ref([]);
  const modelFiltersLocal = ref({});

  const filtersLocal = computed(() => {
    return filter.value.filters || [];
  });

  const hasFilters = computed(() => {
    return filtersLocal.value.length > 0;
  });

  const filtersKeyById = computed(() => {
    const FILTERS = {};
    forEach(cloneDeep(filtersLocal.value), filter => {
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
    forEach(cloneDeep(filtersLocal.value), filter => {
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
    FILTERS.push(...filtersLocal.value);
    // if (filtersGroup.value.main) {
    //   FILTERS.push(filtersGroup.value.main);
    // }
    // if (filtersGroup.value.alwaysVisible.length) {
    //   FILTERS.push(...filtersGroup.value.alwaysVisible);
    // }
    // if (filtersVisible.value.length) {
    //   FILTERS.push(...filtersVisible.value);
    // }
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

  const setFiltersVisibleIds = () => {
    const FILTERS_VISIBLE_IDS = [];
    forEach(filtersGroup.value.filters, filter => {
      if (modelFiltersLocal.value[filter.id]) {
        FILTERS_VISIBLE_IDS.push(filter.id);
      }
    });
    filtersVisibleIds.value = FILTERS_VISIBLE_IDS;
  };

  const onUpdateModelFilters = ({ model, isUpdateFiltersVisible }) => {
    if (isFunction(filter.value.updateModelFiltersLocal)) {
      modelFiltersLocal.value = filter.value.updateModelFiltersLocal({ model });
    } else {
      modelFiltersLocal.value = model;
    }
    if (isUpdateFiltersVisible) {
      setFiltersVisibleIds();
    }
  };

  const startSearch = () => {
    offset.value = offsetStart.value;
    emit("updateModelFilters", { model: modelFiltersLocal.value });
    closePreviewAll();
    setFocusToTable();

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
    emit("updateModelFilters", { model: MODEL_FILTERS });
    setFocusToTable();

    setTimeout(() => {
      onUpdateModelFilters({ model: modelFilters.value });
    });
  };

  const updateDataKeyByIdFromFilter = ({ dataKeyByKeyId, filterId, }) => {
    dataKeyByKeyIdPerFilter.value[filterId] = cloneDeep(dataKeyByKeyId);
  };

  const toggleFiltersVisible = ({ isAdd = true, filterId }) => {
    if (isAdd) {
      filtersVisibleIds.value.push(filterId);
    } else {
      const INDEX = filtersVisibleIds.value.indexOf(filterId);
      if (INDEX !== -1) {
        filtersVisibleIds.value.splice(INDEX, 1);
      }
      const MODEL_FILTERS_LOCAL = cloneDeep(modelFiltersLocal.value);
      MODEL_FILTERS_LOCAL[filterId] = undefined;
      onUpdateModelFilters({ model: MODEL_FILTERS_LOCAL });
    }
  };

  const initModelFiltersLocal = () => {
    modelFiltersLocal.value = cloneDeep(modelFilters.value);
  };

  return {
    closeFilterValue,
    dataKeyByKeyIdPerFilter,
    filtersDataKeyById,
    filtersGroup,
    filtersKeyById,
    filtersVisible,
    filtersVisibleAll,
    filtersVisibleIds,
    hasFilters,
    initModelFiltersLocal,
    modelFiltersLocal,
    onUpdateModelFilters,
    setFiltersVisibleIds,
    startSearch,
    toggleFiltersVisible,
    updateDataKeyByIdFromFilter,
  };
}
