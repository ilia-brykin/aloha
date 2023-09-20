import {
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function ToggleAPI(props, {
  filtersVisibleIds = ref([]),
  onUpdateModelFilters = () => {},
}) {
  const unappliedModel = toRef(props, "unappliedModel");

  const toggleFiltersVisible = ({ isAdd = true, filterId }) => {
    if (isAdd) {
      filtersVisibleIds.value.push(filterId);
    } else {
      const INDEX = filtersVisibleIds.value.indexOf(filterId);
      if (INDEX !== -1) {
        filtersVisibleIds.value.splice(INDEX, 1);
      }
      const UNAPPLIED_MODEL = cloneDeep(unappliedModel.value);
      UNAPPLIED_MODEL[filterId] = undefined;
      onUpdateModelFilters({ model: UNAPPLIED_MODEL });
    }
  };

  return {
    toggleFiltersVisible,
  };
}
