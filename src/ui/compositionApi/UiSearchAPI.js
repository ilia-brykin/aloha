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
  hasKeyGroup = computed(() => false),
  htmlIdLocal = computed(() => ""),
  keyGroupArray = computed(() => []),
}) {
  const searchTimeout = toRef(props, "searchTimeout");

  const modelSearch = ref("");
  const modelSearchOutside = ref("");
  const searchOutsideRef = ref(undefined);
  const elementsVisibleWithSearch = ref({
    searching: false,
    groups: {},
    elements: {},
  });

  const idForButtonSearchOutside = computed(() => {
    return `${ htmlIdLocal.value }_search_global`;
  });

  const modelSearchLowerCase = computed(() => {
    return toLower(modelSearch.value || "");
  });

  const setElementsVisibleWithSearch = () => {
    const ELEMENTS_VISIBLE = {};
    const GROUPS_VISIBLE = {};
    if (modelSearch.value) {
      elementsVisibleWithSearch.value.searching = true;
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
    } else {
      elementsVisibleWithSearch.value.searching = false;
    }
    elementsVisibleWithSearch.value.elements = ELEMENTS_VISIBLE;
    elementsVisibleWithSearch.value.groups = GROUPS_VISIBLE;
  };

  const hasNotElementsWithSearch = computed(() => {
    return !!(elementsVisibleWithSearch.value.searching &&
      isEmpty(elementsVisibleWithSearch.value.elements));
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
    elementsVisibleWithSearch,
    hasNotElementsWithSearch,
    idForButtonSearchOutside,
    modelSearch,
    modelSearchLowerCase,
    modelSearchOutside,
    onSearchOutside,
    searchOutsideRef,
    updateModelSearch,
    updateModelSearchOutside,
  };
}
