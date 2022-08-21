import {
  computed,
  ref,
} from "vue";

import AKeyId from "../../const/AKeyId";
import AKeyLabel from "../../const/AKeyLabel";
import {
  forEach,
  size,
} from "lodash-es";

export default function ASelectSearchAPI(props, {
  emit,
}, {
  htmlIdLocal = computed(() => ""),
  dataLocal = computed(() => []),
}) {
  const modelSearch = ref("");
  const modelSearchOutside = ref("");
  const searchOutsideRef = ref(undefined);

  const idForButtonSearchOutside = computed(() => {
    return `${ htmlIdLocal.value }_search_global`;
  });

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

  const updateModelSearch = model => {
    modelSearch.value = model;
  };

  const elementsHiddenWithSearch = computed(() => {
    const ELEMENTS_HIDDEN = {};
    if (modelSearch.value) {
      const RE = new RegExp(modelSearch.value, "gi");
      forEach(dataLocal.value, element => {
        const ELEMENT_LABEL = element[AKeyLabel];
        const ELEMENT_ID = element[AKeyId];
        if (`${ ELEMENT_LABEL }`.search(RE) === -1) {
          ELEMENTS_HIDDEN[ELEMENT_ID] = true;
        }
      });
    }
    return ELEMENTS_HIDDEN;
  });

  const isAllElementsHidden = computed(() => {
    if (!dataLocal.value.length) {
      return true;
    }
    if (modelSearch.value) {
      return size(elementsHiddenWithSearch.value) === size(dataLocal.value);
    }
    return false;
  });

  return {
    elementsHiddenWithSearch,
    idForButtonSearchOutside,
    isAllElementsHidden,
    modelSearch,
    modelSearchOutside,
    onSearchOutside,
    searchOutsideRef,
    updateModelSearch,
    updateModelSearchOutside,
  };
}
