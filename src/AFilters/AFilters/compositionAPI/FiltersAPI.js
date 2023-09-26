import {
  computed,
  ref,
  toRef,
} from "vue";

import AUiTypesContainer from "../../../ui/const/AUiTypesContainer";
import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default function FiltersAPI(props, { emit }) {
  const filters = toRef(props, "filters");
  const unappliedModel = toRef(props, "unappliedModel");

  const filtersDataKeyById = ref({});
  const filtersVisibleIds = ref([]);

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
    FILTERS.push(...filters.value);
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
      if (unappliedModel.value[filter.id]) {
        FILTERS_VISIBLE_IDS.push(filter.id);
      }
    });
    filtersVisibleIds.value = FILTERS_VISIBLE_IDS;
  };

  const onUpdateModelFilters = ({ model, isUpdateFiltersVisible }) => {
    emit("update:unappliedModel", model);

    if (isUpdateFiltersVisible) {
      setFiltersVisibleIds();
    }
  };

  return {
    filtersDataKeyById,
    filtersGroup,
    filtersKeyById,
    filtersVisible,
    filtersVisibleAll,
    filtersVisibleIds,
    hasFilters,
    onUpdateModelFilters,
    setFiltersVisibleIds,
  };
}