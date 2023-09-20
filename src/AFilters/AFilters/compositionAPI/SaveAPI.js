import {
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  findIndex,
  isFunction,
} from "lodash-es";

export default function SaveAPI(props) {
  const filtersSaved = toRef(props, "filtersSaved");
  const unappliedModel = toRef(props, "unappliedModel");
  const updateFiltersSaved = toRef(props, "updateFiltersSaved");

  const filtersSavedLocal = ref([]);

  const initFiltersSaved = () => {
    filtersSavedLocal.value = filtersSaved.value || [];
  };

  const updateFiltersSavedLocal = ({ action = "", label = "" }) => {
    if (action === "create") {
      filtersSavedLocal.value.push({
        label,
        data: cloneDeep(unappliedModel.value),
      });
    } else {
      const INDEX = findIndex(filtersSavedLocal.value, ["label", label]);
      if (INDEX !== -1) {
        if (action === "delete") {
          filtersSavedLocal.value.splice(INDEX, 1);
        } else if (action === "update") {
          filtersSavedLocal.value.splice(INDEX, 1, cloneDeep(unappliedModel.value));
        }
      }
    }
    if (isFunction(updateFiltersSaved.value)) {
      updateFiltersSaved.value({
        action,
        label,
        model: unappliedModel.value,
        filtersSaved: filtersSavedLocal.value,
      });
    }
  };

  return {
    filtersSavedLocal,
    initFiltersSaved,
    updateFiltersSavedLocal,
  };
}
