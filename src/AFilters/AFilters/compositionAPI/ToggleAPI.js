import {
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  filter as _filter,
} from "lodash-es";

export default function ToggleAPI(props, {
  dataKeyByKeyIdPerFilter = ref({}),
  filtersVisibleIds = ref([]),
  onUpdateModelFilters = () => {},
}) {
  const unappliedModel = toRef(props, "unappliedModel");

  const toggleFiltersVisible = ({ isAdd = true, filterId, filter }) => {
    if (isAdd) {
      filtersVisibleIds.value.push(filterId);
    } else {
      const INDEX = filtersVisibleIds.value.indexOf(filterId);
      if (INDEX !== -1) {
        filtersVisibleIds.value.splice(INDEX, 1);
      }

      const unappliedModelLocal = cloneDeep(unappliedModel.value);
      if (filter && filter.modelId) {
        const CURRENT_DATA_KEY_BY_ID = dataKeyByKeyIdPerFilter.value?.[filterId];
        if (unappliedModelLocal?.[filter.modelId]?.length && CURRENT_DATA_KEY_BY_ID) { // delete real model
          unappliedModelLocal[filter.modelId] = _filter(unappliedModelLocal[filter.modelId], modelItem => {
            return !CURRENT_DATA_KEY_BY_ID[modelItem];
          });
        } else {
          unappliedModelLocal[filterId] = undefined;
        }
      } else {
        unappliedModelLocal[filterId] = undefined;
      }
      onUpdateModelFilters({ model: unappliedModelLocal });
    }
  };

  return {
    toggleFiltersVisible,
  };
}
