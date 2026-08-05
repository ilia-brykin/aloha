import {
  computed,
} from "vue";

import {
  AKeyId,
} from "../../../const/AKeys";
import {
  get,
  isNil,
} from "lodash-es";

export default function SelectedVisibleAPI({
  dataSelected = computed(() => []),
  keyGroupArray = computed(() => []),
  searching = computed(() => false),
  searchingElements = computed(() => ({})),
  searchingElementsExclusive = computed(() => ({})),
  searchingElementsExtra = computed(() => ({})),
  searchingGroupsWithSearchInGroup = computed(() => ({})),
} = {}) {
  const searchingElementsSelected = computed(() => ({
    ...searchingElements.value,
    ...searchingElementsExtra.value,
    ...searchingElementsExclusive.value,
  }));

  const dataSelectedVisible = computed(() => {
    if (!searching.value) {
      return dataSelected.value;
    }

    return dataSelected.value.filter(item => {
      if (searchingElementsSelected.value[item[AKeyId]]) {
        return true;
      }

      let allGroupKeys = "";
      return keyGroupArray.value.some(keyGroup => {
        let group = get(item, keyGroup);
        if (isNil(group) || group === "") {
          group = "_not_grouped";
        }
        allGroupKeys += `${ allGroupKeys ? "_" : "" }${ group }`;
        return searchingGroupsWithSearchInGroup.value[allGroupKeys];
      });
    });
  });

  const searchingGroupsVisible = computed(() => {
    if (!searching.value) {
      return {};
    }

    const GROUPS_VISIBLE = {};
    dataSelectedVisible.value.forEach(item => {
      let allGroupKeys = "";
      keyGroupArray.value.forEach(keyGroup => {
        let group = get(item, keyGroup);
        if (isNil(group) || group === "") {
          group = "_not_grouped";
        }
        allGroupKeys += `${ allGroupKeys ? "_" : "" }${ group }`;
        GROUPS_VISIBLE[allGroupKeys] = true;
      });
    });

    return GROUPS_VISIBLE;
  });

  return {
    dataSelectedVisible,
    searchingElementsSelected,
    searchingGroupsVisible,
  };
}
