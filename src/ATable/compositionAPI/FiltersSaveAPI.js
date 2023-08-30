import {
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  findIndex,
  isFunction,
} from "lodash-es";

export default function FiltersSaveAPI(props, {
  modelFiltersLocal = ref({}),
}) {
  const filter = toRef(props, "filter");

  const filtersSaved = ref([]);

  const initFiltersSaved = () => {
    filtersSaved.value = filter.value.filtersSaved || [];
  };

  const updateFiltersSaved = ({ action = "", label = "" }) => {
    if (action === "create") {
      filtersSaved.value.push({
        label,
        data: cloneDeep(modelFiltersLocal.value),
      });
    } else {
      const INDEX = findIndex(filtersSaved.value, ["label, label"]);
      if (INDEX !== -1) {
        if (action === "delete") {
          filtersSaved.value.splice(INDEX, 1);
        } else if (action === "update") {
          filtersSaved.value.splice(INDEX, 1, cloneDeep(modelFiltersLocal.value));
        }
      }
    }
    if (isFunction(filter.value.updateFiltersSaved)) {
      filter.value.updateFiltersSaved({
        action,
        label,
        modelFilters: modelFiltersLocal.value,
        filtersSaved: filtersSaved.value,
      });
    }
  };

  return {
    filtersSaved,
    initFiltersSaved,
    updateFiltersSaved,
  };
}
