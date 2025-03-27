import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isModelForFilterNotEmpty,
} from "../../../utils/utilsUi";
import {
  typesContainer,
} from "../../../ui/const/AUiTypes";
import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default function FiltersAPI(props, { emit }) {
  const filters = toRef(props, "filters");
  const filterMain = toRef(props, "filterMain");
  const unappliedModel = toRef(props, "unappliedModel");

  const filtersDataKeyById = ref({});
  const filtersHorizontalRef = ref(undefined);
  const filtersVisibleIds = ref([]);

  const hasFilters = computed(() => {
    return !!(filters.value.length || filterMain.value);
  });

  const filtersKeyById = computed(() => {
    const FILTERS = {};
    forEach(cloneDeep(filters.value), filter => {
      FILTERS[filter.id] = filter;
      if (typesContainer.value[filter.type] &&
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
      alwaysVisible: [],
      filters: [],
    };
    forEach(cloneDeep(filters.value), filter => {
      if (filter.alwaysVisible) {
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
    FILTERS.push(...filters.value);
    const FILERS_NEW = [];
    forEach(FILTERS, filter => {
      FILERS_NEW.push(filter);
      if (typesContainer.value[filter.type] &&
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
      if (isModelForFilterNotEmpty({
        filter, modelObj: unappliedModel.value,
      })) {
        FILTERS_VISIBLE_IDS.push(filter.id);
      }
    });
    filtersVisibleIds.value = FILTERS_VISIBLE_IDS;
  };

  const onUpdateModelFilters = ({ fullModel, isUpdateFiltersVisible }) => {
    emit("update:unappliedModel", fullModel);

    if (isUpdateFiltersVisible) {
      setTimeout(() => {
        setFiltersVisibleIds();
      });
    }
  };

  const updateAppliedModel = ({ model }) => {
    emit("update:appliedModel", model);
  };

  const updateMainModel = ({ fullModel }) => {
    emit("update:mainModel", fullModel);
  };

  return {
    filtersDataKeyById,
    filtersGroup,
    filtersHorizontalRef,
    filtersKeyById,
    filtersVisible,
    filtersVisibleAll,
    filtersVisibleIds,
    hasFilters,
    onUpdateModelFilters,
    setFiltersVisibleIds,
    updateAppliedModel,
    updateMainModel,
  };
}
