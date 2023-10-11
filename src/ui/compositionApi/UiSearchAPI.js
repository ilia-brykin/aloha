import {
  computed,
  ref,
  toRef,
} from "vue";

import AKeyLabel from "../const/AKeyLabel";
import AKeyId from "../const/AKeyId";
import {
  forEach,
  get,
  isEmpty,
  isNil,
  toLower,
} from "lodash-es";

export default function UiSearchAPI(props, { emit }, {
  data = computed(() => []),
  dataExtra = computed(() => []),
  hasKeyGroup = computed(() => false),
  htmlIdLocal = computed(() => ""),
  keyGroupArray = computed(() => []),
}) {
  const searchTimeout = toRef(props, "searchTimeout");

  const modelSearch = ref("");
  const modelSearchOutside = ref("");
  const searching = ref(false);
  const searchingElements = ref({});
  const searchingElementsExtra = ref({});
  const searchingGroups = ref({});
  const searchOutsideRef = ref(undefined);

  const idForButtonSearchOutside = computed(() => {
    return `${ htmlIdLocal.value }_search_global`;
  });

  const modelSearchLowerCase = computed(() => {
    return toLower(modelSearch.value || "");
  });

  const setElementsVisibleWithSearch = () => {
    const ELEMENTS_EXTRA_VISIBLE = {};
    const ELEMENTS_VISIBLE = {};
    const GROUPS_VISIBLE = {};
    if (modelSearch.value) {
      searching.value = true;
      if (hasKeyGroup.value) {
        forEach(data.value, element => {
          const ELEMENT_LABEL = element[AKeyLabel];
          const ELEMENT_ID = element[AKeyId];
          if (toLower(`${ ELEMENT_LABEL }`).indexOf(modelSearchLowerCase.value) !== -1) {
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
          if (toLower(`${ ELEMENT_LABEL }`).indexOf(modelSearchLowerCase.value) !== -1) {
            ELEMENTS_VISIBLE[ELEMENT_ID] = true;
          }
        });
      }
      forEach(dataExtra.value, element => {
        const ELEMENT_LABEL = element[AKeyLabel];
        const ELEMENT_ID = element[AKeyId];
        if (toLower(`${ ELEMENT_LABEL }`).indexOf(modelSearchLowerCase.value) !== -1) {
          ELEMENTS_EXTRA_VISIBLE[ELEMENT_ID] = true;
        }
      });
    } else {
      searching.value = false;
    }
    searchingElements.value = ELEMENTS_VISIBLE;
    searchingElementsExtra.value = ELEMENTS_EXTRA_VISIBLE;
    searchingGroups.value = GROUPS_VISIBLE;
  };

  const hasNotElementsExtraWithSearch = computed(() => {
    return !!(searching.value &&
      isEmpty(searchingElementsExtra.value));
  });

  const hasNotElementsWithSearch = computed(() => {
    return !!(searching.value &&
      isEmpty(searchingElements.value) && hasNotElementsExtraWithSearch.value);
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
    emit("onSearchOutside", {
      model: modelSearchOutside.value,
    });
  };

  const updateModelSearchOutside = model => {
    modelSearchOutside.value = model;
  };

  return {
    hasNotElementsExtraWithSearch,
    hasNotElementsWithSearch,
    idForButtonSearchOutside,
    modelSearch,
    modelSearchLowerCase,
    modelSearchOutside,
    onSearchOutside,
    searching,
    searchingElements,
    searchingElementsExtra,
    searchingGroups,
    searchOutsideRef,
    updateModelSearch,
    updateModelSearchOutside,
  };
}
