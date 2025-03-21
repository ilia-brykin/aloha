import {
  computed,
  ref,
  toRef,
} from "vue";

import AKeyId from "../../const/AKeyId";
import AKeyLabel from "../../const/AKeyLabel";
import {
  escapeRegExp,
  forEach,
  get,
  isEmpty,
  isNil,
  toLower,
} from "lodash-es";

export default function UiSearchAPI(props, { emit }, {
  data = computed(() => []),
  dataExtra = computed(() => []),
  exclusiveOption = computed(() => undefined),
  groupsForLever = computed(() => undefined),
  hasKeyGroup = computed(() => false),
  htmlIdLocal = computed(() => ""),
  keyGroupArray = computed(() => []),
  onSearchInApi = () => {},
  searchApiLocal = computed(() => false),
}) {
  const searchTimeout = toRef(props, "searchTimeout");
  const searchInGroup = toRef(props, "searchInGroup");
  const searchOutside = toRef(props, "searchOutside");

  const hasAtLeastOneElementInGroupSearch = ref(false);
  const modelSearch = ref("");
  const modelSearchOutside = ref("");
  const searching = ref(false);
  const searchingElements = ref({});
  const searchingElementsExtra = ref({});
  const searchingElementsExclusive = ref({});
  const searchingGroups = ref({});
  const searchingGroupsWithSearchInGroup = ref({});
  const searchOutsideRef = ref(undefined);

  const searchOutsideOrApi = computed(() => {
    return !!(searchOutside.value || searchApiLocal.value);
  });

  const idForButtonSearchOutside = computed(() => {
    return `${ htmlIdLocal.value }_search_global`;
  });

  const modelSearchLowerCase = computed(() => {
    return toLower(modelSearch.value || "");
  });

  const modelSearchEscapeRegExp = computed(() => {
    return escapeRegExp(modelSearchLowerCase.value);
  });

  const modelSearchRE = computed(() => {
    return new RegExp(modelSearchEscapeRegExp.value, "gi");
  });

  const setSearchingGroupsWithSearchInGroup = () => {
    let _hasAtLeastOneElementInGroupSearch = false;
    if (!searchInGroup.value ||
      !groupsForLever.value) {
      searchingGroupsWithSearchInGroup.value = {};
      hasAtLeastOneElementInGroupSearch.value = _hasAtLeastOneElementInGroupSearch;
      return;
    }

    const SEARCHING_GROUPS_WITH_SEARCH_IN_GROUP = {};
    const SEARCHING_GROUPS_WITH_SEARCH_IN_GROUP_FOR_PARENT = {};

    forEach(groupsForLever.value, level => {
      forEach(level, group => {
        const GROUP_LABEL = group.groupLabel;
        if (GROUP_LABEL === "_not_grouped" &&
          !group.groupParentKey) {
          return;
        }
        if (SEARCHING_GROUPS_WITH_SEARCH_IN_GROUP[group.groupParentKey]) {
          SEARCHING_GROUPS_WITH_SEARCH_IN_GROUP[group.allGroupKeys] = true;
          if (group.data.length) {
            _hasAtLeastOneElementInGroupSearch = true;
          }
        } else if (`${ GROUP_LABEL }`.search(modelSearchRE.value) !== -1) {
          SEARCHING_GROUPS_WITH_SEARCH_IN_GROUP[group.allGroupKeys] = true;
          if (group.data.length) {
            _hasAtLeastOneElementInGroupSearch = true;
          }
          if (group.allParentKeys.length) {
            forEach(group.allParentKeys, parentKey => {
              SEARCHING_GROUPS_WITH_SEARCH_IN_GROUP_FOR_PARENT[parentKey] = true;
            });
          }
        }
      });
    });

    searchingGroupsWithSearchInGroup.value = {
      ...SEARCHING_GROUPS_WITH_SEARCH_IN_GROUP,
      ...SEARCHING_GROUPS_WITH_SEARCH_IN_GROUP_FOR_PARENT,
    };
    hasAtLeastOneElementInGroupSearch.value = _hasAtLeastOneElementInGroupSearch;
  };

  const setElementsVisibleWithSearch = () => {
    const ELEMENTS_EXTRA_VISIBLE = {};
    const ELEMENTS_VISIBLE = {};
    const ELEMENTS_EXCLUSIVE_VISIBLE = {};
    const GROUPS_VISIBLE = {};
    if (modelSearch.value) {
      searching.value = true;
      if (hasKeyGroup.value) {
        setSearchingGroupsWithSearchInGroup();
        forEach(data.value, element => {
          const ELEMENT_LABEL = element[AKeyLabel];
          const ELEMENT_ID = element[AKeyId];
          if (`${ ELEMENT_LABEL }`.search(modelSearchRE.value) !== -1) {
            ELEMENTS_VISIBLE[ELEMENT_ID] = true;
            let allGroupKeys = "";
            forEach(keyGroupArray.value, keyGroup => {
              let group = get(element, keyGroup);
              if (isNil(group) || group === "") {
                group = "_not_grouped";
              }
              allGroupKeys += `${ allGroupKeys ? "_" : "" }${ group }`;
              GROUPS_VISIBLE[allGroupKeys] = true;
            });
          }
        });
      } else {
        forEach(data.value, element => {
          const ELEMENT_LABEL = element[AKeyLabel];
          const ELEMENT_ID = element[AKeyId];
          if (`${ ELEMENT_LABEL }`.search(modelSearchRE.value) !== -1) {
            ELEMENTS_VISIBLE[ELEMENT_ID] = true;
          }
        });
      }
      forEach(dataExtra.value, element => {
        const ELEMENT_LABEL = element[AKeyLabel];
        const ELEMENT_ID = element[AKeyId];
        if (`${ ELEMENT_LABEL }`.search(modelSearchRE.value) !== -1) {
          ELEMENTS_EXTRA_VISIBLE[ELEMENT_ID] = true;
        }
      });
      if (exclusiveOption.value) {
        const ELEMENT_LABEL = exclusiveOption.value[AKeyLabel];
        const ELEMENT_ID = exclusiveOption.value[AKeyId];
        if (`${ ELEMENT_LABEL }`.search(modelSearchRE.value) !== -1) {
          ELEMENTS_EXCLUSIVE_VISIBLE[ELEMENT_ID] = true;
        }
      }
    } else {
      searching.value = false;
    }
    searchingElements.value = ELEMENTS_VISIBLE;
    searchingElementsExtra.value = ELEMENTS_EXTRA_VISIBLE;
    searchingElementsExclusive.value = ELEMENTS_EXCLUSIVE_VISIBLE;
    searchingGroups.value = GROUPS_VISIBLE;
  };

  const hasNotElementsExclusiveWithSearch = computed(() => {
    return !!(searching.value &&
      isEmpty(searchingElementsExclusive.value));
  });

  const hasNotElementsExtraWithSearch = computed(() => {
    return !!(searching.value &&
      isEmpty(searchingElementsExtra.value));
  });

  const hasNotElementsWithSearch = computed(() => {
    return !!(searching.value &&
      isEmpty(searchingElements.value) &&
      hasNotElementsExtraWithSearch.value &&
      hasNotElementsExclusiveWithSearch.value &&
      !hasAtLeastOneElementInGroupSearch.value);
  });

  const updateModelSearch = model => {
    modelSearch.value = model;
    if (searchTimeout.value) {
      setTimeout(() => {
        setElementsVisibleWithSearch();
      }, searchTimeout.value);
    } else {
      setElementsVisibleWithSearch();
    }
  };


  const onSearchOutside = $event => {
    if ($event) {
      $event.preventDefault();
    }
    onSearchInApi({
      search: modelSearchOutside.value,
    });
    emit("onSearchOutside", {
      model: modelSearchOutside.value,
    });
  };

  const updateModelSearchOutside = model => {
    modelSearchOutside.value = model;
  };

  return {
    hasNotElementsExclusiveWithSearch,
    hasNotElementsExtraWithSearch,
    hasNotElementsWithSearch,
    idForButtonSearchOutside,
    modelSearch,
    modelSearchLowerCase,
    modelSearchOutside,
    onSearchOutside,
    searching,
    searchingElements,
    searchingElementsExclusive,
    searchingElementsExtra,
    searchingGroups,
    searchingGroupsWithSearchInGroup,
    searchOutsideOrApi,
    searchOutsideRef,
    updateModelSearch,
    updateModelSearchOutside,
  };
}
